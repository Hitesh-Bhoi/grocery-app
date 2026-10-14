"use client";
import { useEffect, useState, useMemo } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import Link from "next/link";
import { productAPI } from "@/libs/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductCard, ProductSkeleton } from "./ProductCard";
import mockData from "../../../public/fake-json/data.json";

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
        if (res && res.data && res.data.length > 0) {
          setProducts(res.data);
        } else {
          setProducts([...mockData.vegetables, ...mockData.fruits]);
        }
      } catch (err) {
        // Fallback to local mock data gracefully when backend is offline
        setProducts([...mockData.vegetables, ...mockData.fruits]);
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
      const isCategoryMatch = activeCategory === "fruits" 
        ? categoryName.includes("fruit") 
        : categoryName.includes("veg");
      const isSearchMatch = (p?.name || "").toLowerCase().includes(searchTerm.toLowerCase());
      return isCategoryMatch && isSearchMatch;
    });
  }, [products, activeCategory, searchTerm]);

  return (
    <section className="w-full bg-white py-10 box-border">
      <div className="w-[calc(100%-40px)] mx-auto">
        
        {/* Section heading */}
        <div className="flex justify-between items-end gap-3 pb-6 max-w-full">
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
        <div className="flex justify-end items-center pb-6 gap-3.5 flex-wrap max-md:flex-col max-md:items-stretch">
          <Tabs value={activeCategory} onValueChange={(val) => setActiveCategory(val as "fruits" | "vegetables")} className="w-auto bg-slate-100 p-1.5 rounded-xl">
            <TabsList className="bg-transparent gap-2 h-auto p-0 border-none w-auto">
              <TabsTrigger value="fruits" className="px-5 py-2 rounded-[10px] text-sm font-bold text-slate-500 data-[state=active]:bg-white data-[state=active]:text-[#199b19] data-[state=active]:shadow-sm transition-all hover:bg-white/50 w-full sm:w-auto">
                Fruits
              </TabsTrigger>
              <TabsTrigger value="vegetables" className="px-5 py-2 rounded-[10px] text-sm font-bold text-slate-500 data-[state=active]:bg-white data-[state=active]:text-[#199b19] data-[state=active]:shadow-sm transition-all hover:bg-white/50 w-full sm:w-auto">
                Vegetables
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="relative w-full max-w-full md:w-80">
            <HiMagnifyingGlass className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />
            <Input 
              type="text" 
              placeholder={`Search ${activeCategory}...`} 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-11 pr-4 py-2.5 h-auto w-full rounded-xl border-[1.5px] border-black/5 bg-slate-50 text-[14px] text-slate-800 transition-all focus-visible:ring-0 focus-visible:border-[#199b19] focus-visible:bg-white focus-visible:shadow-[0_4px_12px_rgba(25,155,25,0.08)] placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* Product cards */}
        {error ? (
          <div className="p-5 text-red-500 w-full text-center">
            {error}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 pb-6">
            {loading ? (
              Array.from({ length: 6 }).map((_, idx) => (
                <div key={idx} className="w-full">
                  <ProductSkeleton />
                </div>
              ))
            ) : filteredProducts.length > 0 ? (
              filteredProducts.map((e: any, j: number) => (
                <div key={j + 1} className="w-full">
                  <ProductCard product={e} />
                </div>
              ))
            ) : (
              <div className="p-5 w-full text-center text-slate-500 col-span-full">
                No products found.
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;
