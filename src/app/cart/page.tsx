"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { updateQuantity, removeFromCart, clearCart } from "@/redux/cartSlice";
import { RootState } from "@/redux/store";
import { HiOutlineTrash } from "react-icons/hi2";
import { HiOutlineShoppingCart, HiOutlineArrowLeft, HiOutlineShoppingBag } from "react-icons/hi2";
import { HiOutlineTruck, HiOutlineLockClosed, HiOutlineShieldCheck, HiOutlineCheckCircle } from "react-icons/hi2";
import {
  CartHeader,
  CartContainer,
  CartTitle,
  CartGrid,
  CartItemsList,
  CartItemCard,
  ItemInfo,
  ItemActions,
  CartSummary,
  CouponSection,
  EmptyCart,
  PaymentMethod,
  SuccessContainer,
  ClearAllButton,
  ModalOverlay,
  ModalContent,
} from "./cart.styled";
import { addOrder } from "@/redux/orderSlice";

export default function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const totalItems = cartItems.length;
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const [couponCode, setCouponCode] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [confirmModal, setConfirmModal] = useState<{
    show: boolean;
    title: string;
    message: string;
    onConfirm: () => void;
  }>({
    show: false,
    title: "",
    message: "",
    onConfirm: () => {},
  });

  const TAX_RATE = 0.05; // 5% GST
  const taxAmount = totalPrice * TAX_RATE;
  const finalTotal = totalPrice + taxAmount;

  useEffect(() => {
    if (confirmModal.show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [confirmModal.show]);

  const handleCheckout = () => {
    const orderId = `#ORD-${Math.floor(Math.random() * 90000) + 10000}`;
    const date = new Date().toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });

    const orderData = {
      id: orderId,
      date: date,
      total: finalTotal,
      status: "Processing",
      itemsCount: totalItems,
      items: cartItems
    };
    
    setIsProcessing(true);
    // Simulate order processing delay
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      dispatch(addOrder(orderData));
      dispatch(clearCart());
    }, 1200);
  };

  const handleRemoveItem = (name: string) => {
    setConfirmModal({
      show: true,
      title: "Remove Item",
      message: `Are you sure you want to remove "${name}" from your cart?`,
      onConfirm: () => {
        dispatch(removeFromCart(name));
        setConfirmModal(prev => ({ ...prev, show: false }));
      }
    });
  };

  const handleClearCart = () => {
    setConfirmModal({
      show: true,
      title: "Clear Cart",
      message: "Are you sure you want to clear your entire cart? This action cannot be undone.",
      onConfirm: () => {
        dispatch(clearCart());
        setConfirmModal(prev => ({ ...prev, show: false }));
      }
    });
  };

  const handleApplyCoupon = () => {
    if (couponCode.trim()) {
      alert(`Coupon "${couponCode}" applied!`);
      setCouponCode("");
    }
  };

  if (isSuccess) {
    return (
      <>
        <CartHeader>
          <CartTitle>
            <div className="title-left">
              <HiOutlineShieldCheck className="cart-heading-icon" />
              <h1>Order Confirmed</h1>
            </div>
          </CartTitle>
        </CartHeader>
        <CartContainer>
          <SuccessContainer>
            <div className="success-icon-wrapper">
              <HiOutlineCheckCircle className="success-icon" />
            </div>
            <h2>Order Placed Successfully!</h2>
            <p>
              Your order has been confirmed. You will pay via Cash on Delivery when the order arrives. 
              Thank you for shopping with us!
            </p>
            <div className="action-buttons">
              <Link href="/dashboard">Continue Shopping</Link>
              <Link href="/orders" className="view-details-link">View Details</Link>
            </div>
          </SuccessContainer>
        </CartContainer>
      </>
    );
  }

  if (cartItems.length === 0) {
    return (
      <>
        <CartHeader>
          <CartTitle>
            <div className="title-left">
              <HiOutlineShoppingBag className="cart-heading-icon" />
              <h1>Shopping Cart</h1>
            </div>
            <div className="title-right">
              <p className="cart-subtitle">Your cart is empty</p>
            </div>
          </CartTitle>
        </CartHeader>
        <CartContainer>
          <EmptyCart>
            <div className="empty-icon">
              <HiOutlineShoppingCart />
            </div>
            <h2>Your Cart is Empty</h2>
            <p>Looks like you haven't added any fresh produce yet.</p>
            <Link href="/dashboard">
              <HiOutlineArrowLeft className="back-icon" />
              Continue Shopping
            </Link>
          </EmptyCart>
        </CartContainer>
      </>
    );
  }

  return (
    <>
      <CartHeader>
        <CartTitle>
          <div className="title-left">
            <HiOutlineShoppingBag className="cart-heading-icon" />
            <h1>Shopping Cart</h1>
          </div>
          <div className="title-right">
            <p className="cart-subtitle">
              You have <span>{totalItems} {totalItems === 1 ? "item" : "items"}</span> in your cart
            </p>
          </div>
        </CartTitle>
      </CartHeader>

      <CartContainer>
        <CartGrid>
          <CartItemsList>
            <ClearAllButton onClick={handleClearCart} title="Remove all items from cart">
              <HiOutlineTrash className="icon" />
              Clear All
            </ClearAllButton>
            {cartItems.map((item, index) => (
              <CartItemCard key={item.id} style={{ animationDelay: `${index * 0.08}s` }}>
                <ItemInfo>
                  <div className="item-image-wrapper">
                    <img
                      src={item.image_url}
                      alt={item.name}
                      width={80}
                      height={80}
                    />
                  </div>
                  <div className="item-details">
                    <h3>{item.name}</h3>
                    <p className="item-unit-price">₹{item.price.toFixed(2)} / {item.unit}</p>
                  </div>
                </ItemInfo>

                <ItemActions>
                  <div className="quantity-controls">
                    <button
                      onClick={() => dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }))}
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }))}
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                  <div className="price">₹{(item.price * item.quantity).toFixed(2)}</div>
                  <button
                    className="remove-btn"
                    onClick={() => handleRemoveItem(item.name)}
                    aria-label="Remove item"
                    title="Remove from cart"
                  >
                    <HiOutlineTrash />
                  </button>
                </ItemActions>
              </CartItemCard>
            ))}
          </CartItemsList>

          <CartSummary>
            <h2>
              <HiOutlineShieldCheck style={{ color: "var(--green)", fontSize: 22 }} />
              Order Summary
            </h2>

            <div className="summary-row">
              <span>Subtotal ({totalItems} {totalItems === 1 ? "item" : "items"})</span>
              <span>₹{totalPrice.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Delivery</span>
              <span style={{ color: "var(--green)", fontWeight: 700 }}>FREE</span>
            </div>
            <div className="summary-row tax">
              <span>GST (5%)</span>
              <span>₹{taxAmount.toFixed(2)}</span>
            </div>

            <div className="free-delivery-badge">
              <HiOutlineTruck className="delivery-icon" />
              Free delivery on all orders!
            </div>

            <CouponSection>
              <div className="coupon-input-wrapper">
                <input
                  type="text"
                  placeholder="Coupon code"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleApplyCoupon()}
                />
                <button onClick={handleApplyCoupon}>Apply</button>
              </div>
            </CouponSection>

            <div className="summary-row total">
              <span>Total</span>
              <span>₹{finalTotal.toFixed(2)}</span>
            </div>

            <PaymentMethod>
              <h3>Payment Method</h3>
              <label className="method-option">
                <input type="radio" name="payment" value="cod" defaultChecked />
                <div className="method-details">
                  <span className="method-name">Cash on Delivery (COD)</span>
                  <span className="method-desc">Pay when your order arrives</span>
                </div>
              </label>
            </PaymentMethod>

            <button 
              className="checkout-btn" 
              onClick={handleCheckout}
              disabled={isProcessing}
            >
              {isProcessing ? "Processing..." : "Place Order"}
            </button>

            <div className="secure-badge">
              <HiOutlineLockClosed className="lock-icon" />
              Secure checkout · SSL encrypted
            </div>
          </CartSummary>
        </CartGrid>
      </CartContainer>

      {confirmModal.show && (
        <ModalOverlay onClick={() => setConfirmModal(prev => ({ ...prev, show: false }))}>
          <ModalContent onClick={e => e.stopPropagation()}>
            <div className="modal-icon-wrapper">
              <HiOutlineTrash />
            </div>
            <h2>{confirmModal.title}</h2>
            <p>{confirmModal.message}</p>
            <div className="modal-actions">
              <button 
                className="cancel-btn" 
                onClick={() => setConfirmModal(prev => ({ ...prev, show: false }))}
              >
                Cancel
              </button>
              <button 
                className="confirm-btn" 
                onClick={confirmModal.onConfirm}
              >
                Confirm
              </button>
            </div>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
}
