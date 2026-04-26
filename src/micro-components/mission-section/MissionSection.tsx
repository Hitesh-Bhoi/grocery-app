"use client";
import Image from "next/image";
import {
  StyledMissionContainer,
  StyledMissionContent,
  StyledMissionDesc,
  StyledMissionGrid,
  StyledMissionIcon,
  StyledMissionImageWrap,
  StyledMissionItem,
  StyledMissionItemDesc,
  StyledMissionItemText,
  StyledMissionItemTitle,
  StyledMissionTitle,
} from "./missionSection.styled";
import { FiTarget, FiRefreshCw, FiUsers, FiShield } from "react-icons/fi";

const MissionSection = () => {
  const missionItems = [
    {
      title: "Our Mission",
      desc: "Bring fresh organic food to every table",
      icon: <FiTarget />,
      bgColor: "#E8F8EE",
      color: "#22C55E",
    },
    {
      title: "Sustainability",
      desc: "Zero waste packaging & carbon neutral delivery",
      icon: <FiRefreshCw />,
      bgColor: "#EEF2FF",
      color: "#4F46E5",
    },
    {
      title: "Community",
      desc: "Supporting 50+ local farming families",
      icon: <FiUsers />,
      bgColor: "#FFFBEB",
      color: "#F59E0B",
    },
    {
      title: "Quality",
      desc: "100% certified organic products",
      icon: <FiShield />,
      bgColor: "#FEF2F2",
      color: "#EF4444",
    },
  ];

  return (
    <StyledMissionContainer>
      <StyledMissionImageWrap>
        <video
          src="https://res.cloudinary.com/dqwzddm94/video/upload/WhatsApp_Video_2026-01-10_at_2.31.36_PM_vtuk0z.mp4"
          autoPlay
          muted
          loop
          playsInline
          style={{
            border: "none",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </StyledMissionImageWrap>

      <StyledMissionContent>
        <StyledMissionTitle>
          Our Mission:<span>Sustainable Farming for a Better Future</span>
        </StyledMissionTitle>
        <StyledMissionDesc>
          Founded in 2020, Farmiva was born from a simple belief: everyone
          deserves access to fresh, organic produce that's good for both people
          and the planet.
        </StyledMissionDesc>
        <StyledMissionDesc>
          We partner with local farmers who share our commitment to sustainable
          agriculture, ensuring every product meets our rigorous standards for
          quality and environmental responsibility.
        </StyledMissionDesc>
        <StyledMissionGrid>
          {missionItems.map((item, index) => (
            <StyledMissionItem key={index}>
              <StyledMissionIcon $bgColor={item.bgColor} $color={item.color}>
                {item.icon}
              </StyledMissionIcon>
              <StyledMissionItemText>
                <StyledMissionItemTitle>{item.title}</StyledMissionItemTitle>
                <StyledMissionItemDesc>{item.desc}</StyledMissionItemDesc>
              </StyledMissionItemText>
            </StyledMissionItem>
          ))}
        </StyledMissionGrid>
      </StyledMissionContent>
    </StyledMissionContainer>
  );
};

export default MissionSection;
