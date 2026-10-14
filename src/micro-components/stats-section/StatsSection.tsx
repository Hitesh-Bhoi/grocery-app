"use client";
import { useEffect, useState, useRef } from "react";
import { HiOutlineUsers, HiOutlineTrophy, HiOutlineArrowTrendingUp } from "react-icons/hi2";
import { RiLeafLine } from "react-icons/ri";

const Counter = ({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTimestamp: number | null = null;
    let frameId = 0;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) frameId = window.requestAnimationFrame(step);
    };
    frameId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(frameId);
  }, [isVisible, end, duration]);

  return <div ref={elementRef}>{count}{suffix}</div>;
};

const StatsSection = () => {
  const stats = [
    { label: "Happy Customers", value: 5000, suffix: "+", icon: <HiOutlineUsers /> },
    { label: "Organic Products", value: 100, suffix: "%", icon: <RiLeafLine /> },
    { label: "Local Farms", value: 50, suffix: "+", icon: <HiOutlineTrophy /> },
    { label: "Satisfaction Rate", value: 95, suffix: "%", icon: <HiOutlineArrowTrendingUp /> },
  ];

  return (
    <div className="w-[calc(100%-40px)] mx-auto my-14">
      <section className="grid w-full grid-cols-2 gap-8 rounded-[32px] bg-[#20b820] py-16 px-6 text-white md:grid-cols-4 items-center justify-items-center">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-3 text-center">
            <div className="flex size-14 items-center justify-center rounded-full bg-white/20 text-2xl text-white shadow-inner backdrop-blur-sm">
              {stat.icon}
            </div>
            <div className="text-3xl md:text-4xl font-black text-white">
              <Counter end={stat.value} suffix={stat.suffix} />
            </div>
            <p className="text-sm font-semibold text-white/90">{stat.label}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default StatsSection;
