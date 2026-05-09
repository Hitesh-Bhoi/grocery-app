"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import {
  HeroSection,
  MeshBackground,
  MeshGradient,
  GhostWatermark,
  ContentContainer,
  LeftContent,
  Badge,
  HeadlineTag,
  HeadlineGroup,
  Title,
  Subtitle,
  FeaturesList,
  FeatureTag,
  StatsRow,
  StatItem,
  CtaRow,
  PrimaryButton,
  SecondaryButton,
  FilterContainer,
  FilterButton,
  TrustSection,
  CenterContent,
  GlowBlob,
  ImageContainer,
  ProductImage,
  DotIndicators,
  Dot,
  FloatCard1,
  FloatCard2,
  FloatCard3,
  FloatCard4,
  PricePill,
  RightPanel,
  ProductSelector,
  GlobalHeroStyles,
} from "./hero.styled";

type Category = "fruit" | "vegetable";
type Filter = "all" | "fruits" | "vegetables";

const allItems = [
  {
    name: "Alphonso Mango",
    tagline: "King of Fruits",
    price: "299",
    unit: "kg",
    image:
      "https://res.cloudinary.com/dqwzddm94/image/upload/v1778281837/mango_oc8m0r.png",
    pageBg: "#FFF0C2",
    accent: "#B45309",
    accentLight: "#FDE68A",
    category: "fruit" as Category,
    origin: "Ratnagiri",
    badge: "GI Tagged",
  },
  {
    name: "Fresh Strawberry",
    tagline: "Sweet & Juicy",
    price: "149",
    unit: "box",
    image:
      "https://res.cloudinary.com/dqwzddm94/image/upload/v1778281951/ChatGPT_Image_May_9__2026__04_40_49_AM-removebg-preview_jxjinz.png",
    pageBg: "#FFE4EE",
    accent: "#BE185D",
    accentLight: "#FBCFE8",
    category: "fruit" as Category,
    origin: "Maharashtra",
    badge: "Seasonal",
  },
  {
    name: "Juicy Orange",
    tagline: "Vitamin C Boost",
    price: "89",
    unit: "kg",
    image:
      "https://res.cloudinary.com/dqwzddm94/image/upload/v1778281731/orange_xps4ui.png",
    pageBg: "#FFECD6",
    accent: "#C2410C",
    accentLight: "#FED7AA",
    category: "fruit" as Category,
    origin: "Nagpur",
    badge: "Best Seller",
  },
  {
    name: "Pineapple",
    tagline: "Crisp & Sweet",
    price: "199",
    unit: "kg",
    image:
      "https://res.cloudinary.com/dqwzddm94/image/upload/v1778281741/pineapple_lhrh5s.png",
    pageBg: "#FFF9C2",
    accent: "#92400E",
    accentLight: "#FDE68A",
    category: "fruit" as Category,
    origin: "Himachal",
    badge: "Premium",
  },
  {
    name: "Fresh Broccoli",
    tagline: "Power Veggie",
    price: "59",
    unit: "bunch",
    image:
      "https://res.cloudinary.com/dqwzddm94/image/upload/v1778283295/ChatGPT_Image_May_9__2026__04_46_50_AM-removebg-preview_m3e5rj.png",
    pageBg: "#DCFCE7",
    accent: "#15803D",
    accentLight: "#BBF7D0",
    category: "vegetable" as Category,
    origin: "Ooty",
    badge: "Superfood",
  },
  {
    name: "Red Bell Pepper",
    tagline: "Rich in Vitamin C",
    price: "79",
    unit: "kg",
    image:
      "https://res.cloudinary.com/dqwzddm94/image/upload/v1778283351/WhatsApp_Image_2026-05-09_at_4.57.52_AM-removebg-preview-removebg-preview_nypknj.png",
    pageBg: "#FFE4E4",
    accent: "#B91C1C",
    accentLight: "#FECACA",
    category: "vegetable" as Category,
    origin: "Karnataka",
    badge: "Antioxidant",
  },
  {
    name: "Farm Tomato",
    tagline: "Sun-Ripened Fresh",
    price: "49",
    unit: "kg",
    image:
      "https://res.cloudinary.com/dqwzddm94/image/upload/v1778283369/WhatsApp_Image_2026-05-09_at_4.57.54_AM-removebg-preview-removebg-preview_suhcxf.png",
    pageBg: "#FFE8E8",
    accent: "#C81E1E",
    accentLight: "#FFC9C9",
    category: "vegetable" as Category,
    origin: "Punjab",
    badge: "Farm Direct",
  },
];

