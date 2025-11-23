"use client";
import styled from "styled-components";

export const StyledFooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
`;
export const StyleFooterInfoDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0px;

  @media (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media ((min-width: 768px) and (max-width: 1023px)) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
`;
export const StyledLogoWithInfo = styled.div`
  width: 40%;
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

  @media ((min-width: 768px) and (max-width: 1023px)) {
    width: 70%;
  }
`;
export const StyledCompanyInfo = styled.div`
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
