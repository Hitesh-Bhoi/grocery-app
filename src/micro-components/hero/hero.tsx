"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type Category = "fruit" | "vegetable";
type Filter = "fruits" | "vegetables";

const allItems = [
  { name: "Alphonso Mango", tagline: "King of Fruits", price: "299", unit: "kg", image: "https://res.cloudinary.com/dqwzddm94/image/upload/v1778281837/mango_oc8m0r.png", pageBg: "#FFF0C2", accent: "#B45309", category: "fruit" as Category, origin: "Ratnagiri", badge: "GI Tagged" },
  { name: "Fresh Strawberry", tagline: "Sweet & Juicy", price: "149", unit: "box", image: "https://res.cloudinary.com/dqwzddm94/image/upload/v1778281951/ChatGPT_Image_May_9__2026__04_40_49_AM-removebg-preview_jxjinz.png", pageBg: "#FFE4EE", accent: "#BE185D", category: "fruit" as Category, origin: "Maharashtra", badge: "Seasonal" },
  { name: "Juicy Orange", tagline: "Vitamin C Boost", price: "89", unit: "kg", image: "https://res.cloudinary.com/dqwzddm94/image/upload/v1778281731/orange_xps4ui.png", pageBg: "#FFECD6", accent: "#C2410C", category: "fruit" as Category, origin: "Nagpur", badge: "Best Seller" },
  { name: "Pineapple", tagline: "Crisp & Sweet", price: "199", unit: "kg", image: "https://res.cloudinary.com/dqwzddm94/image/upload/v1778281741/pineapple_lhrh5s.png", pageBg: "#FFF9C2", accent: "#92400E", category: "fruit" as Category, origin: "Himachal", badge: "Premium" },
  { name: "Fresh Broccoli", tagline: "Power Veggie", price: "59", unit: "bunch", image: "https://res.cloudinary.com/dqwzddm94/image/upload/v1778283295/ChatGPT_Image_May_9__2026__04_46_50_AM-removebg-preview_m3e5rj.png", pageBg: "#DCFCE7", accent: "#15803D", category: "vegetable" as Category, origin: "Ooty", badge: "Superfood" },
  { name: "Red Bell Pepper", tagline: "Rich in Vitamin C", price: "79", unit: "kg", image: "https://res.cloudinary.com/dqwzddm94/image/upload/v1778283351/WhatsApp_Image_2026-05-09_at_4.57.52_AM-removebg-preview-removebg-preview_nypknj.png", pageBg: "#FFE4E4", accent: "#B91C1C", category: "vegetable" as Category, origin: "Karnataka", badge: "Antioxidant" },
  { name: "Farm Tomato", tagline: "Sun-Ripened Fresh", price: "49", unit: "kg", image: "https://res.cloudinary.com/dqwzddm94/image/upload/v1778283369/WhatsApp_Image_2026-05-09_at_4.57.54_AM-removebg-preview-removebg-preview_suhcxf.png", pageBg: "#FFE8E8", accent: "#C81E1E", category: "vegetable" as Category, origin: "Punjab", badge: "Farm Direct" },
];

const featureTags = ["No Pesticides", "Farm Direct", "Cold Chain", "Same Day"];
const filterOptions: { label: string; value: Filter }[] = [
  { label: "Fruits", value: "fruits" },
  { label: "Vegetables", value: "vegetables" },
];

