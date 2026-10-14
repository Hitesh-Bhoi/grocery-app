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

const Header = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="w-full border-b bg-white px-4 py-6 pt-24 sm:px-6 lg:px-8">
    <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
      <div className="flex items-center gap-2">
        <HiOutlineShoppingBag className="text-2xl text-primary" />
        <h1 className="text-2xl font-black">{title}</h1>
      </div>
      {subtitle && <p className="text-sm text-slate-500">{subtitle}</p>}
    </div>
  </div>
);

export default function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const totalItems = cartItems.length;
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<{ code: string; discountPercent: number } | null>(null);
  const [couponMessage, setCouponMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [confirmModal, setConfirmModal] = useState({
    show: false, title: "", message: "", onConfirm: () => {},
  });

  const discountAmount = appliedCoupon ? (totalPrice * appliedCoupon.discountPercent) / 100 : 0;
  const taxableTotal = Math.max(0, totalPrice - discountAmount);
  const taxAmount = taxableTotal * 0.05;
  const finalTotal = taxableTotal + taxAmount;

  const handleApplyCoupon = () => {
    const code = couponCode.trim().toUpperCase();
    if (!code) return;
    if (code === "FOODIE50") {
      setAppliedCoupon({ code: "FOODIE50", discountPercent: 50 });
      setCouponMessage({ type: "success", text: "50% discount applied!" });
    } else if (code === "SAVE20") {
      setAppliedCoupon({ code: "SAVE20", discountPercent: 20 });
      setCouponMessage({ type: "success", text: "20% discount applied!" });
    } else {
      setCouponMessage({ type: "error", text: "Invalid code. Try FOODIE50" });
    }
  };

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
      <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[1.4fr_0.8fr] lg:px-8">
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
            {appliedCoupon && (
              <div className="flex justify-between text-sm font-semibold text-emerald-600">
                <span>Coupon Discount ({appliedCoupon.code})</span>
                <span>-₹{discountAmount.toFixed(2)}</span>
              </div>
            )}
            <div className="flex justify-between text-sm"><span>Delivery</span><span className="font-bold text-primary">FREE</span></div>
            <div className="flex justify-between text-sm"><span>GST (5%)</span><span>₹{taxAmount.toFixed(2)}</span></div>
            <p className="flex items-center gap-2 rounded-lg bg-green-50 p-2 text-xs text-primary"><HiOutlineTruck /> Free delivery on all orders!</p>
            <div className="space-y-1">
              <div className="flex gap-2">
                <Input
                  placeholder="Coupon code (e.g. FOODIE50)"
                  value={couponCode}
                  onChange={(e) => {
                    setCouponCode(e.target.value);
                    setCouponMessage(null);
                  }}
                />
                <Button variant="outline" type="button" onClick={handleApplyCoupon}>Apply</Button>
              </div>
              {couponMessage && (
                <p className={`text-xs ${couponMessage.type === "success" ? "text-emerald-600 font-semibold" : "text-red-500"}`}>
                  {couponMessage.text}
                </p>
              )}
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
