import styled from "styled-components";

export const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const CarouselInner = styled.div`
   position: relative;
  height: clamp(200px, 35vw, 500px);
  overflow: hidden;
  border-radius: 12px;

  @media (min-width: 768px) {
    height: 40rem;
  }
`;

export const CarouselItem = styled.div`
  display: none;
  position: relative;
  width: 100%;
  height: 100%;
  transition: all 0.7s ease-in-out;

  &[data-active="true"] {
    display: block;
  }
`;

export const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Indicators = styled.div`
  position: absolute;
  z-index: 30;
  display: flex;
  gap: 0.75rem;
  bottom: 1.25rem;
  left: 50%;
  transform: translateX(-50%);
`;

export const IndicatorButton = styled.button`
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 999px;
  background-color: rgba(255, 255, 255, 0.6);
  border: none;
  cursor: pointer;

  &[aria-current="true"] {
    background-color: white;
  }
`;

export const ControlButton = styled.button`
  position: absolute;
  top: 0;
  z-index: 30;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 1rem;
  cursor: pointer;
  background: transparent;
  border: none;
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
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 999px;
  background-color: rgba(255, 255, 255, 0.3);

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

export const ControlIcon = styled.svg`
  width: 1.25rem;
  height: 1.25rem;
  color: white;
`;
