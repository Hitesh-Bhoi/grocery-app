import styled from "styled-components";

export const CartContainer = styled.div`
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  min-height: 60vh;
`;

export const CartTitle = styled.h1`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 30px;
  color: #111;
  text-align: center;
`;

export const CartGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const CartItemsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const CartItemCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`;

export const ItemInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  img {
    border-radius: 8px;
    object-fit: cover;
  }

  .item-details {
    h3 {
      margin: 0 0 8px 0;
      font-size: 18px;
      color: #333;
    }
    p {
      color: #666;
      font-size: 14px;
      margin: 0;
    }
  }
`;

export const ItemActions = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  .price {
    font-weight: 600;
    font-size: 18px;
    color: #111;
  }

  .quantity-controls {
    display: flex;
    align-items: center;
    border: 1px solid #e2e8f0;
    border-radius: 99px;

    button {
      background: none;
      border: none;
      padding: 8px 14px;
      cursor: pointer;
      font-size: 16px;
      color: #333;

      &:hover {
        background-color: #f1f5f9;
        border-radius: inherit;
      }
    }
    span {
      min-width: 24px;
      text-align: center;
      font-weight: 600;
    }
  }

  .remove-btn {
    background: none;
    border: none;
    color: #ef4444;
    cursor: pointer;
    font-size: 20px;
    padding: 8px;
    display: flex;
    align-items: center;
    border-radius: 50%;

    &:hover {
      background-color: #fee2e2;
    }
  }

  @media (max-width: 500px) {
    width: 100%;
    justify-content: space-between;
  }
`;

export const CartSummary = styled.div`
  padding: 30px;
  border-radius: 12px;
  background-color: #f8fafc;
  height: fit-content;

  h2 {
    margin-top: 0;
    font-size: 22px;
    margin-bottom: 24px;
    color: #111;
  }

  .summary-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
    color: #555;
    font-size: 16px;

    &.total {
      margin-top: 24px;
      padding-top: 24px;
      border-top: 1px solid #cbd5e1;
      font-size: 22px;
      font-weight: 700;
      color: #111;
    }
  }

  .checkout-btn {
    width: 100%;
    background-color: var(--green);
    color: white;
    font-weight: 700;
    font-size: 16px;
    padding: 16px;
    border: none;
    border-radius: 999px;
    cursor: pointer;
    margin-top: 24px;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: #1a941a;
    }
  }
`;

export const EmptyCart = styled.div`
  text-align: center;
  padding: 80px 20px;

  h2 {
    font-size: 24px;
    color: #333;
    margin-bottom: 16px;
  }

  p {
    color: #666;
    margin-bottom: 32px;
  }

  a {
    display: inline-block;
    background-color: var(--green);
    color: white;
    padding: 14px 32px;
    border-radius: 999px;
    text-decoration: none;
    font-weight: 600;

    &:hover {
      background-color: #1a941a;
    }
  }
`;
