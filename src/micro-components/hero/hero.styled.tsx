import styled from "styled-components";

/* ── Breakpoints ─────────────────────────── */
const bp = { sm: "640px", md: "768px", lg: "1024px", xl: "1280px" };

export const GlobalHeroStyles = styled.div`
  @keyframes heroFloat {
    0%,
    100% {
      transform: translateY(0px) rotate(-1deg);
    }
    50% {
      transform: translateY(-20px) rotate(1.5deg);
    }
  }
  @keyframes meshMove {
    0%,
    100% {
      transform: translate(0, 0) scale(1);
    }
    33% {
      transform: translate(30px, -50px) scale(1.1);
    }
    66% {
      transform: translate(-20px, 20px) scale(0.9);
    }
  }
  @keyframes contentIn {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
  @keyframes customPing {
    75%,
    100% {
      transform: scale(2);
      opacity: 0;
    }
  }
  @keyframes floatCard1 {
    0%,
    100% {
      transform: translateY(0px) rotate(-1deg);
    }
    50% {
      transform: translateY(-10px) rotate(1deg);
    }
  }
  @keyframes floatCard2 {
    0%,
    100% {
      transform: translateY(0px) rotate(1deg);
    }
    50% {
      transform: translateY(-12px) rotate(-1deg);
    }
  }
  @keyframes floatCard3 {
    0%,
    100% {
      transform: translateY(-50%) translateX(0px);
    }
    50% {
      transform: translateY(-50%) translateX(-8px);
    }
  }
  @keyframes floatCard4 {
    0%,
    100% {
      transform: translateY(0px) rotate(-0.5deg);
    }
    50% {
      transform: translateY(-12px) rotate(0.5deg);
    }
  }
  @keyframes ghostPulse {
    0%,
    100% {
      opacity: 0.1;
      transform: scale(1);
    }
    50% {
      opacity: 0.15;
      transform: scale(1.03);
    }
  }
`;

export const HeroSection = styled.div<{ $bg: string }>`
  position: relative;
  width: 100%;
  min-height: 100svh;
  display: flex;
  align-items: center;
  transition: background-color 1s, background-image 1s;
  background-color: ${({ $bg }) => $bg};
  background-image: radial-gradient(ellipse at 70% 10%, ${({ $bg }) => $bg}00 0%, ${({ $bg }) => $bg} 70%);
  overflow: hidden;
`;

export const MeshBackground = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0.5;
  @media (max-width: ${bp.md}) {
    opacity: 0.35;
  }
`;

export const MeshGradient = styled.div<{
  $accent: string;
  $top?: string;
  $bottom?: string;
  $left?: string;
  $right?: string;
  $w: string;
  $h: string;
  $blur: string;
  $delay?: string;
}>`
  position: absolute;
  top: ${({ $top }) => $top || "auto"};
  bottom: ${({ $bottom }) => $bottom || "auto"};
  left: ${({ $left }) => $left || "auto"};
  right: ${({ $right }) => $right || "auto"};
  width: ${({ $w }) => $w};
  height: ${({ $h }) => $h};
  border-radius: 50%;
  filter: blur(${({ $blur }) => $blur});
  transition: background-color 1s;
  background: ${({ $accent }) => $accent};
  animation: meshMove 15s ease-in-out infinite alternate;
  animation-delay: ${({ $delay }) => $delay || "0s"};
`;

export const GhostWatermark = styled.div<{ $accent: string }>`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  user-select: none;
  overflow: hidden;
  z-index: 0;

  &.desktop-watermark {
    display: none;
    @media (min-width: ${bp.lg}) {
      display: flex;
    }
    span {
      font-size: clamp(80px, 12vw, 280px);
    }
  }

  &.mobile-watermark {
    display: flex;
    top: 180px;
    width: 100%;
    @media (min-width: ${bp.sm}) {
      margin-top: 0;
    }
    @media (min-width: ${bp.md}) {
      top: 280px; 
    }
    @media (min-width: ${bp.lg}) {
      display: none;
    }
    span {
      font-size: clamp(50px, 12vw, 180px);
      width: 100%;
      text-align: center;
    }
  }

  span {
    opacity: 0.1;
    letter-spacing: -0.06em;
    white-space: nowrap;
    animation: ghostPulse 8s ease-in-out infinite;
    font-weight: 900;
    text-transform: uppercase;
    line-height: 1;
    transition: color 0.7s;
    color: ${({ $accent }) => $accent};
  }
