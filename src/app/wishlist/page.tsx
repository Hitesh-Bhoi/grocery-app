"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineHeart, HiOutlineShoppingCart, HiOutlineTrash, HiArrowRight } from "react-icons/hi2";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { removeFromWishlist, clearWishlist } from "@/redux/wishlistSlice";
import { addToCart } from "@/redux/cartSlice";
import { StarRating } from "../../../icons";
import data from "../../../public/fake-json/data.json";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const WishlistPage = () => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state: RootState) => state.wishlist.wishlistItems);
  const [showClearModal, setShowClearModal] = React.useState(false);

  React.useEffect(() => {
    document.body.style.overflow = showClearModal ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [showClearModal]);

  const handleAddToCart = (item: any) => {
    dispatch(addToCart({
      product: { name: item.name, price: item.price, image_url: item.image_url, unit: item.unit || "per pack", category: item.category || "Vegetables" },
    }));
    dispatch(removeFromWishlist(item.name));
  };

  return (
    <>
      <div className="w-full border-b bg-white px-4 py-6 pt-24 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
          <div className="flex items-center gap-2">
            <HiOutlineHeart className="text-2xl text-primary" />
            <h1 className="text-2xl font-black">My Wishlist</h1>
          </div>
          <p className="text-sm text-slate-500">You have <span className="font-bold">{wishlistItems.length} items</span> in wishlist</p>
        </div>
      </div>
      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {wishlistItems.length > 0 ? (
          <>
            <Button variant="outline" size="sm" className="mb-4 text-red-500" onClick={() => setShowClearModal(true)}>
              <HiOutlineTrash /> Clear All
            </Button>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {wishlistItems.map((item) => {
                const allProducts = [...data.vegetables, ...data.fruits];
                const originalProduct = allProducts.find((p) => p.name === item.name);
                const category = item.category || originalProduct?.category || "Vegetables";
                const unit = item.unit || originalProduct?.unit || "per pack";
                return (
                  <Card key={item.name} className="overflow-hidden">
                    <CardContent className="p-3">
                      <div className="relative mb-3 flex justify-center">
                        <Button
                          size="icon"
                          variant="ghost"
                          aria-label={`Remove ${item.name} from wishlist`}
                          className="absolute right-0 top-0 text-red-500"
                          onClick={() => dispatch(removeFromWishlist(item.name))}
                        >
                          <HiOutlineTrash />
                        </Button>
                        <Link href={`/products/${item.name.toLowerCase().replace(/\s+/g, "-")}`}>
                          <Image src={item.image_url} alt={item.name} width={110} height={110} className="object-contain" />
                        </Link>
                      </div>
                      <p className="text-[11px] uppercase text-slate-400">{category}</p>
                      <div className="flex items-start justify-between gap-2">
                        <Link href={`/products/${item.name.toLowerCase().replace(/\s+/g, "-")}`} className="font-bold text-slate-900 no-underline">{item.name}</Link>
                        <span className="flex items-center gap-1 text-xs font-bold text-slate-500"><StarRating /> 4.2</span>
                      </div>
                      <div className="mt-3 flex items-end justify-between">
                        <div>
                          <p className="text-[11px] text-slate-400">{unit}</p>
                          <p className="font-black">₹{item.price}</p>
                        </div>
                        <Button size="sm" onClick={() => handleAddToCart(item)}>
                          <HiOutlineShoppingCart /> Add
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </>
        ) : (
          <div className="py-16 text-center">
            <HiOutlineHeart className="mx-auto text-6xl text-slate-300" />
            <h2 className="mt-4 text-2xl font-black">Your wishlist is empty</h2>
            <p className="mt-2 text-slate-500">Looks like you haven't added any items yet.</p>
            <Button asChild className="mt-5"><Link href="/products">Start Shopping <HiArrowRight /></Link></Button>
          </div>
        )}
      </div>
      {showClearModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4" onClick={() => setShowClearModal(false)}>
          <Card className="max-w-sm" onClick={(e) => e.stopPropagation()}>
            <CardContent className="pt-6 text-center">
              <HiOutlineTrash className="mx-auto text-3xl text-red-500" />
              <h2 className="mt-3 text-xl font-bold">Clear Wishlist</h2>
              <p className="mt-2 text-sm text-slate-500">Are you sure you want to clear your entire wishlist?</p>
              <div className="mt-5 flex justify-center gap-3">
                <Button variant="outline" onClick={() => setShowClearModal(false)}>Cancel</Button>
                <Button variant="destructive" onClick={() => { dispatch(clearWishlist()); setShowClearModal(false); }}>Confirm</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default WishlistPage;
