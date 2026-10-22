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
  <div className="flex min-w-0 flex-col items-center gap-3.5 text-center md:items-start md:text-left">
    <p className="relative mb-1 pb-2.5 text-[13px] font-extrabold uppercase tracking-widest text-slate-900 after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-full after:-translate-x-1/2 after:rounded after:bg-primary md:after:left-0 md:after:translate-x-0">
      {title}
    </p>
    {items.map((item) => (
      <span
        key={item}
        className="relative w-fit cursor-pointer text-sm text-slate-500 after:absolute after:-bottom-0.5 after:left-1/2 after:h-0.5 after:w-0 after:-translate-x-1/2 after:bg-primary after:transition-all hover:text-primary hover:after:w-full md:whitespace-nowrap md:text-[11px] md:after:left-0 md:after:translate-x-0 lg:text-sm"
      >
        {item}
      </span>
    ))}
  </div>
);

const Footer = () => {
  return (
    <footer className="mt-1 w-full border-t border-green-100 bg-gradient-to-br from-green-50 via-white to-green-50 pt-10 md:pt-14">
      <div className="w-full px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-10 border-b border-green-100 pb-12 md:grid-cols-[minmax(220px,1.1fr)_minmax(0,2.9fr)] md:gap-8 xl:gap-14">
          <div className="flex flex-col items-center gap-5 text-center md:items-start md:text-left">
            <Image src={logo} alt="website logo" />
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center md:flex-col md:items-start md:justify-start md:gap-3">
              <div className="flex items-start gap-3 text-left text-sm text-slate-600">
                <Image src={location} alt="location" width={16} height={16} />
                <span>Ahmedabad, Gujarat, India</span>
              </div>
              <div className="flex items-center gap-3 text-left text-sm text-slate-600">
                <Image src={headphone} alt="phone" width={16} height={16} />
                <span>
                  Call Us <span className="font-medium text-slate-900">(+91)-8200861893</span>
                </span>
              </div>
              <div className="flex items-center gap-3 text-left text-sm text-slate-600">
                <Image src={email} alt="email" width={16} height={16} />
                <p>
                  Email <span className="font-medium text-slate-900">sales@ecobazar.com</span>
                </p>
              </div>
              <div className="flex items-center gap-3 text-left text-sm text-slate-600">
                <Image src={clock} alt="hours" width={16} height={16} />
                <span>10:00 – 18:00, Mon – Sat</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-x-10 md:grid-cols-4 md:gap-x-5 xl:gap-x-12">
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
        </div>
        <div className="py-5 text-center text-[13px] text-slate-400">
          © {new Date().getFullYear()} <span className="font-semibold text-primary">Ecobazar</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
