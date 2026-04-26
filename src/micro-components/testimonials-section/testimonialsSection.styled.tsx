"use client";
import { FlexBox } from "@/styles/mixins";
import styled from "styled-components";

export const StyledTestimonialsContainer = styled.section`
  padding: 0px 40px;
  background: #fcfdfc;
  border-radius: 40px;

  @media (max-width: 1024px) {
    margin: 40px auto;
    padding: 60px 20px;
  }

  @media (max-width: 600px) {
    padding: 40px 16px;
    border-radius: 24px;
  }
`;

export const StyledTestimonialsHeader = styled.div`
  ${FlexBox({ direction: "column", align: "center", gap: "12px" })};
  text-align: center;
  margin-bottom: 48px;
`;

export const StyledTestimonialsTitle = styled.h2`
  font-size: clamp(28px, 4vw, 42px);
  font-weight: 800;
  color: #1a1e23;
  margin: 0;
  line-height: 1.2;
  letter-spacing: -0.02em;
  text-align: center;

  span {
    color: var(--green);
  }
`;

export const StyledTestimonialsDesc = styled.p`
  font-size: 16px;
  color: #6b7280;
  max-width: 600px;
  text-align: center;
  line-height: 1.6;
  margin: 0;
`;

export const StyledTestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const StyledTestimonialCard = styled.div`
  background: #ffffff;
  padding: 40px;
  border-radius: 24px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.1);
  ${FlexBox({ direction: "column", align: "flex-start", gap: "20px" })};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(25, 155, 25, 0.1);
    border-color: rgba(25, 155, 25, 0.3);
  }
`;


export const StyledStarWrap = styled.div`
  ${FlexBox({ direction: "row", gap: "4px" })};
  color: #fbbf24;
  font-size: 20px;
`;

export const StyledQuote = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #4b5563;
  font-style: italic;
  margin: 0;
`;

export const StyledAuthorInfo = styled.div`
  ${FlexBox({ direction: "column", align: "flex-start", gap: "2px" })};
`;

export const StyledAuthorName = styled.h4`
  font-size: 18px;
  font-weight: 700;
  color: #111827;
  margin: 0;
`;

export const StyledAuthorRole = styled.p`
  font-size: 14px;
  color: #9ca3af;
  margin: 0;
`;
