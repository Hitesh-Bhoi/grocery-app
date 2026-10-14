"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const OFFER_DURATION = 24 * 60 * 60;
const STORAGE_KEY = "ecobazar_offer_end";

function getEndTime(): number {
  if (typeof window === "undefined") return Date.now() + OFFER_DURATION * 1000;
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    const end = parseInt(stored, 10);
    if (end > Date.now()) return end;
  }
  const end = Date.now() + OFFER_DURATION * 1000;
  localStorage.setItem(STORAGE_KEY, String(end));
  return end;
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

const DiscountCard = () => {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState({ h: 24, m: 0, s: 0 });
  const [copied, setCopied] = useState(false);
  const endRef = useRef<number>(0);

  useEffect(() => {
    endRef.current = getEndTime();
    const tick = () => {
      const diff = Math.max(0, Math.floor((endRef.current - Date.now()) / 1000));
      if (diff === 0) {
        endRef.current = Date.now() + OFFER_DURATION * 1000;
        localStorage.setItem(STORAGE_KEY, String(endRef.current));
      }
      setTimeLeft({
        h: Math.floor(diff / 3600),
        m: Math.floor((diff % 3600) / 60),
        s: diff % 60,
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const copyCode = async (): Promise<boolean> => {
    if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText("FOODIE50");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        return true;
      } catch {
        return false;
      }
    }
    return false;
  };

  return (
    <div className="w-[calc(100%-40px)] mx-auto my-12">
      <section className="relative flex w-full items-center justify-between gap-6 overflow-hidden rounded-[20px] bg-[#199b19] px-7 py-10 shadow-[0_10px_40px_rgba(25,155,25,0.22)] max-md:flex-col max-md:items-start max-md:p-7">
        <div className="flex flex-1 flex-col gap-5">
          <div className="flex flex-col gap-2.5">
            <Badge className="w-fit gap-1.5 border-green-300/50 bg-green-500/20 text-[10px] uppercase tracking-[0.2em] text-green-100">
              <span className="size-1.5 animate-[pulse-dot_1.8s_ease-in-out_infinite] rounded-full bg-green-400" />
              Limited Time Offer
            </Badge>
            <p className="m-0 text-[clamp(22px,3vw,36px)] font-black leading-tight text-white">
              Get Up to <span className="text-yellow-300">50% OFF</span> on Your First Order!
            </p>
            <p className="m-0 max-w-xl text-sm text-white/70">
              Fresh groceries, unbeatable prices, and quick delivery — all in one place.
              Apply the promo code at checkout to unlock your exclusive discount.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2.5 max-sm:w-full max-sm:flex-col">
            <Button
              type="button"
              variant="outline"
              onClick={copyCode}
              className="border-dashed border-yellow-300 bg-yellow-300/15 text-yellow-300 hover:bg-yellow-300/25 hover:text-yellow-200 max-sm:w-full"
            >
              FOODIE50 <span>{copied ? "✓ Copied" : "⧉"}</span>
            </Button>
            <Button
              type="button"
              onClick={async () => {
                await copyCode();
                router.push("/products");
              }}
              className="bg-[#147e14] hover:bg-[#116611] max-sm:w-full"
            >
              Claim Discount
            </Button>
            <Button
              type="button"
              asChild
              variant="outline"
              className="border-white/25 bg-white/10 text-white hover:bg-white/20 max-sm:w-full"
            >
              <Link href="/products">View Deals</Link>
            </Button>
          </div>
        </div>
        <div className="flex min-w-60 flex-col items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-8 py-7 backdrop-blur max-md:w-full max-md:min-w-0">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">Offer Expires In</p>
          <div className="flex items-center gap-2">
            {[
              [pad(timeLeft.h), "Hours"],
              [pad(timeLeft.m), "Mins"],
              [pad(timeLeft.s), "Secs"],
            ].map(([value, label], i) => (
              <div key={label} className="flex items-center gap-2">
                {i > 0 && <span className="mb-4 text-3xl font-extrabold text-white/40">:</span>}
                <div className="flex flex-col items-center gap-1">
                  <span className="block w-[68px] rounded-[10px] border border-white/15 bg-white/10 py-2.5 text-center text-4xl font-black tabular-nums text-white max-sm:w-14 max-sm:text-3xl">
                    {value}
                  </span>
                  <span className="text-[9px] font-semibold uppercase tracking-widest text-white/45">
                    {label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DiscountCard;
