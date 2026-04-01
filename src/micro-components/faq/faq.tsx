"use client";
import { useState } from "react";
import {
  CartIcon,
  ChatBubble,
  CreditCard,
  DeliveryScooter,
  GiftIcon,
  LeafVegan,
  MailEnvelope,
  ReceiptIcon,
  RefreshReturn,
} from "../../../icons";
import { FAQBody, FAQCTA, FAQHeader, FAQItem, FAQMain } from "./faq.styled";

/* ── data ─────────────────────────────────────────────────────────────── */
const CATEGORIES = ["All", "Quality", "Delivery", "Orders", "Returns", "Payments"];

const FAQ_ITEMS = [
  {
    id: 1,
    icon: <LeafVegan />,
    category: "Quality",
    question: "How fresh are your fruits and vegetables?",
    answer:
      "We source directly from local farms every morning. All produce is handpicked and packed within 24 hours of delivery — so you always receive the freshest fruits and vegetables, never day-old stock.",
  },
  {
    id: 2,
    icon: <DeliveryScooter />,
    category: "Delivery",
    question: "How quickly will my order be delivered?",
    answer:
      "We deliver fresh produce within 2–4 hours of placing your order. Same-day delivery is available for orders placed before 2 PM. You can track your delivery in real time through our app.",
  },
  {
    id: 3,
    icon: <RefreshReturn />,
    category: "Returns",
    question: "What if I receive damaged or spoiled produce?",
    answer:
      "We offer a 100% freshness guarantee. If any item is damaged, spoiled, or not up to standard, contact us within 2 hours of delivery with a photo. We'll issue a full refund or send a replacement — no questions asked.",
  },
  {
    id: 4,
    icon: <CartIcon />,
    category: "Orders",
    question: "Can I cancel or change my order after placing it?",
    answer:
      "Yes! You can cancel or modify your order within 10 minutes of placing it. After that, our team begins packing your fresh produce and changes may not be possible. Go to My Orders → Modify/Cancel.",
  },
  {
    id: 5,
    icon: <GiftIcon />,
    category: "Quality",
    question: "Do you offer organic fruits and vegetables?",
    answer:
      `Absolutely! We have a dedicated Organic section with certified organic produce. Use the "Organic" filter in our app to browse seasonal organic fruits and vegetables sourced from certified local farms.`,
  },
  {
    id: 6,
    icon: <CreditCard />,
    category: "Payments",
    question: "What payment methods are accepted?",
    answer:
      "We accept all major credit/debit cards, UPI (GPay, PhonePe, Paytm), net banking, digital wallets, and Cash on Delivery (COD) for all orders across India.",
  },
  {
    id: 7,
    icon: <ReceiptIcon />,
    category: "Orders",
    question: "Is there a minimum order value for delivery?",
    answer:
      "The minimum order value is ₹149. Free delivery is available on orders above ₹399. A small delivery fee of ₹30 applies for orders below that threshold.",
  },
];

/* ── search icon ──────────────────────────────────────────────────────── */
const SearchIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

/* ── component ────────────────────────────────────────────────────────── */
const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [openId, setOpenId] = useState<number | null>(1);

  const filtered = FAQ_ITEMS.filter((item) => {
    const matchesCategory =
      activeCategory === "All" || item.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggle = (id: number) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <FAQMain>
      {/* ── header ──────────────────────────────────────────────────── */}
      <FAQHeader>
        <h2>
          Frequently Asked <span>Questions</span>
        </h2>
        <p className="faq-sub">
          Everything you need to know about Ecobazar. Can&apos;t find an
          answer? Chat with us!
        </p>
        <div className="faq-search">
          <span className="search-icon">
            <SearchIcon />
          </span>
          <input
            type="text"
            placeholder="Search questions…"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </FAQHeader>

      {/* ── body: categories + accordion ────────────────────────────── */}
      <FAQBody>
        {/* category chips */}
        <div className="faq-cats">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`cat-btn${activeCategory === cat ? " active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* accordion list */}
        <div className="faq-list">
          {filtered.length === 0 ? (
            <p
              style={{
                textAlign: "center",
                color: "#787f8a",
                padding: "24px 0",
                fontSize: "14px",
              }}
            >
              No results found. Try a different search term or category.
            </p>
          ) : (
            filtered.map((item) => (
              <FAQItem key={item.id} $open={openId === item.id}>
                <button
                  className="faq-question"
                  onClick={() => toggle(item.id)}
                  aria-expanded={openId === item.id}
                >
                  <div className="faq-item-icon">{item.icon}</div>
                  <span className="faq-question-text">{item.question}</span>
                  <div className="faq-toggle">+</div>
                </button>
                <div className="faq-answer">
                  <div className="faq-answer-inner">{item.answer}</div>
                </div>
              </FAQItem>
            ))
          )}
        </div>
      </FAQBody>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <FAQCTA>
        <p>
          <strong>Still have questions?</strong> Our support team is available
          7 days a week.
        </p>
        <div className="cta-buttons">
          <button className="btn-primary">
            <ChatBubble /> Live Chat
          </button>
          <button className="btn-secondary">
            <MailEnvelope /> Email Support
          </button>
        </div>
      </FAQCTA>
    </FAQMain>
  );
};

export default FAQ;
