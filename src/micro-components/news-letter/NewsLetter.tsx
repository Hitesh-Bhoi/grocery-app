"use client";
import { Coupon, Discount, NewProduct } from "../../../icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const NewsLetter = () => {
  const perks = [
    { icon: <Discount />, title: "Weekly Grocery Deals", description: "Top discounts curated every Monday morning" },
    { icon: <NewProduct />, title: "New Food Arrivals", description: "Be first to discover new products and meals" },
    { icon: <Coupon />, title: "Exclusive Subscriber Coupons", description: "Deals you won't find anywhere else" },
  ];

  return (
    <section className="mx-5 my-12 rounded-3xl bg-green-50 px-6 py-12 md:px-12">
      <div className="mb-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-xl">
          <h2 className="text-3xl font-black text-slate-900">
            Join our <span className="text-primary">Newsletter</span> & Never Miss a Deal
          </h2>
          <p className="mt-3 text-slate-600">
            Get exclusive discounts, new product alerts, and weekly meal inspiration delivered to your inbox.
          </p>
        </div>
        <div className="flex gap-8">
          {[
            ["12k+", "Subscribers"],
            ["4.9/5", "Rated"],
            ["Weekly", "Digest"],
          ].map(([title, sub]) => (
            <div key={sub} className="text-center">
              <p className="text-xl font-black text-slate-900">{title}</p>
              <p className="text-xs text-slate-500">{sub}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-6 flex flex-col gap-3 sm:flex-row">
        <Input placeholder="Enter your email address..." className="h-12 bg-white" />
        <Button className="h-12 px-6">Subscribe Now</Button>
      </div>
      <div className="mb-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {["No spam ever", "Unsubscribe anytime", "Weekly exclusive offers", "Early access to sales"].map((label) => (
          <Label key={label} className="flex items-center gap-2 text-sm text-slate-600">
            <Checkbox defaultChecked />
            {label}
          </Label>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {perks.map((perk) => (
          <div key={perk.title} className="flex items-start gap-3 rounded-2xl bg-white p-4">
            <div className="text-primary">{perk.icon}</div>
            <div>
              <p className="font-bold text-slate-900">{perk.title}</p>
              <p className="text-sm text-slate-500">{perk.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsLetter;
