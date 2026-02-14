"use client";
import styled from "styled-components";

export const StyledFeaturedProductContainer = styled.div`
  padding: 20px 20px 0px 20px;
`;

export const StyledFeaturedProductSection = styled.div`
  padding-bottom: 10px;
  .featured-product-row {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    /* flex-wrap: wrap; */
    @media screen and (250px <= width <= 1024px) {
      overflow-x: scroll;
      padding: 15px 10px 15px 10px;
      gap: 10px;
    }
  }
`;

export const StyledFeaturedProductHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  padding-block: 10px;
  .featured-product-title {
    font-size: 14px;
    color: var(--green);
  }
  .featured-product-heading {
    font-size: 22px;
    white-space: normal;
    word-wrap: break-word;
    overflow-wrap: break-word;
    @media (250px <= width <= 768px) {
      font-size: 20px;
    }
  }
  .see-all-btn {
    border: none;
    background: white;
    color: #20b820;
    cursor: pointer;
    font-weight: 600;
    font-size: 14px;
    text-wrap-mode: nowrap;
  }
`;

export const StyledFeatureProductCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 250px;
  height: 200px;
  padding: 20px 10px;
  box-shadow:
    rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  border-radius: 8px;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  cursor: pointer;
  .product-name-section {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .product-name-category {
      display: flex;
      flex-direction: column;
      .product-category {
        text-transform: capitalize;
        font-size: 14px;
        color: #9c9999;
      }
      .product-name {
        font-size: 18px;
      }
    }
    .product-rating {
      display: flex;
      align-items: flex-end;
      gap: 2px;
      svg {
        display: block;
      }
    }
  }
  .product-image {
    width: 130px;
    height: 130px;
  }
  .product-price-and-unit {
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
  }
  .product-details {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 8px;
    .cart-btn {
      display: flex;
      align-items: center;
      gap: 2px;
      color: #20b820;
      background-color: #dde2dd;
      border: none;
      padding: 4px 12px;
      border-radius: 8px;
    }
    .product-price {
      font-size: 18px;
      /* color: var(--green); */
    }
    .product-unit {
      text-transform: capitalize;
      font-size: 14px;
      color: #9c9999;
    }
  }
  &:hover {
    transform: scale(1.08);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 20px;
    z-index: 2;
  }
  @media screen and (250px <= width <= 1024px) {
    width: 100%;
    height: 100%;
  }
`;
