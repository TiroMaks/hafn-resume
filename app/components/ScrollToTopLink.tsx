"use client";

import { PropsWithChildren } from "react";

type ScrollToTopLinkProps = {
  className?: string;
};

export default function ScrollToTopLink({
  className,
  children
}: PropsWithChildren<ScrollToTopLinkProps>) {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const classes = className
    ? `cursor-pointer bg-transparent border-0 p-0 ${className}`
    : "cursor-pointer bg-transparent border-0 p-0";

  return (
    <button type="button" onClick={handleClick} className={classes}>
      {children}
    </button>
  );
}
