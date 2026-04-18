"use client";
import { FlexBox } from "@/styles/mixins";
import styled, { keyframes } from "styled-components";

const floatUp = keyframes`
  from { transform: translateY(0px); }
  to   { transform: translateY(-6px); }
`;

const iconPulse = keyframes`
  0%, 100% { box-shadow: 0 0 0 0 rgba(25, 155, 25, 0.35); }
  50%       { box-shadow: 0 0 0 10px rgba(25, 155, 25, 0); }
`;

/* ── outer wrapper ── */
export const StyledInfoCardContainer = styled.div`
  ${FlexBox({ justify: "space-between", wrap: "wrap", gap: "0px" })};
  padding: 0 20px;
  margin: 0 20px 64px;
  background: linear-gradient(135deg, #f0faf0 0%, #ffffff 50%, #f0faf0 100%);
  border-radius: 20px;
  border: 1px solid rgba(25, 155, 25, 0.3);
  box-shadow:
    0 10px 40px rgba(0, 0, 0, 0.08),
    0 0 0 1px rgba(255, 255, 255, 0.8) inset;
  overflow: hidden;
  position: relative;

  /* faint decorative arc */
  &::before {
    content: "";
    position: absolute;
    top: -60px;
    right: -60px;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(25, 155, 25, 0.07) 0%,
      transparent 70%
    );
    pointer-events: none;
  }

  @media (max-width: 1024px) {
    margin: 10px;
  }
`;

/* ── single card ── */
export const StyledInfoCard = styled.div`
  flex: 1 1 calc(25% - 2px);
  max-width: calc(25%);
  min-width: 240px;

  ${FlexBox({ direction: "column", align: "center", gap: "12px" })};
  padding: 36px 24px 32px;
  text-align: center;
  cursor: pointer;
  position: relative;
  transition:
    background-color 0.28s ease,
    transform 0.28s ease;

  /* right-side divider between cards */
  &:not(:last-child)::after {
    content: "";
    position: absolute;
    right: 0;
    top: 20%;
    height: 60%;
    width: 0;
    border-right: 2px solid rgba(7, 66, 7, 0.25);
  }

  &:hover {
    background: rgba(25, 155, 25, 0.04);
    transform: translateY(-4px);
    z-index: 2;
  }

  /* Tablet / Small Laptops (2x2 Grid) */
  @media (max-width: 1024px) {
    flex: 1 1 50%;
    max-width: 50%;
    min-width: 50%;

    /* Remove the default pseudo 'after' pipe on this view */
    &::after {
      display: none !important;
    }

    /* Add horizontal border for top row */
    border-bottom: 1px solid rgba(25, 155, 25, 0.15);
    &:nth-child(3),
    &:nth-child(4) {
      border-bottom: none;
    }

    /* Add vertical border for left column */
    &:nth-child(odd) {
      border-right: 1px solid rgba(25, 155, 25, 0.15);
    }
  }

  /* Mobile (1x4 Stack) */
  @media (max-width: 600px) {
    flex: 1 1 100%;
    max-width: 100%;
    min-width: 100%;

    /* Clear the 2x2 right borders */
    &:nth-child(odd) {
      border-right: none;
    }

    border-bottom: 1px solid rgba(25, 155, 25, 0.15);
    &:last-child {
      border-bottom: none;
    }
  }
`;

/* ── icon wrapper circle ── */
export const StyledCardImg = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: linear-gradient(135deg, #e8f8e8 0%, #d1f0d1 100%);
  border: 1.5px solid rgba(25, 155, 25, 0.2);
  ${FlexBox({ justify: "center", align: "center" })};
  flex-shrink: 0;
  transition:
    box-shadow 0.3s ease,
    transform 0.3s ease;

  img {
    transition: transform 0.3s ease;
  }

  ${StyledInfoCard}:hover & {
    animation: ${iconPulse} 1.2s ease-out 1;
    transform: scale(1.1);
    img {
      transform: scale(1.05);
    }
  }
`;

/* ── title ── */
export const StyledCardTitle = styled.p`
  margin: 0;
  font-size: 17px;
  font-weight: 700;
  color: #1a1a1a;
  letter-spacing: -0.2px;
  line-height: 1.3;
`;

/* ── description ── */
export const StyledCardDescription = styled.p`
  margin: 0;
  font-size: 15px;
  font-weight: 400;
  color: #6b7280;
  line-height: 1.6;
  max-width: 200px;
`;
