"use client";

import { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import { store } from "./store";
import { setCartItems } from "./cartSlice";
import { setWishlistItems } from "./wishlistSlice";
import { setOrders } from "./orderSlice";

function HydrationProvider({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch();

  useEffect(() => {
    // Hydrate Cart
    try {
      const cart = localStorage.getItem("cart");
      if (cart) dispatch(setCartItems(JSON.parse(cart)));
    } catch (e) {
      console.error("Failed to parse cart from localStorage", e);
    }

    // Hydrate Wishlist
    try {
      const wishlist = localStorage.getItem("wishlist");
      if (wishlist) dispatch(setWishlistItems(JSON.parse(wishlist)));
    } catch (e) {
      console.error("Failed to parse wishlist from localStorage", e);
    }

    // Hydrate Orders
    try {
      const orders = localStorage.getItem("orders");
      if (orders) dispatch(setOrders(JSON.parse(orders)));
    } catch (e) {
      console.error("Failed to parse orders from localStorage", e);
    }
  }, [dispatch]);

  return <>{children}</>;
}

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <HydrationProvider>{children}</HydrationProvider>
    </Provider>
  );
}
