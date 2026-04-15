"use client";

import { useEffect, useState, useRef } from "react";
import {
  StyledDiscountButton,
  StyledDiscountCardContainer,
  StyledDiscountContent,
  StyledDiscountSection,
  StyledOfferExpireSection,
  StyledTimerBlock,
} from "./discountCard.styled";

/* ── helpers ── */
const OFFER_DURATION = 24 * 60 * 60; // 24 hours in seconds
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

/* ── component ── */
const DiscountCard = () => {
  const [timeLeft, setTimeLeft] = useState({ h: 24, m: 0, s: 0 });
  const [copied, setCopied] = useState(false);
  const endRef = useRef<number>(0);

  useEffect(() => {
    endRef.current = getEndTime();

    const tick = () => {
      const diff = Math.max(0, Math.floor((endRef.current - Date.now()) / 1000));
      if (diff === 0) {
        // reset for next 24h
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

  const copyCode = () => {
    navigator.clipboard.writeText("FOODIE50").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <>
      <StyledDiscountCardContainer>
        <StyledDiscountSection>
          <StyledDiscountContent>
            <span className="time-offer-tag">
              <span className="tag-dot" />
              Limited Time Offer
            </span>
            <p className="discount-title">
              Get Up to{" "}
              <span className="discount-number">40% OFF</span>{" "}
              on Your First Order!
            </p>
            <p className="discount-description">
              Fresh groceries, unbeatable prices, and quick delivery — all in one place.
              Apply the promo code at checkout to unlock your exclusive discount.
            </p>
          </StyledDiscountContent>

          <StyledDiscountButton>
            <button className="discount-code" type="button" onClick={copyCode}>
              <span className="code-text">FOODIE50</span>
              <span className="copy-icon">{copied ? "✓" : "⧉"}</span>
            </button>
            <button className="claim-discount" type="button">Claim Discount</button>
            <button className="view-all-deals" type="button">View Deals</button>
          </StyledDiscountButton>
        </StyledDiscountSection>

        <StyledOfferExpireSection>
          <p className="offer-title">Offer Expires In</p>
          <div className="timer-row">
            <StyledTimerBlock>
              <span className="timer-number">{pad(timeLeft.h)}</span>
              <span className="timer-label">Hours</span>
            </StyledTimerBlock>
            <span className="timer-colon">:</span>
            <StyledTimerBlock>
              <span className="timer-number">{pad(timeLeft.m)}</span>
              <span className="timer-label">Mins</span>
            </StyledTimerBlock>
            <span className="timer-colon">:</span>
            <StyledTimerBlock>
              <span className="timer-number">{pad(timeLeft.s)}</span>
              <span className="timer-label">Secs</span>
            </StyledTimerBlock>
          </div>
        </StyledOfferExpireSection>
      </StyledDiscountCardContainer>
    </>
  );
};

export default DiscountCard;