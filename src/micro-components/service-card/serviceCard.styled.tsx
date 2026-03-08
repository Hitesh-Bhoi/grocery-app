'use client';
import { FlexBox } from "@/styles/mixins";
import styled from "styled-components";

export const StyledInfoCard = styled.div`
  flex: 1 1 calc(10% - 20px);
  max-width: calc(25% - 20px);

  padding: 30px 20px;
  text-align: center;
  border-radius: 12px;
  background: #fff;

  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.08);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 20px;
    z-index: 2;
  }

  /* Tablet */
  @media (max-width: 1024px) {
    flex: 1 1 calc(15% - 0px);
    max-width: calc(25% - 0px);
  }

  /* Mobile */
  @media (max-width: 600px) {
    flex: 1 1 100%;
    max-width: 100%;
  }
`;

export const StyledCardImg = styled.div`
    text-align: center;
`

export const StyledInfoCardContainer = styled.div`
  ${FlexBox({ justify: "space-between",wrap: "wrap", gap: "20px" })};
  padding: 30px;
  margin: 20px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;

export const StyledCardTitle = styled.p`
    margin: 0;
    text-align: center;
    font-size: 18px;
    font-weight: 600;
`

export const StyledCardDescription = styled.p`
    margin: 0;
    padding-top: 6px;
    text-align: center;
    font-size: 14px;
    font-weight: 500;
`