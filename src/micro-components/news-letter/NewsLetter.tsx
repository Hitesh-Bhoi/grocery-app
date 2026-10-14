"use client";
import { useState } from "react";
import { Coupon, Discount, NewProduct } from "../../../icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const perks = [
    { icon: <Discount />, title: "Weekly Grocery Deals", description: "Top discounts curated every Monday morning" },
    { icon: <NewProduct />, title: "New Food Arrivals", description: "Be first to discover new products and meals" },
    { icon: <Coupon />, title: "Exclusive Subscriber Coupons", description: "Deals you won't find anywhere else" },
  ];

  return (
    <div className="w-[calc(100%-40px)] mx-auto my-12">
      <section className="w-full rounded-[20px] bg-gradient-to-br from-[#f0faf0] via-white to-[#f7fef7] border border-green-600/30 shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-6 md:p-10 lg:p-12">
        {/* Header: Title + Stats Pills */}
        <div className="mb-8 flex flex-col justify-between gap-6 border-b border-green-600/10 pb-8 md:flex-row md:items-center">
          <div className="max-w-xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Join our <span className="text-[#199b19]">Newsletter</span> & Never Miss a Deal
            </h2>
            <p className="mt-2.5 text-sm md:text-base text-slate-500 max-w-md leading-relaxed">
              Get exclusive discounts, new product alerts, and weekly meal inspiration delivered to your inbox.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {[
              ["12k+", "Subscribers"],
              ["4.9/5", "Rated"],
              ["Weekly", "Digest"],
            ].map(([title, sub]) => (
              <div
                key={sub}
                className="flex min-w-[85px] sm:min-w-[95px] flex-col items-center justify-center rounded-2xl border border-green-600/15 bg-green-600/[0.06] px-4 py-3 text-center sm:px-5 sm:py-3.5"
              >
                <p className="text-xl sm:text-2xl font-black leading-none text-[#199b19]">{title}</p>
                <p className="mt-1 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-slate-500">{sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Form: Compact Input + Subscribe Button */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!email.trim() || !email.includes("@")) {
              setError("Please enter a valid email address.");
              return;
            }
            setError("");
            setSubmitted(true);
          }}
          className="mb-6"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) setError("");
              }}
              placeholder="Enter your email address..."
              className="h-12 w-full sm:w-80 md:w-96 rounded-xl border-slate-200 bg-white px-4 text-sm shadow-xs focus-visible:border-[#199b19] focus-visible:ring-2 focus-visible:ring-[#199b19]/20"
              disabled={submitted}
            />
            <Button
              type="submit"
              className="h-12 rounded-xl bg-[#199b19] px-6 text-sm font-bold text-white shadow-sm transition hover:bg-[#158215]"
              disabled={submitted}
            >
              {submitted ? "Subscribed!" : "Subscribe Now"}
            </Button>
          </div>
          {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
          {submitted && (
            <p className="mt-2 text-sm font-semibold text-emerald-700">
              ✓ Thank you for subscribing! You will receive our weekly grocery deals and updates.
            </p>
          )}
        </form>

        {/* Checkboxes Row */}
        <div className="mb-8 flex flex-wrap items-center gap-x-8 gap-y-3">
          {["No spam ever", "Unsubscribe anytime", "Weekly exclusive offers", "Early access to sales"].map((label) => (
            <Label key={label} className="flex items-center gap-2 text-sm font-medium text-slate-600 cursor-pointer">
              <Checkbox defaultChecked className="data-[state=checked]:bg-[#199b19] data-[state=checked]:border-[#199b19]" />
              {label}
            </Label>
          ))}
        </div>

        {/* Perks Footer Strip */}
        <div className="grid gap-4 border-t border-green-600/10 pt-6 md:grid-cols-3 md:divide-x md:divide-green-600/15">
          {perks.map((perk) => (
            <div key={perk.title} className="flex items-center gap-4 px-2 md:px-6 first:pl-0">
              <div className="flex size-11 shrink-0 items-center justify-center text-3xl text-[#199b19]">
                {perk.icon}
              </div>
              <div>
                <p className="text-[15px] font-bold text-slate-900">{perk.title}</p>
                <p className="text-xs text-slate-500 mt-0.5">{perk.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default NewsLetter;
