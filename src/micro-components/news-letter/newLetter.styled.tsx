import { FlexBox } from "@/styles/mixins";
import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0%   { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

/* ── outer card ── */
export const NewsLetterMain = styled.div`
  margin: 0 20px 48px;
  border-radius: 20px;
  overflow: hidden;
  background: linear-gradient(135deg, #f0faf0 0%, #ffffff 60%, #f7fef7 100%);
  border: 1px solid rgba(25, 155, 25, 0.13);
  box-shadow:
    0 2px 8px rgba(0, 0, 0, 0.05),
    0 0 0 1px rgba(255, 255, 255, 0.9) inset;
  position: relative;

  /* decorative blob */
  &::before {
    content: "";
    position: absolute;
    top: -80px;
    right: -80px;
    width: 260px;
    height: 260px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(25, 155, 25, 0.08) 0%, transparent 70%);
    pointer-events: none;
  }

  @media (max-width: 480px) {
    margin: 0 10px 32px;
    border-radius: 14px;
  }
`;

/* ── header ── */
export const NewsLetterHeader = styled.div`
  ${FlexBox({ justify: "space-between", align: "center" })}
  padding: 36px 36px 28px;
  border-bottom: 1px solid rgba(25, 155, 25, 0.1);

  .news-letter-title-container {
    width: 52%;

    h2 {
      font-size: 2rem;
      font-weight: 800;
      margin: 0 0 10px;
      color: #111827;
      line-height: 1.25;
      letter-spacing: -0.5px;

      .highlight-news-letter {
        color: var(--green);
      }
    }

    p {
      font-size: 16px;
      font-weight: 400;
      color: #6b7280;
      line-height: 1.65;
      margin: 0;
      max-width: 420px;
    }
  }

  .news-letter-rating-container {
    ${FlexBox({ justify: "flex-end", gap: "12px", align: "center" })};
    width: 44%;

    .news-letter-subscriber,
    .news-letter-rating,
    .news-letter-digest {
      ${FlexBox({ direction: "column", align: "center", gap: "4px" })};
      background: rgba(25, 155, 25, 0.06);
      border: 1px solid rgba(25, 155, 25, 0.15);
      border-radius: 14px;
      padding: 16px 22px;
      min-width: 90px;

      .title {
        color: var(--green);
        font-size: 28px;
        font-weight: 800;
        line-height: 1;
        letter-spacing: -0.5px;
      }

      .sub-title {
        font-size: 12px;
        font-weight: 500;
        color: #6b7280;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }
    }
  }

  /* tablet */
  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 28px 24px 22px;
    .news-letter-title-container {
      width: 54%;
      h2 { font-size: 1.6rem; }
      p  { font-size: 13px; }
    }
    .news-letter-rating-container {
      width: 44%;
      gap: 8px;
      .news-letter-subscriber,
      .news-letter-rating,
      .news-letter-digest {
        padding: 12px 14px;
        min-width: 72px;
        .title    { font-size: 22px; }
        .sub-title{ font-size: 11px; }
      }
    }
  }

  /* mobile */
  @media (max-width: 767px) {
    ${FlexBox({ direction: "column", align: "flex-start", gap: "20px" })};
    padding: 24px 20px 20px;

    .news-letter-title-container {
      width: 100%;
      h2 { font-size: 1.45rem; }
      p  { font-size: 13px; }
    }
    .news-letter-rating-container {
      width: 100%;
      justify-content: flex-start;
      .news-letter-subscriber,
      .news-letter-rating,
      .news-letter-digest {
        flex: 1;
        .title    { font-size: 20px; }
        .sub-title{ font-size: 11px; }
      }
    }
  }

  @media (max-width: 400px) {
    padding: 18px 16px 16px;
    .news-letter-title-container h2 { font-size: 1.2rem; }
  }
`;

/* ── body ── */
export const NewsLetterBody = styled.div`
  ${FlexBox({
    justify: "flex-start",
    align: "flex-start",
    direction: "column",
    gap: "18px",
  })}
  border-bottom: 1px solid rgba(25, 155, 25, 0.1);
  padding: 28px 36px;

  .subscribe-by-email-container {
    width: 100%;
    ${FlexBox({ justify: "flex-start", gap: "10px" })}

    .subscribe-email-input {
      width: 28%;
      border: 1.5px solid #e5e7eb !important;
      border-radius: 10px;
      padding: 13px 18px;
      font-size: 14px;
      font-weight: 400;
      color: #111827;
      background: #fff;
      transition: border-color 0.2s, box-shadow 0.2s;

      &::placeholder { color: #9ca3af; }

      &:focus {
        outline: none;
        border-color: var(--green) !important;
        box-shadow: 0 0 0 3px rgba(25, 155, 25, 0.12);
      }
    }

    .subscribe-btn {
      width: 180px;
      border: none;
      border-radius: 10px;
      background: linear-gradient(135deg, #1db81d 0%, #199b19 100%);
      color: white;
      padding: 13px 20px;
      font-size: 15px;
      font-weight: 700;
      cursor: pointer;
      white-space: nowrap;
      letter-spacing: 0.01em;
      transition: transform 0.22s ease, box-shadow 0.22s ease;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 18px rgba(25, 155, 25, 0.3);
      }
    }
  }

  .subscribe-checkbox-container {
    ${FlexBox({ gap: "20px" })}

    .responsive-wrapper {
      ${FlexBox({ gap: "20px" })}
    }

    .checkbox-container {
      ${FlexBox({ gap: "7px", align: "center" })}
      cursor: pointer;

      input { display: none; }

      .checkmark {
        width: 20px;
        height: 20px;
        min-width: 20px;
        border: 2px solid #d1d5db;
        border-radius: 6px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        position: relative;
        overflow: hidden;
        flex-shrink: 0;
        transition: border-color 0.2s, background 0.2s;
      }

      .checkmark::after {
        content: "";
        position: absolute;
        display: none;
      }

      input:checked + .checkmark {
        background: var(--green);
        border-color: var(--green);
      }

      input:checked + .checkmark::after {
        display: block;
        left: 5px;
        top: 2px;
        width: 6px;
        height: 11px;
        border: solid #fff;
        border-width: 0 2.5px 2.5px 0;
        transform: rotate(45deg);
      }

      .checkbox-description {
        font-size: 15px;
        font-weight: 500;
        color: #6b7280;
      }
    }
  }

  /* tablet */
  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 22px 24px;
    .subscribe-by-email-container {
      .subscribe-email-input { width: 40%; }
      .subscribe-btn { width: 160px; font-size: 14px; }
    }
    .subscribe-checkbox-container {
      flex-wrap: wrap;
      gap: 12px;
      .responsive-wrapper { gap: 16px; }
    }
  }

  /* mobile */
  @media (max-width: 767px) {
    padding: 18px 20px;
    gap: 14px;
    .subscribe-by-email-container {
      flex-direction: column;
      align-items: stretch;
      gap: 8px;
      .subscribe-email-input {
        width: 100%;
        padding: 12px 14px;
        box-sizing: border-box;
      }
      .subscribe-btn {
        width: 100%;
        font-size: 15px;
        padding: 12px 14px;
        box-sizing: border-box;
      }
    }
    .subscribe-checkbox-container {
      flex-direction: column;
      align-items: flex-start;
      gap: 8px;
      .responsive-wrapper {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        gap: 16px;
        width: 100%;
      }
      .checkbox-container {
        ${FlexBox({ justify: "flex-start", align: "center", gap: "6px" })};
        flex: 1;
        min-width: 0;
        .checkbox-description {
          font-size: 13px;
          white-space: normal;
          word-break: break-word;
        }
      }
    }
  }

  @media (max-width: 400px) {
    padding: 14px 16px;
    .subscribe-checkbox-container .responsive-wrapper { gap: 8px; }
  }

  @media (max-width: 360px) {
    padding: 12px;
    .subscribe-checkbox-container {
      gap: 4px;
      .responsive-wrapper {
        flex-direction: column;
        gap: 4px;
        width: 100%;
      }
      .checkbox-container {
        width: 100%;
        .checkbox-description { font-size: 12px; }
      }
    }
  }
`;

/* ── footer feature strip ── */
export const NewsLetterFooter = styled.div`
  ${FlexBox({ justify: "flex-start" })};
  align-items: stretch;

  .grocery-deals,
  .food-arrivals,
  .subscriber-coupons {
    flex: 1;
    ${FlexBox({ justify: "flex-start", align: "center", gap: "14px" })};
    padding: 22px 28px;
    transition: background 0.25s ease;
    cursor: default;

    &:hover {
      background: rgba(25, 155, 25, 0.04);
    }

    /* icon wrapper */
    svg, img {
      flex-shrink: 0;
      width: 42px;
      height: 42px;
    }

    .offer-container {
      ${FlexBox({ justify: "flex-start", direction: "column", align: "flex-start", gap: "3px" })};

      .offer-title {
        font-size: 17px;
        font-weight: 700;
        color: #111827;
        line-height: 1.3;
      }

      .offer-description {
        font-size: 15px;
        font-weight: 400;
        color: #6b7280;
        line-height: 1.5;
      }
    }
  }

  .grocery-deals,
  .food-arrivals {
    border-right: 1px solid rgba(25, 155, 25, 0.1);
  }

  /* tablet */
  @media (min-width: 768px) and (max-width: 1024px) {
    .grocery-deals,
    .food-arrivals,
    .subscriber-coupons {
      padding: 18px 16px;
      .offer-container {
        .offer-title       { font-size: 14px; }
        .offer-description { font-size: 12px; }
      }
    }
  }

  /* mobile */
  @media (max-width: 767px) {
    ${FlexBox({ direction: "column" })};

    .grocery-deals,
    .food-arrivals {
      border-right: none;
      border-bottom: 1px solid rgba(25, 155, 25, 0.1);
      width: 100%;
      box-sizing: border-box;
      padding: 16px 20px;
    }
    .subscriber-coupons {
      width: 100%;
      box-sizing: border-box;
      padding: 16px 20px;
    }
    .grocery-deals,
    .food-arrivals,
    .subscriber-coupons {
      ${FlexBox({ justify: "flex-start", align: "center", gap: "12px" })};
      .offer-container {
        .offer-title       { font-size: 14px; }
        .offer-description { font-size: 13px; }
      }
    }
  }

  @media (max-width: 400px) {
    .grocery-deals,
    .food-arrivals,
    .subscriber-coupons {
      padding: 12px 16px;
      .offer-container {
        .offer-title       { font-size: 13px; }
        .offer-description { font-size: 12px; }
      }
    }
  }
`;
