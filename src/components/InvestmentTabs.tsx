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
				<TabsList className="flex items-center gap-[111px] bg-transparent h-auto p-0 font-nunito">
					{tabs.map((tab) => {
						const IconComponent = tab.icon;
						return (
							<TabsTrigger
								key={tab.id}
								value={tab.id}
								className={`tab-trigger flex flex-row justify-center items-center gap-9 lg:gap-[36px] px-0 py-0 rounded-[8px] whitespace-nowrap
                  font-nunito text-lg lg:text-xl font-medium
                  transition-all
                  cursor-pointer
                `}
								style={{ 
									width: 180, 
									height: 44
								}}
							>
								<span>{tab.label}</span>
								<IconComponent className="tab-icon w-5 h-5 lg:w-6 lg:h-6 transition-colors" />
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
