"use client";
import Image from "next/image";
import logo from "../../../public/logo.svg";
import location from "../../../public/icons/location.svg";
import headphone from "../../../public/icons/headphone.svg";
import email from "../../../public/icons/email.svg";
import clock from "../../../public/icons/clock.svg";
import {
  StyledAccountInfo,
  StyledAddressSection,
  StyledCompanyInfo,
  StyledContactSection,
  StyledCorporateInfo,
  StyledEmailSection,
  StyledFooterBottom,
  StyledFooterContainer,
  // StyledInstallAppInfo,
  // StyledLogoSection,
  StyledLogoWithInfo,
  StyledPopularProductInfo,
  StyleFooterInfoDetails,
} from "./footer.styled";

const Footer = () => {
  return (
    <>
      <StyledFooterContainer>
        <StyleFooterInfoDetails>
          <StyledLogoWithInfo>
            <div>
              <Image src={logo} alt="website logo" />
            </div>

              <StyledAddressSection>
                <Image src={location} alt="location" width={16} height={16} />
                <span>Ahmedabad, Gujarat, India</span>
              </StyledAddressSection>
              <StyledContactSection>
                <Image src={headphone} alt="phone" width={16} height={16} />
                <span>
                  Call Us{" "}
                  <span className="contact-number">(+91)-8200861893</span>
                </span>
              </StyledContactSection>
              <StyledEmailSection>
                <Image src={email} alt="email" width={16} height={16} />
                <p className="email-box">
                  <span>Email</span>
                  <span className="email">sales@ecobazar.com</span>
                </p>
              </StyledEmailSection>
              <StyledEmailSection>
                <Image src={clock} alt="hours" width={16} height={16} />
                <span>10:00 – 18:00, Mon – Sat</span>
              </StyledEmailSection>
          </StyledLogoWithInfo>
          <StyledCompanyInfo>
            <p className="title">Company</p>
            <span>About Us</span>
            <span>Privacy Policy</span>
            <span>Terms &amp; Conditions</span>
            <span>Contact Us</span>
            <span>Support Center</span>
            <span>Careers</span>
          </StyledCompanyInfo>

          {/* ── account ── */}
          <StyledAccountInfo>
            <p className="title">Account</p>
            <span>Sign In</span>
            <span>View Cart</span>
            <span>My Wishlist</span>
            <span>Track My Order</span>
            <span>Help Ticket</span>
            <span>Shipping Details</span>
            <span>Compare Products</span>
          </StyledAccountInfo>
          <StyledCorporateInfo>
            <p className="title">Corporate</p>
            <span>Become a Vendor</span>
            <span>Affiliate Program</span>
            <span>Farm Business</span>
            <span>Farm Careers</span>
            <span>Our Suppliers</span>
            <span>Accessibility</span>
            <span>Promotion</span>
          </StyledCorporateInfo>

          {/* ── popular ── */}
          <StyledPopularProductInfo>
            <p className="title">Popular</p>
            <span>Fresh Fruits</span>
            <span>Seasonal Vegetables</span>
            <span>Organic Produce</span>
            <span>Exotic Fruits</span>
            <span>Leafy Greens</span>
            <span>Root Vegetables</span>
            <span>Herbs &amp; Garnishes</span>
          </StyledPopularProductInfo>
        </StyleFooterInfoDetails>

        {/* ── bottom bar ── */}
        <StyledFooterBottom>
          <p className="copyright">
            © {new Date().getFullYear()} <span>Ecobazar</span>. All rights reserved.
          </p>
        </StyledFooterBottom>

      </StyledFooterContainer>
    </>
  );
};
export default Footer;