`;

export const ContentContainer = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  padding: 2.5rem 1rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 1.5rem;

  @media (min-width: ${bp.sm}) {
    padding: 3rem 1.5rem 2.5rem;
  }
  @media (min-width: ${bp.lg}) {
    flex-direction: row;
    gap: 2rem;
    padding: 5rem 2rem 2.5rem;
    align-items: center;
  }
  @media (min-width: ${bp.xl}) {
    padding: 5rem 3rem 2.5rem;
    gap: 3rem;
  }
`;

export const LeftContent = styled.div`
  flex: 1.5;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.25rem;
  animation: contentIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
  order: 2;

  @media (min-width: ${bp.sm}) {
    gap: 1.5rem;
  }
  @media (min-width: ${bp.lg}) {
    order: 1;
    align-items: flex-start;
    text-align: left;
    gap: 1.75rem;
    padding-right: 1rem;
  }
`;

export const Badge = styled.div<{ $accent: string; $accentLight: string }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: fit-content;
  padding: 0.6rem 1.2rem;
  border-radius: 9999px;
  font-size: 12px;
  font-weight: bold;
  border: 1px solid ${({ $accent }) => $accent}40;
  background: ${({ $accentLight }) => $accentLight};
  color: ${({ $accent }) => $accent};
  backdrop-filter: blur(12px);
`;

export const HeadlineGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  @media (min-width: ${bp.lg}) {
    align-items: flex-start;
  }
`;

export const HeadlineTag = styled.div<{ $accent: string }>`
  font-size: 11px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.4em;
  color: #94a3b8;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  &::before {
    content: "";
    width: 28px;
    height: 2px;
    border-radius: 9999px;
    background: ${({ $accent }) => $accent};
    flex-shrink: 0;
  }
  &::after {
    content: "";
    width: 28px;
    height: 2px;
    border-radius: 9999px;
    background: ${({ $accent }) => $accent};
    flex-shrink: 0;
    display: block;
  }
  @media (min-width: ${bp.lg}) {
    justify-content: flex-start;
    &::after {
      display: none;
    }
  }
  @media (min-width: ${bp.sm}) {
    font-size: 12px;
  }
`;

export const Title = styled.h1<{ $accent: string }>`
  font-size: clamp(26px, 5vw, 52px);
  font-weight: 800;
  color: #0f172a;
  line-height: 1.05;
  letter-spacing: -0.03em;
  margin: 0;
  white-space: normal;

  @media (min-width: ${bp.xl}) {
    white-space: nowrap;
  }

  span {
    transition: color 1s;
    color: ${({ $accent }) => $accent};
  }
`;

export const Subtitle = styled.p`
  font-size: clamp(15px, 2vw, 20px);
  color: #64748b;
  max-width: 600px;
  line-height: 1.6;
  font-weight: 500;
  margin: 0;
  span {
    color: #0f172a;
    font-weight: bold;
  }
`;

export const FeaturesList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  @media (min-width: ${bp.lg}) {
    justify-content: flex-start;
  }
`;

export const FeatureTag = styled.div`
  display: flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.4rem 0.875rem;
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 600;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.6);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  color: #1e293b;
  transition: all 0.3s;
  &:hover {
    background: rgba(255, 255, 255, 0.95);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  }
`;

export const StatsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  @media (min-width: ${bp.sm}) {
    gap: 1.5rem;
  }
  @media (min-width: ${bp.lg}) {
    gap: 2rem;
    justify-content: flex-start;
  }
`;

export const StatItem = styled.div<{ $accent?: string }>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  .divider {
    width: 1px;
    height: 36px;
    background: rgba(0, 0, 0, 0.08);
  }
  .val {
    font-size: clamp(24px, 4vw, 38px);
    font-weight: 800;
    color: ${({ $accent }) => $accent || "#0f172a"};
    line-height: 1;
    transition: color 0.5s;
  }
  .label {
    font-size: clamp(10px, 1.2vw, 13px);
    font-weight: bold;
    color: #94a3b8;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-top: 0.25rem;
  }
`;

export const CtaRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: nowrap;
  width: 100%;
  @media (min-width: ${bp.lg}) {
    justify-content: flex-start;
    gap: 0.875rem;
    width: auto;
  }
`;

