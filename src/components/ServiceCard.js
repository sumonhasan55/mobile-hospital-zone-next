/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const ServiceCard = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('https://mobile-services-data.onrender.com/services');

        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await res.json();
        setServices(data);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); // Set loading to false in case of an error
      }
    }

    fetchData();
  }, []); 

  return (
    <>
      {loading ? (
        // Render loading spinner while data is being fetched
        <span className="loading loading-spinner text-accent"></span>
      ) : (
        // Render service cards once data is available
        services.map((service) => (
          <div className="card w-96 bg-base-100 shadow-xl my-8 " key={service.name}>
            <Link href={`/services/${encodeURIComponent(service.name)}`}>
              <figure>
                <img src={service.imageURL} alt="Services" className="rounded-2xl w-80 h-60" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{service.name}</h2>
                <p>{service.description}</p>
                <button className="bg-primary text-white rounded-full p-2">Get Now!</button>
              </div>
            </Link>
          </div>
        ))
      )}
    </>
  );
};

export default ServiceCard;
