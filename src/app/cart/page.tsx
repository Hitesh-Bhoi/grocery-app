"use client";
import React from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { HiOutlineTrash } from "react-icons/hi2";
import {
  CartContainer,
  CartTitle,
  CartGrid,
  CartItemsList,
  CartItemCard,
  ItemInfo,
  ItemActions,
  CartSummary,
  EmptyCart,
} from "./cart.styled";

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, totalPrice } = useCart();

  const handleCheckout = () => {
    alert("Proceeding to checkout with " + cartItems.length + " items!");
  };

  if (cartItems.length === 0) {
    return (
      <CartContainer>
        <EmptyCart>
          <h2>Your Cart is Empty</h2>
          <p>You have not added any items to your cart yet.</p>
          <Link href="/">Back to Shop</Link>
        </EmptyCart>
      </CartContainer>
    );
  }

  return (
    <CartContainer>
      <CartTitle>Your Shopping Cart</CartTitle>
      
      <CartGrid>
        <CartItemsList>
          {cartItems.map((item) => (
            <CartItemCard key={item.id}>
              <ItemInfo>
                <img
                  src={item.image_url}
                  alt={item.name}
                  width={80}
                  height={80}
                />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>₹{item.price.toFixed(2)} / {item.unit}</p>
                </div>
              </ItemInfo>

              <ItemActions>
                <div className="quantity-controls">
                  <button onClick={() => updateQuantity(item.name, item.quantity - 1)}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.name, item.quantity + 1)}>
                    +
                  </button>
                </div>
                <div className="price">₹{(item.price * item.quantity).toFixed(2)}</div>
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.name)}
                  aria-label="Remove item"
                >
                  <HiOutlineTrash />
                </button>
              </ItemActions>
            </CartItemCard>
          ))}
        </CartItemsList>

        <CartSummary>
          <h2>Order Summary</h2>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>₹{totalPrice.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Delivery</span>
            <span>Free</span>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <span>₹{totalPrice.toFixed(2)}</span>
          </div>
          <button className="checkout-btn" onClick={handleCheckout}>
            Proceed to Checkout
          </button>
        </CartSummary>
      </CartGrid>
    </CartContainer>
  );
}
