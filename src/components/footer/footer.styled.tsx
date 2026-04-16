"use client";
import { FlexBox } from "@/styles/mixins";
import styled, { keyframes } from "styled-components";

const green      = "var(--green)";
const greenLight = "rgba(25,155,25,0.12)";

/* ─── outer container ────────────────────────────────────────────────────── */
export const StyledFooterContainer = styled.footer`
  background: linear-gradient(135deg, #f0faf0 0%, #ffffff 60%, #f7fef7 100%);
  border-top: 1px solid rgba(25,155,25,0.12);
  padding: 60px 40px 0;
  margin-top: 4px;

  @media (max-width: 768px) {
    padding: 40px 20px 0;
  }
`;

/* ─── main grid row ──────────────────────────────────────────────────────── */
export const StyleFooterInfoDetails = styled.div`
  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr 1fr 1fr;
  gap: 40px;
  padding-bottom: 48px;
  border-bottom: 1px solid rgba(25,155,25,0.12);

  @media (max-width: 767px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    gap: 20px 0;
  }

  @media ((min-width: 768px) and (max-width: 1023px)) {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    gap: 40px 0;
  }
`;

/* ─── logo + contact column ──────────────────────────────────────────────── */
export const StyledLogoWithInfo = styled.div`
  width: 25%;
  ${FlexBox ({ direction: "column", justify: "flex-start", align: "flex-start", gap: "15px" })};
  @media (max-width: 767px) {
    width: 100%;
  }

  @media ((min-width: 768px) and (max-width: 1023px)) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding-bottom: 20px;
  }
`;
export const StyledCompanyInfo = styled.div`
  width: auto;
  ${FlexBox ({ direction: "column", justify: "flex-start", align: "flex-start", gap: "15px" })};

  @media (max-width: 1023px) {
    width: 45%;
    align-items: center;
  }
`;
export const StyledAccountInfo = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 15px;

  @media (max-width: 1023px) {
    width: 45%;
    align-items: center;
  }
`;
export const StyledCorporateInfo = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 15px;

  @media (max-width: 1023px) {
    width: 45%;
    align-items: center;
  }
`;
export const StyledPopularProductInfo = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 15px;

  @media (max-width: 1023px) {
    width: 45%;
    align-items: center;
  }
`;

/* ─── link column base ───────────────────────────────────────────────────── */
const linkColumn = `
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 14px;

  .title {
    font-size: 13px;
    font-weight: 800;
    color: #111827;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin: 0 0 4px;
    position: relative;
    padding-bottom: 10px;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 2px;
      background: var(--green);
      border-radius: 2px;
    }
  }

  span {
    font-size: 14px;
    font-weight: 400;
    color: #6b7280;
    cursor: pointer;
    line-height: 1.4;
    position: relative;
    width: fit-content;
    transition: color 0.2s;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -2px;
      width: 0%;
      height: 1.5px;
      background: var(--green);
      border-radius: 2px;
      transition: width 0.25s ease;
    }

    &:hover {
      color: var(--green);
      &::after { width: 100%; }
    }
  }
`;

export const StyledCompanyInfo = styled.div`
  ${linkColumn}
  @media (max-width: 400px) { width: 100%; }
`;

export const StyledAccountInfo = styled.div`
  ${linkColumn}
  @media (max-width: 400px) { width: 100%; }
`;

export const StyledCorporateInfo = styled.div`
  ${linkColumn}
  @media (max-width: 400px) { width: 100%; }
`;

export const StyledPopularProductInfo = styled.div`
  ${linkColumn}
  @media (max-width: 400px) { width: 100%; }
`;

/* ─── bottom bar ─────────────────────────────────────────────────────────── */
export const StyledFooterBottom = styled.div`
  ${FlexBox({ justify: "center", align: "center" })};
  padding: 20px 0;
  border-top: 1px solid rgba(25,155,25,0.12);

  .copyright {
    font-size: 13px;
    font-weight: 400;
    color: #9ca3af;
    margin: 0;

    span { color: ${green}; font-weight: 600; }
  }

  @media (max-width: 640px) {
    text-align: center;
    padding: 16px 0;
  }
`;

/* ─── unused legacy exports (keep to avoid import errors) ────────────────── */
export const StyledLogoSection      = styled.div``;
export const StyledInstallAppInfo   = styled.div``;
export const StyledStoreLinks       = styled.div``;
export const StyledPaymentsLink     = styled.div``;
export const StyleFooterContactDetails = styled.div``;
export const StyledRightsInfo       = styled.div``;
export const StyledPhoneInfo        = styled.div``;
export const StyledFollowusInfo     = styled.div``;
