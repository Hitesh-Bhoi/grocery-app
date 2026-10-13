"use client";

import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { HiHeart, HiOutlineHeart, HiOutlineCheck } from "react-icons/hi2";
import { StarRating, ShoppingBag } from "../../../icons";
import { addToCart } from "@/redux/cartSlice";
import { toggleWishlist } from "@/redux/wishlistSlice";
import { RootState } from "@/redux/store";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useState } from "react";

export type ProductLike = {
  id?: string | number;
  name: string;
  slug?: string;
  price: number;
  image_url: string;
  category?: string | { name?: string };
  unit?: string;
  discount?: number;
  stock?: number;
};

function productHref(product: ProductLike) {
  return `/products/${(product.slug || product.name).toLowerCase().replace(/\s+/g, "-")}`;
}

function categoryName(product: ProductLike) {
  return typeof product.category === "object"
    ? product.category?.name
    : product.category;
}

export function ProductSkeleton() {
  return (
    <Card className="overflow-hidden border-black/5 shadow-none">
      <div className="h-40 animate-pulse bg-slate-100" />
      <div className="space-y-3 p-4">
        <div className="h-3 w-1/3 animate-pulse rounded bg-slate-100" />
        <div className="h-4 w-2/3 animate-pulse rounded bg-slate-100" />
        <div className="h-8 w-full animate-pulse rounded bg-slate-100" />
      </div>
    </Card>
  );
}

export function ProductCard({ product }: { product: ProductLike }) {
  const dispatch = useDispatch();
  const wishlistItems = useSelector(
    (state: RootState) => state.wishlist.wishlistItems,
  );
  const [added, setAdded] = useState(false);
  const liked = wishlistItems.some((item) => item.name === product.name);
  const outOfStock = product.stock === 0;

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (outOfStock) return;
    dispatch(addToCart({ product, quantity: 1 }));
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(
      toggleWishlist({
        id: product.name,
        name: product.name,
        price: product.price,
        image_url: product.image_url,
        category: categoryName(product),
        unit: product.unit,
      }),
    );
  };

  return (
    <Card className="group h-full overflow-hidden border-black/5 shadow-none transition hover:-translate-y-0.5 hover:shadow-md">
      <Link href={productHref(product)} className="block text-inherit no-underline">
        <div className="relative flex h-40 items-center justify-center bg-slate-50">
          {product.discount ? (
            <Badge variant="destructive" className="absolute left-2.5 top-2.5 z-10">
              {product.discount}% OFF
            </Badge>
          ) : null}
          <button
            type="button"
            aria-label="Add to wishlist"
            onClick={handleWishlist}
            className={cn(
              "absolute right-2.5 top-2.5 z-10 flex size-9 items-center justify-center rounded-full bg-white shadow-sm",
              liked ? "text-red-500" : "text-slate-500",
            )}
          >
            {liked ? <HiHeart /> : <HiOutlineHeart />}
          </button>
          <Image
            src={product.image_url}
            alt={product.name}
            width={120}
            height={120}
            className="object-contain"
          />
          {outOfStock ? (
            <Badge className="absolute bottom-2.5 left-2.5 z-10 bg-black/70">
              Out of Stock
            </Badge>
          ) : null}
        </div>
        <div className="space-y-3 p-3">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                {categoryName(product)}
              </p>
              <h3 className="truncate text-sm font-bold text-slate-900" title={product.name}>
                {product.name}
              </h3>
            </div>
            <div className="flex shrink-0 items-center gap-1 text-xs font-bold text-slate-500">
              <StarRating />
              4.2
            </div>
          </div>
          <div className="flex items-end justify-between gap-2">
            <div>
              <p className="text-[11px] text-slate-400">{product.unit}</p>
              <p className="text-base font-black text-slate-900">₹{product.price}</p>
            </div>
            <Button
              size="sm"
              disabled={outOfStock}
              onClick={handleAdd}
              className={cn(
                "h-8 rounded-lg px-2.5 text-xs",
                added && "bg-emerald-600",
              )}
            >
              {added ? (
                <>
                  <HiOutlineCheck /> Added
                </>
              ) : (
                <>
                  <ShoppingBag /> Add
                </>
              )}
            </Button>
          </div>
        </div>
      </Link>
    </Card>
  );
}
