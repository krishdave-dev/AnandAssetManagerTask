import { ArrowUpRight, ArrowDownRight } from "lucide-react";

interface Trend {
  type: "up" | "down";
  value: string;
}

interface Card {
  title: string;
  value: string;
  trend: Trend | null;
}

interface StatsCardsProps {
  cards: Card[];
}

export default function StatsCards({ cards }: StatsCardsProps) {
  // Different colors for each card's graph with proper hex values
  const graphColors = [
    { stroke: "#3b82f6", fill: "#3b82f6" }, // Blue
    { stroke: "#10b981", fill: "#10b981" }, // Green  
    { stroke: "#8b5cf6", fill: "#8b5cf6" }, // Purple
    { stroke: "#f59e0b", fill: "#f59e0b" }, // Orange
  ];

  // Different curve paths for variety
  const curvePaths = [
    "M0,80 C40,20 80,40 120,30 C160,40 200,10 200,10 L200,100 L0,100 Z", // Area path with closing
    "M0,70 C50,30 100,50 150,20 C175,30 200,15 200,15 L200,100 L0,100 Z",
    "M0,85 C30,35 70,55 110,25 C150,45 200,25 200,25 L200,100 L0,100 Z", 
    "M0,75 C60,25 90,45 130,35 C170,25 200,20 200,20 L200,100 L0,100 Z"
  ];

  const strokePaths = [
    "M0,80 C40,20 80,40 120,30 C160,40 200,10 200,10", // Stroke only path
    "M0,70 C50,30 100,50 150,20 C175,30 200,15 200,15",
    "M0,85 C30,35 70,55 110,25 C150,45 200,25 200,25",
    "M0,75 C60,25 90,45 130,35 C170,25 200,20 200,20"
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, i) => {
        const colorIndex = i % graphColors.length;
        const pathIndex = i % curvePaths.length;
        
        return (
          <div
            key={i}
            className="relative bg-white rounded-xl shadow-md p-6 overflow-hidden"
          >
            {/* Enhanced background graph with border line and low opacity area */}
            <div className="absolute inset-0 opacity-40">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 200 100"
                className="w-full h-full"
                preserveAspectRatio="none"
              >
                {/* Gradient definition for low opacity area */}
                <defs>
                  <linearGradient id={`gradient-${i}`} x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor={graphColors[colorIndex].fill} stopOpacity="0.1" />
                    <stop offset="100%" stopColor={graphColors[colorIndex].fill} stopOpacity="0.02" />
                  </linearGradient>
                </defs>
                
                {/* Low opacity area under the curve */}
                <path
                  d={curvePaths[pathIndex]}
                  fill={`url(#gradient-${i})`}
                />
                
                {/* Clear border line */}
                <path
                  d={strokePaths[pathIndex]}
                  stroke={graphColors[colorIndex].stroke}
                  strokeWidth="2"
                  fill="none"
                  opacity="0.7"
                />
              </svg>
            </div>

            {/* Content */}
            <div className="relative">
              <p className="text-gray-500 text-sm">{card.title}</p>
              <h2 className="text-2xl font-bold text-gray-900">{card.value}</h2>

              {card.trend && (
                <div
                  className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-sm font-medium mt-2
                  ${
                    card.trend.type === "up"
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {card.trend.type === "up" ? (
                    <ArrowUpRight size={14} />
                  ) : (
                    <ArrowDownRight size={14} />
                  )}
                  {card.trend.value}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
