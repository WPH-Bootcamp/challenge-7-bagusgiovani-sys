import { use, useEffect, useState } from "react";
import { Nav_Bar } from "../constant/AllData";
import DesktopNav from "./DesktopNav";
import MobileMenu from "./MobileMenu";
import MobileMenuToggle from "../ui/Button/MobileMenu";
import ButtonPrimary from "../ui/Button/Button";
import LogoBrand from "../ui/Button/LogoBrand";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    console.log("Mobile menu is now", isMobileMenuOpen ? "open" : "closed");
  }, [isMobileMenuOpen]);

  
  const desktopItems = Nav_Bar.filter((i: { href: string; }) => i.href !== "#home");
  const mobileItems = Nav_Bar; 

  return (
    <>
      <header className="w-full max-w-360 fixed h-16 md:h-21 backdrop-blur-2xl flex justify-between items-center py-6 px-4 md:px-35 z-50">
        <LogoBrand></LogoBrand>

        <DesktopNav items={desktopItems} />

        <ButtonPrimary className="hidden md:flex font-medium">
          Let's Talk
        </ButtonPrimary>

        <MobileMenuToggle
          open={isMobileMenuOpen}
          onToggle={() => setIsMobileMenuOpen((v) => !v)}
        />
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        items={mobileItems}
      />
    </>
  );
}