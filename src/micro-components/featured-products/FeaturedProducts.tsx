"use client";
import { useEffect, useState, useMemo } from "react";
import {
  StyledFeaturedProductContainer,
  StyledFeaturedProductHeading,
  StyledFeaturedProductSection,
  StyledFeatureProductCard,
  StyledSearchFilterBar,
  StyledSkeletonCard
} from "./featuredProducts.styled";
import Image from "next/image";
import { StarRating, ShoppingBag } from "../../../icons";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/redux/cartSlice";
import { HiOutlineCheck, HiMagnifyingGlass } from "react-icons/hi2";
import Link from "next/link";
import { RootState } from "@/redux/store";
import { toggleWishlist } from "@/redux/wishlistSlice";
import { productAPI } from "@/libs/api";

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
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const dispatch = useDispatch();
  const wishlistItems = useSelector((state: RootState) => state.wishlist.wishlistItems);
  
  const likedItemNames = useMemo(() => 
    new Set(wishlistItems.map(item => item.name)), 
  [wishlistItems]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await productAPI.getAllProducts();
        if (res && res.data) {
          setProducts(res.data);
        }
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to load products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((p: any) => {
      const cat = typeof p?.category === 'object' ? p?.category?.name : p?.category;
      const categoryName = (cat || "").toLowerCase();
      const isCategoryMatch = categoryName.includes(activeCategory.toLowerCase());
      const isSearchMatch = (p?.name || "").toLowerCase().includes(searchTerm.toLowerCase());
      return isCategoryMatch && isSearchMatch;
    });
  }, [products, activeCategory, searchTerm]);

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
          {error ? (
            <div style={{ padding: '20px', color: 'red', width: '100%', textAlign: 'center' }}>
              {error}
            </div>
          ) : (
            <div className="featured-product-row">
              {loading ? (
                Array.from({ length: 6 }).map((_, idx) => (
                  <StyledSkeletonCard key={idx}>
                    <div className="product-image-wrap">
                      <div className="skeleton-img"></div>
                    </div>
                    <div className="product-content">
                      <div className="product-name-row">
                        <div style={{ width: '100%' }}>
                          <div className="skeleton-text short"></div>
                          <div className="skeleton-text title"></div>
                        </div>
                      </div>
                      <div className="product-bottom-row">
                        <div className="skeleton-text price"></div>
                        <div className="skeleton-btn"></div>
                      </div>
                    </div>
                  </StyledSkeletonCard>
                ))
              ) : filteredProducts.length > 0 ? (
                filteredProducts.map((e: any, j: number) => (
                  <StyledFeatureProductCard key={j + 1}>
                    <Link 
                      href={`/products/${(e.slug || e.name).toLowerCase().replace(/\s+/g, '-')}`}
                      style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}
                    >
                      {/* Image area */}
                      <div className="product-image-wrap">
                        {e?.discount && (
                          <div style={{ position: 'absolute', top: 10, left: 10, background: '#e53935', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '10px', fontWeight: 'bold', zIndex: 2 }}>
                            {e.discount}% OFF
                          </div>
                        )}
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
                        {/* Stock Availability */}
                        {e?.stock === 0 && (
                          <div style={{ position: 'absolute', bottom: 10, left: 10, background: 'rgba(0,0,0,0.6)', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '10px', fontWeight: 'bold', zIndex: 2 }}>
                            Out of Stock
                          </div>
                        )}
                      </div>

                      {/* Content area */}
                      <div className="product-content">

                        {/* Name + Rating on same row */}
                        <div className="product-name-row">
                          <div>
                            {/* Category label */}
                            <div className="product-category">{typeof e?.category === 'object' ? e?.category?.name : e?.category}</div>
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
                            disabled={e?.stock === 0}
                            style={e?.stock === 0 ? { opacity: 0.5, cursor: 'not-allowed' } : {}}
                            onClick={(ev) => {
                              ev.preventDefault();
                              ev.stopPropagation();
                              if (e?.stock !== 0) handleAddToCart(e);
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
                ))
              ) : (
                <div style={{ padding: '20px', width: '100%', textAlign: 'center', color: '#666' }}>
                  No products found.
                </div>
              )}
            </div>
          )}
        </StyledFeaturedProductSection>
      </StyledFeaturedProductContainer>
    </>
  );
};

export default FeaturedProducts;

