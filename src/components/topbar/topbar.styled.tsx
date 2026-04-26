"use client";
import styled from "styled-components";

export const StyledTopbarContainer = styled.div`
  /* background-color: white;
  display: none;
  padding-inline: 10px;
  position: sticky;
  top: 0;
  z-index: 999;
  transition: all 0.3s ease; */
  /* background-color: white; */
  padding-inline: 10px;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 0px;
  transform: translateY(-100%);
  opacity: 0;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease;
  /* transition: transform 0.7s ease, opacity 0.4s ease; */
  
  &.scroll {
    background-color: white;
    height: 70px;
    transform: translateY(0);
    opacity: 1;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  }

  @media (max-width: 1024px) {
    position: fixed;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;

    &.scroll {
      height: 48px;
      background-color: rgba(255, 255, 255, 0.98);
      backdrop-filter: blur(8px);
    }

    &.active {
      height: auto;
      background-color: white;
      padding-bottom: 24px;
    }
  }
`;

export const StyledLogoContainer = styled.div`
  display: flex;
  align-items: center;
  order: 1;

  @media (max-width: 1024px) {
    width: auto;
    img {
      height: 32px;
      width: auto;
    }
  }
`;

export const StyledMenuBar = styled.div`
  display: none;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 6px;
    width: 40px;
    height: 40px;
    cursor: pointer;
    margin-left: 8px;
    transition: all 0.3s ease;
    
    span {
      display: block;
      width: 26px;
      height: 2.5px;
      background-color: #333;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      border-radius: 4px;
    }

    &.active {
      span:nth-child(1) {
        transform: translateY(8.5px) rotate(45deg);
        background-color: #20b820;
      }
      span:nth-child(2) {
        opacity: 0;
        transform: translateX(10px);
      }
      span:nth-child(3) {
        transform: translateY(-8.5px) rotate(-45deg);
        background-color: #20b820;
      }
    }
  }
`;

export const StyledNavbarContainer = styled.div`
  order: 2;
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    li {
      list-style-type: none;
      padding: 10px 18px;
      border: none;
      border-radius: 20px;
      word-wrap: nowrap;
      transition: 0.4s ease-in-out;
      cursor: pointer;

      a {
        text-decoration: none;
        color: inherit;
      }
    }

    li:hover,
    li.active {
      color: white;
      background-color: #20b820;
    }

    .show-on-mobile {
      display: none;
    }
  }

  @media (max-width: 1024px) {
    position: relative;
    width: 100%;
    order: 3;
    top: auto;
    opacity: 0;
    max-height: 0;
    overflow: hidden;
    transform: translateY(-10px);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    pointer-events: none;

    ul {
      flex-direction: column;
      margin-top: 16px;
      padding: 0;
      gap: 8px;

      .show-on-mobile {
        display: block;
      }
    }

    li {
      width: 220px;
      text-align: center;
    }

    &.active {
      max-height: 500px;
      overflow: visible;
      opacity: 1;
      transform: translateY(0);
      pointer-events: auto;

      li {
        opacity: 0;
        animation: slideIn 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
      }

      li:nth-child(1) { animation-delay: 0.1s; }
      li:nth-child(2) { animation-delay: 0.15s; }
      li:nth-child(3) { animation-delay: 0.2s; }
      li:nth-child(4) { animation-delay: 0.25s; }
      li:nth-child(5) { animation-delay: 0.3s; }
    }
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* @media (max-width: 1024px){
    li{
      text-wrap-mode: nowrap;
    }
  } */
`;

export const StyledProfileContainer = styled.div`
  position: relative;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const StyledRightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  order: 3;

  @media (max-width: 1024px) {
    gap: 8px;
    order: 2;
    flex: 1;
    justify-content: flex-end;
  }
`;

export const StyledNotificationButton = styled.button`
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: rgba(32, 184, 32, 0.08);
    transform: translateY(-1px);
    .bell-icon {
      color: #20b820;
    }
  }

  &:active {
    transform: translateY(0);
  }

  .bell-icon {
    font-size: 24px;
    color: #475569;
    transition: color 0.2s;
  }

  .dot {
    position: absolute;
    top: 8px;
    right: 8px;
    width: 10px;
    height: 10px;
    background: #22c55e;
    border: 2px solid white;
    border-radius: 50%;
    box-shadow: 0 0 0 2px rgba(34, 197, 94, 0.2);
  }
`;

export const StyledCartButton = styled.button`
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &.active {
    background: rgba(32, 184, 32, 0.08);
    transform: translateY(-1px);
    .cart-icon {
      color: #20b820;
    }
  }

  &:active {
    transform: translateY(0);
  }

  .cart-icon {
    font-size: 24px;
    color: #475569;
    transition: color 0.2s;
  }

  .cart-badge {
    position: absolute;
    top: 2px;
    right: 2px;
    min-width: 18px;
    height: 18px;
    padding: 0 4px;
    background: #20b820;
    color: #fff;
    font-size: 10px;
    font-weight: 800;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    box-shadow: 0 2px 4px rgba(32, 184, 32, 0.25);
  }

  @media (max-width: 1024px) {
    padding: 6px;
    .cart-icon {
      font-size: 22px;
    }
  }
`;

export const StyledUserProfile = styled.div`
  .profile-icon {
    font-size: 32px;
    cursor: pointer;
    color: #333;
    transition: color 0.2s;

    &:hover,
    &.active {
      color: #20b820;
    }
  }
`;

export const StyledProfileMenu = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  opacity: 0;
  transform: translateY(-10px);
  transition: opacity 0.25s ease, transform 0.25s ease;
  pointer-events: none;
  width: 180px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
  border: 1px solid #e8eaed;
  overflow: hidden;
  &.active {
    opacity: 1;
    transform: translateY(0px);
    pointer-events: auto;
  }
`;

export const StyledProfileOption = styled.p`
  padding: 11px 14px;
  margin: 0px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid #f0f2f4;
  color: #333;
  cursor: pointer;
  transition: all 0.15s;

  &:hover,
  &.active {
    background: rgba(32, 184, 32, 0.08);
    color: #20b820;
  }

  &:last-child {
    border-bottom: none;
  }

  &.logout {
    color: #e53935;
    &:hover {
      background: rgba(229, 57, 53, 0.06);
      color: #e53935;
    }
  }

  span {
    font-size: 13px;
    font-weight: 600;
  }
  .profile-option-icon {
    font-size: 18px;
    flex-shrink: 0;
  }
`;
