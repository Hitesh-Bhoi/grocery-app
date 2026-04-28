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

  .header-group {
    margin-bottom: 24px;
    border-bottom: 1px solid #f1f5f9;
    padding-bottom: 24px;
  }

  .meta-row {
    ${FlexBox({ align: "center", justify: "space-between" })};
    margin-bottom: 12px;
  }

  .category-tag {
    color: var(--green);
    text-transform: uppercase;
    font-weight: 800;
    font-size: 11px;
    letter-spacing: 0.12em;
    background: #f0fdf4;
    padding: 4px 10px;
    border-radius: 6px;
  }

  .stock-status {
    font-size: 12px;
    font-weight: 700;
    color: #10b981;
    display: flex;
    align-items: center;
    gap: 6px;

    &::before {
      content: '';
      width: 8px;
      height: 8px;
      background: #10b981;
      border-radius: 50%;
      box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.2);
    }
  }

  .product-name {
    font-size: clamp(36px, 4vw, 52px);
    font-weight: 900;
    color: #0f172a;
    line-height: 1.1;
    margin-bottom: 16px;
    letter-spacing: -0.02em;
  }

  .rating-price-row {
    ${FlexBox({ align: "center", justify: "space-between", gap: "20px" })};
    flex-wrap: wrap;
  }

  .rating-row {
    ${FlexBox({ align: "center", gap: "10px" })};

    .stars {
      display: flex;
      gap: 3px;
      color: #fbbf24;
    }

    .count {
      color: #64748b;
      font-size: 14px;
      font-weight: 600;
    }
  }

  .price-box {
    ${FlexBox({ align: "baseline", gap: "4px" })};
    background: #f8fafc;
    padding: 8px 16px;
    border-radius: 12px;
    border: 1px solid #f1f5f9;

    .price {
      font-size: 32px;
      font-weight: 900;
      color: #0f172a;
    }

    .unit {
      font-size: 16px;
      color: #64748b;
      font-weight: 600;
    }
  }

  .description {
    color: #475569;
    line-height: 1.7;
    margin-bottom: 32px;
    font-size: 16px;
    max-width: 90%;
  }

  .purchase-section {
    background: white;
    border: 1px solid #f1f5f9;
    padding: 24px;
    border-radius: 20px;
    margin-bottom: 32px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.02);
  }

  .action-row {
    ${FlexBox({ align: "center", gap: "16px" })};
    margin-bottom: 16px;
    flex-wrap: wrap;
  }

  .quantity-selector {
    ${FlexBox({ align: "center", gap: "12px" })};
    background: #f8fafc;
    padding: 6px;
    border-radius: 14px;
    border: 1px solid #e2e8f0;

    button {
      background: white;
      border: 1px solid #e2e8f0;
      width: 36px;
      height: 36px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 16px;
      color: #1e293b;
      transition: all 0.2s;

      &:hover {
        background: var(--green);
        border-color: var(--green);
        color: white;
        transform: translateY(-1px);
        box-shadow: 0 4px 8px rgba(32, 184, 32, 0.2);
      }
    }

    span {
      font-weight: 800;
      font-size: 18px;
      min-width: 30px;
      text-align: center;
      color: #0f172a;
    }
  }

  .add-cart-btn {
    flex: 1;
    min-width: 200px;
    background: var(--green);
    color: white;
    border: none;
    padding: 16px 24px;
    border-radius: 14px;
    font-weight: 800;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 8px 20px rgba(32, 184, 32, 0.2);

    &:hover {
      background: #17a317;
      transform: translateY(-2px);
      box-shadow: 0 12px 24px rgba(32, 184, 32, 0.3);
    }

    &:active {
      transform: translateY(0);
    }
    
    &.added {
      background: #0f172a;
      box-shadow: 0 8px 20px rgba(15, 23, 42, 0.2);
    }
  }

  .wishlist-detail-btn {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
      transform: scale(1.05);
    }
  }

  .trust-note {
    ${FlexBox({ align: "center", gap: "6px" })};
    font-size: 12px;
    color: #94a3b8;
    font-weight: 600;
    justify-content: center;
  }
`;

export const StyledFeatures = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 20px;
  padding-top: 40px;
  border-top: 1px solid #e2e8f0;

  .feature-item {
    ${FlexBox({ direction: "column", align: "center", gap: "10px" })};
    text-align: center;
    background: white;
    padding: 20px 15px;
    border-radius: 20px;
    border: 1px solid #f1f5f9;
    transition: all 0.3s ease;

    &:hover {
      border-color: rgba(32, 184, 32, 0.3);
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0,0,0,0.03);
    }

    .icon {
      width: 52px;
      height: 52px;
      background: #f0fdf4;
      color: var(--green);
      border-radius: 14px;
      ${FlexBox({ align: "center", justify: "center" })};
      font-size: 24px;
    }

    span {
      font-size: 13px;
      font-weight: 800;
      color: #1e293b;
    }
  }
`;

export const StyledTabsContainer = styled.div`
  margin-top: 60px;
  background: white;
  border-radius: 24px;
  border: 1px solid #f1f5f9;
  overflow: hidden;
`;

export const StyledTabHeader = styled.div`
  display: flex;
  background: #f8fafc;
  border-bottom: 1px solid #f1f5f9;

  button {
    padding: 20px 32px;
    background: none;
    border: none;
    font-weight: 700;
    color: #64748b;
    cursor: pointer;
    position: relative;
    transition: all 0.3s;

    &.active {
      color: var(--green);
      
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 3px;
        background: var(--green);
      }
    }

    &:hover:not(.active) {
      color: #1e293b;
      background: rgba(0,0,0,0.02);
    }
  }

  @media (max-width: 640px) {
    flex-direction: column;
    button {
      text-align: left;
      padding: 15px 24px;
    }
  }
`;

export const StyledTabContent = styled.div`
  padding: 40px;
  color: #475569;
  line-height: 1.8;
  font-size: 16px;

  h3 {
    color: #0f172a;
    margin-bottom: 16px;
    font-weight: 800;
  }

  ul {
    padding-left: 20px;
    margin-top: 16px;
    li {
      margin-bottom: 8px;
    }
  }

  .review-item {
    border-bottom: 1px solid #f1f5f9;
    padding-bottom: 24px;
    margin-bottom: 24px;
    
    &:last-child {
      border-bottom: none;
      margin-bottom: 0;
    }

    .review-header {
      ${FlexBox({ align: "center", justify: "space-between" })};
      margin-bottom: 12px;
      
      .user {
        font-weight: 800;
        color: #1e293b;
      }
      .date {
        font-size: 13px;
        color: #94a3b8;
      }
    }
  }
`;

export const StyledRelatedSection = styled.section`
  margin-top: 100px;

  .section-header {
    ${FlexBox({ align: "center", justify: "space-between" })};
    margin-bottom: 32px;

    h2 {
      font-size: 28px;
      font-weight: 900;
      color: #0f172a;
      margin: 0;
    }

    .view-all {
      color: var(--green);
      font-weight: 700;
      text-decoration: none;
      font-size: 15px;
      display: flex;
      align-items: center;
      gap: 6px;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .related-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 24px;
  }
`;

export const StyledGalleryThumbnails = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 20px;
  width: 100%;

  .thumb {
    width: 80px;
    height: 80px;
    border-radius: 12px;
    border: 2px solid #f1f5f9;
    padding: 10px;
    cursor: pointer;
    background: #f8fafc;
    transition: all 0.2s;

    &:hover {
      border-color: rgba(32, 184, 32, 0.3);
    }

    &.active {
      border-color: var(--green);
      background: white;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;
