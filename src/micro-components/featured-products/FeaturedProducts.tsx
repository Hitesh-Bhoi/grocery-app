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
import { useCart } from "@/context/CartContext";

const HeartIcon = ({ filled }: { filled: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="16"
    height="16"
    fill={filled ? "#e53935" : "none"}
    stroke={filled ? "#e53935" : "currentColor"}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ transition: "all 0.25s ease" }}
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const FeaturedProducts = () => {
  const [productList, setProductList] = useState<any>([]);
  const [likedItems, setLikedItems] = useState<Set<string>>(new Set());
  const { addToCart } = useCart();

  const toggleLike = (id: string) => {
    setLikedItems((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  useEffect(() => {
    const jsonData = [
      {
        title: "season's best fruits",
        description: "fresh fruits picked at their best for flavor and quality.",
        data: data.fruits,
      },
      {
        title: "season's best vegetables",
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
        {productList.map((item: any, i: number) => (
          <StyledFeaturedProductSection key={i + 1}>
            {/* Section heading */}
            <StyledFeaturedProductHeading>
              <div className="heading-left">
                <div className="featured-product-title">{item?.title}</div>
                <div className="featured-product-heading">
                  {item?.description}
                </div>
              </div>
              <button className="see-all-btn">See all</button>
            </StyledFeaturedProductHeading>

            {/* Product cards */}
            <div className="featured-product-row">
              {item?.data?.map((e: any, j: number) => (
                <StyledFeatureProductCard key={j + 1}>
                  {/* Image area */}
                  <div className="product-image-wrap">
                    <button
                      className={`wishlist-btn${likedItems.has(String(e?.id || e?.name)) ? " liked" : ""}`}
                      aria-label="Add to wishlist"
                      onClick={(ev) => { ev.stopPropagation(); toggleLike(String(e?.id || e?.name)); }}
                    >
                      <HeartIcon filled={likedItems.has(String(e?.id || e?.name))} />
                    </button>
                    <Image
                      src={e?.image_url}
                      alt={e?.name}
                      className="product-image"
                      width={100}
                      height={100}
                    />
                  </div>

                  {/* Content area */}
                  <div className="product-content">

                    {/* Name + Rating on same row */}
                    <div className="product-name-row">
                      <div>
                        {/* Category label */}
                        <div className="product-category">{e?.category}</div>
                        <div className="product-name">{e?.name}</div>
                      </div>
                      <div className="product-rating">
                        <StarRating />
                        <span className="rating-score">4.2</span>
                      </div>
                    </div>

                    {/* Price + Cart btn on same row */}
                    <div className="product-bottom-row">
                      <div className="price-wrap">
                        <p className="product-unit">{e?.unit}</p>
                        <p className="product-price">{"₹" + e?.price}</p>
                      </div>
                      <button className="cart-btn" onClick={() => addToCart(e, 1)}>
                        <ShoppingBag />
                        <span>Add to Cart</span>
                      </button>
                    </div>
                  </div>
                </StyledFeatureProductCard>
              ))}
            </div>
          </StyledFeaturedProductSection>
        ))}
      </StyledFeaturedProductContainer>
    </>
  );
};
export default FeaturedProducts;
