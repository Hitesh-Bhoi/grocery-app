"use client";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/redux/cartSlice";
import { toggleWishlist } from "@/redux/wishlistSlice";
import { RootState } from "@/redux/store";
import { 
  HiOutlineMagnifyingGlass, 
  HiOutlineCheck,
  HiOutlineHeart,
  HiHeart
} from "react-icons/hi2";
import { StarRating, ShoppingBag } from "../../../icons";
import data from "../../../public/fake-json/data.json";

import {
  StyledProductsContainer,
  StyledFilterBar,
  StyledSearchInput,
  StyledCategoryFilter,
  StyledProductGrid,
  StyledEmptyState
} from "./products.styled";
import { StyledFeatureProductCard } from "@/micro-components/featured-products/featuredProducts.styled";
import Link from "next/link";

export default function ProductsPage() {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state: RootState) => state.wishlist.wishlistItems);
  
  // Flatten data
  const allProducts = useMemo(() => {
    return [...data.vegetables, ...data.fruits];
  }, []);

  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [addedItemIds, setAddedItemIds] = useState<Set<string>>(new Set());

  // Filter products
  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === "all" || product.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [allProducts, searchTerm, activeCategory]);

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

  const handleToggleWishlist = (p: any) => {
    dispatch(toggleWishlist({
      id: p.name,
      name: p.name,
      price: p.price,
      image_url: p.image_url,
      category: p.category,
      unit: p.unit
    }));
  };

  const isLiked = (name: string) => {
    return wishlistItems.some(item => item.name === name);
  };

  return (
    <StyledProductsContainer>
      <StyledFilterBar>
        <StyledSearchInput>
          <HiOutlineMagnifyingGlass className="search-icon" />
          <input 
            type="text" 
            placeholder="Search products..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </StyledSearchInput>
        
        <StyledCategoryFilter>
          <button 
            className={activeCategory === "all" ? "active" : ""} 
            onClick={() => setActiveCategory("all")}
          >
            All
          </button>
          <button 
            className={activeCategory === "fruit" ? "active" : ""} 
            onClick={() => setActiveCategory("fruit")}
          >
            Fruits
          </button>
          <button 
            className={activeCategory === "vegetable" ? "active" : ""} 
            onClick={() => setActiveCategory("vegetable")}
          >
            Vegetables
          </button>
        </StyledCategoryFilter>
      </StyledFilterBar>

      {filteredProducts.length === 0 ? (
        <StyledEmptyState>
          <div className="icon-box">🔍</div>
          <h3>No products found</h3>
          <p>We couldn't find anything matching "<strong>{searchTerm}</strong>". Try using different keywords or clearing your filters.</p>
          <button 
            style={{ 
              marginTop: '20px', 
              padding: '10px 24px', 
              borderRadius: '12px', 
              border: 'none', 
              background: 'var(--green)', 
              color: 'white', 
              fontWeight: '700', 
              cursor: 'pointer' 
            }}
            onClick={() => { setSearchTerm(""); setActiveCategory("all"); }}
          >
            Clear all filters
          </button>
        </StyledEmptyState>
      ) : (
        <StyledProductGrid>
          {filteredProducts.map((e: any, j: number) => (
            <StyledFeatureProductCard key={j + 1} style={{ width: '100%', minWidth: 'auto' }}>
              <Link 
                href={`/products/${e.name.toLowerCase().replace(/\s+/g, '-')}`}
                style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}
              >
                <div className="product-image-wrap">
                  <button
                    className={`wishlist-btn${isLiked(e.name) ? " liked" : ""}`}
                    aria-label="Add to wishlist"
                    onClick={(ev) => { 
                      ev.preventDefault();
                      ev.stopPropagation(); 
                      handleToggleWishlist(e); 
                    }}
                    style={{
                      color: isLiked(e.name) ? '#ff4d4f' : '#888'
                    }}
                  >
                    {isLiked(e.name) ? <HiHeart /> : <HiOutlineHeart />}
                  </button>
                  <Image
                    src={e?.image_url}
                    alt={e?.name}
                    className="product-image"
                    width={100}
                    height={100}
                  />
                </div>

                <div className="product-content">
                  <div className="product-name-row">
                    <div style={{ minWidth: 0, flex: 1 }}>
                      <div className="product-category">{e?.category}</div>
                      <div className="product-name" title={e?.name}>{e?.name}</div>
                    </div>
                    <div className="product-rating">
                      <StarRating />
                      <span className="rating-score">4.2</span>
                    </div>
                  </div>

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
        </StyledProductGrid>
      )}
    </StyledProductsContainer>
  );
}
