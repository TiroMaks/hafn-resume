"use client";

import React from "react";

interface MyButtonProps {
  text?: string;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "dark";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  buttonType?: "button" | "submit" | "reset";
  disabled?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const MyButton: React.FC<MyButtonProps> = ({
  text,
  className,
  onClick,
  type = "dark",
  icon,
  iconPosition = "right",
  buttonType = "button",
  disabled = false,
  onMouseEnter,
  onMouseLeave,
}) => {
  const baseStyle =
    "flex items-center justify-center font-normal transition-all duration-300 px-[30px] py-[10px] gap-[8px] cursor-pointer select-none rounded-[14px] border-[3px]";

  const styleMap = {
    dark: "bg-[#0A0A0A] text-[#B4B4B4] border-[#141414] hover:scale-105 active:scale-95",
  } as const;

  const hasText = !!text;
  const hasIcon = !!icon;

  const style = `${baseStyle} ${styleMap[type]} ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className || ""} ${
    !hasText && hasIcon ? "aspect-square p-2" : ""
  }`;

  return (
    <button 
      type={buttonType}
      className={style} 
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {iconPosition === "left" && icon && <span className="flex items-center">{icon}</span>}
      {text && <span className="select-none">{text}</span>}
      {iconPosition === "right" && icon && <span className="flex items-center">{icon}</span>}
    </button>
  );
};

export default MyButton;