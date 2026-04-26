"use client";
import { AiFillStar } from "react-icons/ai";
import {
  StyledAuthorInfo,
  StyledAuthorName,
  StyledAuthorRole,
  StyledQuote,
  StyledStarWrap,
  StyledTestimonialCard,
  StyledTestimonialsContainer,
  StyledTestimonialsDesc,
  StyledTestimonialsGrid,
  StyledTestimonialsHeader,
  StyledTestimonialsTitle,
} from "./testimonialsSection.styled";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Home Chef",
      quote:
        "The quality of produce from Farmiva is exceptional. My family loves the fresh taste and I feel good knowing it's all organic.",
      stars: 5,
    },
    {
      name: "Michael Chen",
      role: "Restaurant Owner",
      quote:
        "We've been sourcing from Farmiva for over a year. The consistency and quality have helped elevate our dishes significantly.",
      stars: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Fitness Enthusiast",
      quote:
        "As someone who cares about nutrition, Farmiva's organic produce fits perfectly into my healthy lifestyle. Highly recommend!",
      stars: 5,
    },
  ];

  return (
    <StyledTestimonialsContainer>
      <StyledTestimonialsHeader>
        <StyledTestimonialsTitle>
          What Our <span>Customers Say</span>
        </StyledTestimonialsTitle>
        <StyledTestimonialsDesc>Don't just take our word for it</StyledTestimonialsDesc>
      </StyledTestimonialsHeader>

      <StyledTestimonialsGrid>
        {testimonials.map((item, index) => (
          <StyledTestimonialCard key={index}>
            <StyledStarWrap>
              {[...Array(item.stars)].map((_, i) => (
                <AiFillStar key={i} />
              ))}
            </StyledStarWrap>
            <StyledQuote>"{item.quote}"</StyledQuote>
            <StyledAuthorInfo>
              <StyledAuthorName>{item.name}</StyledAuthorName>
              <StyledAuthorRole>{item.role}</StyledAuthorRole>
            </StyledAuthorInfo>
          </StyledTestimonialCard>
        ))}
      </StyledTestimonialsGrid>
    </StyledTestimonialsContainer>
  );
};

export default TestimonialsSection;
