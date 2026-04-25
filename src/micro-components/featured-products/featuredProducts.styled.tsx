"use client";
import { FlexBox } from "@/styles/mixins";
import styled from "styled-components";

export const StyledFeaturedProductContainer = styled.div`
  padding: 48px 0 16px;
  background-color: #fff;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
`;

export const StyledFeaturedProductSection = styled.div`
  width: 100%;
  margin: 0 auto 40px;

  .featured-product-row {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 8px;
    padding: 10px 10px 32px;

    @media (max-width: 1280px) {
      display: flex;
      flex-wrap: nowrap;
      overflow-x: scroll;
      gap: 16px;
      padding: 12px 16px 20px;
      
      /* Stylish horizontal scrollbar, always visible */
      scrollbar-width: thin;
      scrollbar-color: var(--green) #f4f4f5;

      &::-webkit-scrollbar {
        height: 8px;
        -webkit-appearance: none;
        background-color: #f4f4f5;
      }
      &::-webkit-scrollbar-track {
        background: #f4f4f5;
        border-radius: 10px;
      }
      &::-webkit-scrollbar-thumb {
        background-color: var(--green);
        border-radius: 10px;
      }
    }
  }
`;

export const StyledFeaturedProductHeading = styled.div`
  ${FlexBox({ justify: "space-between", align: "flex-end" })};
  gap: 12px;
  padding: 28px 16px 16px 16px;
  margin-bottom: 0;
  text-align: left;

  .heading-left {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .featured-product-title {
    font-size: 11px;
    font-weight: 600;
    color: var(--green);
    text-transform: uppercase;
    letter-spacing: 0.18em;
    text-align: left;
  }

  .featured-product-heading {
    font-size: clamp(20px, 2.2vw, 26px);
    font-weight: 900;
    color: #0f172a;
    line-height: 1.15;
    letter-spacing: -0.5px;
    text-align: left;
  }

  .see-all-btn {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    background: none;
    border: none;
    color: var(--green);
    cursor: pointer;
    font-weight: 600;
    font-size: 16px;
    white-space: nowrap;
    padding: 4px 0;
    transition: gap 0.2s ease;
    flex-shrink: 0;
    letter-spacing: 0.01em;

    &::after {
      content: "→";
      font-size: 26px;
      display: inline-block;
      transition: transform 0.2s ease;
    }

    &:hover {
      color: #17a017;
      gap: 8px;

      &::after {
        transform: translateX(4px);
      }
    }
  }
`;

export const StyledFeatureProductCard = styled.div`
  ${FlexBox({ direction: "column", justify: "space-between" })};
  width: 100%;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 20px 16px 16px;
  border: 1px solid rgba(25, 155, 25, 0.2);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  cursor: pointer;
  transition: all 0.32s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: visible;

  /* ── image area ── */
  .product-image-wrap {
    width: 100%;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px 0;
    position: relative;
    margin-bottom: 16px;

    .wishlist-btn {
      position: absolute;
      top: -10px;
      right: -2px;
      width: 34px;
      height: 34px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.85);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      border: 1px solid rgba(255, 255, 255, 0.6);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #b9c1cc;
      transition: all 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);
      z-index: 2;
      box-shadow:
        0 2px 8px rgba(0, 0, 0, 0.08),
        0 0 0 0px rgba(229, 57, 53, 0);

      svg {
        transition: all 0.22s ease;
      }

      &:hover {
        background: rgba(255, 255, 255, 0.95);
        color: #e53935;
        transform: scale(1.15);
        box-shadow:
          0 4px 14px rgba(229, 57, 53, 0.18),
          0 0 0 3px rgba(229, 57, 53, 0.08);
        border-color: rgba(229, 57, 53, 0.15);
      }

      &.liked {
        background: rgba(229, 57, 53, 0.1);
        border-color: rgba(229, 57, 53, 0.25);
        color: #e53935;
        box-shadow:
          0 4px 12px rgba(229, 57, 53, 0.2),
          0 0 0 3px rgba(229, 57, 53, 0.08);

        svg {
          filter: drop-shadow(0 2px 4px rgba(229, 57, 53, 0.35));
          transform: scale(1.05);
        }

        &:hover {
          background: rgba(229, 57, 53, 0.15);
          transform: scale(1.15);
        }
      }

      &:active {
        transform: scale(0.92);
      }
    }
  }

  .product-image {
    width: 110px;
    height: 110px;
    object-fit: contain;
    transition: transform 0.4s ease;
  }

  /* ── content area ── */
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

  /* Row 1: product name (left) + star rating (right) */
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
    ${FlexBox({ align: "center", gap: "3px" })};
    flex-shrink: 0;

    .rating-score {
      font-size: 12px;
      font-weight: 700;
      color: #717d8e;
    }
  }

  /* Row 2: price (left) + cart button (right) */
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

  .cart-btn {
    ${FlexBox({ justify: "center", align: "center", gap: "5px" })};
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
    white-space: nowrap;

    &:hover {
      background: var(--green);
      color: #fff;
      border-color: var(--green);
      box-shadow: 0 5px 16px rgba(25, 155, 25, 0.28);
      transform: translateY(-1px);
    }

    &:active {
      transform: translateY(0);
    }

    &.added {
      background: var(--green);
      color: #fff;
      border-color: var(--green);
      pointer-events: none;
      box-shadow: 0 5px 16px rgba(25, 155, 25, 0.28);
    }

    svg {
      width: 15px;
      height: 15px;
      flex-shrink: 0;
    }

    span {
      @media (max-width: 1280px) {
        display: none;
      }
    }
  }

  /* hover effect on card */
  &:hover {
    transform: translateY(-8px);
    box-shadow:
      0 0 0 1px rgba(32, 184, 32, 0.18),
      0 8px 28px rgba(32, 184, 32, 0.1),
      0 2px 8px rgba(0, 0, 0, 0.04);

    .product-image {
      transform: scale(1.1) rotate(3deg);
    }

    .product-image-wrap {
      border-color: rgba(32, 184, 32, 0.18);
    }
  }

  flex-shrink: 0;
  
  @media (max-width: 1280px) {
    min-width: 220px;
    width: 220px;
  }

  @media (max-width: 1024px) {
    min-width: 180px;
    width: 180px;
    .product-image {
      width: 90px;
      height: 90px;
    }
  }
`;
