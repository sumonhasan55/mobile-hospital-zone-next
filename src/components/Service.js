import React from 'react';
import ServiceCard from './ServiceCard';
import SearchBar from './SearchBar';


const Services = () => {

    return (
        <div>

            <div>
                <h1 className=" text-center text-2xl my-10 lg:text-5xl lg:my-20 text-primary font-extrabold">Our Top Services</h1>
            </div>


            <div className=" mx-auto ml-12  gap-5 lg:grid grid-cols-3">
                <ServiceCard />
            </div>

        </div >
    );
};

export default Services;