export default function BackgroundGradients() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div 
        className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/3 w-[500px] h-[500px] rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(147, 197, 253, 0.15) 50%, transparent 100%)'
        }}
      ></div>
      
      <div 
        className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/3 w-[500px] h-[500px] rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(34, 197, 94, 0.3) 0%, rgba(134, 239, 172, 0.15) 50%, transparent 100%)'
        }}
      ></div>
    </div>
  );
}
