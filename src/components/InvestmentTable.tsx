const strategies = [
  { id: 1, name: "Strategy 1", description: "This is a strategy by manager 1", color: "orange", investment: "30000 Rs", current: "43000 Rs", pnl: "+600 Rs", pnlPercent: "+3.6%" },
  { id: 2, name: "Strategy 1", description: "This is a strategy by manager 1", color: "cyan", investment: "30000 Rs", current: "43000 Rs", pnl: "+600 Rs", pnlPercent: "+3.6%" },
  { id: 3, name: "Strategy 1", description: "This is a strategy by manager 1", color: "yellow", investment: "30000 Rs", current: "43000 Rs", pnl: "+600 Rs", pnlPercent: "+3.6%" },
  { id: 4, name: "Strategy 1", description: "This is a strategy by manager 1", color: "pink", investment: "30000 Rs", current: "43000 Rs", pnl: "+600 Rs", pnlPercent: "+3.6%" },
  { id: 5, name: "Strategy 1", description: "This is a strategy by manager 1", color: "orange", investment: "30000 Rs", current: "43000 Rs", pnl: "+600 Rs", pnlPercent: "+3.6%" },
  { id: 6, name: "Strategy 1", description: "This is a strategy by manager 1", color: "green", investment: "30000 Rs", current: "43000 Rs", pnl: "+600 Rs", pnlPercent: "+3.6%" },
];

const getColorClass = (color: string) => {
  const colorMap: { [key: string]: string } = {
    'orange': 'bg-orange-400',
    'cyan': 'bg-cyan-400',
    'yellow': 'bg-yellow-400',
    'pink': 'bg-pink-400',
    'green': 'bg-green-400',
    'purple': 'bg-purple-400',
  };
  return colorMap[color] || 'bg-orange-400';
};

const InvestmentTable = () => {
  return (
    <div>
      {/* Investment Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="border-b-2 border-gray-300">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-bold text-gray-800 uppercase tracking-wider border-r border-gray-200">Name</th>
              <th className="px-6 py-4 text-left text-sm font-bold text-gray-800 uppercase tracking-wider border-r border-gray-200">Investment Amt</th>
              <th className="px-6 py-4 text-left text-sm font-bold text-gray-800 uppercase tracking-wider border-r border-gray-200">Current Amt</th>
              <th className="px-6 py-4 text-right text-sm font-bold text-gray-800 uppercase tracking-wider">P & L</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {strategies.map((strategy) => (
              <tr key={strategy.id} className="transition-colors duration-200">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-full ${getColorClass(strategy.color)} flex items-center justify-center`}>
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{strategy.name}</p>
                      <p className="text-sm text-gray-500">{strategy.description}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-900">{strategy.investment}</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-900">{strategy.current}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <div className="text-right">
                    <p className="text-green-600 font-medium">{strategy.pnl}</p>
                    <p className="text-sm text-green-600">{strategy.pnlPercent}</p>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="px-6 py-6 border-t border-gray-200">
        <div className="flex justify-center">
          <button className="px-8 py-3 border border-gray-300 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-colors">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvestmentTable;
