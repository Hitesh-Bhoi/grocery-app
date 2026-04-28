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
    const cart = localStorage.getItem("cart");
    if (cart) dispatch(setCartItems(JSON.parse(cart)));

    // Hydrate Wishlist
    const wishlist = localStorage.getItem("wishlist");
    console.log("Hydrating Wishlist from LocalStorage:", wishlist);
    if (wishlist) {
      try {
        const parsed = JSON.parse(wishlist);
        dispatch(setWishlistItems(parsed));
        console.log("Successfully hydrated wishlist:", parsed);
      } catch (e) {
        console.error("Failed to parse wishlist from localStorage", e);
      }
    }

    // Hydrate Orders
    const orders = localStorage.getItem("orders");
    if (orders) dispatch(setOrders(JSON.parse(orders)));
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
