export default function EllipseBackground() {
  return (
    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/3 pointer-events-none z-0">
      <div
        className="w-[829px] h-[879px] bg-gradient-to-br from-green-400 via-blue-400 to-blue-500 opacity-30 rounded-[50%] blur-2xl"
        style={{
          borderRadius: "45% 55% 60% 40% / 55% 45% 60% 40%",
        }}
      ></div>
    </div>
  );
}