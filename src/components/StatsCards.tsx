import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
  const graphColors = [
    { stroke: "#3b82f6", fill: "#3b82f6" },
    { stroke: "#10b981", fill: "#10b981" },
    { stroke: "#8b5cf6", fill: "#8b5cf6" },
    { stroke: "#f59e0b", fill: "#f59e0b" },
  ];

  const zigzagPaths = [
    // Area under zigzag
    "M0,80 L40,40 L80,80 L120,40 L160,80 L200,40 L200,100 L0,100 Z",
    "M0,70 L50,50 L100,70 L150,50 L200,70 L200,100 L0,100 Z",
    "M0,85 L30,65 L70,85 L110,65 L150,85 L200,65 L200,100 L0,100 Z",
    "M0,75 L60,55 L90,75 L130,55 L170,75 L200,55 L200,100 L0,100 Z"
  ];


  const zigzagStrokePaths = [
    // Border line for zigzag
    "M0,80 L40,40 L80,80 L120,40 L160,80 L200,40",
    "M0,70 L50,50 L100,70 L150,50 L200,70",
    "M0,85 L30,65 L70,85 L110,65 L150,85 L200,65",
    "M0,75 L60,55 L90,75 L130,55 L170,75 L200,55"
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, i) => {
        const colorIndex = i % graphColors.length;
        const pathIndex = i % zigzagPaths.length;
        
        return (
          <Card key={i} className="relative overflow-hidden">
            <div className="absolute inset-0 opacity-40">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 200 100"
                className="w-full h-full"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id={`gradient-${i}`} x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor={graphColors[colorIndex].fill} stopOpacity="0.1" />
                    <stop offset="100%" stopColor={graphColors[colorIndex].fill} stopOpacity="0.02" />
                  </linearGradient>
                </defs>
                
                <path
                  d={zigzagPaths[pathIndex]}
                  fill={`url(#gradient-${i})`}
                />
                
                <path
                  d={zigzagStrokePaths[pathIndex]}
                  stroke={graphColors[colorIndex].stroke}
                  strokeWidth="2"
                  fill="none"
                  opacity="0.7"
                />
              </svg>
            </div>

            <CardContent className="relative p-6">
              <div className="flex items-start justify-between mb-2">
                <p className="text-muted-foreground text-sm">{card.title}</p>
                {card.trend && (
                  <Badge 
                    className="bg-green-100 text-green-700 hover:bg-green-200"
                  >
                    {card.trend.type === "up" ? (
                      <ArrowUpRight size={14} className="mr-1" />
                    ) : (
                      <ArrowDownRight size={14} className="mr-1" />
                    )}
                    {card.trend.value}
                  </Badge>
                )}
              </div>
              <h2 className="text-2xl font-bold text-foreground">{card.value}</h2>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
