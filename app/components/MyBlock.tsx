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
}

const MyBlock: React.FC<MyBlockProps> = ({
  title,
  openInNewTab,
  titleIcon,
  className,
  textColor,
  backgroundColor,
  borderColor
}) => {
  const defaultTextColor = textColor ?? "var(--color-title)";
  const defaultBackgroundColor = backgroundColor ?? "var(--chip-background)";
  const defaultBorderColor = borderColor ?? "var(--chip-border)";

  const containerClassName = [
    "px-[30px] py-[5px] border-[2px] rounded-[8px] flex flex-row items-center justify-center gap-[10px]",
    className
  ]
    .filter(Boolean)
    .join(" ");

  const onClick = openInNewTab
    ? () => {
        window.open(openInNewTab, '_blank', 'noopener,noreferrer');
      }
    : undefined;

  return (
    <div
      className={containerClassName}
      onClick={onClick}
      style={{ backgroundColor: defaultBackgroundColor, borderColor: defaultBorderColor }}
    >
      {titleIcon}
      <span className="text-[15px]" style={{ color: defaultTextColor }}>
        {title}
      </span>
    </div>
  );
};

export default MyBlock;