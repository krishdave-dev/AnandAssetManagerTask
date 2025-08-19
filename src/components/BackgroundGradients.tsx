export default function BackgroundGradients() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Light Blue Gradient - Right Middle */}
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-gradient-radial from-blue-100/20 via-blue-50/10 to-transparent rounded-full blur-3xl"></div>
      
      {/* Light Green Gradient - Left Middle */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-radial from-green-100/20 via-green-50/10 to-transparent rounded-full blur-3xl"></div>
    </div>
  );
}
