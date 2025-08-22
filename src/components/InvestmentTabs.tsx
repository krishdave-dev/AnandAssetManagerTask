"use client";

import { BarChart3, Ellipsis , ChartLine } from "lucide-react";
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
		icon: ChartLine,
	},
	{
		id: "options",
		label: "Options",
		icon: Ellipsis ,
	},
];

const InvestmentTabs = () => {
	return (
		<Tabs defaultValue="equity" className="w-full">
			{/* Tab Navigation */}
			<div className="flex justify-center mb-8 overflow-x-auto">
				<TabsList className="flex items-center gap-4 lg:gap-28 bg-transparent h-auto p-0 font-nunito">
					{tabs.map((tab) => {
						const IconComponent = tab.icon;
						return (
							<TabsTrigger
								key={tab.id}
								value={tab.id}
								className={`flex flex-row justify-center items-center gap-3 lg:gap-9 px-4 py-3 rounded-lg whitespace-nowrap
                  font-nunito text-lg lg:text-xl font-medium
                  transition-all
                data-[state=active]:bg-blue-light/10 data-[state=active]:text-[#0074A8] data-[state=active]:font-bold
                  bg-gray-100 text-[#3F3F3F]
                  hover:bg-[#E7F7FC] hover:text-[#0074A8] hover:font-bold
                `}
							>
								<span>{tab.label}</span>
								<IconComponent className="w-5 h-5 lg:w-6 lg:h-6 text-gray-dark transition-colors group-hover:text-[#0074A8] hover:text-[#0074A8] data-[state=active]:text-[#0074A8]" />
							</TabsTrigger>
						);
					})}
				</TabsList>
			</div>

			<div className="">
				<div className="w-full h-px bg-transparent"></div>
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
