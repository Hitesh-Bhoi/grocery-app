"use client";
import { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import { StarRating, ShoppingBag } from "../../../icons";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/redux/cartSlice";
import { HiOutlineCheck, HiMagnifyingGlass } from "react-icons/hi2";
import Link from "next/link";
import { RootState } from "@/redux/store";
import { toggleWishlist } from "@/redux/wishlistSlice";
import { productAPI } from "@/libs/api";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductCard, ProductSkeleton } from "./ProductCard";

const FeaturedProducts = () => {
  const [activeCategory, setActiveCategory] = useState<"fruits" | "vegetables">("fruits");
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await productAPI.getAllProducts();
        if (res && res.data) {
          setProducts(res.data);
        }
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to load products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((p: any) => {
      const cat = typeof p?.category === 'object' ? p?.category?.name : p?.category;
      const categoryName = (cat || "").toLowerCase();
      const isCategoryMatch = categoryName.includes(activeCategory.toLowerCase());
      const isSearchMatch = (p?.name || "").toLowerCase().includes(searchTerm.toLowerCase());
      return isCategoryMatch && isSearchMatch;
    });
  }, [products, activeCategory, searchTerm]);

  return (
    <div className="w-full bg-white py-12 pb-4 box-border">
      <div className="w-full mx-auto mb-10">
        
        {/* Section heading */}
        <div className="flex justify-between items-end gap-3 px-4 pt-7 pb-4 max-w-full">
          <div className="flex flex-col gap-1">
            <div className="text-[11px] font-semibold text-[#199b19] uppercase tracking-[0.18em]">Shop by category</div>
            <div className="text-[clamp(20px,2.2vw,26px)] font-black text-slate-900 leading-tight tracking-tight">
              {activeCategory === "fruits" ? "Season's Best Fruits" : "Season's Best Vegetables"}
            </div>
          </div>
          <Button asChild variant="link" className="text-[#199b19] font-semibold text-base hover:text-[#17a017] hover:no-underline group px-0 h-auto">
            <Link href="/products">
              View all products
              <span className="text-[26px] leading-none transition-transform group-hover:translate-x-1 ml-1">&rarr;</span>
            </Link>
          </Button>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex justify-end items-center px-4 pb-6 gap-3.5 flex-wrap max-md:flex-col max-md:items-stretch">
          <Tabs value={activeCategory} onValueChange={(val) => setActiveCategory(val as "fruits" | "vegetables")} className="bg-slate-100 p-2 rounded-xl">
            <TabsList className="bg-transparent gap-2 h-auto p-0 border-none w-full">
              <TabsTrigger value="fruits" className="px-5 py-2 rounded-[10px] text-sm font-bold text-slate-500 data-[state=active]:bg-white data-[state=active]:text-[#199b19] data-[state=active]:shadow-sm transition-all hover:bg-white/50 w-full sm:w-auto">
                Fruits
              </TabsTrigger>
              <TabsTrigger value="vegetables" className="px-5 py-2 rounded-[10px] text-sm font-bold text-slate-500 data-[state=active]:bg-white data-[state=active]:text-[#199b19] data-[state=active]:shadow-sm transition-all hover:bg-white/50 w-full sm:w-auto">
                Vegetables
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="relative flex-1 w-full max-w-full md:max-w-[400px]">
            <HiMagnifyingGlass className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />
            <Input 
              type="text" 
              placeholder={`Search ${activeCategory}...`} 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-11 pr-4 py-3 h-auto w-full rounded-xl border-[1.5px] border-black/5 bg-slate-50 text-[15px] text-slate-800 transition-all focus-visible:ring-0 focus-visible:border-[#199b19] focus-visible:bg-white focus-visible:shadow-[0_4px_12px_rgba(25,155,25,0.08)] placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* Product cards */}
        {error ? (
          <div className="p-5 text-red-500 w-full text-center">
            {error}
          </div>
        ) : (
          <div className="flex flex-nowrap overflow-x-auto overflow-y-hidden gap-3 md:gap-4 mx-4 my-4 pb-8 snap-x snap-mandatory hide-scrollbar lg:grid lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 lg:gap-5 lg:px-2 lg:py-2 lg:overflow-visible [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden lg:[&::-webkit-scrollbar]:block lg:[&::-webkit-scrollbar]:h-2 lg:[&::-webkit-scrollbar-track]:bg-slate-100 lg:[&::-webkit-scrollbar-track]:rounded-full lg:[&::-webkit-scrollbar-thumb]:bg-[#199b19] lg:[&::-webkit-scrollbar-thumb]:rounded-full">
            {loading ? (
              Array.from({ length: 6 }).map((_, idx) => (
                <div key={idx} className="flex-none w-60 md:w-70 lg:w-full lg:flex-auto shrink-0 snap-start">
                  <ProductSkeleton />
                </div>
              ))
            ) : filteredProducts.length > 0 ? (
              filteredProducts.map((e: any, j: number) => (
                <div key={j + 1} className="flex-none w-60 md:w-70 lg:w-full lg:flex-auto shrink-0 snap-start">
                  <ProductCard product={e} />
                </div>
              ))
            ) : (
              <div className="p-5 w-full text-center text-slate-500 lg:col-span-full">
                No products found.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedProducts;
