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
    "w-full p-[20px] border-[3px] border-[#141414] bg-[#0A0A0A] rounded-[14px] flex flex-col gap-[15px]",
    className
  ]
    .filter(Boolean)
    .join(" ");

  const normalizedContent = React.Children.toArray(content);

  return (
    <div className={containerClassName} id={id}>
      <div className="flex items-center gap-[10px]">
        {titleIcon}
        <span className="text-[19px] text-[var(--color-title)]">{title}</span>
      </div>
      {normalizedContent}
    </div>
  );
};

export default MyCard;