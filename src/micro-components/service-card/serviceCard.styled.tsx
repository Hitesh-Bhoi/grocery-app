"use client";
import { FlexBox } from "@/styles/mixins";
import styled, { keyframes } from "styled-components";

const floatUp = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(-10px); }
`;

const iconPulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

/* ── main section wrapper ── */
export const StyledServiceSection = styled.section`
  margin: 80px auto;
  width: calc(100% - 40px);

  @media (max-width: 1024px) {
    margin: 40px auto;
    width: calc(100% - 20px);
  }
`;

/* ── outer wrapper ── */
export const StyledInfoCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  padding: 40px 0;


  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

/* ── Section Header ── */
export const StyledSectionHeader = styled.div`
  ${FlexBox({ direction: "column", align: "center", gap: "12px" })};
`;

export const StyledMainTitle = styled.h2`
  font-size: clamp(28px, 4vw, 42px);
  font-weight: 800;
  color: #1a1e23;
  margin: 0;
  line-height: 1.2;
  letter-spacing: -0.02em;
  text-align: center;
  margin-top: 20px;

  span {
    color: var(--green);
  }
`;

export const StyledSectionDesc = styled.p`
  font-size: 16px;
  color: #6b7280;
  max-width: 600px;
  text-align: center;
  line-height: 1.6;
  margin: 0;
`;



/* ── single card ── */
export const StyledInfoCard = styled.div`
  background: #ffffff;
  border-radius: 24px;
  padding: 40px 32px;
  text-align: left; /* Changed to left align as per screenshot */
  cursor: pointer;
  position: relative;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
  ${FlexBox({ direction: "column", align: "flex-start", gap: "20px" })};

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
    border-color: rgba(25, 155, 25, 0.2);
  }
`;

/* ── icon wrapper circle ── */
export const StyledCardImg = styled.div<{ $bgColor?: string; $iconColor?: string }>`
  width: 64px;
  height: 64px;
  border-radius: 18px; /* Slightly rounded square or circle, screenshot shows circle */
  border-radius: 50%;
  background: ${props => props.$bgColor || "#e8f8e8"};
  ${FlexBox({ justify: "center", align: "center" })};
  flex-shrink: 0;
  transition: all 0.3s ease;
  font-size: 28px;
  color: ${props => props.$iconColor || "#199b19"};

  ${StyledInfoCard}:hover & {
    transform: scale(1.1) rotate(5deg);
    animation: ${iconPulse} 1s ease-in-out infinite;
  }
`;

/* ── title ── */
export const StyledCardTitle = styled.h3`
  margin: 0;
  font-size: 20px;
  font-weight: 800;
  color: #111827;
  letter-spacing: -0.02em;
  line-height: 1.2;
`;

/* ── description ── */
export const StyledCardDescription = styled.p`
  margin: 0;
  font-size: 15px;
  font-weight: 500;
  color: #6b7280;
  line-height: 1.6;
  max-width: 100%;
`;

