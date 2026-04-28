"use client";
import logo from "../../../public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { IoMdLogOut } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import {
  HiOutlineUser,
  HiOutlineBell,
} from "react-icons/hi2";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { 
  StyledLogoContainer, 
  StyledMenuBar, 
  StyledNavbarContainer, 
  StyledNotificationButton, 
  StyledProfileContainer, 
  StyledProfileMenu, 
  StyledProfileOption, 
  StyledRightSection, 
  StyledTopbarContainer, 
  StyledUserProfile,
  StyledNavBadge
} from "./topbar.styled";

const Topbar = () => {
  const [isProfileToggle, setIsProfileToggle] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isNavbarShow, setIsNavbarShow] = useState<boolean>(false);
  const [hasNotification, setHasNotification] = useState<boolean>(true); // For demo
  const profileRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const cartCount = cartItems.length;

  const wishlistItems = useSelector((state: RootState) => state.wishlist.wishlistItems);
  const wishlistCount = wishlistItems.length;

  const orders = useSelector((state: RootState) => state.orders.orders);
  const orderCount = orders.length;

  // On non-dashboard pages, the topbar should always be visible
  const isDashboard = pathname === "/dashboard";
  const shouldShowTopbar = !isDashboard || isScrolled;

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
        className={`${shouldShowTopbar ? "scroll" : ""} ${isNavbarShow ? "active" : ""}`}
      >
        {/* logo */}
        <StyledLogoContainer>
          <Image src={logo} alt="Ecobazar logo" />
        </StyledLogoContainer>

        {/* right: notification + profile + menu bar */}
        <StyledRightSection>
          {/* notification */}
          <StyledNotificationButton onClick={() => setHasNotification(false)}>
            <HiOutlineBell className="bell-icon" />
            {hasNotification && <span className="dot" />}
          </StyledNotificationButton>

          {/* profile dropdown */}
          <StyledProfileContainer ref={profileRef}>
            <StyledUserProfile>
              <HiOutlineUser
                className={`profile-icon ${pathname === "/profile" ? "active" : ""}`}
                onClick={() => setIsProfileToggle(!isProfileToggle)}
              />
              <StyledProfileMenu className={`${isProfileToggle ? "active" : ""}`}>
                <Link href="/profile" style={{ textDecoration: 'none' }}>
                  <StyledProfileOption className={pathname === "/profile" ? "active" : ""}>
                    <HiOutlineUser className="profile-option-icon" />
                    <span>My Profile</span>
                  </StyledProfileOption>
                </Link>
                <Link href="/logout" style={{ textDecoration: 'none' }}>
                  <StyledProfileOption className="logout">
                    <IoMdLogOut className="profile-option-icon" />
                    <span>Logout</span>
                  </StyledProfileOption>
                </Link>
              </StyledProfileMenu>
            </StyledUserProfile>
          </StyledProfileContainer>

          {/* menu bar (mobile only) */}
          <StyledMenuBar 
            className={isNavbarShow ? "active" : ""} 
            onClick={() => setIsNavbarShow(!isNavbarShow)}
          >
            <span></span>
            <span></span>
            <span></span>
          </StyledMenuBar>
        </StyledRightSection>

        {/* navbar */}
        <StyledNavbarContainer className={`${isNavbarShow ? "active" : ""}`}>
          <ul onClick={() => setIsNavbarShow(false)}>
            <li className={pathname === "/dashboard" ? "active" : ""}>
              <Link href="/dashboard">Home</Link>
            </li>
            <li className={pathname === "/products" ? "active" : ""}>
              <Link href="/products">Products</Link>
            </li>
            <li className={pathname === "/wishlist" ? "active" : ""}>
              <Link href="/wishlist">
                Wishlist {wishlistCount > 0 && <StyledNavBadge>{wishlistCount}</StyledNavBadge>}
              </Link>
            </li>
            <li className={pathname === "/cart" ? "active" : ""}>
              <Link href="/cart">
                Cart {cartCount > 0 && <StyledNavBadge>{cartCount}</StyledNavBadge>}
              </Link>
            </li>
            <li className={pathname === "/orders" ? "active" : ""}>
              <Link href="/orders">
                Orders {orderCount > 0 && <StyledNavBadge>{orderCount}</StyledNavBadge>}
              </Link>
            </li>
          </ul>
        </StyledNavbarContainer>
      </StyledTopbarContainer>
    </>
  );
};

export default Topbar;