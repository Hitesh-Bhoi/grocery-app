import {
  StyledCardDescription,
  StyledCardImg,
  StyledCardTitle,
  StyledInfoCard,
  StyledInfoCardContainer,
  StyledMainTitle,
  StyledSectionDesc,
  StyledSectionHeader,
  StyledServiceSection,
} from "./serviceCard.styled";
import { FiTruck, FiAward, FiHeart } from "react-icons/fi";
import { RiLeafLine } from "react-icons/ri";

const ServiceCard = () => {
  const features = [
    {
      title: "100% Organic",
      description: "All our products are certified organic, grown without harmful pesticides or chemicals.",
      icon: <RiLeafLine />,
      bgColor: "#E8F8EE",
      iconColor: "#22C55E",
    },
    {
      title: "Fast Delivery",
      description: "Same-day delivery available for all orders placed before noon in your area.",
      icon: <FiTruck />,
      bgColor: "#EEF2FF",
      iconColor: "#4F46E5",
    },
    {
      title: "Premium Quality",
      description: "Hand-picked produce that meets the highest standards of freshness and taste.",
      icon: <FiAward />,
      bgColor: "#FFFBEB",
      iconColor: "#F59E0B",
    },
    {
      title: "Sustainable",
      description: "Supporting local farmers and eco-friendly farming practices for a better tomorrow.",
      icon: <FiHeart />,
      bgColor: "#FEF2F2",
      iconColor: "#EF4444",
    },
  ];

  return (
    <StyledServiceSection>
      <StyledSectionHeader>
        <StyledMainTitle>
          Why People <span>Choose Farmiva</span>
        </StyledMainTitle>
        <StyledSectionDesc>
          Discover why thousands of customers trust us for their daily organic needs. 
          We prioritize quality, speed, and sustainability.
        </StyledSectionDesc>
      </StyledSectionHeader>
      <StyledInfoCardContainer>
        {features.map((feature, index) => (
          <StyledInfoCard key={index}>
            <StyledCardImg $bgColor={feature.bgColor} $iconColor={feature.iconColor}>
              {feature.icon}
            </StyledCardImg>
            <StyledCardTitle>{feature.title}</StyledCardTitle>
            <StyledCardDescription>{feature.description}</StyledCardDescription>
          </StyledInfoCard>
        ))}
      </StyledInfoCardContainer>
    </StyledServiceSection>
  );
};




export default ServiceCard;


