"use client";
import styled, { keyframes } from "styled-components";

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-8px); }
`;

export const WishlistHeader = styled.div`
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
    background: radial-gradient(
      circle,
      rgba(32, 184, 32, 0.06) 0%,
      transparent 70%
    );
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
    background: radial-gradient(
      circle,
      rgba(32, 184, 32, 0.04) 0%,
      transparent 70%
    );
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
      color: #20b820;
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

export const WishlistContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto 40px;
  padding: 0 20px;
  min-height: 50vh;
`;

export const WishlistTitle = styled.div`
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
      background: #20b820;
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    &:hover::after {
      transform: scaleX(1);
    }

    .wishlist-heading-icon {
      font-size: 36px;
      color: #20b820;
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
      background: #20b820;
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    &:hover::after {
      transform: scaleX(1);
    }

    .subtitle {
      font-size: 15px;
      font-weight: 500;
      color: #888;
      margin: 0;

      span {
        color: #20b820;
        font-weight: 700;
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
    .title-left {
      h1 {
        font-size: 26px;
      }
      .icon {
        font-size: 28px;
      }
    }
    .title-right .subtitle {
      font-size: 13px;
    }
  }
`;

export const WishlistGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 24px;
  margin-top: 40px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const WishlistItemCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 20px 16px 16px;
  border: 1px solid rgba(25, 155, 25, 0.2);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  cursor: pointer;
  transition: all 0.32s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  background: #fff;
  animation: ${fadeInUp} 0.5s ease both;

  &:hover {
    transform: translateY(-8px);
    box-shadow:
      0 0 0 1px rgba(32, 184, 32, 0.18),
      0 8px 28px rgba(32, 184, 32, 0.1),
      0 2px 8px rgba(0, 0, 0, 0.04);

    .product-image {
      transform: scale(1.1) rotate(3deg);
    }
  }

  .product-image-wrap {
    width: 100%;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px 0;
    position: relative;
    margin-bottom: 16px;

    .remove-btn {
      position: absolute;
      top: -10px;
      right: -2px;
      width: 34px;
      height: 34px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.85);
      backdrop-filter: blur(8px);
      border: 1px solid rgba(255, 255, 255, 0.6);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #b9c1cc;
      transition: all 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);
      z-index: 2;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

      &:hover {
        background: #fff;
        color: #ff4d4f;
        transform: scale(1.15);
        box-shadow: 0 4px 14px rgba(255, 77, 79, 0.18);
        border-color: rgba(255, 77, 79, 0.15);
      }
    }
  }

  .product-image {
    width: 110px;
    height: 110px;
    object-fit: contain;
    transition: transform 0.4s ease;
  }

  .product-content {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
  }

  .product-category {
    font-size: 10px;
    font-weight: 600;
    color: var(--green);
    text-transform: uppercase;
    letter-spacing: 0.12em;
  }

  .product-name-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
  }

  .product-name {
    font-size: 16px;
    font-weight: 800;
    color: #1a1e23;
    line-height: 1.25;
    flex: 1;
    min-width: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .product-rating {
    display: flex;
    align-items: center;
    gap: 3px;
    flex-shrink: 0;

    .rating-score {
      font-size: 12px;
      font-weight: 700;
      color: #717d8e;
    }
  }

  .product-bottom-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    margin-top: 6px;
  }

  .price-wrap {
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
  }

  .product-unit {
    font-size: 10px;
    color: var(--green);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }

  .product-price {
    font-size: 20px;
    font-weight: 900;
    color: #111;
    letter-spacing: -0.5px;
    line-height: 1.1;
  }

  .add-cart-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    flex-shrink: 0;
    padding: 9px 13px;
    border-radius: 10px;
    background: rgba(32, 184, 32, 0.07);
    color: var(--green);
    border: 1.5px solid rgba(32, 184, 32, 0.25);
    font-size: 12px;
    font-weight: 800;
    cursor: pointer;
    transition: all 0.28s ease;
    letter-spacing: 0.01em;

    &:hover {
      background: var(--green);
      color: #fff;
      border-color: var(--green);
      box-shadow: 0 5px 16px rgba(25, 155, 25, 0.28);
      transform: translateY(-1px);
    }

    span {
      @media (max-width: 1280px) {
        display: none;
      }
    }
  }
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
  margin-left: auto;
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
  animation: ${fadeInUp} 0.3s ease-out;
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

export const EmptyWishlist = styled.div`
  text-align: center;
  padding: 60px 20px;
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
  }

  .shop-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: #20b820;
    color: white;
    padding: 14px 36px;
    border-radius: 14px;
    text-decoration: none;
    font-weight: 700;
    transition: all 0.3s;
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(32, 184, 32, 0.3);
    }
  }
`;
