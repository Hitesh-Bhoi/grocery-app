"use client";
import React, { useState, useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/redux/cartSlice";
import { toggleWishlist } from "@/redux/wishlistSlice";
import { RootState } from "@/redux/store";
import data from "../../../../public/fake-json/data.json";
import { StarRating, ShoppingBag } from "./../../../../icons";
import {
  HiArrowLeft,
  HiOutlineTruck,
  HiOutlineShieldCheck,
  HiOutlineSparkles,
  HiOutlineCheck,
  HiPlus,
  HiMinus,
  HiOutlineHeart,
  HiHeart
} from "react-icons/hi2";

import {
  StyledDetailContainer,
  StyledBackButton,
  StyledProductMain,
  StyledImageGallery,
  StyledProductInfo,
  StyledFeatures,
  StyledRelatedSection,
  StyledGalleryThumbnails,
  StyledTabsContainer,
  StyledTabHeader,
  StyledTabContent,
} from "./productDetail.styled";
import { StyledFeatureProductCard } from "@/micro-components/featured-products/featuredProducts.styled";

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const slug = params.slug as string;

  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const [activeTab, setActiveTab] = useState("description");

  const wishlistItems = useSelector((state: RootState) => state.wishlist.wishlistItems);

  // Find product by slug
  const product = useMemo(() => {
    const allProducts = [...data.vegetables, ...data.fruits];
    return allProducts.find(
      (p) => p.name.toLowerCase().replace(/\s+/g, "-") === slug,
    );
  }, [slug]);

  const isLiked = useMemo(() => {
    return wishlistItems.some(item => item.name === product?.name);
  }, [wishlistItems, product]);

  // Related products (same category, exclude current)
  const relatedProducts = useMemo(() => {
    if (!product) return [];
    const categoryProducts =
      product.category === "vegetable" ? data.vegetables : data.fruits;
    return categoryProducts.filter((p) => p.name !== product.name).slice(0, 4);
  }, [product]);

  if (!product) {
    return (
      <StyledDetailContainer>
        <StyledBackButton onClick={() => router.back()}>
          <HiArrowLeft /> Back to products
        </StyledBackButton>
        <div style={{ textAlign: "center", padding: "100px 0" }}>
          <h1>Product not found</h1>
          <p>The product you're looking for doesn't exist.</p>
          <Link
            href="/products"
            style={{ color: "var(--green)", fontWeight: "bold" }}
          >
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

  return (
    <StyledDetailContainer>
      <StyledBackButton onClick={() => router.back()}>
        <HiArrowLeft /> Back to products
      </StyledBackButton>

      <StyledProductMain>
        <div>
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
          
          <StyledGalleryThumbnails>
            <div className="thumb active">
              <Image src={product.image_url} alt="Thumbnail 1" width={80} height={80} />
            </div>
            <div className="thumb">
              <Image src={product.image_url} alt="Thumbnail 2" width={80} height={80} style={{ opacity: 0.5 }} />
            </div>
            <div className="thumb">
              <Image src={product.image_url} alt="Thumbnail 3" width={80} height={80} style={{ opacity: 0.5 }} />
            </div>
          </StyledGalleryThumbnails>
        </div>

        <StyledProductInfo>
          <div className="header-group">
            <div className="meta-row">
              <span className="category-tag">{product.category}s</span>
              <span className="stock-status">In Stock</span>
            </div>
            <h1 className="product-name">{product.name}</h1>

            <div className="rating-price-row">
              <div className="rating-row">
                <div className="stars">
                  <StarRating />
                </div>
                <span className="count">(4.8 • 120 reviews)</span>
              </div>

              <div className="price-box">
                <span className="price">₹{product.price}</span>
                <span className="unit">/ {product.unit}</span>
              </div>
            </div>
          </div>

          <p className="description">
            Experience the peak of freshness with our premium{" "}
            {product.name.toLowerCase()}. Sourced directly from local
            sustainable farms, these {product.category}s are harvested at their
            nutritional peak to ensure you get the best flavor and quality.
            Perfect for your daily healthy meals and recipes.
          </p>

          <div className="purchase-section">
            <div className="action-row">
              <div className="quantity-selector">
                <button
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                >
                  <HiMinus />
                </button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity((prev) => prev + 1)}>
                  <HiPlus />
                </button>
              </div>

              <button
                className={`add-cart-btn ${isAdded ? "added" : ""}`}
                onClick={handleAddToCart}
                disabled={isAdded}
              >
                {isAdded ? (
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                    }}
                  >
                    <HiOutlineCheck /> Added to Cart
                  </span>
                ) : (
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                    }}
                  >
                    <ShoppingBag /> Add to Cart • ₹{product.price * quantity}
                  </span>
                )}
              </button>

              <button 
                className={`wishlist-detail-btn ${isLiked ? 'active' : ''}`}
                onClick={() => handleToggleWishlist(product)}
                title={isLiked ? "Remove from wishlist" : "Add to wishlist"}
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '16px',
                  border: isLiked ? 'none' : '1px solid #eef2ee',
                  background: isLiked ? '#fef2f2' : '#fff',
                  color: isLiked ? '#ff4d4f' : '#888',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: isLiked ? '0 8px 16px rgba(255, 77, 79, 0.15)' : 'none'
                }}
              >
                {isLiked ? <HiHeart /> : <HiOutlineHeart />}
              </button>
            </div>
            
            <div className="trust-note">
              <HiOutlineShieldCheck style={{ color: '#10b981' }} />
              Secure Checkout • Satisfaction Guaranteed
            </div>
          </div>

          <StyledFeatures>
            <div className="feature-item">
              <div className="icon">
                <HiOutlineSparkles />
              </div>
              <span>100% Fresh</span>
            </div>
            <div className="feature-item">
              <div className="icon">
                <HiOutlineTruck />
              </div>
              <span>Fast Delivery</span>
            </div>
            <div className="feature-item">
              <div className="icon">
                <HiOutlineShieldCheck />
              </div>
              <span>Quality Assured</span>
            </div>
          </StyledFeatures>
        </StyledProductInfo>
      </StyledProductMain>

      <StyledTabsContainer>
        <StyledTabHeader>
          <button 
            className={activeTab === "description" ? "active" : ""}
            onClick={() => setActiveTab("description")}
          >
            Description
          </button>
          <button 
            className={activeTab === "details" ? "active" : ""}
            onClick={() => setActiveTab("details")}
          >
            Additional Info
          </button>
          <button 
            className={activeTab === "reviews" ? "active" : ""}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews (120)
          </button>
        </StyledTabHeader>
        
        <StyledTabContent>
          {activeTab === "description" && (
            <div>
              <h3>Product Description</h3>
              <p>
                Our premium {product.name.toLowerCase()} is carefully selected for its superior quality and freshness. 
                We work closely with local farmers who use sustainable and organic practices to bring you 
                the healthiest produce possible.
              </p>
              <p style={{ marginTop: '16px' }}>
                Rich in essential vitamins and minerals, this {product.category} is a versatile addition to any kitchen. 
                Whether you're making a fresh salad, a hearty soup, or a nutritious side dish, 
                it provides the perfect foundation for your culinary creations.
              </p>
            </div>
          )}
          
          {activeTab === "details" && (
            <div>
              <h3>Technical Details</h3>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                <li><strong>Origin:</strong> Locally sourced from sustainable farms</li>
                <li><strong>Storage:</strong> Keep in a cool, dry place or refrigerate for maximum shelf life</li>
                <li><strong>Shelf Life:</strong> 5-7 days from date of delivery</li>
                <li><strong>Weight:</strong> Sold by the {product.unit}</li>
                <li><strong>Packaging:</strong> Eco-friendly, recyclable packaging</li>
              </ul>
            </div>
          )}
          
          {activeTab === "reviews" && (
            <div>
              <div className="review-item">
                <div className="review-header">
                  <span className="user">Rahul Sharma</span>
                  <span className="date">2 days ago</span>
                </div>
                <div style={{ color: '#fbbf24', marginBottom: '8px' }}>★★★★★</div>
                <p>Absolutely fresh! The quality is much better than what I get from the local market. Highly recommended.</p>
              </div>
              <div className="review-item">
                <div className="review-header">
                  <span className="user">Priya Patel</span>
                  <span className="date">1 week ago</span>
                </div>
                <div style={{ color: '#fbbf24', marginBottom: '8px' }}>★★★★☆</div>
                <p>Very good quality. The packaging was also neat and eco-friendly. Will order again.</p>
              </div>
            </div>
          )}
        </StyledTabContent>
      </StyledTabsContainer>

      {relatedProducts.length > 0 && (
        <StyledRelatedSection>
          <div className="section-header">
            <h2>You might also like</h2>
            <Link href="/products" className="view-all">
              View All <ShoppingBag/>
            </Link>
          </div>
          <div className="related-grid">
            {relatedProducts.map((p: any, i: number) => (
              <Link
                key={i}
                href={`/products/${p.name.toLowerCase().replace(/\s+/g, "-")}`}
                style={{ textDecoration: "none" }}
              >
                <StyledFeatureProductCard
                  style={{ width: "100%", minWidth: "auto" }}
                >
                  <div className="product-image-wrap">
                    <button
                      className={`wishlist-btn ${wishlistItems.some(item => item.name === p.name) ? 'liked' : ''}`}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleToggleWishlist(p);
                      }}
                      style={{
                        position: 'absolute',
                        top: '12px',
                        right: '12px',
                        zIndex: 10,
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        background: 'white',
                        border: 'none',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        color: wishlistItems.some(item => item.name === p.name) ? '#ff4d4f' : '#888',
                        transition: 'all 0.3s'
                      }}
                    >
                      {wishlistItems.some(item => item.name === p.name) ? <HiHeart /> : <HiOutlineHeart />}
                    </button>
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
                        <div className="product-name" title={p.name}>{p.name}</div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '3px', flexShrink: 0 }}>
                        <StarRating />
                        <span style={{ fontSize: '12px', fontWeight: 700, color: '#717d8e' }}>4.2</span>
                      </div>
                    </div>
                    <div className="product-bottom-row">
                      <div className="price-wrap">
                        <p className="product-unit">{p.unit}</p>
                        <p className="product-price">₹{p.price}</p>
                      </div>
                      <button 
                        className="cart-btn" 
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '5px',
                          padding: '8px 12px',
                          borderRadius: '10px',
                          border: '1.5px solid rgba(32, 184, 32, 0.25)',
                          background: 'rgba(32, 184, 32, 0.07)',
                          color: 'var(--green)',
                          fontSize: '12px',
                          fontWeight: 800,
                          cursor: 'pointer',
                          transition: 'all 0.28s ease'
                        }}
                        onClick={(ev) => {
                          ev.preventDefault();
                          ev.stopPropagation();
                          dispatch(addToCart({ product: p, quantity: 1 }));
                        }}
                      >
                        <ShoppingBag />
                        <span>Add to Cart</span>
                      </button>
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
