"use client";
import { FlexBox } from "@/styles/mixins";
import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.5; }
`;

const flipIn = keyframes`
  from { transform: rotateX(-90deg); opacity: 0; }
  to   { transform: rotateX(0deg);   opacity: 1; }
`;

export const StyledDiscountCardContainer = styled.div`
  ${FlexBox({ justify: "space-between", align: "center" })};
  background: #199b19;
  margin: 48px 20px;
  padding: 40px 44px;
  border-radius: 20px;
  gap: 24px;
  overflow: hidden;
  position: relative;

  /* subtle green glow ring */
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 20px;
    box-shadow: inset 0 0 0 1.5px rgba(32, 184, 32, 0.25);
    pointer-events: none;
  }

  @media (max-width: 900px) {
    ${FlexBox({ direction: "column", align: "flex-start" })};
    margin: 24px 12px;
    padding: 28px 24px;
  }
`;

export const StyledDiscountSection = styled.div`
  flex: 1;
  ${FlexBox({ direction: "column", justify: "start", align: "start", gap: "20px" })};
`;

export const StyledDiscountContent = styled.div`
  ${FlexBox({ direction: "column", justify: "start", align: "start", gap: "10px" })};

  .time-offer-tag {
    ${FlexBox({ align: "center", gap: "6px" })};
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: #d4f7d4;
    background: rgba(32, 184, 32, 0.2);
    border: 1px solid rgba(32, 184, 32, 0.45);
    backdrop-filter: blur(8px);
    border-radius: 99px;
    padding: 5px 12px;

    .tag-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #4ade80;
      flex-shrink: 0;
      animation: ${pulse} 1.8s ease-in-out infinite;
    }
  }

  .discount-title {
    font-size: clamp(22px, 3vw, 36px);
    font-weight: 900;
    color: #ffffff;
    line-height: 1.15;
    letter-spacing: -0.5px;
    margin: 0;

    .discount-number {
      color: #fde047;
      position: relative;
    }
  }

  .discount-description {
    font-size: 14px;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.65;
    max-width: 480px;
    margin: 0;
  }
`;

export const StyledDiscountButton = styled.div`
  ${FlexBox({ align: "center", gap: "10px" })};
  flex-wrap: wrap;

  button {
    border-radius: 10px;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.22s ease;
    white-space: nowrap;
  }

  .discount-code {
    ${FlexBox({ align: "center", gap: "8px" })};
    padding: 11px 18px;
    background: rgba(255, 220, 0, 0.15);
    border: 1.5px dashed #fde047;
    color: #fde047;
    letter-spacing: 0.08em;
    font-size: 13px;

    .code-text { font-weight: 800; }

    .copy-icon {
      font-size: 14px;
      opacity: 0.75;
      transition: opacity 0.2s;
    }

    &:hover {
      background: rgba(253, 224, 71, 0.22);
      border-color: #fde047;
      .copy-icon { opacity: 1; }
    }
  }

  .claim-discount {
    padding: 11px 20px;
    background: #199b19;
    color: #fff;
    border: none;
    box-shadow: none;

    &:hover {
      background: #147e14;
      transform: translateY(-2px);
      box-shadow: none;
    }
  }

  .view-all-deals {
    padding: 11px 18px;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(8px);
    color: rgba(255, 255, 255, 0.88);

    &:hover {
      background: rgba(255, 255, 255, 0.16);
      border-color: rgba(255, 255, 255, 0.4);
    }
  }

  @media (max-width: 600px) {
    gap: 8px;
    button { font-size: 13px; padding: 10px 14px; }
  }
`;

export const StyledOfferExpireSection = styled.div`
  flex-shrink: 0;
  ${FlexBox({ direction: "column", align: "center", gap: "12px" })};
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(16px);
  border-radius: 16px;
  padding: 28px 32px;
  min-width: 240px;

  .offer-title {
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: rgba(255, 255, 255, 0.5);
    margin: 0;
  }

  .timer-row {
    ${FlexBox({ align: "center", gap: "8px" })};
  }

  .timer-colon {
    font-size: 28px;
    font-weight: 800;
    color: rgba(255, 255, 255, 0.4);
    line-height: 1;
    margin-bottom: 16px;
  }

  @media (max-width: 900px) {
    width: 100%;
    padding: 20px;
    min-width: unset;
  }
`;

export const StyledTimerBlock = styled.div`
  ${FlexBox({ direction: "column", align: "center", gap: "4px" })};

  .timer-number {
    display: block;
    font-size: 36px;
    font-weight: 900;
    color: #ffffff;
    letter-spacing: -1px;
    line-height: 1;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 10px;
    padding: 10px 14px;
    min-width: 60px;
    text-align: center;
    animation: ${flipIn} 0.3s ease;
  }

  .timer-label {
    font-size: 9px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: rgba(255, 255, 255, 0.45);
  }
`;