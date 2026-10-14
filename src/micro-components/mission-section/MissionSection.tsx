"use client";
import { FiTarget, FiRefreshCw, FiUsers, FiShield } from "react-icons/fi";

const MissionSection = () => {
  const missionItems = [
    { title: "Our Mission", desc: "Bring fresh organic food to every table", icon: <FiTarget />, bgColor: "#E8F8EE", color: "#22C55E" },
    { title: "Sustainability", desc: "Zero waste packaging & carbon neutral delivery", icon: <FiRefreshCw />, bgColor: "#EEF2FF", color: "#4F46E5" },
    { title: "Community", desc: "Supporting 50+ local farming families", icon: <FiUsers />, bgColor: "#FFFBEB", color: "#F59E0B" },
    { title: "Quality", desc: "100% certified organic products", icon: <FiShield />, bgColor: "#FEF2F2", color: "#EF4444" },
  ];

  return (
    <section id="mission-video" className="mx-auto my-12 grid w-[calc(100%-40px)] scroll-mt-24 items-stretch rounded-[30px] border border-black/5 bg-white shadow-[0_15px_50px_rgba(0,0,0,0.04)] overflow-hidden md:grid-cols-2">
      <div className="relative min-h-[360px] md:min-h-full overflow-hidden">
        <video
          src="https://res.cloudinary.com/dqwzddm94/video/upload/WhatsApp_Video_2026-01-10_at_2.31.36_PM_vtuk0z.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 size-full object-cover"
        />
      </div>
      <div className="p-8 md:p-12 flex flex-col justify-center">
        <h2 className="mb-4 text-3xl font-black text-slate-900">
          Our Mission: <span className="text-primary">Sustainable Farming for a Better Future</span>
        </h2>
        <p className="mb-3 text-slate-600">
          Founded in 2020, Farmiva was born from a simple belief: everyone deserves access to fresh, organic produce that's good for both people and the planet.
        </p>
        <p className="mb-6 text-slate-600">
          We partner with local farmers who share our commitment to sustainable agriculture, ensuring every product meets our rigorous standards for quality and environmental responsibility.
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {missionItems.map((item) => (
            <div key={item.title} className="flex items-start gap-3">
              <div
                className="flex size-11 shrink-0 items-center justify-center rounded-xl text-xl"
                style={{ backgroundColor: item.bgColor, color: item.color }}
              >
                {item.icon}
              </div>
              <div>
                <p className="font-bold text-slate-900">{item.title}</p>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
