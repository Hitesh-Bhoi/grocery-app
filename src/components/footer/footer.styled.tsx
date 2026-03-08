"use client";
import { FlexBox } from "@/styles/mixins";
import styled from "styled-components";

export const StyledFooterContainer = styled.div`
  ${FlexBox ({ direction: "column" })};
  padding: 20px;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
`;
export const StyleFooterInfoDetails = styled.div`
  width: 100%;
  ${FlexBox ({ justify: "space-between", align: "flex-start" })}

  @media (max-width: 767px) {
    ${FlexBox ({ direction: "column" })};
  }

  @media ((min-width: 768px) and (max-width: 1023px)) {
    width: 100%;
    ${FlexBox ({ direction: "column", gap: "20px" })};
  }
`;
export const StyledLogoWithInfo = styled.div`
  width: 40%;
  ${FlexBox ({ direction: "column", justify: "flex-start", align: "flex-start", gap: "15px" })};
  @media (max-width: 767px) {
    width: 100%;
    ${FlexBox ({ direction: "column", gap: "30px" })};
    padding-bottom: 20px;
  }

  @media ((min-width: 768px) and (max-width: 1023px)) {
    width: 70%;
  }
`;
export const StyledCompanyInfo = styled.div`
  width: 100%;
  ${FlexBox ({ direction: "column", justify: "flex-start", align: "flex-start", gap: "15px" })};

  @media (max-width: 767px) {
    width: 100%;
    /* ${FlexBox ({ direction: "column" })}; */
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;
  }
`;
export const StyledAccountInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 15px;

  @media (max-width: 767px) {
    width: 100%;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;
  }
`;
export const StyledCorporateInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 15px;

  @media (max-width: 767px) {
    width: 100%;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;
  }
`;
export const StyledPopularProductInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 15px;

  @media (max-width: 767px) {
    width: 100%;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;
  }
`;
export const StyledInstallAppInfo = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;

  @media (max-width: 767px) {
    width: 100%;
    justify-content: center;
    align-items: center;
  }

  @media ((min-width: 768px) and (max-width: 1023px)) {
    width: 70%;
  }
`;
export const StyledLogoSection = styled.div``;
export const StyledAddressSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  @media (max-width: 767px) {
    width: 50%;
    align-items: flex-start;
  }
`;
export const StyledContactSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  .contact-number {
    color: #20b820;
  }

  @media (max-width: 767px) {
    width: 50%;
    align-items: flex-start;
  }
`;
export const StyledEmailSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  .email {
    color: #20b820;
    word-wrap: wrap;
  }

  @media (max-width: 767px) {
    width: 50%;
    align-items: flex-start;
  }
`;
export const StyledStoreLinks = styled.div``;
export const StyledPaymentsLink = styled.div``;

export const StyleFooterContactDetails = styled.div``;
export const StyledRightsInfo = styled.div``;
export const StyledPhoneInfo = styled.div``;
export const StyledFollowusInfo = styled.div``;
