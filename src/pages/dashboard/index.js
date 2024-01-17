import Link from 'next/link';
import React from 'react';

const index = () => {
    return (
        <div className=' h-screen text-center '>
             <div>
                <h1 className=" text-center text-2xl my-10 lg:text-5xl lg:my-20 text-primary font-extrabold">Our Dashboard</h1>
            </div>
           
            <div className=''>
              <div> <Link href={"/admin"}>Admin</Link></div>
              <div> <Link href={"/superadmin"}>SuperAdmin</Link></div>
               
            </div>

        </div>
    );
};

export default index;