"use client";

import { useState } from "react";
import { BarChart3, TrendingUp, PieChart } from "lucide-react";
import InvestmentTable from "./InvestmentTable";

const tabs = [
  {
    id: "equity",
    label: "Equity",
    icon: BarChart3,
    ariaLabel: "View equity investments"
  },
  {
    id: "futures",
    label: "Futures", 
    icon: TrendingUp,
    ariaLabel: "View futures investments"
  },
  {
    id: "options",
    label: "Options",
    icon: PieChart,
    ariaLabel: "View options investments"
  }
];

const InvestmentTabs = () => {
  const [activeTab, setActiveTab] = useState("equity");

  const getButtonStyles = (tabId: string) => {
    return `flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
      activeTab === tabId 
        ? "bg-blue-100 text-blue-700" 
        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
    }`;
  };

  const renderTabContent = () => {
    switch(activeTab) {
      case "equity":
      case "futures": 
      case "options":
        return <InvestmentTable />;
      default:
        return <InvestmentTable />;
    }
  };

  return (
    <section className="w-full" aria-label="Investment portfolio tabs">
      <header className="mb-6">
        <div className="px-6 py-4">
          <nav 
            className="flex justify-center space-x-20" 
            role="tablist"
            aria-label="Investment categories"
          >
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              const isActive = activeTab === tab.id;
              
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={getButtonStyles(tab.id)}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${tab.id}`}
                  aria-label={tab.ariaLabel}
                  tabIndex={isActive ? 0 : -1}
                >
                  <IconComponent className="w-4 h-4" aria-hidden="true" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </header>
        <div className="py-3">
      <div className="w-full h-0.5 bg-gray-300"></div>
    </div>
      <main 
        className="mt-0"
        role="tabpanel"
        id={`panel-${activeTab}`}
        aria-labelledby={`tab-${activeTab}`}
      >
        {renderTabContent()}
      </main>
      
    </section>
    
  );
};

export default InvestmentTabs;
