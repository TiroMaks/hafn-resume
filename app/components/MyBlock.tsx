"use client";

import React from "react";

interface MyBlockProps {
  title: string | React.ReactNode;
  openInNewTab?: string;
  titleIcon?: React.ReactNode;
  className?: string;
  textColor?: string;
  backgroundColor?: string;
  borderColor?: string;
  titleClassName?: string;
  fullWidth?: boolean;
}

const MyBlock: React.FC<MyBlockProps> = ({
  title,
  openInNewTab,
  titleIcon,
  className,
  textColor,
  backgroundColor,
  borderColor,
  titleClassName,
  fullWidth = false
}) => {
  const defaultTextColor = textColor ?? "var(--color-title)";
  const defaultBackgroundColor = backgroundColor ?? "var(--chip-background)";
  const defaultBorderColor = borderColor ?? "var(--chip-border)";

  const containerClassName = [
    fullWidth ? "w-full flex" : "w-auto inline-flex",
    "px-[16px] sm:px-[20px] md:px-[24px] lg:px-[30px] py-[6px] border-[2px] rounded-[8px] items-center justify-center gap-[10px] text-center sm:text-left",
    openInNewTab ? "cursor-pointer" : "select-none",
    className
  ]
    .filter(Boolean)
    .join(" ");

  const onClick = openInNewTab
    ? () => {
        window.open(openInNewTab, '_blank', 'noopener,noreferrer');
      }
    : undefined;

  const titleSpanClassName = [
    "text-[14px] sm:text-[15px] whitespace-nowrap",
    titleClassName
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={containerClassName}
      onClick={onClick}
      style={{ backgroundColor: defaultBackgroundColor, borderColor: defaultBorderColor }}
    >
      {titleIcon}
      <span className={titleSpanClassName} style={{ color: defaultTextColor }}>
        {title}
      </span>
    </div>
  );
};

export default MyBlock;