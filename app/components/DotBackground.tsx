"use client";

import { useEffect, useRef } from "react";

export default function DotBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let mouseX = -1000;
    let mouseY = -1000;

    const DOT_SIZE = 5;
    const GAP = 20;
    const GRID_PITCH = DOT_SIZE + GAP;
    const REPEL_RADIUS = 100;
    const RETURN_SPEED = 0.1;

    let dots: { x: number; y: number; baseX: number; baseY: number }[] = [];

    const initDots = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      
      canvas.width = width;
      canvas.height = height;

      dots = [];
      const cols = Math.ceil(width / GRID_PITCH);
      const rows = Math.ceil(height / GRID_PITCH);

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          let x = i * GRID_PITCH + GRID_PITCH / 2;
          if (j % 2 === 1) {
            x += GRID_PITCH / 2;
          }
          const y = j * GRID_PITCH + GRID_PITCH / 2;
          dots.push({ x, y, baseX: x, baseY: y });
        }
      }
    };

    // When changing the window size
    const resizeObserver = new ResizeObserver(() => {
      initDots();
    });
    resizeObserver.observe(container);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Detect dark mode
      const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      ctx.fillStyle = isDark ? "rgba(45, 45, 45, 0.2)" : "rgba(0, 0, 0, 0.2)";

      dots.forEach((dot) => {
        let targetX = dot.baseX;
        let targetY = dot.baseY;

        const dx = mouseX - dot.baseX;
        const dy = mouseY - dot.baseY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < REPEL_RADIUS) {
          const angle = Math.atan2(dy, dx);
          const force = (REPEL_RADIUS - distance) / REPEL_RADIUS;
          const maxDisplacement = 40;
          
          targetX -= Math.cos(angle) * force * maxDisplacement;
          targetY -= Math.sin(angle) * force * maxDisplacement;
        }

        dot.x += (targetX - dot.x) * RETURN_SPEED;
        dot.y += (targetY - dot.y) * RETURN_SPEED;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, DOT_SIZE / 2, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      <canvas ref={canvasRef} />
    </div>
  );
}
