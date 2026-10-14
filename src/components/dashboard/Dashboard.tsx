import Hero from "@/micro-components/hero/hero";
import ContactUs from "@/micro-components/contact-us/contactUs";
import FAQ from "@/micro-components/faq/faq";
import DiscountCard from "@/micro-components/discount-card/DiscountCard";
import FeaturedProducts from "@/micro-components/featured-products/FeaturedProducts";
import NewseLetter from "@/micro-components/news-letter/NewsLetter";
import ServiceCard from "@/micro-components/service-card/ServiceCard";
import MissionSection from "@/micro-components/mission-section/MissionSection";
import StatsSection from "@/micro-components/stats-section/StatsSection";
import TestimonialsSection from "@/micro-components/testimonials-section/TestimonialsSection";
const Dashboard = () => {
  return (
    <>
      <div className="dashboard-container w-full overflow-x-hidden">
        <div className="dashboard-carousel-section w-full">
          <Hero />
        </div>
        <div className="featured-product-container w-full">
          <FeaturedProducts/>
        </div>
        <div className="discount-card-main w-full">
          <DiscountCard/>
        </div>
        <div className="mission-section-container w-full">
          <MissionSection />
        </div>
        <div className="stats-section-container w-full">
          <StatsSection />
        </div>
        <div className="testimonials-section-container w-full">
          <TestimonialsSection />
        </div>
        <div className="service-card-container w-full">
          <ServiceCard/>
        </div>
        <div className="news-letter-container w-full">
          <NewseLetter/>
        </div>
        <div className="faq-container w-full">
          <FAQ/>
        </div>
        <div className="contact-us-container w-full">
          <ContactUs/>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
