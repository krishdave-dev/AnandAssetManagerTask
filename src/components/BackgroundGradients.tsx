import React from "react";

interface EllipseGradientProps {
  positionClass?: string;
  widthClass?: string;
  heightClass?: string;
  colors?: string;
}

function EllipseGradient({
  positionClass = "",
  widthClass = "w-[500px]",
  heightClass = "h-[700px]",
  colors = "rgba(59, 130, 246, 0.3) 0%, rgba(147, 197, 253, 0.15) 50%, transparent 100%",
}: EllipseGradientProps) {
  return (
    <div
      className={`absolute top-1/2 transform -translate-y-1/2 rounded-full blur-3xl pointer-events-none ${positionClass} ${widthClass} ${heightClass}`}
      style={{
        background: `radial-gradient(circle, ${colors})`,
      }}
    ></div>
  );
}

export default function BackgroundGradients() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <EllipseGradient
        positionClass="left-0 -translate-x-1/3"
        colors="rgba(59, 130, 246, 0.3) 0%, rgba(147, 197, 253, 0.15) 50%, transparent 100%"
      />
      <EllipseGradient
        positionClass="right-0 translate-x-1/3"
        colors="rgba(34, 197, 94, 0.3) 0%, rgba(134, 239, 172, 0.15) 50%, transparent 100%"
      />
    </div>
  );
}
