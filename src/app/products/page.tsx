"use client";
import React, { useState, useMemo, useEffect } from "react";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { productAPI } from "@/libs/api";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ProductCard, ProductSkeleton } from "@/micro-components/featured-products/ProductCard";
import mockData from "../../../public/fake-json/data.json";

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [allProducts, setAllProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        // Use local mock products so ProductDetailPage can always resolve the item
        setAllProducts([...mockData.vegetables, ...mockData.fruits]);
      } catch (err) {
        setAllProducts([...mockData.vegetables, ...mockData.fruits]);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const matchesSearch = (product?.name || "").toLowerCase().includes(searchTerm.toLowerCase());
      const cat = typeof product?.category === "object" ? product?.category?.name : product?.category;
      const categoryName = (cat || "").toLowerCase();
      const matchesCategory = activeCategory === "all" || categoryName.includes(activeCategory.toLowerCase());
      return matchesSearch && matchesCategory;
    });
  }, [allProducts, searchTerm, activeCategory]);

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative w-full max-w-md">
          <HiOutlineMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <Input
            className="pl-10"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          {[
            ["all", "All"],
            ["fruit", "Fruits"],
            ["vegetable", "Vegetables"],
          ].map(([value, label]) => (
            <Button
              key={value}
              variant={activeCategory === value ? "default" : "outline"}
              onClick={() => setActiveCategory(value)}
            >
              {label}
            </Button>
          ))}
        </div>
      </div>

      {error ? (
        <p className="py-10 text-center text-red-500">{error}</p>
      ) : loading ? (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, idx) => (
            <ProductSkeleton key={idx} />
          ))}
        </div>
      ) : filteredProducts.length === 0 ? (
        <div className="py-16 text-center">
          <div className="text-4xl">🔍</div>
          <h3 className="mt-3 text-xl font-bold">No products found</h3>
          <p className="mt-2 text-slate-500">
            We couldn't find anything matching "<strong>{searchTerm}</strong>".
          </p>
          <Button className="mt-5" onClick={() => { setSearchTerm(""); setActiveCategory("all"); }}>
            Clear all filters
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.map((e: any, j: number) => (
            <ProductCard key={e.id || j} product={e} />
          ))}
        </div>
      )}
    </div>
  );
}
