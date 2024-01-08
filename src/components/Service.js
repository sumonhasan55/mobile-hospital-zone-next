import React from 'react';
import ServiceCard from './ServiceCard';
import SearchBar from './SearchBar';


const Services = () => {

    return (
        <div>

           <div className=' lg:flex justify-between'>
         <div>
         <h1 className=" text-primary font-extrabold text-5xl text-center my-5">Our Top Services</h1>
         </div>
            <div className=' my-auto mx-12 '>
            <SearchBar/>
            </div>
           </div>
            <div className=" mx-auto ml-12  gap-5 lg:grid grid-cols-3">
                <ServiceCard />
            </div>

        </div>
    );
};

export default Services;