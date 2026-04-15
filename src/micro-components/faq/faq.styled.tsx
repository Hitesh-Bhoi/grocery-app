import { FlexBox } from "@/styles/mixins";
import styled, { keyframes } from "styled-components";

/* ─── tokens ─────────────────────────────────────────────────────────────── */
const green     = "var(--green)";
const greenLight = "rgba(25,155,25,0.08)";
const greenMid   = "rgba(25,155,25,0.15)";
const greenSoft  = "rgba(25,155,25,0.22)";
const border     = "rgba(25,155,25,0.12)";
const borderGrey = "#e5e7eb";
const textMuted  = "#6b7280";

const slideDown = keyframes`
  from { opacity: 0; transform: translateY(-6px); }
  to   { opacity: 1; transform: translateY(0); }
`;

/* ─── outer wrapper ──────────────────────────────────────────────────────── */
export const FAQMain = styled.div`
  margin: 0 20px 48px;
  border-radius: 20px;
  overflow: hidden;
  background: linear-gradient(135deg, #f0faf0 0%, #ffffff 60%, #f7fef7 100%);
  border: 1px solid ${border};
  box-shadow:
    0 2px 8px rgba(0,0,0,0.05),
    0 0 0 1px rgba(255,255,255,0.9) inset;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    bottom: -80px;
    left: -80px;
    width: 260px;
    height: 260px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(25,155,25,0.07) 0%, transparent 70%);
    pointer-events: none;
  }

  @media (max-width: 480px) {
    margin: 0 10px 32px;
    border-radius: 14px;
  }
`;

/* ─── header ─────────────────────────────────────────────────────────────── */
export const FAQHeader = styled.div`
  border-bottom: 1px solid ${border};
  padding: 48px 50px 36px;
  text-align: center;

  h2 {
    font-size: 2.2rem;
    font-weight: 800;
    margin: 0 0 10px;
    color: #111827;
    letter-spacing: -0.5px;
    line-height: 1.2;

    span { color: ${green}; }
  }

  .faq-sub {
    font-size: 16px;
    font-weight: 400;
    color: ${textMuted};
    margin: 0;
    line-height: 1.6;
  }

  /* search bar */
  .faq-search {
    position: relative;
    max-width: 480px;
    margin: 28px auto 0;

    .search-icon {
      position: absolute;
      left: 16px;
      top: 50%;
      transform: translateY(-50%);
      color: #9ca3af;
      display: flex;
      align-items: center;
      pointer-events: none;
    }

    input {
      width: 100%;
      padding: 15px 20px 15px 48px;
      border: 1.5px solid ${borderGrey};
      border-radius: 50px;
      font-size: 15px;
      font-family: inherit;
      font-weight: 400;
      outline: none;
      background: #fff;
      color: #111;
      box-sizing: border-box;
      transition: border-color 0.2s, box-shadow 0.2s;

      &::placeholder { color: #c0c8d2; }

      &:focus {
        border-color: ${green};
        box-shadow: 0 0 0 4px ${greenLight};
      }
    }
  }

  /* tablet */
  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 36px 30px 28px;
    h2 { font-size: 1.8rem; }
  }

  /* mobile */
  @media (max-width: 767px) {
    padding: 28px 20px 22px;
    h2 { font-size: 1.5rem; }
    .faq-sub { font-size: 14px; }
    .faq-search { margin-top: 18px; }
  }
`;

/* ─── body ───────────────────────────────────────────────────────────────── */
export const FAQBody = styled.div`
  padding: 36px 50px 44px;

  /* category filter chips */
  .faq-cats {
    ${FlexBox({ justify: "center", gap: "8px" })};
    flex-wrap: wrap;
    margin-bottom: 32px;

    .cat-btn {
      padding: 9px 22px;
      border-radius: 99px;
      border: 1.5px solid ${borderGrey};
      background: #fff;
      font-size: 14px;
      font-weight: 600;
      color: ${textMuted};
      cursor: pointer;
      transition: background 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;

      &:hover {
        border-color: ${green};
        color: ${green};
      }

      &.active {
        background: ${green};
        color: #fff;
        border-color: ${green};
        box-shadow: 0 4px 14px rgba(25,155,25,0.28);
      }
    }
  }

  /* accordion list */
  .faq-list {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
  }

  /* tablet */
  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 28px 30px 36px;
  }

  /* mobile */
  @media (max-width: 767px) {
    padding: 22px 16px 28px;

    .faq-cats {
      gap: 6px;
      margin-bottom: 22px;
      .cat-btn { padding: 8px 16px; font-size: 13px; }
    }
  }
`;

