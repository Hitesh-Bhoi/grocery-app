"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  HiOutlineHeart,
  HiOutlineShoppingCart,
  HiOutlineTrash,
  HiArrowRight,
} from "react-icons/hi2";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { removeFromWishlist, clearWishlist } from "@/redux/wishlistSlice";
import { addToCart } from "@/redux/cartSlice";
import { StarRating } from "../../../icons";
import {
  WishlistHeader,
  WishlistContainer,
  WishlistTitle,
  WishlistGrid,
  WishlistItemCard,
  EmptyWishlist,
  ClearAllButton,
  ModalOverlay,
  ModalContent,
} from "./wishlist.styled";
import data from "../../../public/fake-json/data.json";

const WishlistPage = () => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector(
    (state: RootState) => state.wishlist.wishlistItems,
  );

  const [showClearModal, setShowClearModal] = React.useState(false);

  React.useEffect(() => {
    if (showClearModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showClearModal]);

  const handleAddToCart = (item: any) => {
    dispatch(
      addToCart({
        product: {
          name: item.name,
          price: item.price,
          image_url: item.image_url,
          unit: item.unit || "per pack",
          category: item.category || "Vegetables",
        },
      }),
    );
    dispatch(removeFromWishlist(item.name));
  };

  const handleClearWishlist = () => {
    dispatch(clearWishlist());
    setShowClearModal(false);
  };

  return (
    <>
      <WishlistHeader>
        <WishlistTitle>
          <div className="title-left">
            <HiOutlineHeart className="wishlist-heading-icon" />
            <h1>My Wishlist</h1>
          </div>
          <div className="title-right">
            <p className="subtitle">
              You have <span>{wishlistItems.length} items</span> in wishlist
            </p>
          </div>
        </WishlistTitle>
      </WishlistHeader>

      <WishlistContainer>
        {wishlistItems.length > 0 ? (
          <>
            <ClearAllButton onClick={() => setShowClearModal(true)}>
              <HiOutlineTrash className="icon" />
              Clear All
            </ClearAllButton>
            <WishlistGrid>
              {wishlistItems.map((item) => {
                // Try to find correct category/unit from data if missing
                const allProducts = [...data.vegetables, ...data.fruits];
                const originalProduct = allProducts.find(p => p.name === item.name);
                const category = item.category || originalProduct?.category || 'Vegetables';
                const unit = item.unit || originalProduct?.unit || 'per pack';

                return (
                  <WishlistItemCard key={item.name}>
                    <div className="product-image-wrap">
                      <button
                        className="remove-btn"
                        onClick={() => dispatch(removeFromWishlist(item.name))}
                        title="Remove from wishlist"
                        style={{
                          color: '#ff4d4f',
                          background: 'rgba(255, 77, 79, 0.1)',
                          border: '1px solid rgba(255, 77, 79, 0.2)'
                        }}
                      >
                        <HiOutlineTrash />
                      </button>
                      <Link href={`/products/${item.name.toLowerCase().replace(/\s+/g, '-')}`} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                        <Image
                          src={item.image_url}
                          alt={item.name}
                          width={110}
                          height={110}
                          className="product-image"
                        />
                      </Link>
                    </div>

                    <div className="product-content">
                      <div className="product-category">{category}</div>
                      <div className="product-name-row">
                        <Link href={`/products/${item.name.toLowerCase().replace(/\s+/g, '-')}`} style={{ textDecoration: 'none', color: 'inherit', flex: 1, minWidth: 0 }}>
                          <div className="product-name" title={item.name}>{item.name}</div>
                        </Link>
                        <div className="product-rating">
                          <StarRating />
                          <span className="rating-score">4.2</span>
                        </div>
                      </div>

                      <div className="product-bottom-row">
                        <div className="price-wrap">
                          <p className="product-unit">{unit}</p>
                          <p className="product-price">₹{item.price}</p>
                        </div>
                        <button
                          className="add-cart-btn"
                          onClick={() => handleAddToCart(item)}
                        >
                          <HiOutlineShoppingCart />
                          <span>Add to Cart</span>
                        </button>
                      </div>
                    </div>
                  </WishlistItemCard>
                );
              })}
            </WishlistGrid>
          </>
        ) : (
          <EmptyWishlist>
            <div className="empty-icon">
              <HiOutlineHeart />
            </div>
            <h2>Your wishlist is empty</h2>
            <p>Looks like you haven't added any items to your wishlist yet.</p>
            <Link href="/products" className="shop-link">
              Start Shopping <HiArrowRight />
            </Link>
          </EmptyWishlist>
        )}
      </WishlistContainer>

      {showClearModal && (
        <ModalOverlay onClick={() => setShowClearModal(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <div className="modal-icon-wrapper">
              <HiOutlineTrash />
            </div>
            <h2>Clear Wishlist</h2>
            <p>
              Are you sure you want to clear your entire wishlist? This action
              cannot be undone.
            </p>
            <div className="modal-actions">
              <button
                className="cancel-btn"
                onClick={() => setShowClearModal(false)}
              >
                Cancel
              </button>
              <button className="confirm-btn" onClick={handleClearWishlist}>
                Confirm
              </button>
            </div>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default WishlistPage;
