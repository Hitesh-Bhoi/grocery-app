"use client";
import React, { useState, useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/redux/cartSlice";
import { toggleWishlist } from "@/redux/wishlistSlice";
import { RootState } from "@/redux/store";
import data from "../../../../public/fake-json/data.json";
import { StarRating, ShoppingBag } from "../../../../icons";
import {
  HiArrowLeft, HiOutlineTruck, HiOutlineShieldCheck, HiOutlineSparkles,
  HiOutlineCheck, HiPlus, HiMinus, HiOutlineHeart, HiHeart,
} from "react-icons/hi2";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductCard } from "@/micro-components/featured-products/ProductCard";

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const slug = params.slug as string;
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const wishlistItems = useSelector((state: RootState) => state.wishlist.wishlistItems);

  const product = useMemo(() => {
    const allProducts = [...data.vegetables, ...data.fruits];
    return allProducts.find((p) => p.name.toLowerCase().replace(/\s+/g, "-") === slug);
  }, [slug]);

  const isLiked = wishlistItems.some((item) => item.name === product?.name);
  const relatedProducts = useMemo(() => {
    if (!product) return [];
    const categoryProducts = product.category === "vegetable" ? data.vegetables : data.fruits;
    return categoryProducts.filter((p) => p.name !== product.name).slice(0, 4);
  }, [product]);

  if (!product) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-24 text-center">
        <Button variant="ghost" onClick={() => router.back()}><HiArrowLeft /> Back to products</Button>
        <h1 className="mt-10 text-2xl font-bold">Product not found</h1>
        <Button asChild className="mt-4"><Link href="/products">Browse all products</Link></Button>
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch(addToCart({ product, quantity }));
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleToggleWishlist = (p: any) => {
    dispatch(toggleWishlist({
      id: p.name, name: p.name, price: p.price, image_url: p.image_url, category: p.category, unit: p.unit,
    }));
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-24">
      <Button variant="ghost" className="mb-6" onClick={() => router.back()}>
        <HiArrowLeft /> Back to products
      </Button>
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <div className="relative overflow-hidden rounded-3xl bg-slate-50 p-8">
            {product.discount && (
              <Badge variant="destructive" className="absolute left-4 top-4">-{product.discount}% OFF</Badge>
            )}
            <Image src={product.image_url} alt={product.name} width={500} height={500} className="mx-auto object-contain" priority />
          </div>
        </div>
        <div>
          <div className="mb-3 flex items-center gap-2">
            <Badge variant="outline">{product.category}s</Badge>
            <Badge>In Stock</Badge>
          </div>
          <h1 className="text-3xl font-black text-slate-900">{product.name}</h1>
          <div className="mt-3 flex items-center gap-4">
            <span className="flex items-center gap-1 text-sm font-semibold text-slate-500">
              <StarRating /> 4.8 • 120 reviews
            </span>
            <p className="text-2xl font-black">₹{product.price} <span className="text-sm font-medium text-slate-400">/ {product.unit}</span></p>
          </div>
          <p className="mt-4 text-slate-600">
            Experience the peak of freshness with our premium {product.name.toLowerCase()}. Sourced directly from local sustainable farms.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <div className="flex items-center rounded-xl border">
              <Button variant="ghost" size="icon" onClick={() => setQuantity((p) => Math.max(1, p - 1))}><HiMinus /></Button>
              <span className="w-8 text-center font-bold">{quantity}</span>
              <Button variant="ghost" size="icon" onClick={() => setQuantity((p) => p + 1)}><HiPlus /></Button>
            </div>
            <Button className="flex-1" onClick={handleAddToCart} disabled={isAdded}>
              {isAdded ? <><HiOutlineCheck /> Added to Cart</> : <><ShoppingBag /> Add to Cart • ₹{product.price * quantity}</>}
            </Button>
            <Button variant={isLiked ? "destructive" : "outline"} size="icon" onClick={() => handleToggleWishlist(product)}>
              {isLiked ? <HiHeart /> : <HiOutlineHeart />}
            </Button>
          </div>
          <p className="mt-3 flex items-center gap-2 text-sm text-slate-500">
            <HiOutlineShieldCheck className="text-emerald-500" /> Secure Checkout • Satisfaction Guaranteed
          </p>
          <div className="mt-6 grid grid-cols-3 gap-3">
            {[
              [HiOutlineSparkles, "100% Fresh"],
              [HiOutlineTruck, "Fast Delivery"],
              [HiOutlineShieldCheck, "Quality Assured"],
            ].map(([Icon, label]) => (
              <div key={String(label)} className="flex flex-col items-center gap-1 rounded-xl bg-slate-50 p-3 text-center text-xs font-semibold">
                <Icon className="text-lg text-primary" />
                {label as string}
              </div>
            ))}
          </div>
        </div>
      </div>

      <Tabs defaultValue="description" className="mt-12">
        <TabsList>
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="details">Additional Info</TabsTrigger>
          <TabsTrigger value="reviews">Reviews (120)</TabsTrigger>
        </TabsList>
        <TabsContent value="description" className="max-w-3xl text-slate-600">
          <h3 className="mb-2 font-bold text-slate-900">Product Description</h3>
          <p>Our premium {product.name.toLowerCase()} is carefully selected for its superior quality and freshness.</p>
        </TabsContent>
        <TabsContent value="details" className="text-slate-600">
          <ul className="list-disc space-y-1 pl-5">
            <li><strong>Origin:</strong> Locally sourced from sustainable farms</li>
            <li><strong>Storage:</strong> Keep in a cool, dry place or refrigerate</li>
            <li><strong>Shelf Life:</strong> 5-7 days from date of delivery</li>
            <li><strong>Weight:</strong> Sold by the {product.unit}</li>
          </ul>
        </TabsContent>
        <TabsContent value="reviews" className="space-y-4">
          <div>
            <p className="font-bold">Rahul Sharma <span className="text-xs font-normal text-slate-400">2 days ago</span></p>
            <p className="text-amber-400">★★★★★</p>
            <p className="text-sm text-slate-600">Absolutely fresh! Highly recommended.</p>
          </div>
        </TabsContent>
      </Tabs>

      {relatedProducts.length > 0 && (
        <div className="mt-12">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-2xl font-black">You might also like</h2>
            <Button asChild variant="link"><Link href="/products">View All</Link></Button>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {relatedProducts.map((p: any) => (
              <ProductCard key={p.name} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
