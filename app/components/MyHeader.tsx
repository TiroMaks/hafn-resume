"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import MyButton from "./MyButton";

export default function MyHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
  }, []);

  return (
    <header className="w-full fixed top-0 flex justify-center items-center z-20">
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
        <div className="flex gap-[5px]">
          <MyButton
            text="Обо мне"
            icon={
              <Image
                src="/images/icons/user.svg"
                alt="User icon"
                width={24}
                height={24}
              />
            }
            iconPosition="left"
            onClick={() => handleScrollTo("about")}
          />
          <MyButton
            text="Навыки"
            icon={
              <Image
                src="/images/icons/bug.svg"
                alt="Bug icon"
                width={24}
                height={24}
              />
            }
            iconPosition="left"
            onClick={() => handleScrollTo("skills")}
          />
          <MyButton
            text="Проекты"
            icon={
              <Image
                src="/images/icons/columns-3.svg"
                alt="Columns icon"
                width={24}
                height={24}
              />
            }
            iconPosition="left"
            onClick={() => handleScrollTo("projects")}
          />
          <MyButton
            text="Связь"
            icon={
              <Image
                src="/images/icons/link.svg"
                alt="Link icon"
                width={24}
                height={24}
              />
            }
            iconPosition="left"
            onClick={() => handleScrollTo("contact")}
          />
        </div>
      </div>
    </header>
  );
}
