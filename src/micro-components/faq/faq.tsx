"use client";
import { useState } from "react";
import {
  CartIcon, ChatBubble, CreditCard, DeliveryScooter, GiftIcon,
  LeafVegan, MailEnvelope, ReceiptIcon, RefreshReturn,
} from "../../../icons";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const CATEGORIES = ["All", "Quality", "Delivery", "Orders", "Returns", "Payments"];

const FAQ_ITEMS = [
  { id: "1", icon: <LeafVegan />, category: "Quality", question: "How fresh are your fruits and vegetables?", answer: "We source directly from local farms every morning. All produce is handpicked and packed within 24 hours of delivery — so you always receive the freshest fruits and vegetables, never day-old stock." },
  { id: "2", icon: <DeliveryScooter />, category: "Delivery", question: "How quickly will my order be delivered?", answer: "We deliver fresh produce within 2–4 hours of placing your order. Same-day delivery is available for orders placed before 2 PM. You can track your delivery in real time through our app." },
  { id: "3", icon: <RefreshReturn />, category: "Returns", question: "What if I receive damaged or spoiled produce?", answer: "We offer a 100% freshness guarantee. If any item is damaged, spoiled, or not up to standard, contact us within 2 hours of delivery with a photo. We'll issue a full refund or send a replacement — no questions asked." },
  { id: "4", icon: <CartIcon />, category: "Orders", question: "Can I cancel or change my order after placing it?", answer: "Yes! You can cancel or modify your order within 10 minutes of placing it. After that, our team begins packing your fresh produce and changes may not be possible. Go to My Orders → Modify/Cancel." },
  { id: "5", icon: <GiftIcon />, category: "Quality", question: "Do you offer organic fruits and vegetables?", answer: "Absolutely! We have a dedicated Organic section with certified organic produce. Use the Organic filter in our app to browse seasonal organic fruits and vegetables sourced from certified local farms." },
  { id: "6", icon: <CreditCard />, category: "Payments", question: "What payment methods are accepted?", answer: "We accept all major credit/debit cards, UPI (GPay, PhonePe, Paytm), net banking, digital wallets, and Cash on Delivery (COD) for all orders across India." },
  { id: "7", icon: <ReceiptIcon />, category: "Orders", question: "Is there a minimum order value for delivery?", answer: "The minimum order value is ₹149. Free delivery is available on orders above ₹399. A small delivery fee of ₹30 applies for orders below that threshold." },
];

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = FAQ_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="mx-auto my-12 max-w-3xl px-5">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-black text-slate-900">
          Frequently Asked <span className="text-primary">Questions</span>
        </h2>
        <p className="mt-2 text-slate-500">Everything you need to know about Ecobazar.</p>
        <Input
          className="mx-auto mt-5 max-w-md"
          placeholder="Search questions…"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="mb-6 flex flex-wrap justify-center gap-2">
        {CATEGORIES.map((cat) => (
          <Badge
            key={cat}
            variant={activeCategory === cat ? "default" : "outline"}
            className="cursor-pointer px-3 py-1"
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </Badge>
        ))}
      </div>
      {filtered.length === 0 ? (
        <p className="py-6 text-center text-sm text-slate-500">No results found. Try a different search term or category.</p>
      ) : (
        <Accordion type="single" collapsible defaultValue="1">
          {filtered.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger className="text-left">
                <span className="mr-3 inline-flex items-center gap-2">
                  <span className="text-primary">{item.icon}</span>
                  {item.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-slate-600">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      )}
      <div className="mt-10 rounded-2xl bg-green-50 p-6 text-center">
        <p className="mb-4 text-slate-700">
          <strong>Still have questions?</strong> Our support team is available 7 days a week.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button><ChatBubble /> Live Chat</Button>
          <Button variant="outline"><MailEnvelope /> Email Support</Button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
