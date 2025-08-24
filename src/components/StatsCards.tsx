import { ChevronUp, ChevronDown } from "lucide-react";
import React from "react";
interface Trend {
  type: "up" | "down";
  value: string;
}

interface CardType {
  title: string;
  value: string;
  trend: Trend | null;
}

interface StatsCardsProps {
  cards: CardType[];
}

export default function StatsCards({ cards }: StatsCardsProps) {
  // Generate smooth increasing points for each card
  function generateGraphPoints() {
    const base = 40;
    const step = 10;
    // All graphs increase, with slight random variation
    return Array.from({ length: 6 }, (_, i) =>
      Math.max(10, Math.min(80, base + step * i + (Math.random() * 6 - 2)))
    ).map((y) => 80 - y); // invert for SVG
  }

  return (
    <section className="py-8 w-full flex justify-center">
      <div className="flex items-center justify-center gap-8">
        {cards.map((card, i) => {
          const yPoints = generateGraphPoints();
          const xPoints = [0, 46, 92, 138, 184, 230];
          const linePath = xPoints
            .map((x, idx) => `${idx === 0 ? "M" : "L"}${x},${yPoints[idx]}`)
            .join(" ");
          const areaPath = `M0,91 L${xPoints
            .map((x, idx) => `${x},${yPoints[idx]}`)
            .join(" L")} L230,91 Z`;

          return (
            <React.Fragment key={i}>
              <div
                className="relative w-full h-[91px] max-w-[230px] rounded-2xl overflow-hidden flex flex-col justify-center px-5"
                style={{ backgroundColor: "var(--stats-card-bg)" }}
              >
                {/* Background Chart */}
                <div className="absolute inset-0 opacity-40 pointer-events-none">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 230 91"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                  >
                    <rect width="230" height="91" fill="transparent" />
                    {/* Area under line */}
                    <path
                      d={areaPath}
                      fill={
                        card.trend?.type === "up"
                          ? "url(#green-gradient)"
                          : "url(#red-gradient)"
                      }
                      fillOpacity="0.2"
                    />
                    {/* Line graph */}
                    <path
                      d={linePath}
                      stroke={
                        card.trend?.type === "up"
                          ? "var(--green-primary)"
                          : "var(--red-error)"
                      }
                      strokeOpacity="0.5"
                      strokeWidth="3"
                      fill="none"
                    />
                    <defs>
                      <linearGradient
                        id="green-gradient"
                        x1="0"
                        y1="0"
                        x2="230"
                        y2="91"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="var(--green-primary)" />
                        <stop
                          offset="1"
                          stopColor="var(--green-primary)"
                          stopOpacity="0"
                        />
                      </linearGradient>
                      <linearGradient
                        id="red-gradient"
                        x1="0"
                        y1="0"
                        x2="230"
                        y2="91"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="var(--red-error)" />
                        <stop
                          offset="1"
                          stopColor="var(--red-error)"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                {/* Content */}
                <div className="relative z-10 p-3 h-full flex flex-col justify-center">
                  <h3 className="text-gray-700 font-nunito text-xs lg:text-lg font-medium leading-normal ">
                    {card.title}
                  </h3>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-gray-900 font-nunito text-lg lg:text-2xl font-bold">
                      {card.value}
                    </span>
                    {card.trend && (
                      <div
                        style={{
                          backgroundColor:
                            card.trend.type === "up"
                              ? "var(--green-neon)"
                              : "var(--red-error)",
                        }}
                        className="flex items-center gap-1 px-2 py-1 rounded-lg"
                      >
                        {card.trend.type === "up" ? (
                          <ChevronUp className="w-4 h-4 text-green-600" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-red-600" />
                        )}
                        <span
                          className={`font-nunito text-xs font-bold ${
                            card.trend.type === "up"
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {card.trend.value}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {i < cards.length - 1 && (
                <div className="h-[60px] w-3 rounded-full bg-gray-200"></div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
}
