"use client";
import styled, { keyframes } from "styled-components";

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const OrdersHeader = styled.div`
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
    &:hover { color: #20b820; }
  }
  .separator { color: #ccc; font-size: 11px; }
  .current { color: #333; font-weight: 600; }
`;

export const OrdersContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto 60px;
  padding: 0 20px;
`;

export const OrdersTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1000px;
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

    .orders-heading-icon {
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
    .title-left h1 { font-size: 26px; }
    .title-right .subtitle { font-size: 13px; }
  }
`;

export const OrderList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const OrderCard = styled.div`
  background: #fff;
  border: 1px solid #f0f0f0;
  border-radius: 20px;
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s;
  animation: ${fadeInUp} 0.4s ease both;

  &:hover {
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
    border-color: #20b82033;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
`;

export const OrderInfo = styled.div`
  .order-id {
    font-size: 14px;
    font-weight: 700;
    color: #888;
    margin-bottom: 4px;
    span { color: #333; }
  }
  .order-date {
    font-size: 13px;
    color: #aaa;
    margin-bottom: 12px;
  }
  .order-total {
    font-size: 20px;
    font-weight: 800;
    color: #1a1a1a;
  }
`;

export const OrderStatus = styled.div<{ status: string }>`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;

  .status-badge {
    padding: 6px 14px;
    border-radius: 99px;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    
    ${props => {
      switch (props.status.toLowerCase()) {
        case 'delivered': return 'background: #f0fdf4; color: #16a34a;';
        case 'pending': return 'background: #fffbeb; color: #d97706;';
        case 'processing': return 'background: #eff6ff; color: #2563eb;';
        case 'cancelled': return 'background: #fef2f2; color: #dc2626;';
        default: return 'background: #f3f4f6; color: #4b5563;';
      }
    }}
  }

  .view-btn {
    background: #f8faf8;
    color: #20b820;
    border: 1px solid #e8f0e8;
    padding: 10px 20px;
    border-radius: 12px;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s;
    &:hover { background: #20b820; color: white; border-color: #20b820; }
  }

  @media (max-width: 768px) {
    align-items: flex-start;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`;

export const ModalContent = styled.div`
  background: white;
  width: 100%;
  max-width: 600px;
  border-radius: 24px;
  padding: 32px;
  max-height: 85vh;
  overflow-y: auto;
  position: relative;
  animation: ${fadeInUp} 0.3s ease-out;

  h2 {
    font-size: 24px;
    font-weight: 800;
    color: #1a1a1a;
    margin-bottom: 24px;
    padding-bottom: 16px;
    border-bottom: 1px solid #f0f0f0;
  }

  .order-meta {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
    
    .meta-item {
      label {
        display: block;
        font-size: 11px;
        font-weight: 700;
        color: #aaa;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-bottom: 4px;
      }
      .value {
        font-size: 15px;
        font-weight: 600;
        color: #333;
      }
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: #f5f5f5;
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #666;
  transition: all 0.2s;

  &:hover {
    background: #ef4444;
    color: white;
  }
`;

export const ModalItemsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  .item {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 12px;
    background: #f8faf8;
    border-radius: 16px;

    img {
      width: 60px;
      height: 60px;
      border-radius: 12px;
      object-fit: cover;
    }

    .info {
      flex: 1;
      h4 { margin: 0 0 4px 0; font-size: 15px; color: #1a1a1a; }
      p { margin: 0; font-size: 13px; color: #888; }
    }

    .price {
      font-weight: 700;
      color: #1a1a1a;
      font-size: 15px;
    }
  }
`;

export const ModalTotal = styled.div`
  margin-top: 24px;
  padding-top: 24px;
  border-top: 2px dashed #f0f0f0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span:first-child {
    font-size: 16px;
    font-weight: 700;
    color: #666;
  }

  .amount {
    font-size: 24px;
    font-weight: 800;
    color: #20b820;
  }
`;
