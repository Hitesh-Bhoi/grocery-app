import styled, { keyframes } from "styled-components";

/* ── animations ── */
const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const shimmer = keyframes`
  0%   { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-8px); }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

/* ── Page Header Banner ── */
export const CartHeader = styled.div`
  background: linear-gradient(135deg, #f0fdf0 0%, #e8f8e8 40%, #dcf5dc 100%);
  padding: 100px 20px 36px;
  margin-bottom: 8px;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    right: -20%;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(32, 184, 32, 0.06) 0%, transparent 70%);
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -40%;
    left: -10%;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(32, 184, 32, 0.04) 0%, transparent 70%);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 80px 16px 28px;
  }
`;

export const Breadcrumb = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 16px;
  font-size: 13px;
  color: #888;

  a {
    color: #888;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: var(--green);
    }
  }

  .separator {
    color: #ccc;
    font-size: 11px;
  }

  .current {
    color: #333;
    font-weight: 600;
  }
`;

export const CartContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto 40px;
  padding: 0 20px;
  min-height: 50vh;
`;

export const CartTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  .title-left {
    display: flex;
    align-items: center;
    gap: 12px;
    position: relative;
    padding-bottom: 8px;
    cursor: default;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 3px;
      border-radius: 99px;
      background: var(--green);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    &:hover::after {
      transform: scaleX(1);
    }

    .cart-heading-icon {
      font-size: 36px;
      color: var(--green);
      flex-shrink: 0;
    }

    h1 {
      font-size: 32px;
      font-weight: 800;
      color: #1a1a1a;
      margin: 0;
      letter-spacing: -0.5px;
    }
  }

  .title-right {
    display: flex;
    align-items: center;
    gap: 10px;
    position: relative;
    padding-bottom: 8px;
    cursor: default;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 3px;
      border-radius: 99px;
      background: var(--green);
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    &:hover::after {
      transform: scaleX(1);
    }

    .cart-subtitle {
      font-size: 15px;
      font-weight: 500;
      color: #888;
      margin: 0;
      letter-spacing: 0.2px;

      span {
        color: var(--green);
        font-weight: 700;
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 8px;

    .title-left {
      gap: 10px;

      .cart-heading-icon {
        font-size: 28px;
      }

      h1 {
        font-size: 26px;
      }
    }

    .title-right {
      flex-direction: column;
      align-items: center;

      .cart-subtitle {
        font-size: 13px;
      }
    }
  }
`;

export const CartGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 32px;
  margin-top: 32px;
  align-items: flex-start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 320px;
    gap: 24px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

export const CartItemsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ClearAllButton = styled.button`
  background: none;
  border: none;
  color: #888;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  border-radius: 8px;
  transition: all 0.2s;
  align-self: flex-end;
  margin-bottom: 8px;

  &:hover {
    color: #ef4444;
    background: #fef2f2;
  }

  &:active {
    transform: scale(0.95);
  }

  .icon {
    font-size: 18px;
  }
`;

export const CartItemCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  background: #fff;
  border: 1px solid #f0f0f0;
  border-radius: 16px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${fadeInUp} 0.4s ease both;

  &:hover {
    border-color: rgba(32, 184, 32, 0.2);
    box-shadow: 0 8px 32px rgba(32, 184, 32, 0.08),
                0 2px 8px rgba(0, 0, 0, 0.04);
    transform: translateY(-2px);
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
    gap: 16px;
    padding: 16px;
  }
`;

export const ItemInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  flex: 1;
  min-width: 0;

  .item-image-wrapper {
    flex-shrink: 0;
    width: 80px;
    height: 80px;
    border-radius: 12px;
    background: #f8faf8;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border: 1px solid #f0f2f0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 12px;
    }
  }

  .item-details {
    min-width: 0;

    h3 {
      margin: 0 0 4px 0;
      font-size: 17px;
      font-weight: 700;
      color: #1a1a1a;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .item-unit-price {
      color: #888;
      font-size: 13px;
      margin: 0;
      font-weight: 500;
    }
  }

  @media (max-width: 600px) {
    .item-image-wrapper {
      width: 64px;
      height: 64px;
    }

    .item-details h3 {
      font-size: 15px;
    }
  }
`;

export const ItemActions = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex-shrink: 0;

  .price {
    font-weight: 700;
    font-size: 18px;
    color: #1a1a1a;
    min-width: 80px;
    text-align: right;
    font-variant-numeric: tabular-nums;
  }

  .quantity-controls {
    display: flex;
    align-items: center;
    border: 1.5px solid #e8ece8;
    border-radius: 12px;
    overflow: hidden;
    background: #fafcfa;
    transition: border-color 0.2s;

    &:hover {
      border-color: rgba(32, 184, 32, 0.4);
    }

    button {
      background: none;
      border: none;
      width: 36px;
      height: 36px;
      cursor: pointer;
      font-size: 18px;
      font-weight: 600;
      color: #555;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.15s;

      &:hover {
        background-color: rgba(32, 184, 32, 0.1);
        color: var(--green);
      }

      &:active {
        transform: scale(0.92);
      }
    }

    span {
      min-width: 32px;
      text-align: center;
      font-weight: 700;
      font-size: 15px;
      color: #1a1a1a;
      user-select: none;
    }
  }

  .remove-btn {
    background: none;
    border: none;
    color: #888;
    cursor: pointer;
    font-size: 20px;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    transition: all 0.2s ease;

    &:hover {
      background-color: #fef2f2;
      color: #ef4444;
      transform: scale(1.1);
    }

    &:active {
      transform: scale(0.95);
    }
  }

  @media (max-width: 600px) {
    width: 100%;
    justify-content: space-between;
    padding-top: 4px;
    border-top: 1px solid #f5f5f5;

    .price {
      font-size: 17px;
    }

    .quantity-controls {
      order: -1;
    }
  }
