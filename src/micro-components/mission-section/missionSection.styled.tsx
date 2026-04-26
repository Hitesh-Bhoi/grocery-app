"use client";
import { FlexBox } from "@/styles/mixins";
import styled from "styled-components";

export const StyledMissionContainer = styled.section`
  margin: auto;
  width: calc(100% - 40px);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  align-items: stretch;
  background: #ffffff;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.05);

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    margin: 40px auto;
    width: calc(100% - 30px);
    border-radius: 24px;
  }
`;

export const StyledMissionImageWrap = styled.div`
  width: 100%;
  /* height: 580px; */
  position: relative;
  overflow: hidden;
  background: #000;
  border-radius: 30px 0 0 30px;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
    display: block;
  }

  @media (max-width: 1024px) {
    height: 350px;
    border-radius: 24px 24px 0 0;
  }
`;

export const StyledMissionContent = styled.div`
  ${FlexBox({ direction: "column", align: "flex-start", gap: "20px" })};
  padding: 10px;
  justify-content: flex-start;


  @media (max-width: 600px) {
    padding: 30px 20px;
  }
`;

export const StyledMissionTitle = styled.p`
  width: 100%;
  font-size: clamp(26px, 2vw, 32px);
  font-weight: 800;
  color: #111827;
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin: 0;

  span {
    color: var(--green);
    display: inline;
    margin-left: 6px;
  }
`;

export const StyledMissionDesc = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #4b5563;
  margin: 0;
`;

export const StyledMissionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  margin-top: 20px;
  width: 100%;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const StyledMissionItem = styled.div`
  ${FlexBox({ direction: "row", align: "flex-start", gap: "16px" })};
`;

export const StyledMissionIcon = styled.div<{
  $bgColor: string;
  $color: string;
}>`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: ${(props) => props.$bgColor};
  color: ${(props) => props.$color};
  ${FlexBox({ justify: "center", align: "center" })};
  flex-shrink: 0;
  font-size: 24px;
`;

export const StyledMissionItemText = styled.div`
  ${FlexBox({ direction: "column", align: "flex-start", gap: "4px" })};
`;

export const StyledMissionItemTitle = styled.h4`
  font-size: 18px;
  font-weight: 700;
  color: #111827;
  margin: 0;
`;

export const StyledMissionItemDesc = styled.p`
  font-size: 14px;
  color: #6b7280;
  line-height: 1.5;
  margin: 0;
`;
