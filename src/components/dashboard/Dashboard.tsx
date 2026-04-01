import Carousel from "@/micro-components/carousel/Carousel";
import ContactUs from "@/micro-components/contact-us/contactUs";
import FAQ from "@/micro-components/faq/faq";
import DiscountCard from "@/micro-components/discount-card/DiscountCard";
import FeaturedProducts from "@/micro-components/featured-products/FeaturedProducts";
import NewseLetter from "@/micro-components/news-letter/NewsLetter";
import ServiceCard from "@/micro-components/service-card/ServiceCard";
const Dashboard = () => {
  return (
    <>
      <div className="dashboard-container">
        <div className="dashboard-carousel-section">
          <Carousel />
        </div>
        <div className="featured-product-container">
          <FeaturedProducts/>
        </div>
        <div className="discount-card-main">
          <DiscountCard/>
        </div>
        <div className="service-card-container">
          <ServiceCard/>
        </div>
        <div className="news-letter-container">
          <NewseLetter/>
        </div>
        <div className="contact-us-container">
          <ContactUs/>
        </div>
        <div className="faq-container">
          <FAQ/>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
