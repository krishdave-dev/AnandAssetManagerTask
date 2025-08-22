export default function BackgroundGradients() {
  const gradients = [
    {
      position: "left-0 -translate-x-1/3",
      colors: "rgba(59, 130, 246, 0.3) 0%, rgba(147, 197, 253, 0.15) 50%, transparent 100%",
    },
    {
      position: "right-0 translate-x-1/3",
      colors: "rgba(34, 197, 94, 0.3) 0%, rgba(134, 239, 172, 0.15) 50%, transparent 100%",
    },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {gradients.map((g, i) => (
        <div
          key={i}
          className={`absolute top-1/2 ${g.position} transform -translate-y-1/2 w-[500px] h-[700px] rounded-full blur-3xl`}
          style={{
            background: `radial-gradient(circle, ${g.colors})`
          }}
        ></div>
      ))}
    </div>
  );
}