export const PrimaryButton = styled.button<{ $accent: string }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  padding: 0.75rem 1rem;
  border-radius: 0.875rem;
  font-weight: bold;
  font-size: 13px;
  color: white;
  border: none;
  cursor: pointer;
  background: linear-gradient(
    135deg,
    ${({ $accent }) => $accent},
    ${({ $accent }) => $accent}cc
  );
  box-shadow: 0 16px 32px ${({ $accent }) => $accent}40;
  transition: all 0.3s;
  overflow: hidden;

  @media (min-width: ${bp.sm}) {
    padding: 1rem 2rem;
    font-size: 16px;
    gap: 0.75rem;
  }

  &:hover {
    transform: translateY(-4px);
    .arrow {
      transform: translateX(4px);
    }
  }
  .arrow {
    width: 22px;
    height: 22px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 0.625rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s;
    flex-shrink: 0;
    @media (min-width: ${bp.sm}) {
      width: 28px;
      height: 28px;
    }
  }
  .shimmer {
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    background-size: 200% 100%;
    animation: shimmer 3s infinite;
  }
`;

export const SecondaryButton = styled.button<{ $accent: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  padding: 0.75rem 1rem;
  border-radius: 0.875rem;
  font-weight: bold;
  font-size: 13px;
  color: #0f172a;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.3s;
  white-space: nowrap;

  @media (min-width: ${bp.sm}) {
    padding: 1rem 1.75rem;
    font-size: 16px;
    gap: 0.75rem;
  }

  &:hover {
    background: white;
    transform: translateY(-4px);
    .icon {
      transform: scale(1.1);
    }
  }
  .icon {
    width: 26px;
    height: 26px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ $accent }) => $accent}20;
    color: ${({ $accent }) => $accent};
    transition: all 0.3s;
    flex-shrink: 0;
    @media (min-width: ${bp.sm}) {
      width: 36px;
      height: 36px;
    }
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.375rem;
  width: 100%;
  max-width: 340px;
  padding: 0.25rem;
  border-radius: 0.875rem;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.7);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);

  @media (min-width: ${bp.sm}) {
    max-width: 360px;
  }
`;

export const FilterButton = styled.button<{
  $isActive: boolean;
  $accent: string;
}>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex: 1;
  padding: 0.75rem 1rem;
  border-radius: 0.625rem;
  font-size: 15px;
  font-weight: bold;
  transition: all 0.3s;
  cursor: pointer;
  border: none;
  background: ${({ $isActive, $accent }) =>
    $isActive ? $accent : "transparent"};
  color: ${({ $isActive }) => ($isActive ? "#fff" : "#64748b")};
  box-shadow: ${({ $isActive, $accent }) =>
    $isActive ? `0 6px 16px ${$accent}50` : "none"};
  @media (min-width: ${bp.sm}) {
    padding: 0.875rem 1.25rem;
    font-size: 16px;
  }
  .ping {
    position: absolute;
    inset: 0;
    border-radius: 0.625rem;
    pointer-events: none;
    opacity: 0.2;
    background: ${({ $accent }) => $accent};
    animation: customPing 1s cubic-bezier(0, 0, 0.2, 1) infinite;
  }
`;

export const TrustSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  @media (min-width: ${bp.sm}) {
    flex-direction: row;
    gap: 0.75rem;
  }
  @media (min-width: ${bp.lg}) {
    justify-content: flex-start;
  }
  .avatars {
    display: flex;
  }
  .avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 2px solid white;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    margin-left: -8px;
    &:first-child {
      margin-left: 0;
    }
  }
  .info {
    .stars {
      display: flex;
      align-items: center;
      gap: 2px;
      color: #fbbf24;
      font-size: 12px;
    }
    .text {
      font-size: 11px;
      color: #64748b;
      font-weight: 500;
      strong {
        color: #0f172a;
      }
    }
  }
`;

/* ── CENTER ───────────────────────────────── */
export const CenterContent = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  min-width: 0;
  overflow: visible;
  margin-top: 1rem;
  order: 1;

  @media (min-width: ${bp.sm}) {
    min-height: 440px;
  }
  @media (min-width: ${bp.md}) {
    min-height: 560px;
  }
  @media (min-width: ${bp.lg}) {
    order: 2;
    min-height: 600px;
    margin-top: 0;
  }
