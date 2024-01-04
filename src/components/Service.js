import React from 'react';
import ServiceCard from './ServiceCard';


const Services = () => {

    return (
        <div>

            <h1 className=" text-primary font-extrabold text-5xl text-center my-5">Our Top Services</h1>
            <div className=" mx-auto ml-12  gap-5 lg:grid grid-cols-3">
                <ServiceCard />
            </div>

        </div>
    );
};

export default Services;