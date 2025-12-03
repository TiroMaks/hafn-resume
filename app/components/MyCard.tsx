"use client";

import React from "react";

interface MyCardProps {
  id?: string;
  title: string;
  titleIcon?: React.ReactNode;
  content: React.ReactNode;
  className?: string;
}

const MyCard: React.FC<MyCardProps> = ({
  id,
  title,
  titleIcon,
  className,
  content
}) => {
  const containerClassName = [
    "w-full p-[16px] sm:p-[20px] border-[3px] rounded-[14px] flex flex-col gap-[12px] sm:gap-[15px]",
    className
  ]
    .filter(Boolean)
    .join(" ");

  const containerStyle: React.CSSProperties = {
    backgroundColor: "var(--surface-card-background)",
    borderColor: "var(--surface-card-border)"
  };

  const normalizedContent = React.Children.toArray(content);

  return (
    <div className={containerClassName} id={id} style={containerStyle}>
      <div className="flex items-center gap-[8px] sm:gap-[10px]">
        {titleIcon}
        <span className="text-[18px] sm:text-[19px] text-[var(--color-title)]">{title}</span>
      </div>
      {normalizedContent}
    </div>
  );
};

export default MyCard;