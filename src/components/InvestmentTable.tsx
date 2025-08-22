import Image from "next/image";

const strategyIcons = [
  "/strategy-icon.png",
  "/strategy-icon2.png",
  "/strategy-icon3.png",
  "/strategy-icon4.png",
  "/strategy-icon5.png",
  "/strategy-icon.png", // fallback or repeat if more strategies
];

const strategies = [
  { id: 1, name: "Strategy 1", description: "This is a strategy by manager 1", color: "orange", investment: "30000 Rs", current: "43000 Rs", pnl: "+600 Rs", pnlPercent: "+3.6%" },
  { id: 2, name: "Strategy 1", description: "This is a strategy by manager 1", color: "cyan", investment: "30000 Rs", current: "43000 Rs", pnl: "+600 Rs", pnlPercent: "+3.6%" },
  { id: 3, name: "Strategy 1", description: "This is a strategy by manager 1", color: "yellow", investment: "30000 Rs", current: "43000 Rs", pnl: "+600 Rs", pnlPercent: "+3.6%" },
  { id: 4, name: "Strategy 1", description: "This is a strategy by manager 1", color: "pink", investment: "30000 Rs", current: "43000 Rs", pnl: "+600 Rs", pnlPercent: "+3.6%" },
  { id: 5, name: "Strategy 1", description: "This is a strategy by manager 1", color: "orange", investment: "30000 Rs", current: "43000 Rs", pnl: "+600 Rs", pnlPercent: "+3.6%" },
  { id: 6, name: "Strategy 1", description: "This is a strategy by manager 1", color: "green", investment: "30000 Rs", current: "43000 Rs", pnl: "+600 Rs", pnlPercent: "+3.6%" },
];

const InvestmentTable = () => {
  return (
    <div className="flex justify-center w-full">
      <div>
        {/* Desktop Table Headers */}
        <div className="hidden lg:block w-full">
          <div className="w-full h-px bg-black mb-0.5" />
          <div className="grid grid-cols-4 gap-8 px-8 py-4 border-b border-gray-200 mb-6 font-nunito">
            <div className="text-black text-xl text-center font-semibold">Name</div>
            <div className="text-black text-xl text-center font-semibold">Investment Amt</div>
            <div className="text-black text-xl text-center font-semibold">Current Amt</div>
            <div className="text-black text-xl text-center font-semibold">P & L</div>
          </div>
        </div>

        {/* Table Rows - Desktop */}
        <div className="hidden lg:block space-y-6">
          {strategies.map((strategy, idx) => (
            <div key={strategy.id} className="grid grid-cols-4 gap-8 items-center px-8 py-2">
              {/* Name with Icon */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 flex items-center justify-center">
                  <div className="w-[42px] h-[42px] rounded-lg bg-gray-100 flex items-center justify-center">
                    <Image
                      src={strategyIcons[idx % strategyIcons.length]}
                      alt="Strategy Icon"
                      width={42}
                      height={42}
                      className="w-[38px] h-[38px] object-contain"
                    />
                  </div>
                </div>
                <div>
                  <div className="text-black font-nunito text-base font-semibold">
                    {strategy.name}
                  </div>
                  <div className="text-gray-dark font-nunito text-xs">
                    {strategy.description}
                  </div>
                </div>
              </div>

              {/* Investment Amount */}
              <div className="text-gray-dark font-nunito text-base text-center">
                {strategy.investment}
              </div>

              {/* Current Amount */}
              <div className="text-gray-dark font-nunito text-base text-center">
                {strategy.current}
              </div>

              {/* P&L */}
              <div className="flex items-center gap-4 justify-center">
                <span className="text-green-600 font-nunito text-base">
                  {strategy.pnl}
                </span>
                <span className="text-green-600 font-nunito text-base">
                  {strategy.pnlPercent}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Card Layout */}
        <div className="lg:hidden space-y-4">
          {strategies.map((strategy, idx) => (
            <div key={strategy.id} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 flex items-center justify-center">
                  <div className="w-[42px] h-[42px] rounded-lg bg-gray-100 flex items-center justify-center">
                    <Image
                      src={strategyIcons[idx % strategyIcons.length]}
                      alt="Strategy Icon"
                      width={42}
                      height={42}
                      className="w-[38px] h-[38px] object-contain"
                    />
                  </div>
                </div>
                <div>
                  <div className="text-black font-nunito text-base font-semibold">
                    {strategy.name}
                  </div>
                  <div className="text-gray-dark font-nunito text-xs">
                    {strategy.description}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-gray-500 mb-1">Investment</div>
                  <div className="text-gray-dark font-nunito">{strategy.investment}</div>
                </div>
                <div>
                  <div className="text-gray-500 mb-1">Current</div>
                  <div className="text-gray-dark font-nunito">{strategy.current}</div>
                </div>
                <div>
                  <div className="text-gray-500 mb-1">Profit</div>
                  <div className="text-green-600 font-nunito">{strategy.pnl}</div>
                </div>
                <div>
                  <div className="text-gray-500 mb-1">Return %</div>
                  <div className="text-green-600 font-nunito">{strategy.pnlPercent}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center mt-8">
          <button className="px-7 py-3 border border-gray-700 rounded-full bg-white text-gray-700 font-helvetica text-base hover:bg-gray-50 transition-colors">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvestmentTable;