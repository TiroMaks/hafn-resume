"use client";

import { useState, useEffect } from "react";

interface TypewriterProps {
  texts: string[];
  typingDelayMs?: number;
  deletingDelayMs?: number;
  pauseDurationMs?: number;
}

export default function Typewriter({
  texts,
  typingDelayMs = 150,
  deletingDelayMs = 100,
  pauseDurationMs = 5000,
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState("");
  const [phase, setPhase] = useState<"typing" | "waiting" | "deleting">("typing");
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentText = texts[currentIndex] ?? "";
  const hasNoTexts = texts.length === 0;

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (hasNoTexts) {
      setDisplayText("");
      return () => clearTimeout(timeout);
    }

    if (phase === "typing") {
      if (displayText.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, typingDelayMs);
      } else {
        setPhase("waiting");
      }
    } else if (phase === "waiting") {
      timeout = setTimeout(() => {
        setPhase("deleting");
      }, pauseDurationMs);
    } else if (phase === "deleting") {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length - 1));
        }, deletingDelayMs);
      } else {
        const nextIndex = (currentIndex + 1) % texts.length;
        setCurrentIndex(nextIndex);
        setPhase("typing");
      }
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, currentText, deletingDelayMs, displayText, hasNoTexts, pauseDurationMs, phase, texts.length, typingDelayMs]);

  return (
    <span className="inline-flex items-center">
      <span className="text-[38px] font-bold bg-gradient-to-b from-[#C3C3C3] to-[#2C2C2C] bg-clip-text text-transparent">
        {displayText}
      </span>
      <span className="text-[38px] font-bold text-[#C3C3C3] typewriter-cursor ml-1">|</span>
    </span>
  );
}
