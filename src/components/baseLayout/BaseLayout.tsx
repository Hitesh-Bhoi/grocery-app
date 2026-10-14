"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Topbar from "../topbar/Topbar";
import Footer from "../footer/Footer";
import Splash from "../splash/Splash";
import { useRouter } from "next/navigation";

// Routes that should NOT render Topbar / Footer (auth pages)
const AUTH_ROUTES = ["/login", "/register", "/forgot-password"];

const BaseLayout = ({ children }: any) => {
  const [isHydrated, setIsHydrated] = useState<boolean>(false);
  const [showSplash, setShowSplash] = useState<boolean>(false);
  const pathname = usePathname();
  const router = useRouter();

  const isAuthPage = AUTH_ROUTES.includes(pathname);

  /**
   * Make proper hook and return content order to avoid hydration issue
   * also check for the active browser extension like gramerly
   */
  // Mark hydration complete
  // Call the useEffect with [] first
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (pathname === "/") {
      setShowSplash(true);
      const timer = setTimeout(() => {
        router.push("/dashboard");
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      setShowSplash(false);
    }
  }, [pathname, router]);

  // Show splash on root path "/"
  if (pathname === "/" || showSplash) {
    return <Splash />;
  }

  // Auth pages render without Topbar / Footer
  if (isAuthPage) {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Topbar />
      <main className="w-full flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default BaseLayout;
