"use client";

import { useEffect, useState } from "react";
import {
  CarouselWrapper,
  CarouselInner,
  CarouselItem,
  Indicators,
  IndicatorButton,
  PrevButton,
  NextButton,
  ControlIconWrapper,
  ControlIcon,
  CarouselContent,
} from "./carousel.styled";

const slides = [
  {
    image:
      "https://res.cloudinary.com/dqwzddm94/image/upload/v1773249652/pexels-filirovska-8234152_ncgtdx.jpg",
    tag: "Limited Time Offer",
    title: "Farm Fresh Vegetables",
    description:
      "Stock up on crisp, local produce with bundle savings all week long.",
    button1: { label: "Shop Veggies", link: "/products/vegetables" },
    button2: { label: "View Offers", link: "/products/vegetables" },
  },
  {
    image: "/images/carousel-pexels-style-2.jpg",
    tag: "Seasonal Picks",
    title: "Organic Fruit Deals",
    description:
      "Juicy, sweet, and fresh. Save on today's seasonal fruit selection.",
    button1: { label: "Shop Fruits", link: "/products/fruits" },
    button2: { label: "Explore More", link: "/products/fruits" },
  },
  {
    image: "/images/carousel-pexels-flat-4.jpg",
    tag: "Up to 30% Off",
    title: "Daily Grocery Discounts",
    description:
      "Smart savings on essentials with rotating discounts every day.",
    button1: { label: "View Discounts", link: "/offers" },
    button2: { label: "Browse All", link: "/products" },
  },
  {
    image:
      "https://res.cloudinary.com/dqwzddm94/image/upload/v1773249431/pexels-vanessa-loring-5966149_i5pbre.jpg",
    tag: "Fresh & Bright",
    title: "Colorful Market Specials",
    description:
      "Handpicked deals across fruits and veggies, refreshed daily.",
    button1: { label: "Shop Specials", link: "/specials" },
    button2: { label: "See All Deals", link: "/offers" },
  },
];

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prev = () =>
    setActiveIndex((p) => (p === 0 ? slides.length - 1 : p - 1));
  const next = () =>
    setActiveIndex((p) => (p === slides.length - 1 ? 0 : p + 1));

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      next();
    } else if (isRightSwipe) {
      prev();
    }
  };

  return (
    <CarouselWrapper>
      <CarouselInner
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {slides.map((item, index) => (
          <CarouselItem
            key={index}
            data-active={activeIndex === index}
            $bg={item.image}
          >
            <CarouselContent>
              <span className="carousel_tag">{item.tag}</span>
              <div className="carousel_text_group">
                <p className="carousel_title">{item.title}</p>
                <p className="carousel_description">{item.description}</p>
              </div>
              <div className="carousel_buttons">
                <button className="button1">{item.button1.label}</button>
                <button className="button2">{item.button2.label}</button>
              </div>
            </CarouselContent>
          </CarouselItem>
        ))}

        {/* Prev / Next arrows */}
        <PrevButton onClick={prev} aria-label="Previous slide">
          <ControlIconWrapper>
            <ControlIcon
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </ControlIcon>
          </ControlIconWrapper>
        </PrevButton>
        <NextButton onClick={next} aria-label="Next slide">
          <ControlIconWrapper>
            <ControlIcon
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </ControlIcon>
          </ControlIconWrapper>
        </NextButton>
      </CarouselInner>

      {/* Dot indicators */}
      <Indicators>
        {slides.map((_, index) => (
          <IndicatorButton
            key={index}
            aria-current={activeIndex === index}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </Indicators>
    </CarouselWrapper>
  );
}
