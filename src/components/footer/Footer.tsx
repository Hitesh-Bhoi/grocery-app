"use client";
import Image from "next/image";
import logo from "../../../public/logo.svg";
import location from "../../../public/icons/location.svg";
import headphone from "../../../public/icons/headphone.svg";
import email from "../../../public/icons/email.svg";
import clock from "../../../public/icons/clock.svg";
import appStore from "../../../public/images/apple-appstore.png"
import playStore from "../../../public/images/google-playstore.png"
import mastercard from "../../../public/icons/mastercard.svg"
import UPI from "../../../public/icons/upi.svg"
import {
  StyledAccountInfo,
  StyledAddressSection,
  StyledCompanyInfo,
  StyledContactSection,
  StyledCorporateInfo,
  StyledEmailSection,
  // StyledFollowusInfo,
  StyledFooterContainer,
  StyledInstallAppInfo,
  // StyledLogoSection,
  StyledLogoWithInfo,
  // StyledPaymentsLink,
  // StyledPhoneInfo,
  StyledPopularProductInfo,
  // StyledRightsInfo,
  // StyledStoreLinks,
  // StyleFooterContactDetails,
  StyleFooterInfoDetails,
} from "./footer.styled";

require("./footer.styled");

const Footer = () => {
  return (
    <>
      <StyledFooterContainer>
        <StyleFooterInfoDetails>
          <div className="first-tab-size-div">
          <StyledLogoWithInfo>
            <div>
              <Image src={logo} alt="website logo" />
            </div>
            <div className="footer-child-div">
            <StyledAddressSection>
              <Image src={location} alt="address icon" width={20} height={20} />
              <span className="footer-text">
                Address 5171 W Champbell Ave Kent, Utah 53127 United States
              </span>
            </StyledAddressSection>
            <StyledContactSection>
              <Image
                src={headphone}
                alt="headphone icon"
                width={20}
                height={20}
              />
              <span>
                Call Us{" "}
                <span className="contact-number">(+91)-540-025-124553</span>
              </span>
            </StyledContactSection>
            </div>
            <div className="footer-child-div">
            <StyledEmailSection>
              <Image src={email} alt="email icon" width={20} height={20} />
              <p className="email-box">
                <span>Email</span> <span className="email">sales@ecobazar.com</span>
              </p>
            </StyledEmailSection>
            <StyledEmailSection>
              <Image src={clock} alt="clock icon" width={20} height={20} />
              <span>Hours 10:00 - 18:00, Mon - Sat</span>
            </StyledEmailSection>
            </div>
          </StyledLogoWithInfo>
          <div className="combine-footer-div">
          <StyledCompanyInfo>
            <p className="title">Company</p>
            <span>About Us</span>
            <span>Privacy Policy</span>
            <span>Terms & Conditions</span>
            <span>Contact Us</span>
            <span>Support Center</span>
            <span>Careers</span>
          </StyledCompanyInfo>
          <StyledAccountInfo>
            <p className="title">Account</p>
            <span>Sign In</span>
            <span>View Chart</span>
            <span>My Wishlist</span>
            <span>Tract My Order</span>
            <span>Help Ticket</span>
            <span>Shipping Details</span>
            <span>Compare Products</span>
          </StyledAccountInfo>
          </div>
          </div>
          <div className="second-tab-size-div">
          <div className="combine-footer-div">
          <StyledCorporateInfo>
            <p className="title">Corporate</p>
            <span>Become a Vendor</span>
            <span>Affiliate Program</span>
            <span>Farm Business</span>
            <span>Farm Careers</span>
            <span>Our Suppliers</span>
            <span>Accessibilitty</span>
            <span>Promotion</span>
          </StyledCorporateInfo>
          <StyledPopularProductInfo>
            <p className="title">Popular</p>
            <span>Milk & Flavoured Milk</span>
            <span>Butter and Margarine</span>
            <span>Eggs Substitutes</span>
            <span>Marmalades</span>
            <span>Sour Cream and Dips</span>
            <span>Tea & Kombucha</span>
            <span>Cheese</span>
          </StyledPopularProductInfo>
          </div>
          <StyledInstallAppInfo>
            <p className="title">
                Install App
            </p>
            <span>From App Store or Google Play</span>
            <div>
                <Image src={appStore} alt="app store link" width={100} height={45}/>
                <Image src={playStore} alt="play store link" width={100} height={45}/>
            </div>
            <span>Secure Payment Gatways</span>
            <div>
                <Image src={mastercard} alt="mastercard link" width={100} height={50}/>
                <Image src={UPI} alt="UPI link" width={100} height={45}/>
            </div>
          </StyledInstallAppInfo>
          </div>
        </StyleFooterInfoDetails>

        {/* <StyleFooterContactDetails> */}
          {/* <StyledRightsInfo></StyledRightsInfo>
          <StyledPhoneInfo></StyledPhoneInfo>
          <StyledFollowusInfo></StyledFollowusInfo> */}
        {/* </StyleFooterContactDetails> */}
      </StyledFooterContainer>
    </>
  );
};
export default Footer;
