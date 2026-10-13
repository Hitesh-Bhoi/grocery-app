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
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
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
    <section className="mx-5 my-10 grid grid-cols-2 gap-6 rounded-3xl bg-green-50 px-6 py-10 md:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col items-center gap-2 text-center">
          <div className="flex size-12 items-center justify-center rounded-full bg-white text-2xl text-primary shadow-sm">
            {stat.icon}
          </div>
          <div className="text-3xl font-black text-slate-900">
            <Counter end={stat.value} suffix={stat.suffix} />
          </div>
          <p className="text-sm font-medium text-slate-500">{stat.label}</p>
        </div>
      ))}
    </section>
  );
};

export default StatsSection;
