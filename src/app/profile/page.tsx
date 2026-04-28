"use client";
import React from 'react';
import Link from 'next/link';
import { HiOutlineUser, HiOutlinePencilSquare, HiOutlineLockClosed } from 'react-icons/hi2';
import { 
  ProfileHeader, 
  Breadcrumb, 
  ProfileContainer, 
  ProfileCard, 
  ProfileTop, 
  ProfileDetailsGrid, 
  DetailItem, 
  ProfileActions,
  ProfileTitle
} from './profile.styled';

const ProfilePage = () => {
  // Mock user data
  const user = {
    name: "Hitesh Bhoi",
    email: "hiteshbhoi@example.com",
    phone: "+91 98765 43210",
    address: "123 Green Street, Organic City, 400001",
    joinedDate: "January 2026"
  };

  return (
    <>
      <ProfileHeader>
        <ProfileTitle>
          <div className="title-left">
            <HiOutlineUser className="profile-heading-icon" />
            <h1>Account Settings</h1>
          </div>
          <div className="title-right">
            <p className="subtitle">Manage your <span>personal information</span></p>
          </div>
        </ProfileTitle>
      </ProfileHeader>

      <ProfileContainer>
        <ProfileCard>
          <ProfileTop>
            <div className="avatar-wrapper">
              <HiOutlineUser />
            </div>
            <div className="user-info">
              <h1>{user.name}</h1>
              <p>Member since {user.joinedDate}</p>
            </div>
          </ProfileTop>

          <ProfileDetailsGrid>
            <DetailItem>
              <label>Full Name</label>
              <div className="value">{user.name}</div>
            </DetailItem>
            <DetailItem>
              <label>Email Address</label>
              <div className="value">{user.email}</div>
            </DetailItem>
            <DetailItem>
              <label>Phone Number</label>
              <div className="value">{user.phone}</div>
            </DetailItem>
            <DetailItem>
              <label>Default Address</label>
              <div className="value">{user.address}</div>
            </DetailItem>
          </ProfileDetailsGrid>

          <ProfileActions>
            <button className="edit-btn">
              <HiOutlinePencilSquare /> Edit Profile
            </button>
            <button className="password-btn">
              <HiOutlineLockClosed /> Change Password
            </button>
          </ProfileActions>
        </ProfileCard>
      </ProfileContainer>
    </>
  );
};

export default ProfilePage;
