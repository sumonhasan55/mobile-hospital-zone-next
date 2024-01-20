
import Sidebar from '@/components/Sidebar';
import Breadcrumb from '@/components/Breadcrumb';


const Dashboard = () => {

  return (

    <div className='  min-h-screen mx-10 flex gap-5'>


      <div className=' h-full'> <Sidebar /></div>
      <div>
        <Breadcrumb />
        <h1>User Dashboard</h1>

      </div>
    </div>

  );
};

export default Dashboard;
