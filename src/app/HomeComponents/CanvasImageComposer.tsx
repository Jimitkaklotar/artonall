"use client";
import React, { useEffect, useRef } from "react";

interface CanvasImageComposerProps {
  backgroundUrl: string;
  overlayUrl: string;
  overlayX: number;
  overlayY: number;
  overlayWidth: number;
  overlayHeight: number;
  backgroundWidth: number;
  backgroundHeight: number;
}

const CanvasImageComposer: React.FC<CanvasImageComposerProps> = ({
  backgroundUrl,
  overlayUrl,
  overlayX,
  overlayY,
  overlayWidth,
  overlayHeight,
  backgroundWidth,
  backgroundHeight,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const background = new Image();
    const overlay = new Image();

    background.src = backgroundUrl;
    overlay.src = overlayUrl;

    const drawImages = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

      const scaleX = canvas.width / backgroundWidth;
      const scaleY = canvas.height / backgroundHeight;

      ctx.shadowColor = "rgba(0,0,0,0.5)";
      ctx.shadowBlur = 15;
      ctx.shadowOffsetX = 5;
      ctx.shadowOffsetY = 5;

      ctx.drawImage(
        overlay,
        overlayX * scaleX,
        overlayY * scaleY,
        overlayWidth * scaleX,
        overlayHeight * scaleY
      );
    };

    let loaded = 0;
    background.onload = () => {
      loaded += 1;
      if (loaded === 2) drawImages();
    };
    overlay.onload = () => {
      loaded += 1;
      if (loaded === 2) drawImages();
    };
  }, [
    backgroundUrl,
    overlayUrl,
    overlayX,
    overlayY,
    overlayWidth,
    overlayHeight,
    backgroundWidth,
    backgroundHeight,
  ]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-auto max-h-[90vh] rounded-md"
      width={backgroundWidth}
      height={backgroundHeight}
    />
  );
};

export default CanvasImageComposer;
