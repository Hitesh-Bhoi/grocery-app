import { FlexBox } from "@/styles/mixins";
import styled from "styled-components";

/* ─── tokens ────────────────────────────────────────────────────────────── */
const green = "var(--green)";
const greenLight = "rgba(32,184,32,0.10)";
const greenSoft = "rgba(32,184,32,0.22)";
const border = "#d4d6da";
const textMuted = "#787f8a";
const shadow =
  "rgba(0,0,0,0.25) 0px 0.0625em 0.0625em, rgba(0,0,0,0.25) 0px 0.125em 0.5em, rgba(255,255,255,0.1) 0px 0px 0px 1px inset";

/* ─── outer wrapper ─────────────────────────────────────────────────────── */
export const FAQMain = styled.div`
  margin: 20px;
  border-radius: 10px;
  box-shadow: ${shadow};
  overflow: hidden;

  @media (max-width: 480px) {
    margin: 10px;
    border-radius: 8px;
  }
`;

/* ─── header: title + search ────────────────────────────────────────────── */
export const FAQHeader = styled.div`
  background: linear-gradient(
    90deg,
    ${greenLight} 0%,
    rgba(32, 184, 32, 0.04) 100%
  );
  border-bottom: 1px solid ${border};
  padding: 40px 50px 32px;
  text-align: center;

  h2 {
    font-size: 2rem;
    font-weight: 700;
    margin: 0 0 10px;
    span {
      color: ${green};
    }
  }

  .faq-sub {
    font-size: 15px;
    font-weight: 500;
    color: ${textMuted};
    margin: 0;
  }

  /* search bar */
  .faq-search {
    position: relative;
    max-width: 440px;
    margin: 24px auto 0;

    .search-icon {
      position: absolute;
      left: 14px;
      top: 50%;
      transform: translateY(-50%);
      color: ${textMuted};
      display: flex;
      align-items: center;
      pointer-events: none;
    }

    input {
      width: 100%;
      padding: 13px 18px 13px 44px;
      border: 1.5px solid ${border};
      border-radius: 8px;
      font-size: 14px;
      font-family: inherit;
      font-weight: 500;
      outline: none;
      background: #fff;
      color: #111;
      box-sizing: border-box;
      transition: border-color 0.2s, box-shadow 0.2s;

      &::placeholder {
        color: #c0c8d2;
        font-weight: 400;
      }

      &:focus {
        border-color: ${green};
        box-shadow: 0 0 0 3px ${greenLight};
      }
    }
  }

  /* tablet */
  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 32px 30px 28px;
    h2 {
      font-size: 1.7rem;
    }
  }

  /* mobile */
  @media (max-width: 767px) {
    padding: 24px 16px 20px;
    h2 {
      font-size: 1.4rem;
    }
    .faq-sub {
      font-size: 13px;
    }
    .faq-search {
      margin-top: 16px;
    }
  }
`;

/* ─── body: categories + accordion list ────────────────────────────────── */
export const FAQBody = styled.div`
  padding: 32px 50px 40px;

  /* category filter chips */
  .faq-cats {
    ${FlexBox({ justify: "center", gap: "8px" })};
    flex-wrap: wrap;
    margin-bottom: 28px;

    .cat-btn {
      padding: 8px 18px;
      border-radius: 99px;
      border: 1.5px solid ${border};
      background: #fff;
      font-size: 13px;
      font-weight: 600;
      color: ${textMuted};
      cursor: pointer;
      transition: background 0.2s, color 0.2s, border-color 0.2s;

      &:hover,
      &.active {
        background: ${green};
        color: #fff;
        border-color: ${green};
      }
    }
  }

  /* accordion list */
  .faq-list {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
  }

  /* tablet */
  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 28px 30px 36px;
  }

  /* mobile */
  @media (max-width: 767px) {
    padding: 20px 16px 28px;

    .faq-cats {
      gap: 6px;
      margin-bottom: 20px;

      .cat-btn {
        padding: 7px 14px;
        font-size: 12px;
      }
    }
  }
`;

