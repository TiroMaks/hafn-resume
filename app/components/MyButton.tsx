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
    "flex items-center justify-center font-normal transition-all duration-300 px-[30px] py-[10px] gap-[8px] cursor-pointer select-none rounded-[14px] border-[3px] hover:scale-105 active:scale-95";

  const styleMap: Record<string, React.CSSProperties> = {
    dark: {
      backgroundColor: "var(--button-background)",
      color: "var(--button-text)",
      borderColor: "var(--button-border)"
    }
  };

  const hasText = !!text;
  const hasIcon = !!icon;

  const resolvedStyle = styleMap[type] ?? styleMap.dark;

  const style = `${baseStyle} ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className || ""} ${
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
      style={resolvedStyle}
    >
      {iconPosition === "left" && icon && <span className="flex items-center">{icon}</span>}
      {text && <span className="select-none">{text}</span>}
      {iconPosition === "right" && icon && <span className="flex items-center">{icon}</span>}
    </button>
  );
};

export default MyButton;