"use client";

import React from "react";

interface MyProjectProps {
  title: string;
  description: string;
  siteUrl: string;
  image: React.ReactNode;
  className?: string;
  gradientFrom?: string;
  gradientTo?: string;
  borderColor?: string;
  buttonBackground?: string;
}

const MyProject: React.FC<MyProjectProps> = ({
  title,
  description,
  siteUrl,
  image,
  className,
  gradientFrom,
  gradientTo,
  borderColor,
  buttonBackground
}) => {
  const gradientStart = gradientFrom ?? "#11322C";
  const gradientEnd = gradientTo ?? "var(--project-gradient-to)";
  const baseBorderColor = borderColor ?? "#277E6D";
  const buttonBaseColor = buttonBackground ?? gradientStart;

  const [tilt, setTilt] = React.useState<{ rotateX: number; rotateY: number }>({
    rotateX: 0,
    rotateY: 0
  });
  const [isButtonHover, setIsButtonHover] = React.useState(false);
  const [isButtonActive, setIsButtonActive] = React.useState(false);

  const rafRef = React.useRef<number | null>(null);
  const targetTiltRef = React.useRef<{ rotateX: number; rotateY: number }>({
    rotateX: 0,
    rotateY: 0
  });

  const scheduleTiltUpdate = () => {
    if (typeof window === "undefined") {
      return;
    }

    if (rafRef.current === null) {
      rafRef.current = window.requestAnimationFrame(() => {
        setTilt(targetTiltRef.current);
        rafRef.current = null;
      });
    }
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - bounds.left;
    const offsetY = event.clientY - bounds.top;
    const centerX = bounds.width / 2;
    const centerY = bounds.height / 2;

    const rotateY = ((offsetX - centerX) / centerX) * 6;
    const rotateX = ((centerY - offsetY) / centerY) * 6;

    targetTiltRef.current = { rotateX, rotateY };
    scheduleTiltUpdate();
  };

  const resetTilt = () => {
    targetTiltRef.current = { rotateX: 0, rotateY: 0 };
    scheduleTiltUpdate();
  };

  React.useEffect(() => {
    return () => {
      if (rafRef.current !== null && typeof window !== "undefined") {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const processedImage = React.isValidElement<{ className?: string }>(image)
    ? React.cloneElement(image, {
        className: [
          "h-full w-full object-cover object-center",
          image.props.className
        ]
          .filter(Boolean)
          .join(" ")
      })
    : image;

  const cardStyle: React.CSSProperties = {
    transform: `perspective(800px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
    transition: "transform 0.12s ease-out, border-color 0.2s ease",
    willChange: "transform",
    transformStyle: "preserve-3d",
    background: `linear-gradient(180deg, ${gradientStart}, ${gradientEnd})`,
    borderColor: baseBorderColor
  };

  const buttonScale = isButtonActive ? 1 : isButtonHover ? 1.05 : 1;
  const buttonStyle: React.CSSProperties = {
    borderColor: baseBorderColor,
    backgroundColor: isButtonActive ? baseBorderColor : buttonBaseColor,
    transform: `scale(${buttonScale})`,
    transition: "transform 0.2s ease, background-color 0.2s ease",
    color: "var(--project-button-text)"
  };

  return (
    <div
      className={[
        "relative transition-transform border-[4px] rounded-[12px] flex items-stretch gap-[10px] justify-between overflow-hidden",
        className
      ]
        .filter(Boolean)
        .join(" ")}
      style={cardStyle}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        resetTilt();
      }}
    >
      <div className="relative basis-[45%] flex-shrink-0 overflow-hidden">
        <div className="relative h-full w-full">{processedImage}</div>
      </div>
      <div className="flex w-full flex-col items-center gap-[5px] p-[10px] text-center">
        <h2 className="text-[16px]" style={{ color: "var(--project-text-color)" }}>{title}</h2>
        <p className="text-[12px] font-thin h-full leading-[15px]" style={{ color: "var(--project-description-color)" }}>{description}</p>
        <button
          onClick={() => window.open(siteUrl, "_blank", "noopener,noreferrer")}
          className="mt-[5px] cursor-pointer rounded-[8px] border-[3px] px-[30px] py-[5px] text-[13px]"
          style={buttonStyle}
          onMouseEnter={() => setIsButtonHover(true)}
          onMouseLeave={() => {
            setIsButtonHover(false);
            setIsButtonActive(false);
          }}
          onMouseDown={() => setIsButtonActive(true)}
          onMouseUp={() => setIsButtonActive(false)}
        >
          Перейти
        </button>
      </div>
    </div>
  );
};

export default MyProject;