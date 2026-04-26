"use client";
import { FlexBox } from "@/styles/mixins";
import styled from "styled-components";

export const StyledStatsContainer = styled.section`
  margin: 80px auto;
  width: calc(100% - 40px);
  background-color: var(--green);
  padding: 80px 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  align-items: center;
  justify-items: center;
  border-radius: 32px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 48px;
    padding: 60px 20px;
    margin: 40px auto;
    width: calc(100% - 20px);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    padding: 48px 20px;
    gap: 40px;
    border-radius: 24px;
  }
`;


export const StyledStatItem = styled.div`
  ${FlexBox({ direction: "column", align: "center", gap: "16px" })};
  text-align: center;
  color: #ffffff;
`;

export const StyledStatIconWrap = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  ${FlexBox({ justify: "center", align: "center" })};
  font-size: 32px;
  color: #ffffff;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px) scale(1.1);
    background: rgba(255, 255, 255, 0.25);
  }
`;

export const StyledStatValue = styled.h3`
  font-size: clamp(20px, 2vw, 28px);
  font-weight: 800;
  margin: 0;
  line-height: 1;
  letter-spacing: -0.02em;
`;


export const StyledStatLabel = styled.p`
  font-size: 16px;
  font-weight: 500;
  opacity: 0.9;
  margin: 0;
`;
