"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import MyButton from "./MyButton";

export default function MyHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleScrollTo = useCallback((id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const headerElement = document.querySelector("header") as HTMLElement | null;
      const headerHeight = headerElement?.offsetHeight ?? 0;
      const gap = 20; // keeps a small breathing room between the fixed header and content top
      const offset = section.getBoundingClientRect().top + window.scrollY - headerHeight - gap;

      window.scrollTo({
        top: offset > 0 ? offset : 0,
        behavior: "smooth"
      });
    }
    setIsMenuOpen(false);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const navItems = [
    {
      label: "Обо мне",
      iconSrc: "/images/icons/user.svg",
      iconAlt: "User icon",
      target: "about"
    },
    {
      label: "Навыки",
      iconSrc: "/images/icons/bug.svg",
      iconAlt: "Bug icon",
      target: "skills"
    },
    {
      label: "Проекты",
      iconSrc: "/images/icons/columns-3.svg",
      iconAlt: "Columns icon",
      target: "projects"
    },
    {
      label: "Связь",
      iconSrc: "/images/icons/link.svg",
      iconAlt: "Link icon",
      target: "contact"
    }
  ] as const;

  return (
    <header className="w-full fixed top-0 flex justify-center items-center z-20 px-4">
      <div
        className={`absolute top-0 left-0 w-full -z-10 transition-opacity duration-300 ${
          isScrolled ? "opacity-100" : "opacity-0"
        }`}
        style={{
          height: "calc(100% + 60px)",
          backgroundColor: "var(--header-overlay)",
          backdropFilter: "blur(10px)",
          maskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
        }}
      />
      <div className="w-full max-w-[1150px] flex justify-between items-center mt-[20px] z-20">
        <div>
          <MyButton text="Максим С." 
          icon={
            <Image
              src="/images/icons/fingerprint.svg"
              alt="Fingerprint icon"
              width={24}
              height={24}
            />}
            iconPosition="left" />
        </div>
        <div className="hidden md:flex gap-[5px]">
          {navItems.map((item) => (
            <MyButton
              key={item.target}
              text={item.label}
              icon={
                <Image
                  src={item.iconSrc}
                  alt={item.iconAlt}
                  width={24}
                  height={24}
                />
              }
              iconPosition="left"
              onClick={() => handleScrollTo(item.target)}
            />
          ))}
        </div>
        <button
          className="md:hidden relative flex h-[48px] w-[48px] items-center justify-center rounded-[12px] border-[3px]"
          style={{
            borderColor: "var(--button-border)",
            backgroundColor: "var(--button-background)"
          }}
          type="button"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
        >
          <span
            className={`absolute left-1/2 top-1/2 h-[2px] w-[22px] rounded-full transition-transform duration-300 -translate-x-1/2 ${
              isMenuOpen ? "translate-y-0 rotate-45" : "-translate-y-[8px]"
            }`}
            style={{ backgroundColor: "var(--button-text)" }}
          />
          <span
            className={`absolute left-1/2 top-1/2 h-[2px] w-[22px] rounded-full transition-opacity duration-300 -translate-x-1/2 -translate-y-1/2 ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
            style={{ backgroundColor: "var(--button-text)" }}
          />
          <span
            className={`absolute left-1/2 top-1/2 h-[2px] w-[22px] rounded-full transition-transform duration-300 -translate-x-1/2 ${
              isMenuOpen ? "translate-y-0 -rotate-45" : "translate-y-[8px]"
            }`}
            style={{ backgroundColor: "var(--button-text)" }}
          />
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-[14px] px-4">
          <div
            className="w-full border-[3px] rounded-[14px] px-[18px] py-[16px] flex flex-col gap-[10px]"
            style={{
              borderColor: "var(--surface-card-border)",
              backgroundColor: "var(--surface-card-background)",
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.25)"
            }}
          >
            {navItems.map((item) => (
              <MyButton
                key={`mobile-${item.target}`}
                text={item.label}
                icon={
                  <Image
                    src={item.iconSrc}
                    alt={item.iconAlt}
                    width={20}
                    height={20}
                  />
                }
                iconPosition="left"
                className="w-full justify-start"
                onClick={() => handleScrollTo(item.target)}
              />
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
