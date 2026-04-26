"use client";
import { useEffect, useState, useRef } from "react";
import {
  StyledStatIconWrap,
  StyledStatItem,
  StyledStatLabel,
  StyledStatValue,
  StyledStatsContainer,
} from "./statsSection.styled";
import { HiOutlineUsers, HiOutlineTrophy, HiOutlineArrowTrendingUp } from "react-icons/hi2";
import { RiLeafLine } from "react-icons/ri";


const Counter = ({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentCount = Math.floor(progress * end);
      setCount(currentCount);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [isVisible, end, duration]);

  return <div ref={elementRef}>{count}{suffix}</div>;
};

const StatsSection = () => {
  const stats = [
    {
      label: "Happy Customers",
      value: 5000,
      suffix: "+",
      icon: <HiOutlineUsers />,
    },
    {
      label: "Organic Products",
      value: 100,
      suffix: "%",
      icon: <RiLeafLine />,
    },

    {
      label: "Local Farms",
      value: 50,
      suffix: "+",
      icon: <HiOutlineTrophy />,
    },
    {
      label: "Satisfaction Rate",
      value: 95,
      suffix: "%",
      icon: <HiOutlineArrowTrendingUp />,
    },
  ];

  return (
    <StyledStatsContainer>
      {stats.map((stat, index) => (
        <StyledStatItem key={index}>
          <StyledStatIconWrap>{stat.icon}</StyledStatIconWrap>
          <StyledStatValue>
            <Counter end={stat.value} suffix={stat.suffix} />
          </StyledStatValue>
          <StyledStatLabel>{stat.label}</StyledStatLabel>
        </StyledStatItem>
      ))}
    </StyledStatsContainer>
  );
};

export default StatsSection;