const featureTags = [
  { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>, text: "No Pesticides" },
  { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="8" rx="2"/><circle cx="17" cy="19" r="2"/><circle cx="7" cy="19" r="2"/><path d="M4 11V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5"/><path d="M12 8h8a2 2 0 0 1 2 2v1"/></svg>, text: "Farm Direct" },
  { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="2" x2="12" y2="22"/><line x1="12" y1="2" x2="15" y2="5"/><line x1="12" y1="2" x2="9" y2="5"/><line x1="12" y1="22" x2="15" y2="19"/><line x1="12" y1="22" x2="9" y2="19"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="12" x2="5" y2="9"/><line x1="2" y1="12" x2="5" y2="15"/><line x1="22" y1="12" x2="19" y2="9"/><line x1="22" y1="12" x2="19" y2="15"/></svg>, text: "Cold Chain" },
  { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>, text: "Same Day" },
];

const filterOptions: { label: string; value: Filter }[] = [
  { label: "Fruits", value: "fruits" },
  { label: "Vegetables", value: "vegetables" },
];

export default function Hero() {
  const [filter, setFilter] = useState<Filter>("fruits");
  const [activeIndex, setActiveIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Derive filtered list
  const filteredItems = useMemo(() => {
    if (filter === "vegetables")
      return allItems.filter((i) => i.category === "vegetable");
    if (filter === "fruits")
      return allItems.filter((i) => i.category === "fruit");
    return allItems;
  }, [filter]);

  // Reset carousel index when filter changes
  useEffect(() => {
    setActiveIndex(0);
  }, [filter]);

  // Auto-advance carousel
  useEffect(() => {
    if (filteredItems.length <= 1) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % filteredItems.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [filteredItems]);

  // Mouse parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const active = filteredItems[activeIndex] ?? filteredItems[0];

  return (
    <>
      <GlobalHeroStyles />
      <HeroSection $bg={active.pageBg}>
        {/* Dynamic Mesh Background */}
        <MeshBackground>
          <MeshGradient
            $accent={active.accent}
            $top="-20%"
            $left="-10%"
            $w="70%"
            $h="70%"
            $blur="120px"
          />
          <MeshGradient
            $accent={active.accent}
            $top="40%"
            $right="-10%"
            $w="50%"
            $h="50%"
            $blur="100px"
            $delay="-5s"
          />
          <MeshGradient
            $accent={active.accent}
            $bottom="-10%"
            $left="20%"
            $w="60%"
            $h="60%"
            $blur="110px"
            $delay="-10s"
          />
        </MeshBackground>

        {/* Giant ghost watermark text (Desktop) */}
        <GhostWatermark $accent={active.accent} className="desktop-watermark" aria-hidden>
          <span>{active.name.split(" ").at(-1)!.toUpperCase()}</span>
        </GhostWatermark>

        <ContentContainer>
          {/* ── LEFT: text content ── */}
          <LeftContent key={activeIndex + filter}>
            {/* Badge */}
            <Badge $accent={active.accent} $accentLight={active.accentLight}>
              Fresh From Farm · Since 2020
            </Badge>

            {/* Headline */}
            <HeadlineGroup>
              <HeadlineTag $accent={active.accent}>
                {active.tagline}
              </HeadlineTag>
              <Title $accent={active.accent}>
                Nature&apos;s Best, <span>Delivered Fresh</span>
              </Title>
              <Subtitle>
                Handpicked organic produce delivered from our partner farms
                straight to your table — <span>same-day, every day.</span>
              </Subtitle>
            </HeadlineGroup>

            {/* Feature tags */}
            <FeaturesList>
              {featureTags.map((tag, i) => (
                <FeatureTag key={i}>
                  <span>{tag.icon}</span>
                  {tag.text}
                </FeatureTag>
              ))}
            </FeaturesList>

            {/* Stats row */}
            <StatsRow>
              {[
                { val: "10k+", label: "Happy Customers" },
                { val: "500+", label: "Products" },
                { val: "24h", label: "Fast Delivery" },
              ].map((s, i) => (
                <StatItem key={i} $accent={i === 0 ? active.accent : undefined}>
                  {i > 0 && <div className="divider" />}
                  <div>
                    <div className="val">{s.val}</div>
                    <div className="label">{s.label}</div>
                  </div>
                </StatItem>
              ))}
            </StatsRow>

            {/* CTA row */}
            <CtaRow>
              <PrimaryButton $accent={active.accent}>
                <div className="shimmer" />
                <span>Shop Now</span>
                <div className="arrow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </PrimaryButton>
              <SecondaryButton $accent={active.accent}>
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
                Watch Video
              </SecondaryButton>
            </CtaRow>

            <FilterContainer>
              {filterOptions.map((opt) => {
                const isActive = filter === opt.value;
                return (
                  <FilterButton
                    key={opt.value}
                    id={`filter-${opt.value}`}
                    onClick={() => setFilter(opt.value)}
                    $isActive={isActive}
                    $accent={active.accent}
                  >
                    {opt.label}
                    {isActive && <span className="ping" />}
                  </FilterButton>
                );
              })}
            </FilterContainer>

            {/* Trusted-by avatars */}
            <TrustSection>
              <div className="avatars">
                {[1, 2, 3, 4, 5].map((num) => (
                  <div key={num} className="avatar">
                    <img 
                      src={`https://i.pravatar.cc/100?img=${num + 10}`} 
                      alt="user" 
                      style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover" }} 
                    />
                  </div>
                ))}
              </div>
              <div className="info">
                <div className="stars">★★★★★</div>
                <div className="text">
                  Trusted by <strong>10,000+</strong> families
                </div>
              </div>
            </TrustSection>
          </LeftContent>

          {/* ── CENTER: Product Image ── */}
          <CenterContent>
            {/* Giant ghost watermark text (Mobile) */}
            <GhostWatermark $accent={active.accent} className="mobile-watermark" aria-hidden>
              <span>{active.name.split(" ").at(-1)!.toUpperCase()}</span>
            </GhostWatermark>

            {/* Glow blob */}
            <GlowBlob $accent={active.accent} />

            {/* Images with mouse parallax */}
            <ImageContainer $mousePos={mousePos}>
              {filteredItems.map((item, idx) => (
                <ProductImage key={item.image} $active={idx === activeIndex}>
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    priority={idx === 0}
                  />
                </ProductImage>
              ))}
            </ImageContainer>

            {/* Dot indicators */}
            {filteredItems.length > 1 && (
              <DotIndicators>
                {filteredItems.map((_, idx) => (
                  <Dot
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    $active={idx === activeIndex}
                    $accent={active.accent}
                  />
                ))}
              </DotIndicators>
            )}

            {/* ── Floating Info Cards ── */}
            <FloatCard1>
              <div className="card-inner">
                <div
                  className="icon-box"
                  style={{ background: active.accentLight }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={active.accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
                </div>
                <div>
                  <div className="subtitle" style={{ color: active.accent }}>
                    Certified
                  </div>
                  <div className="title">100% Organic</div>
                </div>
              </div>
            </FloatCard1>

            <FloatCard2>
              <div className="card-inner">
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <div style={{ color: active.accent, display: "flex", alignItems: "center" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                  </div>
                  <div className="subtitle" style={{ color: active.accent }}>
                    Delivery
                  </div>
                </div>
                <div className="title">Within 24 Hours</div>
                <div className="desc">Farm → Your Door</div>
              </div>
            </FloatCard2>

            <FloatCard3>
              <div className="card-inner">
                <div
                  className="icon-box"
                  style={{ background: active.accentLight }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={active.accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                </div>
                <div>
                  <div className="subtitle" style={{ color: active.accent }}>
                    Rich In
                  </div>
                  <div className="title">Vitamins &amp; Fibre</div>
                </div>
              </div>
            </FloatCard3>

            <FloatCard4>
              <div className="card-inner">
                <div
                  className="icon-box"
                  style={{ background: active.accentLight }}
                >
                  <span className="rating" style={{ color: active.accent }}>
                    4.9
                  </span>
                </div>
                <div>
                  <div className="stars">★★★★★</div>
                  <div className="reviews">1.2k Reviews</div>
                </div>
              </div>
            </FloatCard4>

            {/* Name + price pill */}
            <PricePill>
              <div className="col">
                <span className="tagline" style={{ color: active.accent }}>
                  {active.tagline}
                </span>
                <span className="name">{active.name}</span>
              </div>
              <div className="divider" />
              <div className="col right">
                <span className="start">Starting at</span>
                <span className="price" style={{ color: active.accent }}>
                  ₹{active.price}
                  <span className="unit">/{active.unit}</span>
                </span>
              </div>
            </PricePill>
          </CenterContent>

          {/* ── RIGHT: Vertical product selector panel ── */}
          <RightPanel>
            <div className="header">In This Collection</div>
            {filteredItems.map((item, idx) => (
              <ProductSelector
                key={item.image}
                onClick={() => setActiveIndex(idx)}
                $isActive={idx === activeIndex}
                $accent={item.accent}
              >
                <div className="bar" />
                <div className="info">
                  <p className="name">{item.name}</p>
                  <div className="badge">{item.badge}</div>
                  <div className="origin">📍 {item.origin}</div>
                </div>
                <div className="price-col">
                  <div className="price">₹{item.price}</div>
                  <div className="unit">/{item.unit}</div>
                </div>
              </ProductSelector>
            ))}
          </RightPanel>
        </ContentContainer>
      </HeroSection>
    </>
  );
}
