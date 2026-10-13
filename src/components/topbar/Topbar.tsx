"use client";
import logo from "../../../public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { IoMdLogOut } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { HiOutlineUser, HiOutlineBell } from "react-icons/hi2";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Topbar = () => {
  const [isProfileToggle, setIsProfileToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavbarShow, setIsNavbarShow] = useState(false);
  const [hasNotification, setHasNotification] = useState(true);
  const profileRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const cartCount = useSelector((state: RootState) => state.cart.cartItems.length);
  const wishlistCount = useSelector(
    (state: RootState) => state.wishlist.wishlistItems.length,
  );
  const orderCount = useSelector((state: RootState) => state.orders.orders.length);

  const isDashboard = pathname === "/dashboard";
  const shouldShowTopbar = !isDashboard || isScrolled;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setIsProfileToggle(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = [
    { href: "/dashboard", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/wishlist", label: "Wishlist", count: wishlistCount },
    { href: "/cart", label: "Cart", count: cartCount },
    { href: "/orders", label: "Orders", count: orderCount },
  ];

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 flex items-center justify-between px-2.5 transition-all duration-300 max-lg:flex-wrap lg:px-4",
        shouldShowTopbar
          ? "h-17.5 translate-y-0 bg-white opacity-100 shadow-md max-lg:h-12"
          : "h-0 -translate-y-full opacity-0",
        isNavbarShow && "max-lg:h-auto max-lg:bg-white max-lg:pb-6",
      )}
    >
      <div className="order-1 flex items-center">
        <Image src={logo} alt="Ecobazar logo" className="h-8 w-auto lg:h-auto" />
      </div>

      <div className="order-3 flex items-center gap-3 max-lg:order-2 max-lg:flex-1 max-lg:justify-end max-lg:gap-2">
        <Button
          variant="ghost"
          size="icon"
          className="relative rounded-full"
          onClick={() => setHasNotification(false)}
        >
          <HiOutlineBell className="size-6 text-slate-600" />
          {hasNotification && (
            <span className="absolute right-2 top-2 size-2.5 rounded-full border-2 border-white bg-green-500" />
          )}
        </Button>

        <div ref={profileRef} className="relative max-lg:hidden">
          <HiOutlineUser
            className={cn(
              "size-6 cursor-pointer text-slate-800 hover:text-primary",
              pathname === "/profile" && "text-primary",
            )}
            onClick={() => setIsProfileToggle(!isProfileToggle)}
          />
          <div
            className={cn(
              "absolute right-0 top-12 w-44 overflow-hidden rounded-xl border bg-white shadow-lg transition",
              isProfileToggle
                ? "pointer-events-auto translate-y-0 opacity-100"
                : "pointer-events-none -translate-y-2 opacity-0",
            )}
          >
            <Link href="/profile" className="no-underline">
              <div
                className={cn(
                  "flex items-center gap-2.5 border-b px-3.5 py-2.5 text-sm font-semibold hover:bg-green-50 hover:text-primary",
                  pathname === "/profile" && "bg-green-50 text-primary",
                )}
              >
                <HiOutlineUser className="size-4" />
                My Profile
              </div>
            </Link>
            <Link href="/login" onClick={() => setIsProfileToggle(false)} className="no-underline">
              <div className="flex items-center gap-2.5 px-3.5 py-2.5 text-sm font-semibold text-red-500 hover:bg-red-50">
                <IoMdLogOut className="size-4" />
                Logout
              </div>
            </Link>
          </div>
        </div>

        <button
          type="button"
          className={cn(
            "ml-2 hidden size-10 flex-col items-center justify-center gap-1.5 max-lg:flex",
            isNavbarShow && "[&>span:nth-child(1)]:translate-y-[8.5px] [&>span:nth-child(1)]:rotate-45 [&>span:nth-child(1)]:bg-primary [&>span:nth-child(2)]:translate-x-2.5 [&>span:nth-child(2)]:opacity-0 [&>span:nth-child(3)]:-translate-y-[8.5px] [&>span:nth-child(3)]:-rotate-45 [&>span:nth-child(3)]:bg-primary",
          )}
          onClick={() => setIsNavbarShow(!isNavbarShow)}
          aria-label="Toggle menu"
        >
          <span className="block h-0.5 w-[26px] rounded bg-slate-800 transition" />
          <span className="block h-0.5 w-[26px] rounded bg-slate-800 transition" />
          <span className="block h-0.5 w-[26px] rounded bg-slate-800 transition" />
        </button>
      </div>

      <nav
        className={cn(
          "order-2 max-lg:order-3 max-lg:w-full max-lg:overflow-hidden max-lg:transition-all",
          isNavbarShow
            ? "max-lg:max-h-[500px] max-lg:opacity-100"
            : "max-lg:pointer-events-none max-lg:max-h-0 max-lg:opacity-0",
        )}
      >
        <ul
          className="m-0 flex list-none items-center justify-center gap-5 p-0 max-lg:mt-4 max-lg:flex-col max-lg:gap-2"
          onClick={() => setIsNavbarShow(false)}
        >
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "inline-flex items-center rounded-full px-4 py-2.5 text-sm font-medium no-underline transition hover:bg-primary hover:text-white",
                  pathname === item.href && "bg-primary text-white shadow-md",
                )}
              >
                {item.label}
                {item.count ? (
                  <Badge
                    className={cn(
                      "ml-1.5 h-5 min-w-5 bg-green-100 px-1.5 text-[11px] text-primary",
                      pathname === item.href && "bg-white",
                    )}
                  >
                    {item.count}
                  </Badge>
                ) : null}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Topbar;
