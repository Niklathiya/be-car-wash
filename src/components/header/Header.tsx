"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Images as IMAGES } from "./../../shared/Images";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  const navItems = [
    { label: "HOME", href: "/" },
    { label: "ABOUT US", href: "/about" },
    { label: "SERVICES & PRICING", href: "/services" },
    { label: "WORKS", href: "/works" },
    { label: "CONTACT", href: "/contact" },
  ];

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header
      className={`fixed top-0 left-0 w-full opacity-95 z-1000 custom-border ${
        scrolled ? "h-14 bg-[var(--color-primary)]" : "h-[90px] bg-[transparent]"
      }`}
    >
      <div className="custom-container flex items-center justify-between h-full">
        <Link href="/">
          <Image
            src={IMAGES.Logo}
            alt="Logo"
            width={scrolled ? 60 : 110}
            height={scrolled ? 60 : 110}
            className="transition-all duration-500 ease-in-out"
          />
        </Link>

        <nav className="hidden lg:flex gap-8 text-white font-bold text-sm">
          {navItems.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`${
                pathname === href
                  ? "text-[var(--color-secondary)]"
                  : "text-white"
              } hover:text-[var(--color-secondary)] transition-colors duration-300`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <button className="lg:hidden text-white z-50" onClick={toggleMenu}>
          <Menu
            size={28}
            color="var(--color-secondary)"
            className="cursor-pointer"
          />
        </button>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[var(--color-primary)] shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <X
            size={28}
            className="text-white hover:text-[var(--color-secondary)] transform hover:rotate-180 transition-all duration-300 cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
        <div className="pt-4 flex flex-col text-white font-bold text-base">
          {navItems.map(({ label, href }) => (
            <div
              key={href}
              className="border-b border-[rgba(255,255,255,0.03)] px-4 py-3"
            >
              <Link
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`block ${
                  pathname === href
                    ? "text-[var(--color-secondary)]"
                    : "text-white"
                } hover:text-[var(--color-secondary)] transition-colors duration-300 text-sm`}
              >
                {label}
              </Link>
            </div>
          ))}
        </div>
      </div>

      {menuOpen && (
        <div
          className="fixed inset-0 bg-[#00000099] z-40"
          onClick={toggleMenu}
        />
      )}
    </header>
  );
};

export default Header;