export default function Hero() {
  const [filter, setFilter] = useState<Filter>("fruits");
  const [activeIndex, setActiveIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const filteredItems = useMemo(() => {
    return allItems.filter((i) =>
      filter === "vegetables" ? i.category === "vegetable" : i.category === "fruit",
    );
  }, [filter]);

  useEffect(() => setActiveIndex(0), [filter]);

  useEffect(() => {
    if (filteredItems.length <= 1) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % filteredItems.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [filteredItems]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const active = filteredItems[activeIndex] ?? filteredItems[0];

  return (
    <section
      className="relative min-h-svh overflow-hidden transition-colors duration-700"
      style={{ backgroundColor: active.pageBg }}
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -left-[10%] -top-[20%] h-[70%] w-[70%] rounded-full opacity-40 blur-[120px] animate-[mesh-move_18s_ease-in-out_infinite]"
          style={{ background: active.accent }}
        />
        <div
          className="absolute -right-[10%] top-[40%] h-[50%] w-[50%] rounded-full opacity-30 blur-[100px] animate-[mesh-move_18s_ease-in-out_infinite]"
          style={{ background: active.accent }}
        />
      </div>
      <p
        className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 text-[18vw] font-black opacity-[0.07] lg:block"
        style={{ color: active.accent }}
        aria-hidden
      >
        {active.name.split(" ").at(-1)!.toUpperCase()}
      </p>

      <div className="relative z-10 mx-auto grid min-h-svh max-w-7xl items-center gap-8 px-5 py-20 lg:grid-cols-[1.1fr_1fr_0.7fr]">
        <div key={activeIndex + filter} className="animate-[content-in_0.5s_ease]">
          <h1 className="text-[clamp(32px,5vw,56px)] font-black leading-tight text-slate-900">
            Nature&apos;s Best,{" "}
            <span style={{ color: active.accent }}>Delivered Fresh</span>
          </h1>
          <p className="mt-4 max-w-md text-slate-600">
            Handpicked organic produce delivered from our partner farms straight to your table — <span className="font-semibold">same-day, every day.</span>
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {featureTags.map((tag) => (
              <Badge key={tag} variant="outline" className="bg-white/70">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="mt-6 flex gap-6">
            {[
              { val: "10k+", label: "Happy Customers" },
              { val: "500+", label: "Products" },
              { val: "24h", label: "Fast Delivery" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-xl font-black" style={{ color: active.accent }}>{s.val}</p>
                <p className="text-xs text-slate-500">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild style={{ backgroundColor: active.accent }}>
              <Link href="/products">Shop Now</Link>
            </Button>
            <Button variant="outline">Watch Video</Button>
          </div>
          <div className="mt-5 flex gap-2">
            {filterOptions.map((opt) => (
              <Button
                key={opt.value}
                size="sm"
                variant={filter === opt.value ? "default" : "outline"}
                style={filter === opt.value ? { backgroundColor: active.accent } : undefined}
                onClick={() => setFilter(opt.value)}
              >
                {opt.label}
              </Button>
            ))}
          </div>
          <div className="mt-6 flex items-center gap-3">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((num) => (
                <img
                  key={num}
                  src={`https://i.pravatar.cc/100?img=${num + 10}`}
                  alt="user"
                  className="size-8 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <div>
              <p className="text-amber-500">★★★★★</p>
              <p className="text-xs text-slate-600">Trusted by <strong>10,000+</strong> families</p>
            </div>
          </div>
        </div>

        <div className="relative flex min-h-[360px] items-center justify-center">
          <div
            className="absolute size-64 rounded-full opacity-40 blur-3xl"
            style={{ background: active.accent }}
          />
          <div
            className="relative h-80 w-80"
            style={{ transform: `translate(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px)` }}
          >
            {filteredItems.map((item, idx) => (
              <div
                key={item.image}
                className={cn(
                  "absolute inset-0 transition-opacity duration-500",
                  idx === activeIndex ? "opacity-100" : "opacity-0",
                )}
              >
                <Image src={item.image} alt={item.name} fill className="object-contain" priority={idx === 0} />
              </div>
            ))}
          </div>
          <div className="absolute bottom-2 flex gap-2">
            {filteredItems.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={cn("h-2 rounded-full transition-all", idx === activeIndex ? "w-6" : "w-2 bg-black/20")}
                style={idx === activeIndex ? { backgroundColor: active.accent } : undefined}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
          <div className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-4 rounded-2xl bg-white/80 px-4 py-3 shadow-lg backdrop-blur">
            <div>
              <p className="text-xs font-semibold" style={{ color: active.accent }}>{active.tagline}</p>
              <p className="font-bold text-slate-900">{active.name}</p>
            </div>
            <div className="h-8 w-px bg-slate-200" />
            <div className="text-right">
              <p className="text-[10px] text-slate-400">Starting at</p>
              <p className="font-black" style={{ color: active.accent }}>
                ₹{active.price}<span className="text-xs font-medium text-slate-400">/{active.unit}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="hidden space-y-2 lg:block">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-500">In This Collection</p>
          {filteredItems.map((item, idx) => (
            <button
              key={item.image}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={cn(
                "flex w-full items-center justify-between rounded-xl border bg-white/60 px-3 py-3 text-left transition",
                idx === activeIndex && "border-transparent shadow-md",
              )}
              style={idx === activeIndex ? { backgroundColor: `${item.accent}18`, borderColor: item.accent } : undefined}
            >
              <div>
                <p className="text-sm font-bold">{item.name}</p>
                <p className="text-[11px] text-slate-500">{item.badge} · {item.origin}</p>
              </div>
              <p className="text-sm font-black" style={{ color: item.accent }}>₹{item.price}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
