import Header from '@/components/Header';
import PageTitle from '@/components/PageTitle';
import StatsCards from '@/components/StatsCards';
import InvestmentTabs from '@/components/InvestmentTabs';
import Footer from '@/components/Footer';
import BackgroundGradients from '@/components/BackgroundGradients';
import Divider from '@/components/Divider';

export default function Home() {
  const cards = [
    {
      title: "Total Investments",
      value: "3,58,450",
      trend: null,
    },
    {
      title: "Current Investments",
      value: "35.36K",
      trend: null,
    },
    {
      title: "Total Return's",
      value: "25,042",
      trend: { type: "up" as const, value: "+0.36%" },
    },
    {
      title: "Today's Return's",
      value: "2,042",
      trend: { type: "up" as const, value: "+0.06%" },
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 relative">
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-green-100/30 to-transparent pointer-events-none"></div>
      
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-100/30 to-transparent pointer-events-none"></div>
      
      <BackgroundGradients />

      <div className="relative z-10">
        <Header />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <PageTitle />
          <Divider />
          <div className="mb-8">
            <StatsCards cards={cards} />
          </div>
          <div className="mb-8">
            <InvestmentTabs />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}