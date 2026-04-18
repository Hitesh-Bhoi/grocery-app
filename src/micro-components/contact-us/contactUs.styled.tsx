import { FlexBox } from "@/styles/mixins";
import styled, { keyframes } from "styled-components";

/* ─── tokens ─────────────────────────────────────────────────────────────── */
const green      = "var(--green)";
const greenLight = "rgba(25,155,25,0.08)";
const greenMid   = "rgba(25,155,25,0.14)";
const greenSoft  = "rgba(25,155,25,0.22)";
const borderGrey = "#e5e7eb";
const borderGreen= "rgba(25,155,25,0.15)";
const textMuted  = "#6b7280";

const pulseDot = keyframes`
  0%, 100% { opacity: 1; transform: scale(1);  }
  50%       { opacity: 0.4; transform: scale(0.85); }
`;

/* ─── outer wrapper ──────────────────────────────────────────────────────── */
export const ContactUsMain = styled.div`
  margin: 0 20px 64px;
  border-radius: 20px;
  overflow: hidden;
  background: linear-gradient(135deg, #f0faf0 0%, #ffffff 60%, #f7fef7 100%);
  border: 1px solid rgba(25, 155, 25, 0.3);
  box-shadow:
    0 10px 40px rgba(0, 0, 0, 0.08),
    0 0 0 1px rgba(255, 255, 255, 0.9) inset;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: -80px;
    right: -80px;
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

/* ─── header bar ──────────────────────────────────────────────────────────── */
export const ContactUsHeader = styled.div`
  border-bottom: 1px solid ${borderGreen};
  padding: 36px 50px 28px;
  ${FlexBox({ direction: "column", justify: "center", align: "center" })};
  text-align: center;

  .contact-title-block {
    h2 {
      font-size: 2.2rem;
      font-weight: 800;
      margin: 0 0 8px;
      color: #111827;
      letter-spacing: -0.5px;
      line-height: 1.2;
      span { color: ${green}; }
    }
    p {
      font-size: 15px;
      font-weight: 400;
      color: ${textMuted};
      margin: 0 auto;
      max-width: 480px;
      line-height: 1.6;
    }
  }

  .contact-chip {
    ${FlexBox({ align: "center", gap: "8px" })};
    background: ${greenLight};
    border: 1px solid ${greenSoft};
    border-radius: 99px;
    padding: 8px 20px;
    font-size: 12px;
    font-weight: 700;
    color: ${green};
    letter-spacing: 0.06em;
    white-space: nowrap;

    .dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: ${green};
      flex-shrink: 0;
      animation: ${pulseDot} 1.6s ease-in-out infinite;
    }
  }

  /* tablet */
  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 28px 30px 22px;
    .contact-title-block h2 { font-size: 1.65rem; }
  }

  /* mobile */
  @media (max-width: 767px) {
    ${FlexBox({ direction: "column", align: "flex-start", gap: "14px" })};
    padding: 24px 20px 20px;
    .contact-title-block {
      h2 { font-size: 1.4rem; }
      p  { font-size: 13px; }
    }
  }
`;

/* ─── body grid ──────────────────────────────────────────────────────────── */
export const ContactUsBody = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  min-height: 480px;

  @media (min-width: 768px) and (max-width: 1024px) {
    grid-template-columns: 260px 1fr;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

/* ─── left: info + social ────────────────────────────────────────────────── */
export const ContactInfoPanel = styled.div`
  ${FlexBox({ direction: "column", justify: "flex-start", align: "stretch", gap: "4px" })};
  border-right: 1px solid ${borderGreen};
  padding: 36px 28px;
  background: rgba(240, 250, 240, 0.5);

  .info-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
    padding: 16px 0;
    border-bottom: 1px solid ${borderGreen};
    transition: background 0.2s;

    &:first-of-type { padding-top: 0; }

    &:last-of-type {
      border-bottom: none;
      padding-bottom: 0;
    }

    .info-icon {
      width: 46px;
      height: 46px;
      min-width: 46px;
      background: linear-gradient(135deg, #e8f8e8 0%, #d1f0d1 100%);
      border: 1px solid rgba(25,155,25,0.18);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${green};
      flex-shrink: 0;
      transition: background 0.2s, transform 0.2s;
    }

    &:hover .info-icon {
      background: ${green};
      color: #fff;
      transform: scale(1.05);
    }

    .info-text {
      display: flex;
      flex-direction: column;
      gap: 3px;

      h4 {
        font-size: 12px;
        font-weight: 700;
        color: #9ca3af;
        margin: 0;
        text-transform: uppercase;
        letter-spacing: 0.07em;
      }
      p {
        font-size: 14px;
        font-weight: 600;
        color: #111827;
        margin: 0;
        line-height: 1.35;
      }
    }
  }

  .social-buttons {
    ${FlexBox({ gap: "8px" })};
    flex-wrap: wrap;
    margin-top: 8px;

    .social-btn {
      flex: 1;
      min-width: 80px;
      padding: 11px 8px;
      border-radius: 10px;
      background: #fff;
      border: 1.5px solid ${borderGrey};
      color: #374151;
      font-size: 12px;
      font-weight: 700;
      cursor: pointer;
      text-align: center;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      transition: background 0.2s, color 0.2s, border-color 0.2s, transform 0.15s, box-shadow 0.2s;

      &:hover {
        background: ${green};
        color: #fff;
        border-color: ${green};
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(25,155,25,0.25);
      }
    }
  }

  /* mobile */
  @media (max-width: 767px) {
    border-right: none;
    border-bottom: 1px solid ${borderGreen};
    padding: 24px 20px;
    gap: 0;
  }