`;

export const GlowBlob = styled.div<{ $accent: string }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.35;
  transition: background-color 0.7s;
  background: ${({ $accent }) => $accent};
  @media (min-width: ${bp.sm}) {
    width: 300px;
    height: 300px;
  }
  @media (min-width: ${bp.lg}) {
    width: 460px;
    height: 460px;
    filter: blur(80px);
  }
`;

export const ImageContainer = styled.div<{
  $mousePos: { x: number; y: number };
}>`
  position: relative;
  width: 100%;
  max-width: 300px;
  aspect-ratio: 1;
  z-index: 10;
  animation: heroFloat 8s ease-in-out infinite;
  transform: translate3d(
    ${({ $mousePos }) => $mousePos.x}px,
    ${({ $mousePos }) => $mousePos.y}px,
    0
  );
  transition: transform 0.2s ease-out;
  margin-top: -7rem;

  @media (min-width: ${bp.sm}) {
    max-width: 420px;
    margin-top: 0;
  }
  @media (min-width: ${bp.md}) {
    max-width: 400px;
    margin-top: -10rem;
  }
  @media (min-width: ${bp.lg}) {
    max-width: 440px;
    margin-top: 0;
  }
  @media (min-width: ${bp.xl}) {
    max-width: 540px;
  }
`;

export const ProductImage = styled.div<{ $active: boolean }>`
  position: absolute;
  inset: 0;
  transition: all 1s ease-in-out;
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  transform: ${({ $active }) => ($active ? "scale(1)" : "scale(0.9)")};
  img {
    object-fit: contain;
    filter: drop-shadow(0 30px 60px rgba(0, 0, 0, 0.2));
  }
`;

export const DotIndicators = styled.div`
  position: absolute;
  bottom: 3.75rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 6px;
  z-index: 30;
  @media (min-width: ${bp.lg}) {
    bottom: 6.5rem;
  }
`;

export const Dot = styled.button<{ $active: boolean; $accent: string }>`
  transition: all 0.3s;
  border-radius: 9999px;
  border: none;
  cursor: pointer;
  height: 7px;
  padding: 0;
  width: ${({ $active }) => ($active ? "22px" : "7px")};
  background: ${({ $active, $accent }) => ($active ? $accent : `${$accent}40`)};
`;

/* ── Float Cards ──────────────────────────── */
export const FloatCard = styled.div`
  position: absolute;
  z-index: 20;

  .card-inner {
    display: flex;
    align-items: center;
    gap: 0.625rem;
    background: rgba(255, 255, 255, 0.88);
    backdrop-filter: blur(20px);
    padding: 0.625rem 0.875rem;
    border-radius: 0.875rem;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.7);
  }
  .icon-box {
    width: 32px;
    height: 32px;
    border-radius: 0.625rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    flex-shrink: 0;
  }
  .subtitle {
    font-size: 10px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
  .title {
    font-size: 12px;
    font-weight: 900;
    color: #0f172a;
  }
`;

export const FloatCard1 = styled(FloatCard)`
  top: 5%;
  left: 0%;
  animation: floatCard1 6s ease-in-out infinite;
  @media (min-width: ${bp.md}) {
    top: 8%;
    left: 8%;
  }
  @media (min-width: ${bp.lg}) {
    top: 12%;
    left: 10%;
  }
  @media (min-width: ${bp.xl}) {
    left: -8%;
  }
  /* hidden on very small screens */
  @media (max-width: 767px) {
    display: none;
  }
`;

export const FloatCard2 = styled(FloatCard)`
  top: 5%;
  right: 0%;
  animation: floatCard2 7s ease-in-out infinite 1s;
  .card-inner {
    flex-direction: column;
    align-items: flex-start;
    gap: 3px;
  }
  .title {
    font-size: 13px;
  }
  .desc {
    font-size: 10px;
    color: #64748b;
    font-weight: 500;
  }
  @media (min-width: ${bp.md}) {
    top: 8%;
    right: 10%;
  }
  @media (min-width: ${bp.lg}) {
    right: -5%;
    top: 20%;
  }
  @media (max-width: 767px) {
    display: none;
  }
`;

export const FloatCard3 = styled(FloatCard)`
  top: 50%;
  left: 0%;
  transform: translateY(-50%);
  animation: floatCard3 8s ease-in-out infinite 2s;
  @media (min-width: ${bp.md}) {
    left: 2%;
  }
  @media (min-width: ${bp.lg}) {
    top: 75%;
    bottom: 20%;
  }
  @media (min-width: ${bp.xl}) {
    left: -10%;
  }
  /* hide on small to avoid overlap */
  @media (max-width: ${bp.sm}) {
    display: none;
  }
`;

