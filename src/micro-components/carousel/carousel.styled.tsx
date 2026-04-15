import styled, { keyframes } from "styled-components";

/* ── slide-in animation ──────────────────────────────────── */
const slideUp = keyframes`
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  background: linear-gradient(120deg, #f6faf7, #f1f7f2);
`;

export const CarouselInner = styled.div`
  position: relative;
  height: 100vh;
  min-height: 560px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);

  @media (max-width: 1024px) {
    height: 60vh;
    min-height: 480px;
  }
  @media (max-width: 768px) {
    height: 50vh;
    min-height: 420px;
  }
`;

export const CarouselItem = styled.div<{ $bg: string }>`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transform: scale(1.04);
  transition: opacity 0.8s ease, transform 1.1s ease;
  background-image: url(${({ $bg }) => $bg});
  background-size: cover;
  background-position: center;

  @media (max-width: 1024px) {
    background-position: center center;
  }

  &[data-active="true"] {
    opacity: 1;
    transform: scale(1);
    z-index: 1;

    /* animate content on active */
    .carousel_tag,
    .carousel_title,
    .carousel_description,
    .carousel_buttons {
      animation: ${slideUp} 0.65s ease forwards;
    }
    .carousel_title       { animation-delay: 0.05s; }
    .carousel_description { animation-delay: 0.12s; }
    .carousel_buttons     { animation-delay: 0.2s; }
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      110deg,
      rgba(0, 0, 0, 0.68) 0%,
      rgba(0, 0, 0, 0.38) 45%,
      rgba(0, 0, 0, 0) 72%
    );

    @media (max-width: 1024px) {
      background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.9) 0%,
        rgba(0, 0, 0, 0.5) 45%,
        rgba(0, 0, 0, 0.1) 75%,
        rgba(0, 0, 0, 0) 100%
      );
    }
  }
`;

export const CarouselContent = styled.div`
  position: absolute;
  top: 50%;
  left: 12%;
  transform: translateY(-50%);
  color: white;
  max-width: 720px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 16px;

  /* Tab and laptop centering */
  @media (max-width: 1440px) {
    top: auto;
    bottom: 90px;
    left: 50%;
    transform: translateX(-50%);
    align-items: center;
    text-align: center;
    width: 95%;
    max-width: 900px;
  }

  .carousel_tag {
    display: inline-flex;
    align-items: center;
    width: max-content;
    padding: 6px 16px;
    border-radius: 999px;
    background-color: rgba(32, 184, 32, 0.25);
    border: 1px solid rgba(32, 184, 32, 0.55);
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: #b2f0b2;
    opacity: 0;
  }

  .carousel_title {
    font-size: clamp(22px, 5vw, 48px);
    font-weight: 900;
    line-height: 1.1;
    letter-spacing: -1px;
    text-shadow: 0 4px 16px rgba(0, 0, 0, 0.6);
    opacity: 0;
    white-space: nowrap;
    
    @media (max-width: 1024px) {
      font-size: clamp(20px, 4.5vw, 38px);
    }
    
    @media (max-width: 768px) {
      white-space: normal;
      font-size: clamp(18px, 6vw, 28px);
    }
    
    @media (max-width: 375px) {
      font-size: 20px;
    }
  }

  .carousel_description {
    font-size: clamp(17px, 2.2vw, 22px);
    line-height: 1.6;
    color: #f8fafc;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.7);
    max-width: 580px;
    font-weight: 510;
    letter-spacing: 0.2px;
    opacity: 0;

    @media (max-width: 768px) {
      font-size: 16px;
      max-width: 90%;
    }
  }

  .carousel_buttons {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    justify-content: center; /* This handles centering of buttons */
    opacity: 0;

    @media (min-width: 1441px) {
      justify-content: flex-start;
    }

    @media (max-width: 375px) {
      gap: 8px;
    }

    button {
      padding: 14px 28px;
      border: none;
      border-radius: 999px;
      cursor: pointer;
      font-size: 15px;
      font-weight: 700;
      transition: transform 0.2s ease, box-shadow 0.2s ease,
        background-color 0.2s ease;

      @media (max-width: 375px) {
        padding: 10px 16px;
        font-size: 13px;
      }
    }

    .button1 {
      background-color: #199b19; /* slightly darker than var(--green) */
      color: white;
      border: none;
      box-shadow: none;
      
      &:hover {
        background-color: #147e14; /* even darker green */
        transform: translateY(-2px);
        box-shadow: none;
      }
    }

    .button2 {
      background-color: rgba(255, 255, 255, 0.12);
      color: white;
      border: 1.5px solid rgba(255, 255, 255, 0.5);
      backdrop-filter: blur(12px);

      &:hover {
        background-color: rgba(255, 255, 255, 0.25);
        border-color: rgba(255, 255, 255, 0.8);
        transform: translateY(-2px);
      }
    }
  }

  @media (max-width: 768px) {
    top: auto;
    bottom: 64px;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    gap: 16px;
    align-items: center;
    text-align: center;
  }
`;

/* ── indicators ─────────────────────────────────────────── */
export const Indicators = styled.div`
  position: absolute;
  z-index: 30;
  display: flex;
  gap: 8px;
  bottom: 28px;
  left: 50%;
  transform: translateX(-50%);
`;

export const IndicatorButton = styled.button`
  height: 8px;
  width: 8px;
  border-radius: 999px;
  background-color: rgba(255, 255, 255, 0.45);
  border: none;
  cursor: pointer;
  transition: width 0.35s ease, background-color 0.25s ease;
  padding: 0;

  &[aria-current="true"] {
    width: 28px;
    background-color: var(--green);
  }
`;

/* ── arrow controls ─────────────────────────────────────── */
const ControlButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 30;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  cursor: pointer;
  background: transparent;
  border: none;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const PrevButton = styled(ControlButton)`
  left: 0;
`;

export const NextButton = styled(ControlButton)`
  right: 0;
`;

export const ControlIconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 999px;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  border: 1.5px solid rgba(255, 255, 255, 0.3);
  transition: background-color 0.2s ease, transform 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.38);
    transform: scale(1.08);
  }

  @media (max-width: 640px) {
    width: 36px;
    height: 36px;
  }
`;

export const ControlIcon = styled.svg`
  width: 20px;
  height: 20px;
  color: white;
`;