`;

/* ── Order Summary ── */
export const CartSummary = styled.div`
  position: sticky;
  top: 90px;
  padding: 28px;
  border-radius: 20px;
  background: #fff;
  border: 1px solid #f0f0f0;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.04);
  animation: ${fadeInUp} 0.5s ease 0.15s both;

  h2 {
    margin: 0 0 20px 0;
    font-size: 20px;
    font-weight: 800;
    color: #1a1a1a;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .summary-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 14px;
    color: #777;
    font-size: 15px;
    font-weight: 500;

    span:last-child {
      color: #333;
      font-weight: 600;
      font-variant-numeric: tabular-nums;
    }

    &.tax {
      color: #999;
      font-size: 13px;

      span:last-child {
        color: #999;
        font-weight: 500;
      }
    }

    &.total {
      margin-top: 20px;
      padding-top: 20px;
      border-top: 1.5px solid #f0f0f0;
      font-size: 20px;
      font-weight: 800;
      color: #1a1a1a;
      margin-bottom: 0;

      span:last-child {
        color: var(--green);
        font-weight: 800;
      }
    }
  }

  .free-delivery-badge {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 8px;
    padding: 10px 14px;
    background: linear-gradient(135deg, #f0fdf4, #ecfdf5);
    border-radius: 10px;
    font-size: 13px;
    font-weight: 600;
    color: #16a34a;
    border: 1px solid rgba(22, 163, 74, 0.12);

    .delivery-icon {
      font-size: 16px;
    }
  }

  .checkout-btn {
    width: 100%;
    background: var(--green);
    color: white;
    font-weight: 700;
    font-size: 16px;
    padding: 16px;
    border: none;
    border-radius: 14px;
    cursor: pointer;
    margin-top: 20px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    letter-spacing: 0.3px;
    position: relative;
    overflow: hidden;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.15),
        transparent
      );
      transition: left 0.5s;
    }

    &:hover {
      background: #1a9e1a;
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(32, 184, 32, 0.3);

      &::before {
        left: 100%;
      }
    }

    &:active {
      transform: translateY(0);
      box-shadow: none;
    }

    .btn-icon {
      font-size: 18px;
    }
  }

  .secure-badge {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    margin-top: 14px;
    font-size: 12px;
    color: #aaa;
    font-weight: 500;

    .lock-icon {
      font-size: 13px;
    }
  }

  @media (max-width: 768px) {
    position: static;
    border-radius: 16px;
  }
`;

/* ── Coupon Section ── */
export const CouponSection = styled.div`
  margin-top: 16px;
  margin-bottom: 4px;

  .coupon-input-wrapper {
    display: flex;
    gap: 8px;

    input {
      flex: 1;
      padding: 12px 14px;
      border: 1.5px solid #e8ece8;
      border-radius: 10px;
      font-size: 14px;
      font-weight: 500;
      outline: none;
      transition: border-color 0.2s;
      font-family: inherit;

      &::placeholder {
        color: #bbb;
      }

      &:focus {
        border-color: var(--green);
      }
    }

    button {
      padding: 12px 20px;
      background: #1a1a1a;
      color: white;
      border: none;
      border-radius: 10px;
      font-size: 13px;
      font-weight: 700;
      cursor: pointer;
      white-space: nowrap;
      transition: all 0.2s;
      font-family: inherit;

      &:hover {
        background: #333;
      }

      &:active {
        transform: scale(0.97);
      }
    }
  }
`;

/* ── Empty Cart ── */
export const EmptyCart = styled.div`
  text-align: center;
  padding: 60px 20px 80px;
  animation: ${fadeInUp} 0.5s ease both;

  .empty-icon {
    font-size: 80px;
    color: #d4d4d4;
    margin-bottom: 20px;
    animation: ${float} 3s ease-in-out infinite;
    display: inline-block;
  }

  h2 {
    font-size: 26px;
    font-weight: 800;
    color: #1a1a1a;
    margin: 0 0 10px 0;
  }

  p {
    color: #999;
    margin: 0 0 32px 0;
    font-size: 15px;
    font-weight: 500;
  }

  a {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: var(--green);
    color: white;
    padding: 14px 36px;
    border-radius: 14px;
    text-decoration: none;
    font-weight: 700;
    font-size: 15px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 4px 16px rgba(32, 184, 32, 0.2);

    &:hover {
      background: #1a9e1a;
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(32, 184, 32, 0.3);
    }

    &:active {
      transform: translateY(0);
      box-shadow: 0 2px 8px rgba(32, 184, 32, 0.15);
    }

    .back-icon {
      font-size: 18px;
    }
  }
