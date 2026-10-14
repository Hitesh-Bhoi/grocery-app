"use client";
import React, { useState } from "react";
import Link from "next/link";
import { HiOutlineXMark, HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const OrdersPage = () => {
  const orders = useSelector((state: RootState) => state.orders.orders);
  const [selectedOrder, setSelectedOrder] = useState<any>(null);

  React.useEffect(() => {
    if (selectedOrder) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedOrder]);

  return (
    <>
      <div className="w-full border-b bg-white px-4 py-6 pt-24 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
          <div className="flex items-center gap-2">
            <HiOutlineClipboardDocumentList className="text-2xl text-primary" />
            <h1 className="text-2xl font-black">Order History</h1>
          </div>
          <p className="text-sm text-slate-500">
            Total <span className="font-bold text-primary">{orders.length} orders</span> placed
          </p>
        </div>
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {orders.length > 0 ? (
          <div className="space-y-4">
            {orders.map((order) => (
              <Card
                key={order.id}
                className="transition-all hover:border-primary/50 hover:shadow-md"
              >
                <CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="space-y-1">
                    <div className="text-sm font-semibold text-slate-600">
                      Order ID: <span className="font-bold text-slate-900">{order.id}</span>
                    </div>
                    <div className="text-xs text-slate-500">
                      Placed on {order.date} • {order.itemsCount} Items
                    </div>
                    <div className="text-lg font-black text-slate-900">
                      ₹{order.total.toFixed(2)}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge
                      variant="outline"
                      className={cn(
                        "font-semibold",
                        order.status === "Delivered"
                          ? "border-green-500/30 bg-green-50 text-green-700"
                          : order.status === "Processing"
                          ? "border-amber-500/30 bg-amber-50 text-amber-700"
                          : "border-blue-500/30 bg-blue-50 text-blue-700"
                      )}
                    >
                      {order.status}
                    </Badge>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedOrder(order);
                      }}
                    >
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="py-16 text-center">
            <HiOutlineClipboardDocumentList className="mx-auto text-6xl text-slate-300" />
            <h2 className="mt-4 text-2xl font-black text-slate-900">No orders yet</h2>
            <p className="mt-2 text-slate-500">
              You haven&apos;t placed any orders yet. Start shopping to see your history!
            </p>
            <Button asChild className="mt-5">
              <Link href="/products">Browse Products</Link>
            </Button>
          </div>
        )}
      </div>

      {/* Order Details Modal */}
      {selectedOrder && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
          onClick={() => setSelectedOrder(null)}
        >
          <Card
            className="relative max-h-[90vh] w-full max-w-md overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <CardHeader className="flex flex-row items-center justify-between border-b pb-4">
              <CardTitle className="text-xl font-bold">Order Details</CardTitle>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Close order details"
                className="h-8 w-8 text-slate-500 hover:text-slate-900"
                onClick={() => setSelectedOrder(null)}
              >
                <HiOutlineXMark className="text-lg" />
              </Button>
            </CardHeader>

            <CardContent className="space-y-4 pt-4">
              <div className="grid grid-cols-3 gap-3 rounded-xl bg-slate-50 p-3 text-center">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Order ID</span>
                  <div className="mt-0.5 truncate text-xs font-bold text-slate-900">{selectedOrder.id}</div>
                </div>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Date</span>
                  <div className="mt-0.5 text-xs font-bold text-slate-900">{selectedOrder.date}</div>
                </div>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Status</span>
                  <div className="mt-0.5 text-xs font-bold text-primary">{selectedOrder.status}</div>
                </div>
              </div>

              <div>
                <h3 className="mb-2 text-sm font-bold text-slate-700">Items Summary</h3>
                <div className="max-h-60 divide-y divide-slate-100 overflow-y-auto pr-1">
                  {selectedOrder.items?.map((item: any, idx: number) => (
                    <div key={idx} className="flex items-center gap-3 py-2.5">
                      <img
                        src={item.image_url}
                        alt={item.name}
                        className="h-12 w-12 rounded-lg border bg-slate-50 object-contain p-1"
                      />
                      <div className="min-w-0 flex-1">
                        <h4 className="truncate text-sm font-semibold text-slate-800">{item.name}</h4>
                        <p className="text-xs text-slate-500">
                          {item.quantity} x ₹{item.price.toFixed(2)}
                        </p>
                      </div>
                      <div className="text-sm font-bold text-slate-900">
                        ₹{(item.quantity * item.price).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              <div className="flex items-center justify-between text-base font-black">
                <span className="text-slate-700">Total Amount</span>
                <span className="text-lg text-primary">₹{selectedOrder.total.toFixed(2)}</span>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default OrdersPage;