/* ─── single accordion item ──────────────────────────────────────────────── */
export const FAQItem = styled.div<{ $open: boolean }>`
  background: #fff;
  border: 1.5px solid ${({ $open }) => ($open ? green : borderGrey)};
  border-radius: 14px;
  overflow: hidden;
  box-shadow: ${({ $open }) =>
    $open
      ? "0 8px 28px rgba(25,155,25,0.12)"
      : "0 1px 4px rgba(0,0,0,0.04)"};
  transition: border-color 0.25s, box-shadow 0.25s;

  /* question row */
  .faq-question {
    width: 100%;
    ${FlexBox({ justify: "flex-start", align: "center", gap: "16px" })};
    padding: 20px 24px;
    background: none;
    border: none;
    cursor: pointer;
    text-align: left;

    .faq-item-icon {
      width: 44px;
      height: 44px;
      min-width: 44px;
      border-radius: 12px;
      background: ${({ $open }) => ($open ? green : greenLight)};
      color: ${({ $open }) => ($open ? "#fff" : green)};
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      transition: background 0.25s, color 0.25s;

      svg { width: 20px; height: 20px; }
    }

    .faq-question-text {
      flex: 1;
      font-size: 16px;
      font-weight: 700;
      color: #111827;
      text-align: left;
      line-height: 1.45;
    }

    .faq-toggle {
      width: 32px;
      height: 32px;
      min-width: 32px;
      border-radius: 50%;
      background: ${({ $open }) => ($open ? greenMid : "#f3f4f6")};
      ${FlexBox({ justify: "center", align: "center" })};
      color: ${green};
      font-size: 22px;
      font-weight: 700;
      transition: transform 0.3s, background 0.25s;
      transform: ${({ $open }) => ($open ? "rotate(45deg)" : "rotate(0deg)")};
      flex-shrink: 0;
      line-height: 1;
    }
  }

  /* answer panel */
  .faq-answer {
    max-height: ${({ $open }) => ($open ? "500px" : "0")};
    overflow: hidden;
    transition: max-height 0.38s ease;

    .faq-answer-inner {
      padding: 0 24px 22px 84px;
      font-size: 15px;
      font-weight: 400;
      color: ${textMuted};
      line-height: 1.8;
      animation: ${slideDown} 0.3s ease;
    }
  }

  /* mobile */
  @media (max-width: 767px) {
    border-radius: 12px;

    .faq-question {
      padding: 16px 16px;
      gap: 12px;

      .faq-item-icon { width: 38px; height: 38px; min-width: 38px; border-radius: 10px; }
      .faq-question-text { font-size: 14px; }
      .faq-toggle { width: 28px; height: 28px; min-width: 28px; font-size: 20px; }
    }

    .faq-answer .faq-answer-inner {
      padding: 0 16px 18px 66px;
      font-size: 14px;
    }
  }
`;

/* ─── bottom CTA ─────────────────────────────────────────────────────────── */
export const FAQCTA = styled.div`
  margin: 0 50px 44px;
  padding: 36px;
  text-align: center;
  background: linear-gradient(135deg, ${greenLight} 0%, rgba(25,155,25,0.04) 100%);
  border: 1.5px solid ${greenSoft};
  border-radius: 16px;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: -40px;
    right: -40px;
    width: 160px;
    height: 160px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(25,155,25,0.08) 0%, transparent 70%);
    pointer-events: none;
  }

  p {
    font-size: 17px;
    font-weight: 500;
    color: ${textMuted};
    margin: 0 0 20px;

    strong {
      color: #111827;
      font-weight: 800;
    }
  }

  .cta-buttons {
    ${FlexBox({ justify: "center", gap: "12px" })};
    flex-wrap: wrap;

    .btn-primary {
      ${FlexBox({ align: "center", gap: "8px" })};
      padding: 14px 32px;
      background: linear-gradient(135deg, #1db81d 0%, #199b19 100%);
      color: #fff;
      border: none;
      border-radius: 10px;
      font-size: 15px;
      font-weight: 700;
      cursor: pointer;
      box-shadow: 0 6px 20px rgba(25,155,25,0.28);
      transition: transform 0.2s, box-shadow 0.2s;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 28px rgba(25,155,25,0.35);
      }
    }

    .btn-secondary {
      ${FlexBox({ align: "center", gap: "8px" })};
      padding: 14px 32px;
      background: #fff;
      color: ${green};
      border: 1.5px solid ${borderGrey};
      border-radius: 10px;
      font-size: 15px;
      font-weight: 700;
      cursor: pointer;
      transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;

      &:hover {
        border-color: ${green};
        transform: translateY(-2px);
        box-shadow: 0 4px 14px rgba(0,0,0,0.08);
      }
    }
  }

  /* tablet */
  @media (min-width: 768px) and (max-width: 1024px) {
    margin: 0 30px 36px;
  }

  /* mobile */
  @media (max-width: 767px) {
    margin: 0 16px 24px;
    padding: 24px 20px;

    p {
      font-size: 15px;
      margin-bottom: 16px;
    }

    .cta-buttons {
      gap: 10px;
      .btn-primary,
      .btn-secondary {
        width: 100%;
        justify-content: center;
        padding: 13px 20px;
        font-size: 15px;
      }
    }
  }
`;
