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

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 32px;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

/* ─── logo + contact column ──────────────────────────────────────────────── */
export const StyledLogoWithInfo = styled.div`
  ${FlexBox({ direction: "column", justify: "flex-start", align: "flex-start", gap: "20px" })};

  .brand-tagline {
    font-size: 14px;
    font-weight: 400;
    color: #6b7280;
    line-height: 1.65;
    max-width: 240px;
    margin: 0;
  }

  .footer-child-div {
    ${FlexBox({ direction: "column", align: "flex-start", gap: "12px" })};
    width: 100%;
  }

  @media (max-width: 1024px) {
    grid-column: 1 / -1;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 24px;
  }

  @media (max-width: 640px) {
    grid-column: 1 / -1;
    flex-direction: column;
  }
`;

export const StyledAddressSection = styled.div`
  ${FlexBox({ justify: "flex-start", align: "center", gap: "10px" })};

  img { opacity: 0.7; flex-shrink: 0; }

  span {
    font-size: 13px;
    font-weight: 400;
    color: #6b7280;
    line-height: 1.5;
  }
`;

export const StyledContactSection = styled.div`
  ${FlexBox({ justify: "flex-start", align: "center", gap: "10px" })};

  img { opacity: 0.7; flex-shrink: 0; }

  span {
    font-size: 13px;
    font-weight: 400;
    color: #6b7280;
  }

  .contact-number {
    color: ${green};
    font-weight: 600;
  }
`;

export const StyledEmailSection = styled.div`
  ${FlexBox({ justify: "flex-start", align: "center", gap: "10px" })};

  img { opacity: 0.7; flex-shrink: 0; }

  span, p {
    font-size: 13px;
    font-weight: 400;
    color: #6b7280;
    margin: 0;
    line-height: 1.5;
  }

  .email-box {
    ${FlexBox({ justify: "flex-start", gap: "4px" })};
    flex-wrap: wrap;
  }

  .email {
    color: ${green};
    font-weight: 600;
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
