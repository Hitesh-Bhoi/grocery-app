"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { updateQuantity, removeFromCart, clearCart } from "@/redux/cartSlice";
import { RootState } from "@/redux/store";
import { HiOutlineTrash, HiOutlineShoppingCart, HiOutlineArrowLeft, HiOutlineShoppingBag, HiOutlineTruck, HiOutlineLockClosed, HiOutlineShieldCheck, HiOutlineCheckCircle } from "react-icons/hi2";
import { addOrder } from "@/redux/orderSlice";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const totalItems = cartItems.length;
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const [couponCode, setCouponCode] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [confirmModal, setConfirmModal] = useState({
    show: false, title: "", message: "", onConfirm: () => {},
  });

  const taxAmount = totalPrice * 0.05;
  const finalTotal = totalPrice + taxAmount;

  useEffect(() => {
    document.body.style.overflow = confirmModal.show ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [confirmModal.show]);

  const handleCheckout = () => {
    const orderData = {
      id: `#ORD-${Math.floor(Math.random() * 90000) + 10000}`,
      date: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
      total: finalTotal,
      status: "Processing",
      itemsCount: totalItems,
      items: cartItems,
    };
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      dispatch(addOrder(orderData));
      dispatch(clearCart());
    }, 1200);
  };

  const Header = ({ title, subtitle }: { title: string; subtitle?: string }) => (
    <div className="border-b bg-white px-5 py-6 pt-24">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <div className="flex items-center gap-2">
          <HiOutlineShoppingBag className="text-2xl text-primary" />
          <h1 className="text-2xl font-black">{title}</h1>
        </div>
        {subtitle && <p className="text-sm text-slate-500">{subtitle}</p>}
      </div>
    </div>
  );

  if (isSuccess) {
    return (
      <>
        <Header title="Order Confirmed" />
        <div className="mx-auto max-w-xl px-5 py-16 text-center">
          <HiOutlineCheckCircle className="mx-auto text-6xl text-primary" />
          <h2 className="mt-4 text-2xl font-black">Order Placed Successfully!</h2>
          <p className="mt-2 text-slate-500">Your order has been confirmed. You will pay via Cash on Delivery.</p>
          <div className="mt-6 flex justify-center gap-3">
            <Button asChild><Link href="/dashboard">Continue Shopping</Link></Button>
            <Button asChild variant="outline"><Link href="/orders">View Details</Link></Button>
          </div>
        </div>
      </>
    );
  }

  if (cartItems.length === 0) {
    return (
      <>
        <Header title="Shopping Cart" subtitle="Your cart is empty" />
        <div className="mx-auto max-w-xl px-5 py-16 text-center">
          <HiOutlineShoppingCart className="mx-auto text-6xl text-slate-300" />
          <h2 className="mt-4 text-2xl font-black">Your Cart is Empty</h2>
          <p className="mt-2 text-slate-500">Looks like you haven't added any fresh produce yet.</p>
          <Button asChild className="mt-6"><Link href="/dashboard"><HiOutlineArrowLeft /> Continue Shopping</Link></Button>
        </div>
      </>
    );
  }

  return (
    <>
      <Header title="Shopping Cart" subtitle={`You have ${totalItems} ${totalItems === 1 ? "item" : "items"} in your cart`} />
      <div className="mx-auto grid max-w-6xl gap-6 px-5 py-8 lg:grid-cols-[1.4fr_0.8fr]">
        <div className="space-y-3">
          <Button variant="outline" size="sm" className="text-red-500" onClick={() => setConfirmModal({
            show: true, title: "Clear Cart", message: "Are you sure you want to clear your entire cart?",
            onConfirm: () => { dispatch(clearCart()); setConfirmModal((p) => ({ ...p, show: false })); },
          })}>
            <HiOutlineTrash /> Clear All
          </Button>
          {cartItems.map((item) => (
            <Card key={item.id}>
              <CardContent className="flex flex-wrap items-center justify-between gap-4 pt-6">
                <div className="flex items-center gap-3">
                  <img src={item.image_url} alt={item.name} width={72} height={72} className="rounded-xl object-contain" />
                  <div>
                    <h3 className="font-bold">{item.name}</h3>
                    <p className="text-sm text-slate-500">₹{item.price.toFixed(2)} / {item.unit}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center rounded-lg border">
                    <Button variant="ghost" size="icon" onClick={() => dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }))}>−</Button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <Button variant="ghost" size="icon" onClick={() => dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }))}>+</Button>
                  </div>
                  <p className="w-20 text-right font-bold">₹{(item.price * item.quantity).toFixed(2)}</p>
                  <Button variant="ghost" size="icon" className="text-red-500" onClick={() => setConfirmModal({
                    show: true, title: "Remove Item", message: `Remove "${item.name}" from your cart?`,
                    onConfirm: () => { dispatch(removeFromCart(item.name)); setConfirmModal((p) => ({ ...p, show: false })); },
                  })}>
                    <HiOutlineTrash />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <Card className="h-fit">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><HiOutlineShieldCheck className="text-primary" /> Order Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between text-sm"><span>Subtotal</span><span>₹{totalPrice.toFixed(2)}</span></div>
            <div className="flex justify-between text-sm"><span>Delivery</span><span className="font-bold text-primary">FREE</span></div>
            <div className="flex justify-between text-sm"><span>GST (5%)</span><span>₹{taxAmount.toFixed(2)}</span></div>
            <p className="flex items-center gap-2 rounded-lg bg-green-50 p-2 text-xs text-primary"><HiOutlineTruck /> Free delivery on all orders!</p>
            <div className="flex gap-2">
              <Input placeholder="Coupon code" value={couponCode} onChange={(e) => setCouponCode(e.target.value)} />
              <Button variant="outline" onClick={() => couponCode.trim() && setCouponCode("")}>Apply</Button>
            </div>
            <div className="flex justify-between border-t pt-3 text-lg font-black"><span>Total</span><span>₹{finalTotal.toFixed(2)}</span></div>
            <label className="flex items-start gap-2 rounded-xl border p-3 text-sm">
              <input type="radio" name="payment" defaultChecked className="mt-1" />
              <span><strong>Cash on Delivery (COD)</strong><br /><span className="text-slate-500">Pay when your order arrives</span></span>
            </label>
            <Button className="w-full" onClick={handleCheckout} disabled={isProcessing}>
              {isProcessing ? "Processing..." : "Place Order"}
            </Button>
            <p className="flex items-center justify-center gap-1 text-xs text-slate-400"><HiOutlineLockClosed /> Secure checkout · SSL encrypted</p>
          </CardContent>
        </Card>
      </div>
      {confirmModal.show && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4" onClick={() => setConfirmModal((p) => ({ ...p, show: false }))}>
          <Card className="max-w-sm" onClick={(e) => e.stopPropagation()}>
            <CardContent className="pt-6 text-center">
              <HiOutlineTrash className="mx-auto text-3xl text-red-500" />
              <h2 className="mt-3 text-xl font-bold">{confirmModal.title}</h2>
              <p className="mt-2 text-sm text-slate-500">{confirmModal.message}</p>
              <div className="mt-5 flex justify-center gap-3">
                <Button variant="outline" onClick={() => setConfirmModal((p) => ({ ...p, show: false }))}>Cancel</Button>
                <Button variant="destructive" onClick={confirmModal.onConfirm}>Confirm</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
}
