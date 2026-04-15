"use client";
import {
  StyledCartButton,
  StyledLogoContainer,
  StyledMenuBar,
  StyledNavbarContainer,
  StyledProfileContainer,
  StyledProfileMenu,
  StyledProfileOption,
  StyledRightSection,
  StyledTopbarContainer,
  StyledUserProfile,
} from "./topbar.styled";
import logo from "../../../public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { IoMdLogOut } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import {
  HiMiniBars3,
  HiOutlineClipboard,
  HiOutlineHeart,
  HiOutlineShoppingCart,
  HiOutlineUser,
} from "react-icons/hi2";

import { useCart } from "@/context/CartContext";

const Topbar = () => {
  const [isProfileToggle, setIsProfileToggle] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isNavbarShow, setIsNavbarShow] = useState<boolean>(false);
  const profileRef = useRef<HTMLDivElement>(null);

  const { totalItems } = useCart();
  const cartCount = totalItems;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* close profile menu on outside click */
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setIsProfileToggle(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <StyledTopbarContainer
        className={`${isScrolled ? "scroll" : ""} ${isNavbarShow ? "active" : ""}`}
      >
        {/* logo */}
        <StyledLogoContainer>
          <Image src={logo} alt="Ecobazar logo" />
          <StyledMenuBar>
            {isNavbarShow ? (
              <RxCross1
                className="cross-line"
                onClick={() => setIsNavbarShow(false)}
              />
            ) : (
              <HiMiniBars3
                className="cross-line"
                onClick={() => setIsNavbarShow(true)}
              />
            )}
          </StyledMenuBar>
        </StyledLogoContainer>

        {/* navbar */}
        <StyledNavbarContainer className={`${isNavbarShow ? "active" : ""}`}>
          <ul>
            <li>Home</li>
            <li>Shop Now</li>
            <li>Special Offers</li>
            <li>Fresh Produce</li>
            <li>Track Order</li>
            {/* mobile-only items */}
            <li className="show-on-mobile">My Cart</li>
            <li className="show-on-mobile">My Orders</li>
            <li className="show-on-mobile">My Wishlist</li>
            <li className="show-on-mobile">My Profile</li>
            <li className="show-on-mobile">Logout</li>
          </ul>
        </StyledNavbarContainer>

        {/* right: cart + profile */}
        <StyledRightSection>
          {/* cart */}
          <Link href="/cart">
            <StyledCartButton>
              <HiOutlineShoppingCart className="cart-icon" />
              {cartCount > 0 && (
                <span className="cart-badge">{cartCount}</span>
              )}
            </StyledCartButton>
          </Link>

          {/* profile dropdown */}
          <StyledProfileContainer ref={profileRef}>
            <StyledUserProfile>
              <HiOutlineUser
                className="profile-icon"
                onClick={() => setIsProfileToggle(!isProfileToggle)}
              />
              <StyledProfileMenu className={`${isProfileToggle ? "active" : ""}`}>
                <StyledProfileOption>
                  <HiOutlineUser className="profile-option-icon" />
                  <span>My Profile</span>
                </StyledProfileOption>
                <StyledProfileOption>
                  <HiOutlineShoppingCart className="profile-option-icon" />
                  <span>My Cart</span>
                </StyledProfileOption>
                <StyledProfileOption>
                  <HiOutlineClipboard className="profile-option-icon" />
                  <span>My Orders</span>
                </StyledProfileOption>
                <StyledProfileOption>
                  <HiOutlineHeart className="profile-option-icon" />
                  <span>My Wishlist</span>
                </StyledProfileOption>
                <StyledProfileOption className="logout">
                  <IoMdLogOut className="profile-option-icon" />
                  <span>Logout</span>
                </StyledProfileOption>
              </StyledProfileMenu>
            </StyledUserProfile>
          </StyledProfileContainer>
        </StyledRightSection>
      </StyledTopbarContainer>
    </>
  );
};
export default Topbar;