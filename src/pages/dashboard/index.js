import BarChart from "@/components/BarChart";
import Breadcrumb from "@/components/Breadcrumb";
import Header from "@/components/Header";
import RecentOrders from "@/components/RecentOrders";
import TopCards from "@/components/TopCards";
import Head from "next/head";


const Dashboard = () => {
  return (
    <>
      <Head>
        <title>M_H_Zone Dashboard</title>
        <meta name='description' content='Generated by create by hm it soluation' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='bg-gray-100 min-h-screen'>
        <Breadcrumb/>
        <Header />
        <TopCards />
        <div className='p-4 grid md:grid-cols-3 grid-cols-1 gap-4'>
          <BarChart />
          <RecentOrders />
        </div>
      </main>
    </>
  );
};

export default Dashboard;
