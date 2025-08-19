import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

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
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
  <TableRow className="border-b-2 border-gray-300">
    <TableHead className="px-6 py-4 text-center text-sm font-bold text-gray-800 uppercase tracking-wider border-r border-gray-200">
      Name
    </TableHead>
    <TableHead className="px-6 py-4 text-center text-sm font-bold text-gray-800 uppercase tracking-wider border-r border-gray-200">
      Investment Amt
    </TableHead>
    <TableHead className="px-6 py-4 text-center text-sm font-bold text-gray-800 uppercase tracking-wider border-r border-gray-200">
      Current Amt
    </TableHead>
    <TableHead className="px-6 py-4 text-center text-sm font-bold text-gray-800 uppercase tracking-wider">
      P & L
    </TableHead>
  </TableRow>
</TableHeader>
<TableBody>
  {strategies.map((strategy) => (
    <TableRow key={strategy.id} className="transition-colors duration-200">
      <TableCell className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center space-x-3">
          <div className={`w-10 h-10 rounded-full ${getColorClass(strategy.color)} flex items-center justify-center`}>
            <div className="w-4 h-4 bg-white rounded-full"></div>
          </div>
          <div>
            <p className="font-medium text-gray-900">{strategy.name}</p>
            <p className="text-sm text-gray-500">{strategy.description}</p>
          </div>
        </div>
      </TableCell>
      <TableCell className="px-6 py-4 whitespace-nowrap text-center text-gray-900">
        {strategy.investment}
      </TableCell>
      <TableCell className="px-6 py-4 whitespace-nowrap text-center text-gray-900">
        {strategy.current}
      </TableCell>
      <TableCell className="px-6 py-4 whitespace-nowrap text-center">
        <div className="inline-flex items-center gap-2">
          <p className="text-green-600 font-medium">{strategy.pnl}</p>
          <p className="text-sm text-green-600">{strategy.pnlPercent}</p>
        </div>
      </TableCell>
    </TableRow>
  ))}
</TableBody>
        </Table>
      </div>
      
      <div className="px-6 py-6 border-t border-border">
        <div className="flex justify-center">
          <Button variant="outline" className="rounded-full border bg-transparent">
            Load More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InvestmentTable;
