"use client";
import { useEffect, useState } from "react";
import data from "../../../public/fake-json/data.json";
import {
  StyledFeaturedProductContainer,
  StyledFeaturedProductHeading,
  StyledFeaturedProductSection,
  StyledFeatureProductCard,
} from "./featuredProducts.styled";
import Image from "next/image";
import { StarRating, ShoppingBag } from "../../../icons";

const FeaturedProducts = () => {
  const [productList, setProductList] = useState<any>([]);

  useEffect(() => {
    const jsonData = [
      {
        title: "season’s best fruits",
        description:
          "fresh fruits picked at their best for flavor and quality.",
        data: data.fruits,
      },
      {
        title: "season’s best vegetables",
        description:
          "fresh vegetables selected at their peak quality and flavor.",
        data: data.vegetables,
      },
    ];
    setProductList(jsonData);
  }, []);
  return (
    <>
      <StyledFeaturedProductContainer>
        {productList.map((item: any, i: number) => {
          return (
            <StyledFeaturedProductSection key={i+1}>
              <StyledFeaturedProductHeading>
                <div>
                <div className="featured-product-title">{item?.title}</div>
                <div className="featured-product-heading">
                  {item?.description}
                </div>
                </div>
                <div>
                  <button
                   className="see-all-btn"
                  >
                    See all
                  </button>
                </div>
              </StyledFeaturedProductHeading>
              <div className="featured-product-row">
              {item?.data?.map((e: any, i: number) => {
                return <StyledFeatureProductCard key={i+1}>
                    <Image 
                    src={e?.image_url}
                    alt="apple"
                    className="product-image"
                    width={100}
                    height={100}
                    />
                    <div className="product-name-section">
                    <div className="product-name-category">
                      <div className="product-category">{e?.category}</div>
                      <div className="product-name">{e?.name}</div>
                    </div>
                    <div className="product-rating">
                      <span><StarRating/></span>
                      <span>4.2</span>
                    </div>
                    </div>
                    <div className="product-details">
                    <div className="product-price-and-unit">
                      <p className="remove-default-margin product-unit">{e?.unit}</p>
                      <p className="remove-default-margin product-price">{ "₹" + e?.price }</p> 
                    </div>
                    <button className="cart-btn"><ShoppingBag/> Add</button>
                    </div>
                    </StyledFeatureProductCard>;
              })}
              </div>
            </StyledFeaturedProductSection>
          );
        })}
      </StyledFeaturedProductContainer>
    </>
  );
};
export default FeaturedProducts;
