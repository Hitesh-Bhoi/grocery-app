"use client";
import styled, { keyframes } from "styled-components";

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const ProfileHeader = styled.div`
  background: linear-gradient(135deg, #f0fdf0 0%, #e8f8e8 40%, #dcf5dc 100%);
  padding: 100px 20px 36px;
  margin-bottom: 8px;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    right: -20%;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(32, 184, 32, 0.06) 0%, transparent 70%);
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -40%;
    left: -10%;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(32, 184, 32, 0.04) 0%, transparent 70%);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 80px 16px 28px;
  }
`;

export const Breadcrumb = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 16px;
  font-size: 13px;
  color: #888;
  a {
    color: #888;
    text-decoration: none;
    &:hover { color: #20b820; }
  }
  .separator { color: #ccc; font-size: 11px; }
  .current { color: #333; font-weight: 600; }
`;

export const ProfileTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;

  .title-left {
    display: flex;
    align-items: center;
    gap: 12px;
    position: relative;
    padding-bottom: 8px;
    cursor: default;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 3px;
      border-radius: 99px;
      background: #20b820;
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    &:hover::after {
      transform: scaleX(1);
    }

    .profile-heading-icon {
      font-size: 36px;
      color: #20b820;
      flex-shrink: 0;
    }

    h1 {
      font-size: 32px;
      font-weight: 800;
      color: #1a1a1a;
      margin: 0;
      letter-spacing: -0.5px;
    }
  }

  .title-right {
    display: flex;
    align-items: center;
    gap: 10px;
    position: relative;
    padding-bottom: 8px;
    cursor: default;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 3px;
      border-radius: 99px;
      background: #20b820;
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    &:hover::after {
      transform: scaleX(1);
    }

    .subtitle {
      font-size: 15px;
      font-weight: 500;
      color: #888;
      margin: 0;

      span {
        color: #20b820;
        font-weight: 700;
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
    .title-left {
      h1 { font-size: 26px; }
      .profile-heading-icon { font-size: 28px; }
    }
    .title-right .subtitle { font-size: 13px; }
  }
`;

export const ProfileContainer = styled.div`
  max-width: 900px;
  margin: 0 auto 60px;
  padding: 0 20px;
  animation: ${fadeInUp} 0.5s ease both;
`;

export const ProfileCard = styled.div`
  background: #fff;
  border: 1px solid #f0f0f0;
  border-radius: 24px;
  padding: 40px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.03);

  @media (max-width: 600px) {
    padding: 24px;
  }
`;

export const ProfileTop = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  margin-bottom: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid #f5f5f5;

  .avatar-wrapper {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: #f0fdf0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 48px;
    color: #20b820;
    border: 4px solid #fff;
    box-shadow: 0 8px 24px rgba(32, 184, 32, 0.15);
  }

  .user-info {
    h1 {
      font-size: 28px;
      font-weight: 800;
      color: #1a1a1a;
      margin: 0 0 4px 0;
    }
    p {
      color: #888;
      font-size: 16px;
      margin: 0;
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
    gap: 20px;
    .avatar-wrapper { width: 100px; height: 100px; font-size: 40px; }
  }
`;

export const ProfileDetailsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const DetailItem = styled.div`
  label {
    display: block;
    font-size: 12px;
    font-weight: 700;
    color: #aaa;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 8px;
  }
  .value {
    font-size: 16px;
    font-weight: 600;
    color: #333;
    padding: 14px 18px;
    background: #f8faf8;
    border-radius: 12px;
    border: 1px solid #f0f2f0;
  }
`;

export const ProfileActions = styled.div`
  margin-top: 40px;
  display: flex;
  gap: 16px;

  button {
    flex: 1;
    padding: 16px;
    border-radius: 14px;
    font-weight: 700;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.2s;
  }

  .edit-btn {
    background: #20b820;
    color: white;
    border: none;
    &:hover { background: #1a9e1a; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(32, 184, 32, 0.2); }
  }

  .password-btn {
    background: white;
    color: #333;
    border: 1px solid #e0e0e0;
    &:hover { background: #f9f9f9; }
  }
`;
