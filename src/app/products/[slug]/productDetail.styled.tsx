"use client";
import styled from "styled-components";
import { FlexBox } from "@/styles/mixins";

export const StyledDetailContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 16px 80px;
  min-height: 100vh;
`;

export const StyledBackButton = styled.button`
  ${FlexBox({ align: "center", gap: "8px" })};
  background: none;
  border: none;
  color: #64748b;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 32px;
  padding: 8px 0;
  transition: all 0.2s ease;

  &:hover {
    color: var(--green);
    transform: translateX(-4px);
  }
`;

export const StyledProductMain = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin-bottom: 80px;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

export const StyledImageGallery = styled.div`
  position: relative;
  background: #f8fafc;
  border-radius: 24px;
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  aspect-ratio: 1;

  .main-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover .main-image {
    transform: scale(1.05);
  }

  .discount-badge {
    position: absolute;
    top: 24px;
    left: 24px;
    background: #ef4444;
    color: white;
    padding: 6px 12px;
    border-radius: 8px;
    font-weight: 800;
    font-size: 14px;
    z-index: 2;
  }
`;

export const StyledProductInfo = styled.div`
  display: flex;
  flex-direction: column;

  .category-tag {
    color: var(--green);
    text-transform: uppercase;
    font-weight: 700;
    font-size: 12px;
    letter-spacing: 0.1em;
    margin-bottom: 12px;
  }

  .product-name {
    font-size: clamp(32px, 4vw, 48px);
    font-weight: 900;
    color: #0f172a;
    line-height: 1.1;
    margin-bottom: 16px;
  }

  .rating-row {
    ${FlexBox({ align: "center", gap: "12px" })};
    margin-bottom: 24px;

    .stars {
      display: flex;
      gap: 4px;
    }

    .count {
      color: #94a3b8;
      font-size: 14px;
    }
  }

  .price-row {
    margin-bottom: 32px;

    .price {
      font-size: 36px;
      font-weight: 900;
      color: #1e293b;
    }

    .unit {
      font-size: 18px;
      color: #64748b;
      margin-left: 4px;
    }
  }

  .description {
    color: #475569;
    line-height: 1.6;
    margin-bottom: 32px;
    font-size: 16px;
  }

  .action-row {
    ${FlexBox({ align: "center", gap: "20px" })};
    margin-bottom: 40px;
    flex-wrap: wrap;
  }

  .quantity-selector {
    ${FlexBox({ align: "center", gap: "16px" })};
    background: #f1f5f9;
    padding: 8px 16px;
    border-radius: 12px;

    button {
      background: white;
      border: none;
      width: 32px;
      height: 32px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 18px;
      color: #1e293b;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
      transition: all 0.2s;

      &:hover {
        background: var(--green);
        color: white;
      }
    }

    span {
      font-weight: 700;
      font-size: 18px;
      min-width: 20px;
      text-align: center;
    }
  }

  .add-cart-btn {
    flex: 1;
    min-width: 200px;
    background: var(--green);
    color: white;
    border: none;
    padding: 16px 32px;
    border-radius: 14px;
    font-weight: 800;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s;
    box-shadow: 0 10px 20px rgba(25, 155, 25, 0.15);

    &:hover {
      background: #17a317;
      transform: translateY(-2px);
      box-shadow: 0 15px 25px rgba(25, 155, 25, 0.2);
    }

    &:active {
      transform: translateY(0);
    }
    
    &.added {
      background: #0f172a;
    }
  }
`;

export const StyledFeatures = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 20px;
  padding-top: 40px;
  border-top: 1px solid #e2e8f0;

  .feature-item {
    ${FlexBox({ direction: "column", align: "center", gap: "8px" })};
    text-align: center;

    .icon {
      width: 48px;
      height: 48px;
      background: #f0fdf4;
      color: var(--green);
      border-radius: 12px;
      ${FlexBox({ align: "center", justify: "center" })};
      font-size: 20px;
    }

    span {
      font-size: 13px;
      font-weight: 700;
      color: #334155;
    }
  }
`;

export const StyledRelatedSection = styled.section`
  margin-top: 80px;

  h2 {
    font-size: 28px;
    font-weight: 900;
    margin-bottom: 32px;
    color: #0f172a;
  }

  .related-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 24px;
  }
`;