export const FloatCard4 = styled(FloatCard)`
  bottom: 18%;
  right: 0%;
  animation: floatCard4 6.5s ease-in-out infinite 0.5s;
  .icon-box {
    width: 36px;
    height: 36px;
    flex-direction: column;
  }
  .rating {
    font-size: 14px;
    font-weight: 900;
  }
  .stars {
    display: flex;
    gap: 2px;
    color: #fbbf24;
    font-size: 11px;
  }
  .reviews {
    font-size: 11px;
    font-weight: bold;
    color: #0f172a;
  }
  @media (min-width: ${bp.md}) {
    right: 5%;
    bottom: 40%;
  }
  @media (min-width: ${bp.lg}) {
    bottom: 15%;
    right: -2%;
  }
  @media (max-width: 767px) {
    display: none;
  }
`;

export const PricePill = styled.div`
  position: absolute;
  bottom: -0.25rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 0.625rem;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  padding: 0.5rem 1rem;
  border-radius: 0.875rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  border: 1px solid white;
  z-index: 20;
  transition: all 0.5s;
  white-space: nowrap;

  @media (min-width: ${bp.lg}) {
    bottom: 1.5rem;
    padding: 0.75rem 1.5rem;
  }

  .divider {
    width: 1px;
    height: 28px;
    background: rgba(0, 0, 0, 0.1);
  }
  .col {
    display: flex;
    flex-direction: column;
  }
  .col.right {
    align-items: flex-end;
  }
  .tagline {
    font-size: 10px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }
  .name {
    font-size: 13px;
    font-weight: 900;
    color: #0f172a;
  }
  .start {
    font-size: 10px;
    color: #94a3b8;
    font-weight: 500;
  }
  .price {
    font-size: 16px;
    font-weight: 900;
  }
  .unit {
    font-size: 11px;
    font-weight: 600;
    color: #94a3b8;
  }
`;

/* ── RIGHT Panel ──────────────────────────── */
export const RightPanel = styled.div`
  display: none;

  @media (min-width: ${bp.lg}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
    width: 230px;
    flex-shrink: 0;
    order: 3;
  }
  @media (min-width: ${bp.xl}) {
    width: 260px;
  }

  .header {
    font-size: 11px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.28em;
    color: #94a3b8;
    margin-bottom: 0.5rem;
    padding: 0 0.5rem;
  }
`;

export const ProductSelector = styled.button<{
  $isActive: boolean;
  $accent: string;
}>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 0.875rem;
  border-radius: 0.875rem;
  border: 2px solid
    ${({ $isActive, $accent }) =>
      $isActive ? $accent : "rgba(255,255,255,0.8)"};
  transition: all 0.3s;
  text-align: left;
  width: 100%;
  cursor: pointer;
  background: ${({ $isActive, $accent }) =>
    $isActive ? `${$accent}18` : "rgba(255,255,255,0.65)"};
  backdrop-filter: blur(16px);
  box-shadow: ${({ $isActive, $accent }) =>
    $isActive ? `0 8px 20px ${$accent}25` : "0 2px 6px rgba(0,0,0,0.05)"};

  &:hover {
    transform: translateY(-2px);
  }

  .bar {
    width: 3px;
    align-self: stretch;
    border-radius: 9999px;
    flex-shrink: 0;
    transition: all 0.3s;
    background: ${({ $isActive, $accent }) =>
      $isActive ? $accent : `${$accent}40`};
  }
  .info {
    flex: 1;
    min-width: 0;
    .name {
      font-size: 13px;
      font-weight: 900;
      color: #0f172a;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 1.2;
      margin: 0;
    }
    .badge {
      font-size: 11px;
      font-weight: bold;
      margin-top: 2px;
      color: ${({ $accent }) => $accent};
    }
    .origin {
      font-size: 10px;
      color: #94a3b8;
      font-weight: 500;
      margin-top: 2px;
    }
  }
  .price-col {
    text-align: right;
    flex-shrink: 0;
    padding-left: 0.375rem;
    .price {
      font-size: 15px;
      font-weight: 900;
      line-height: 1.2;
      color: ${({ $accent }) => $accent};
    }
    .unit {
      font-size: 10px;
      color: #94a3b8;
      font-weight: 500;
    }
  }
`;
