"use client";
import Image from "next/image";
import logo from "../../../public/logo.svg";
import location from "../../../public/icons/location.svg";
import headphone from "../../../public/icons/headphone.svg";
import email from "../../../public/icons/email.svg";
import clock from "../../../public/icons/clock.svg";

const FooterLinkColumn = ({
  title,
  items,
}: {
  title: string;
  items: string[];
}) => (
  <div className="flex flex-col items-start gap-3.5 max-md:w-[calc(50%-10px)] max-[320px]:w-full">
    <p className="relative mb-1 pb-2.5 text-[13px] font-extrabold uppercase tracking-widest text-slate-900 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:rounded after:bg-primary">
      {title}
    </p>
    {items.map((item) => (
      <span
        key={item}
        className="relative w-fit cursor-pointer text-sm text-slate-500 after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:text-primary hover:after:w-full"
      >
        {item}
      </span>
    ))}
  </div>
);

const Footer = () => {
  return (
    <footer className="mt-1 border-t border-green-100 bg-gradient-to-br from-green-50 via-white to-green-50 px-5 pt-10 md:px-10 md:pt-14">
      <div className="grid grid-cols-1 gap-8 border-b border-green-100 pb-12 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr_1fr] lg:gap-10">
        <div className="flex flex-col items-start gap-5">
          <Image src={logo} alt="website logo" />
          <div className="flex flex-col items-start gap-4 md:flex-row md:flex-wrap md:items-center">
            <div className="flex items-start gap-3 text-sm text-slate-600">
              <Image src={location} alt="location" width={16} height={16} />
              <span>Ahmedabad, Gujarat, India</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-600">
              <Image src={headphone} alt="phone" width={16} height={16} />
              <span>
                Call Us <span className="font-medium text-slate-900">(+91)-8200861893</span>
              </span>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-600">
              <Image src={email} alt="email" width={16} height={16} />
              <p>
                Email <span className="font-medium text-slate-900">sales@ecobazar.com</span>
              </p>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-600">
              <Image src={clock} alt="hours" width={16} height={16} />
              <span>10:00 – 18:00, Mon – Sat</span>
            </div>
          </div>
        </div>

        <FooterLinkColumn
          title="Company"
          items={["About Us", "Privacy Policy", "Terms & Conditions", "Contact Us", "Support Center", "Careers"]}
        />
        <FooterLinkColumn
          title="Account"
          items={["Sign In", "View Cart", "My Wishlist", "Track My Order", "Help Ticket", "Shipping Details", "Compare Products"]}
        />
        <FooterLinkColumn
          title="Corporate"
          items={["Become a Vendor", "Affiliate Program", "Farm Business", "Farm Careers", "Our Suppliers", "Accessibility", "Promotion"]}
        />
        <FooterLinkColumn
          title="Popular"
          items={["Fresh Fruits", "Seasonal Vegetables", "Organic Produce", "Exotic Fruits", "Leafy Greens", "Root Vegetables", "Herbs & Garnishes"]}
        />
      </div>
      <div className="py-5 text-center text-[13px] text-slate-400">
        © {new Date().getFullYear()} <span className="font-semibold text-primary">Ecobazar</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
