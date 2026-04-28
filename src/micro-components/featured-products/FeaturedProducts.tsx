"use client";
import { useEffect, useState, useMemo } from "react";
import data from "../../../public/fake-json/data.json";
import {
  StyledFeaturedProductContainer,
  StyledFeaturedProductHeading,
  StyledFeaturedProductSection,
  StyledFeatureProductCard,
  StyledSearchFilterBar,
} from "./featuredProducts.styled";
import Image from "next/image";
import { StarRating, ShoppingBag } from "../../../icons";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/redux/cartSlice";
import { HiOutlineCheck, HiMagnifyingGlass } from "react-icons/hi2";
import Link from "next/link";
import { RootState } from "@/redux/store";
import { toggleWishlist } from "@/redux/wishlistSlice";

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
  const [activeCategory, setActiveCategory] = useState<"fruits" | "vegetables">("fruits");
  const [searchTerm, setSearchTerm] = useState("");
  const [addedItemIds, setAddedItemIds] = useState<Set<string>>(new Set());
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state: RootState) => state.wishlist.wishlistItems);
  
  const likedItemNames = useMemo(() => 
    new Set(wishlistItems.map(item => item.name)), 
  [wishlistItems]);

  const filteredProducts = useMemo(() => {
    const products = activeCategory === "fruits" ? data.fruits : data.vegetables;
    return products.filter((p: any) => 
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [activeCategory, searchTerm]);

  const handleAddToCart = (product: any) => {
    dispatch(addToCart({ product, quantity: 1 }));
    const id = String(product?.id || product?.name);
    
    setAddedItemIds((prev) => {
      const next = new Set(prev);
      next.add(id);
      return next;
    });

    setTimeout(() => {
      setAddedItemIds((prev) => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });
    }, 2000);
  };

  const handleToggleWishlist = (product: any) => {
    dispatch(toggleWishlist({
      id: product.name,
      name: product.name,
      price: product.price,
      image_url: product.image_url,
      category: product.category,
      unit: product.unit
    }));
  };

  return (
    <>
      <StyledFeaturedProductContainer>
        <StyledFeaturedProductSection>
          {/* Section heading */}
          <StyledFeaturedProductHeading>
            <div className="heading-left">
              <div className="featured-product-title">Shop by category</div>
              <div className="featured-product-heading">
                {activeCategory === "fruits" ? "Season's Best Fruits" : "Season's Best Vegetables"}
              </div>
            </div>
            <Link href="/products">
              <button className="see-all-btn">View all products</button>
            </Link>
          </StyledFeaturedProductHeading>

          {/* Filter and Search Bar */}
          <StyledSearchFilterBar>
            <div className="filter-tabs">
              <button 
                className={activeCategory === "fruits" ? "active" : ""} 
                onClick={() => setActiveCategory("fruits")}
              >
                Fruits
              </button>
              <button 
                className={activeCategory === "vegetables" ? "active" : ""} 
                onClick={() => setActiveCategory("vegetables")}
              >
                Vegetables
              </button>
            </div>
            <div className="search-wrapper">
              <HiMagnifyingGlass className="search-icon" />
              <input 
                type="text" 
                placeholder={`Search ${activeCategory}...`} 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </StyledSearchFilterBar>

          {/* Product cards */}
          <div className="featured-product-row">
            {filteredProducts.map((e: any, j: number) => (
              <StyledFeatureProductCard key={j + 1}>
                <Link 
                  href={`/products/${e.name.toLowerCase().replace(/\s+/g, '-')}`}
                  style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}
                >
                  {/* Image area */}
                  <div className="product-image-wrap">
                    <button
                      className={`wishlist-btn${likedItemNames.has(e.name) ? " liked" : ""}`}
                      aria-label="Add to wishlist"
                      onClick={(ev) => { 
                         ev.preventDefault();
                         ev.stopPropagation(); 
                         handleToggleWishlist(e); 
                      }}
                    >
                      <HeartIcon filled={likedItemNames.has(e.name)} />
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
                      <button 
                        className={`cart-btn ${addedItemIds.has(String(e?.id || e?.name)) ? "added" : ""}`} 
                        onClick={(ev) => {
                          ev.preventDefault();
                          ev.stopPropagation();
                          handleAddToCart(e);
                        }}
                      >
                        {addedItemIds.has(String(e?.id || e?.name)) ? (
                          <>
                            <HiOutlineCheck style={{ fontSize: '18px', strokeWidth: 2.5 }} />
                            <span>Added</span>
                          </>
                        ) : (
                          <>
                            <ShoppingBag />
                            <span>Add to Cart</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </Link>
              </StyledFeatureProductCard>
            ))}
          </div>
        </StyledFeaturedProductSection>
      </StyledFeaturedProductContainer>
    </>
  );
};

export default FeaturedProducts;

