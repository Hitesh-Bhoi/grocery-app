"use client";
import styled from "styled-components";
import { FlexBox } from "@/styles/mixins";

export const StyledProductsContainer = styled.div`
  padding: 60px 16px;
  max-width: 1320px;
  margin: 0 auto;
  min-height: 80vh;
  
  @media (max-width: 768px) {
    padding: 40px 12px;
  }
`;

export const StyledPageHeader = styled.div`
  margin-bottom: 48px;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 8px;
  
  h1 {
    font-size: clamp(32px, 5vw, 42px);
    color: #1e293b;
    font-weight: 900;
    letter-spacing: -1px;
    line-height: 1.1;
  }
  
  p {
    color: #64748b;
    font-size: 18px;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    text-align: center;
    margin-bottom: 32px;
  }
`;

export const StyledFilterBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  padding: 12px 12px;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(241, 245, 249, 0.8);
  position: sticky;
  top: 80px;
  z-index: 10;
  gap: 20px;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.06);
    border-color: rgba(226, 232, 240, 1);
  }

  @media (max-width: 992px) {
    flex-direction: column;
    align-items: stretch;
    padding: 16px;
    top: 70px;
  }
`;

export const StyledSearchInput = styled.div`
  position: relative;
  flex: 1;

  input {
    width: 100%;
    padding: 14px 16px 14px 44px;
    border-radius: 12px;
    border: 1px solid #e2e8f0;
    font-size: 16px;
    font-weight: 500;
    outline: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    background: #f8fafc;
    color: #1e293b;
    
    &::placeholder {
      color: #94a3b8;
    }
    
    &:focus {
      border-color: var(--green);
      background: #fff;
      box-shadow: 0 0 0 4px rgba(32, 184, 32, 0.12);
      transform: translateY(-1px);
    }
  }

  .search-icon {
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
    color: #64748b;
    font-size: 20px;
    transition: color 0.3s ease;
  }
  
  &:focus-within .search-icon {
    color: var(--green);
  }
`;

export const StyledCategoryFilter = styled.div`
  display: flex;
  gap: 10px;
  overflow-x: auto;
  padding-bottom: 2px;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
  
  button {
    padding: 10px 20px;
    border-radius: 12px;
    border: 1px solid #e2e8f0;
    background: #fff;
    color: #475569;
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    white-space: nowrap;
    
    &:hover {
      background: #f1f5f9;
      border-color: #cbd5e1;
      transform: translateY(-1px);
    }
    
    &.active {
      background: var(--green);
      color: white;
      border-color: var(--green);
      box-shadow: 0 8px 20px rgba(32, 184, 32, 0.25);
    }
  }

  @media (max-width: 992px) {
    justify-content: center;
  }
`;

export const StyledProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 24px;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  }
  
  @media (max-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(165px, 1fr));
    gap: 16px;
  }
`;

export const StyledEmptyState = styled.div`
  text-align: center;
  padding: 100px 20px;
  background: #f8fafc;
  border-radius: 24px;
  border: 2px dashed #e2e8f0;
  
  .icon-box {
    width: 80px;
    height: 80px;
    background: #fff;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 24px;
    font-size: 32px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.05);
  }
  
  h3 {
    font-size: 24px;
    color: #1e293b;
    font-weight: 800;
    margin-bottom: 12px;
  }
  
  p {
    color: #64748b;
    font-size: 16px;
    max-width: 400px;
    margin: 0 auto;
  }
`;