`;

/* ─── right: message form ────────────────────────────────────────────────── */
export const ContactFormPanel = styled.div`
  padding: 36px 42px;
  ${FlexBox({ direction: "column", justify: "flex-start", align: "stretch", gap: "0px" })};

  .form-heading {
    margin: 0 0 4px;
    font-size: 1.25rem;
    font-weight: 800;
    color: #111827;
    letter-spacing: -0.3px;
  }

  .form-sub {
    font-size: 14px;
    font-weight: 400;
    color: ${textMuted};
    margin: 0 0 20px;
    line-height: 1.55;
  }

  /* topic label */
  .topic-label {
    font-size: 11px;
    font-weight: 700;
    color: #9ca3af;
    letter-spacing: 0.09em;
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  /* topic chips */
  .topic-chips {
    ${FlexBox({ justify: "flex-start", gap: "8px" })};
    flex-wrap: wrap;
    margin-bottom: 22px;

    .chip {
      padding: 7px 18px;
      border-radius: 99px;
      border: 1.5px solid ${borderGrey};
      background: #fff;
      font-size: 13px;
      font-weight: 600;
      color: ${textMuted};
      cursor: pointer;
      transition: background 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;

      &:hover { border-color: ${green}; color: ${green}; }

      &.active {
        background: ${green};
        color: #fff;
        border-color: ${green};
        box-shadow: 0 3px 12px rgba(25,155,25,0.28);
      }
    }
  }

  /* form rows */
  .form-row {
    ${FlexBox({ gap: "16px" })};
    margin-bottom: 16px;
  }

  /* floating-label field */
  .fl-group {
    flex: 1;
    position: relative;
    min-width: 0;

    input,
    textarea {
      width: 100%;
      padding: 20px 14px 8px;
      border: 1.5px solid ${borderGrey};
      border-radius: 10px;
      font-size: 14px;
      font-family: inherit;
      font-weight: 500;
      color: #111827;
      background: #fff;
      outline: none;
      resize: vertical;
      transition: border-color 0.2s, box-shadow 0.2s;
      box-sizing: border-box;

      &:focus {
        border-color: ${green};
        box-shadow: 0 0 0 3px ${greenLight};
      }
    }

    label {
      position: absolute;
      left: 14px;
      top: 14px;
      font-size: 13px;
      font-weight: 500;
      color: #9ca3af;
      pointer-events: none;
      transition: top 0.18s, font-size 0.18s, color 0.18s;
    }

    input:focus ~ label,
    input:not(:placeholder-shown) ~ label,
    textarea:focus ~ label,
    textarea:not(:placeholder-shown) ~ label {
      top: 6px;
      font-size: 10px;
      font-weight: 700;
      color: ${green};
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
  }

  .message-group { margin-bottom: 22px; }

  /* form footer */
  .form-footer {
    ${FlexBox({ justify: "space-between", align: "center", gap: "12px" })};
    flex-wrap: wrap;

    .privacy-note {
      font-size: 12px;
      font-weight: 400;
      color: #9ca3af;

      a {
        color: ${green};
        text-decoration: none;
        font-weight: 600;
        &:hover { text-decoration: underline; }
      }
    }

    .send-btn {
      ${FlexBox({ align: "center", gap: "8px" })};
      padding: 14px 34px;
      background: linear-gradient(135deg, #1db81d 0%, #199b19 100%);
      color: #fff;
      border: none;
      border-radius: 10px;
      font-size: 15px;
      font-weight: 700;
      cursor: pointer;
      box-shadow: 0 6px 20px rgba(25,155,25,0.28);
      transition: transform 0.2s, box-shadow 0.2s;
      white-space: nowrap;
      letter-spacing: 0.01em;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 28px rgba(25,155,25,0.36);
      }
    }
  }

  /* tablet */
  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 28px 24px;
  }

  /* mobile */
  @media (max-width: 767px) {
    padding: 24px 20px;

    .form-row {
      flex-direction: column;
      gap: 10px;
      margin-bottom: 10px;
    }

    .fl-group {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 4px;

      label {
        position: static;
        font-size: 11px;
        font-weight: 700;
        color: ${textMuted};
        text-transform: uppercase;
        letter-spacing: 0.05em;
        pointer-events: auto;
        transition: none;
      }

      input, textarea {
        padding: 11px 12px;
        order: 2;
      }

      label { order: 1; }
    }

    .message-group { margin-bottom: 16px; }

    .form-footer {
      flex-direction: column;
      align-items: flex-start;
      gap: 12px;

      .send-btn {
        width: 100%;
        justify-content: center;
        padding: 13px 20px;
      }
    }
  }

  @media (max-width: 400px) {
    padding: 18px 14px;
  }
`;