`;

/* ── Payment Method Section ── */
export const PaymentMethod = styled.div`
  margin-top: 16px;
  margin-bottom: 20px;
  
  h3 {
    font-size: 14px;
    font-weight: 700;
    color: #555;
    margin: 0 0 10px 0;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  .method-option {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 14px;
    border: 1.5px solid var(--green);
    border-radius: 12px;
    background: #f8fcf8;
    cursor: pointer;
    transition: all 0.2s;
    
    input[type="radio"] {
      accent-color: var(--green);
      width: 18px;
      height: 18px;
      cursor: pointer;
    }
    
    .method-details {
      display: flex;
      flex-direction: column;
      
      .method-name {
        font-weight: 700;
        color: #1a1a1a;
        font-size: 15px;
      }
      
      .method-desc {
        font-size: 12px;
        color: #777;
        margin-top: 2px;
      }
    }
  }
`;

export const SuccessContainer = styled.div`
  text-align: center;
  padding: 80px 20px 100px;
  animation: ${fadeInUp} 0.5s ease both;
  max-width: 600px;
  margin: 0 auto;

  .success-icon-wrapper {
    width: 100px;
    height: 100px;
    background: linear-gradient(135deg, #f0fdf4, #dcf5dc);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 24px;
    box-shadow: 0 8px 32px rgba(32, 184, 32, 0.2);

    .success-icon {
      font-size: 50px;
      color: var(--green);
    }
  }

  h2 {
    font-size: 32px;
    font-weight: 800;
    color: #1a1a1a;
    margin: 0 0 12px 0;
    letter-spacing: -0.5px;
  }

  p {
    color: #666;
    margin: 0 0 40px 0;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.6;
  }

  .action-buttons {
    display: flex;
    gap: 16px;
    justify-content: center;
    flex-wrap: wrap;

    a {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: var(--green);
      color: white;
      padding: 14px 32px;
      border-radius: 14px;
      text-decoration: none;
      font-weight: 700;
      font-size: 15px;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: 0 4px 16px rgba(32, 184, 32, 0.2);

      &:hover {
        background: #1a9e1a;
        transform: translateY(-2px);
        box-shadow: 0 8px 24px rgba(32, 184, 32, 0.3);
      }

      &:active {
        transform: translateY(0);
        box-shadow: 0 2px 8px rgba(32, 184, 32, 0.15);
      }
    }

    .view-details-link {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: white;
      color: #1a1a1a;
      padding: 14px 32px;
      border-radius: 14px;
      border: 1.5px solid #e5e7eb;
      font-weight: 700;
      font-size: 15px;
      text-decoration: none;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: none;

      &:hover {
        border-color: #d1d5db;
        background: #f9fafb;
        transform: translateY(-2px);
        box-shadow: none;
        color: #1a1a1a;
      }

      &:active {
        transform: translateY(0);
      }
    }

    button {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: white;
      color: #1a1a1a;
      padding: 14px 32px;
      border-radius: 14px;
      border: 1.5px solid #e5e7eb;
      font-weight: 700;
      font-size: 15px;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

      &:hover {
        border-color: #d1d5db;
        background: #f9fafb;
        transform: translateY(-2px);
      }

      &:active {
        transform: translateY(0);
      }
    }
  }
`;

/* ── Confirmation Modal ── */
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 20px;
  animation: ${fadeIn} 0.3s ease-out;
`;

export const ModalContent = styled.div`
  background: white;
  width: 100%;
  max-width: 400px;
  border-radius: 24px;
  padding: 32px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  text-align: center;
  animation: ${fadeInUp} 0.4s cubic-bezier(0.16, 1, 0.3, 1);

  .modal-icon-wrapper {
    width: 64px;
    height: 64px;
    background: #fef2f2;
    color: #ef4444;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
    font-size: 32px;
  }

  h2 {
    font-size: 20px;
    font-weight: 800;
    color: #1a1a1a;
    margin-bottom: 12px;
  }

  p {
    font-size: 15px;
    color: #666;
    line-height: 1.5;
    margin-bottom: 32px;
  }

  .modal-actions {
    display: flex;
    gap: 12px;

    button {
      flex: 1;
      padding: 12px;
      border-radius: 12px;
      font-weight: 700;
      font-size: 14px;
      cursor: pointer;
      transition: all 0.2s;
    }

    .cancel-btn {
      background: #f3f4f6;
      color: #4b5563;
      border: none;
      &:hover { background: #e5e7eb; }
    }

    .confirm-btn {
      background: #ef4444;
      color: white;
      border: none;
      &:hover { background: #dc2626; box-shadow: 0 4px 12px rgba(239, 68, 68, 0.2); }
    }
  }
`;