/* ─── single accordion item ─────────────────────────────────────────────── */
export const FAQItem = styled.div<{ $open: boolean }>`
  background: #fff;
  border: 1.5px solid ${({ $open }) => ($open ? green : border)};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: ${({ $open }) =>
    $open
      ? "0 6px 24px rgba(32,184,32,0.13)"
      : "0 2px 8px rgba(0,0,0,0.04)"};
  transition: border-color 0.25s, box-shadow 0.25s;

  /* question row (clickable) */
  .faq-question {
    width: 100%;
    ${FlexBox({ justify: "flex-start", align: "center", gap: "14px" })};
    padding: 18px 22px;
    background: none;
    border: none;
    cursor: pointer;
    text-align: left;

    .faq-item-icon {
      width: 38px;
      height: 38px;
      min-width: 38px;
      border-radius: 10px;
      background: ${({ $open }) => ($open ? green : greenLight)};
      color: ${({ $open }) => ($open ? "#fff" : green)};
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      transition: background 0.25s, color 0.25s;
    }

    .faq-question-text {
      flex: 1;
      font-size: 15px;
      font-weight: 700;
      color: #111;
      text-align: left;
      line-height: 1.4;
    }

    .faq-toggle {
      width: 28px;
      height: 28px;
      min-width: 28px;
      border-radius: 50%;
      background: ${({ $open }) => ($open ? greenLight : "#f3f4f6")};
      ${FlexBox({ justify: "center", align: "center" })};
      color: ${green};
      font-size: 20px;
      font-weight: 700;
      transition: transform 0.3s, background 0.25s;
      transform: ${({ $open }) => ($open ? "rotate(45deg)" : "rotate(0deg)")};
      flex-shrink: 0;
    }
  }

  /* answer panel */
  .faq-answer {
    max-height: ${({ $open }) => ($open ? "400px" : "0")};
    overflow: hidden;
    transition: max-height 0.35s ease;

    .faq-answer-inner {
      padding: 0 22px 20px 74px;
      font-size: 14px;
      font-weight: 500;
      color: ${textMuted};
      line-height: 1.75;
    }
  }

  /* mobile */
  @media (max-width: 767px) {
    .faq-question {
      padding: 14px 14px;
      gap: 10px;

      .faq-question-text {
        font-size: 14px;
      }
    }

    .faq-answer .faq-answer-inner {
      padding: 0 14px 16px 62px;
      font-size: 13px;
    }
  }
`;

/* ─── bottom CTA block ──────────────────────────────────────────────────── */
export const FAQCTA = styled.div`
  margin: 0 50px 40px;
  padding: 32px;
  text-align: center;
  background: linear-gradient(
    135deg,
    ${greenLight} 0%,
    rgba(32, 184, 32, 0.04) 100%
  );
  border: 1.5px solid ${greenSoft};
  border-radius: 10px;

  p {
    font-size: 15px;
    font-weight: 500;
    color: ${textMuted};
    margin: 0 0 18px;

    strong {
      color: #111;
      font-weight: 700;
    }
  }

  .cta-buttons {
    ${FlexBox({ justify: "center", gap: "12px" })};
    flex-wrap: wrap;

    .btn-primary {
      ${FlexBox({ align: "center", gap: "8px" })};
      padding: 13px 28px;
      background: ${green};
      color: #fff;
      border: none;
      border-radius: 8px;
      font-size: 15px;
      font-weight: 700;
      cursor: pointer;
      box-shadow: 0 6px 28px rgba(32, 184, 32, 0.22);
      transition: background 0.2s, transform 0.15s;

      &:hover {
        background: #17981a;
        transform: translateY(-2px);
      }
    }

    .btn-secondary {
      ${FlexBox({ align: "center", gap: "8px" })};
      padding: 13px 28px;
      background: #fff;
      color: ${green};
      border: 1.5px solid ${border};
      border-radius: 8px;
      font-size: 15px;
      font-weight: 700;
      cursor: pointer;
      transition: border-color 0.2s, transform 0.15s;

      &:hover {
        border-color: ${green};
        transform: translateY(-2px);
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
    padding: 22px 16px;

    p {
      font-size: 14px;
      margin-bottom: 14px;
    }

    .cta-buttons {
      gap: 10px;

      .btn-primary,
      .btn-secondary {
        width: 100%;
        justify-content: center;
        padding: 12px 20px;
        font-size: 14px;
      }
    }
  }
`;
