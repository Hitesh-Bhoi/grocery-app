"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "https://res.cloudinary.com/dqwzddm94/image/upload/v1773249652/pexels-filirovska-8234152_ncgtdx.jpg",
    tag: "Limited Time Offer",
    title: "Farm Fresh Vegetables",
    description: "Stock up on crisp, local produce with bundle savings all week long.",
    button1: { label: "Shop Veggies", link: "/products" },
    button2: { label: "View Offers", link: "/products" },
  },
  {
    image: "/images/carousel-pexels-style-2.jpg",
    tag: "Seasonal Picks",
    title: "Organic Fruit Deals",
    description: "Juicy, sweet, and fresh. Save on today's seasonal fruit selection.",
    button1: { label: "Shop Fruits", link: "/products" },
    button2: { label: "Explore More", link: "/products" },
  },
  {
    image: "/images/carousel-pexels-flat-4.jpg",
    tag: "Up to 30% Off",
    title: "Daily Grocery Discounts",
    description: "Smart savings on essentials with rotating discounts every day.",
    button1: { label: "View Discounts", link: "/products" },
    button2: { label: "Browse All", link: "/products" },
  },
  {
    image: "https://res.cloudinary.com/dqwzddm94/image/upload/v1773249431/pexels-vanessa-loring-5966149_i5pbre.jpg",
    tag: "Fresh & Bright",
    title: "Colorful Market Specials",
    description: "Handpicked deals across fruits and veggies, refreshed daily.",
    button1: { label: "Shop Specials", link: "/products" },
    button2: { label: "See All Deals", link: "/products" },
  },
];

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prev = () => setActiveIndex((p) => (p === 0 ? slides.length - 1 : p - 1));
  const next = () => setActiveIndex((p) => (p === slides.length - 1 ? 0 : p + 1));

  return (
    <div className="relative w-full overflow-hidden bg-black">
      <div
        className="relative h-svh min-h-svh overflow-hidden"
        onTouchStart={(e) => {
          setTouchEnd(null);
          setTouchStart(e.targetTouches[0].clientX);
        }}
        onTouchMove={(e) => setTouchEnd(e.targetTouches[0].clientX)}
        onTouchEnd={() => {
          if (touchStart === null || touchEnd === null) return;
          const distance = touchStart - touchEnd;
          if (distance > 50) next();
          else if (distance < -50) prev();
        }}
      >
        {slides.map((item, index) => (
          <div
            key={item.title}
            className={cn(
              "absolute inset-0 bg-cover bg-center transition-all duration-700",
              index === activeIndex ? "z-10 scale-100 opacity-100" : "z-0 scale-105 opacity-0",
            )}
            style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${item.image})` }}
          >
            <div className="absolute left-[8%] top-1/2 max-w-xl -translate-y-1/2 text-white max-md:left-1/2 max-md:w-[90%] max-md:-translate-x-1/2 max-md:text-center">
              <Badge className="mb-3 bg-green-500/30 text-green-100">{item.tag}</Badge>
              <h2 className="text-[clamp(28px,5vw,48px)] font-black leading-tight">{item.title}</h2>
              <p className="mt-3 text-lg text-white/90">{item.description}</p>
              <div className="mt-5 flex flex-wrap gap-3 max-md:justify-center">
                <Button asChild><Link href={item.button1.link}>{item.button1.label}</Link></Button>
                <Button asChild variant="outline" className="border-white/50 bg-white/10 text-white hover:bg-white/20">
                  <Link href={item.button2.link}>{item.button2.label}</Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
        <Button variant="ghost" size="icon" className="absolute left-4 top-1/2 z-20 hidden size-12 -translate-y-1/2 rounded-full bg-white/20 text-white hover:bg-white/40 md:flex" onClick={prev} aria-label="Previous slide">
          <ChevronLeft />
        </Button>
        <Button variant="ghost" size="icon" className="absolute right-4 top-1/2 z-20 hidden size-12 -translate-y-1/2 rounded-full bg-white/20 text-white hover:bg-white/40 md:flex" onClick={next} aria-label="Next slide">
          <ChevronRight />
        </Button>
      </div>
      <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-current={activeIndex === index}
            onClick={() => setActiveIndex(index)}
            className={cn("h-2 rounded-full transition-all", activeIndex === index ? "w-7 bg-primary" : "w-2 bg-white/50")}
          />
        ))}
      </div>
    </div>
  );
}
