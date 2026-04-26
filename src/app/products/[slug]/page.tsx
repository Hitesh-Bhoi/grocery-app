"use client";
import React, { useState, useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cartSlice";
import data from "../../../../public/fake-json/data.json";
import { StarRating, ShoppingBag } from "./../../../../icons";
import { 
  HiArrowLeft, 
  HiOutlineTruck, 
  HiOutlineShieldCheck, 
  HiOutlineSparkles,
  HiOutlineCheck,
  HiPlus,
  HiMinus
} from "react-icons/hi2";

import {
  StyledDetailContainer,
  StyledBackButton,
  StyledProductMain,
  StyledImageGallery,
  StyledProductInfo,
  StyledFeatures,
  StyledRelatedSection
} from "./productDetail.styled";
import { StyledFeatureProductCard } from "@/micro-components/featured-products/featuredProducts.styled";

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const slug = params.slug as string;

  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  // Find product by slug
  const product = useMemo(() => {
    const allProducts = [...data.vegetables, ...data.fruits];
    return allProducts.find(p => p.name.toLowerCase().replace(/\s+/g, '-') === slug);
  }, [slug]);

  // Related products (same category, exclude current)
  const relatedProducts = useMemo(() => {
    if (!product) return [];
    const categoryProducts = product.category === "vegetable" ? data.vegetables : data.fruits;
    return categoryProducts
      .filter(p => p.name !== product.name)
      .slice(0, 4);
  }, [product]);

  if (!product) {
    return (
      <StyledDetailContainer>
        <StyledBackButton onClick={() => router.back()}>
          <HiArrowLeft /> Back to products
        </StyledBackButton>
        <div style={{ textAlign: 'center', padding: '100px 0' }}>
          <h1>Product not found</h1>
          <p>The product you're looking for doesn't exist.</p>
          <Link href="/products" style={{ color: 'var(--green)', fontWeight: 'bold' }}>
            Browse all products
          </Link>
        </div>
      </StyledDetailContainer>
    );
  }

  const handleAddToCart = () => {
    dispatch(addToCart({ product, quantity }));
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <StyledDetailContainer>
      <StyledBackButton onClick={() => router.back()}>
        <HiArrowLeft /> Back to products
      </StyledBackButton>

      <StyledProductMain>
        <StyledImageGallery>
          {product.discount && (
            <div className="discount-badge">-{product.discount}% OFF</div>
          )}
          <Image 
            src={product.image_url} 
            alt={product.name} 
            width={500} 
            height={500} 
            className="main-image"
            priority
          />
        </StyledImageGallery>

        <StyledProductInfo>
          <span className="category-tag">{product.category}s</span>
          <h1 className="product-name">{product.name}</h1>
          
          <div className="rating-row">
            <div className="stars">
              <StarRating />
            </div>
            <span className="count">(4.8 • 120 reviews)</span>
          </div>

          <div className="price-row">
            <span className="price">₹{product.price}</span>
            <span className="unit">/ {product.unit}</span>
          </div>

          <p className="description">
            Experience the peak of freshness with our premium {product.name.toLowerCase()}. 
            Sourced directly from local sustainable farms, these {product.category}s are 
            harvested at their nutritional peak to ensure you get the best flavor and quality. 
            Perfect for your daily healthy meals and recipes.
          </p>

          <div className="action-row">
            <div className="quantity-selector">
              <button onClick={() => setQuantity(prev => Math.max(1, prev - 1))}>
                <HiMinus />
              </button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(prev => prev + 1)}>
                <HiPlus />
              </button>
            </div>

            <button 
              className={`add-cart-btn ${isAdded ? 'added' : ''}`}
              onClick={handleAddToCart}
              disabled={isAdded}
            >
              {isAdded ? (
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                  <HiOutlineCheck /> Added to Cart
                </span>
              ) : (
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                  <ShoppingBag /> Add to Cart • ₹{product.price * quantity}
                </span>
              )}
            </button>
          </div>

          <StyledFeatures>
            <div className="feature-item">
              <div className="icon"><HiOutlineSparkles /></div>
              <span>100% Fresh</span>
            </div>
            <div className="feature-item">
              <div className="icon"><HiOutlineTruck /></div>
              <span>Fast Delivery</span>
            </div>
            <div className="feature-item">
              <div className="icon"><HiOutlineShieldCheck /></div>
              <span>Quality Assured</span>
            </div>
          </StyledFeatures>
        </StyledProductInfo>
      </StyledProductMain>

      {relatedProducts.length > 0 && (
        <StyledRelatedSection>
          <h2>You might also like</h2>
          <div className="related-grid">
            {relatedProducts.map((p: any, i: number) => (
              <Link 
                key={i} 
                href={`/products/${p.name.toLowerCase().replace(/\s+/g, '-')}`}
                style={{ textDecoration: 'none' }}
              >
                <StyledFeatureProductCard style={{ width: '100%', minWidth: 'auto' }}>
                  <div className="product-image-wrap">
                    <Image 
                      src={p.image_url} 
                      alt={p.name} 
                      width={150} 
                      height={150} 
                      className="product-image"
                    />
                  </div>
                  <div className="product-content">
                    <div className="product-name-row">
                      <div style={{ minWidth: 0, flex: 1 }}>
                        <div className="product-category">{p.category}</div>
                        <div className="product-name">{p.name}</div>
                      </div>
                    </div>
                    <div className="product-bottom-row">
                      <div className="price-wrap">
                        <p className="product-unit">{p.unit}</p>
                        <p className="product-price">₹{p.price}</p>
                      </div>
                    </div>
                  </div>
                </StyledFeatureProductCard>
              </Link>
            ))}
          </div>
        </StyledRelatedSection>
      )}
    </StyledDetailContainer>
  );
}
