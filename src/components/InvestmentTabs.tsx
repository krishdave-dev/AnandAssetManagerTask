"use client";

import { BarChart3, TrendingUp, PieChart } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import InvestmentTable from "./InvestmentTable";

const tabs = [
  {
    id: "equity",
    label: "Equity",
    icon: BarChart3,
  },
  {
    id: "futures",
    label: "Futures", 
    icon: TrendingUp,
  },
  {
    id: "options",
    label: "Options",
    icon: PieChart,
  }
];

const InvestmentTabs = () => {
  return (
    <Tabs defaultValue="equity" className="w-full">
      <div className="mb-6">
        <div className="flex justify-center">
          <TabsList className="inline-flex items-center justify-center gap-8 bg-transparent h-auto p-0">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              
              return (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="flex items-center space-x-2 px-6 py-3 rounded-lg text-sm font-medium transition-all data-[state=active]:bg-blue-100 data-[state=active]:text-blue-700 bg-gray-100 text-gray-600 hover:bg-gray-200"
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{tab.label}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>
        </div>
      </div>
      
      <div className="py-3">
        <div className="w-full h-0.5 bg-gray-300"></div>
      </div>
      
      <TabsContent value="equity" className="mt-0">
        <InvestmentTable />
      </TabsContent>
      
      <TabsContent value="futures" className="mt-0">
        <InvestmentTable />
      </TabsContent>
      
      <TabsContent value="options" className="mt-0">
        <InvestmentTable />
      </TabsContent>
    </Tabs>
  );
};

export default InvestmentTabs;
