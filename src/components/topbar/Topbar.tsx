"use client";
import logo from "../../../public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { IoMdLogOut } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { RxCross1 } from "react-icons/rx";
import {
  HiMiniBars3,
  HiOutlineClipboard,
  HiOutlineHeart,
  HiOutlineShoppingCart,
  HiOutlineUser,
  HiOutlineBell,
} from "react-icons/hi2";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { 
  StyledCartButton, 
  StyledLogoContainer, 
  StyledMenuBar, 
  StyledNavbarContainer, 
  StyledNotificationButton, 
  StyledProfileContainer, 
  StyledProfileMenu, 
  StyledProfileOption, 
  StyledRightSection, 
  StyledTopbarContainer, 
  StyledUserProfile 
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

        {/* right: notification + cart + profile + menu bar */}
        <StyledRightSection>
          {/* notification */}
          <StyledNotificationButton onClick={() => setHasNotification(false)}>
            <HiOutlineBell className="bell-icon" />
            {hasNotification && <span className="dot" />}
          </StyledNotificationButton>

          {/* cart */}
          <Link href="/cart">
            <StyledCartButton className={pathname === "/cart" ? "active" : ""}>
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
                <Link href="/cart" style={{ textDecoration: 'none' }}>
                  <StyledProfileOption className={pathname === "/cart" ? "active" : ""}>
                    <HiOutlineShoppingCart className="profile-option-icon" />
                    <span>My Cart</span>
                  </StyledProfileOption>
                </Link>
                <Link href="/orders" style={{ textDecoration: 'none' }}>
                  <StyledProfileOption className={pathname === "/orders" ? "active" : ""}>
                    <HiOutlineClipboard className="profile-option-icon" />
                    <span>My Orders</span>
                  </StyledProfileOption>
                </Link>
                <Link href="/wishlist" style={{ textDecoration: 'none' }}>
                  <StyledProfileOption className={pathname === "/wishlist" ? "active" : ""}>
                    <HiOutlineHeart className="profile-option-icon" />
                    <span>My Wishlist</span>
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
              <Link href="/products">Shop Now</Link>
            </li>
            <li className={pathname === "/cart" ? "active" : ""}>
              <Link href="/cart">Special Offers</Link>
            </li>
            <li className={pathname === "/products" ? "active" : ""}>
              <Link href="/products">Fresh Produce</Link>
            </li>
            <li className={pathname === "/orders" ? "active" : ""}>
              <Link href="/orders">Track Order</Link>
            </li>
          </ul>
        </StyledNavbarContainer>
      </StyledTopbarContainer>
    </>
  );
};

export default Topbar;