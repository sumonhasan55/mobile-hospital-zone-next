/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const ServiceCard = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [servicesPerPage] = useState(9);

  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('https://mobile-services-data.onrender.com/services');

        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await res.json();
        setServices(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    }

    fetchData();
  }, []); 

  const indexOfLastService = currentPage * servicesPerPage;
  const indexOfFirstService = indexOfLastService - servicesPerPage;
  const currentServices = services.slice(indexOfFirstService, indexOfLastService);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    router.push(`/services?page=${pageNumber}`);
  };

  return (
    <>
      {loading ? (
        <span className="loading loading-spinner text-accent"></span>
      ) : (
        <>
          {currentServices.map((service) => (
            <div className="card w-96 bg-base-100 shadow-xl my-8" key={service.name}>
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
          ))}
          {/* <div className="pagination">
            {Array.from({ length: Math.ceil(services.length / servicesPerPage) }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => paginate(index + 1)}
                className={`pagination-item ${index + 1 === currentPage && 'active'}`}
              >
                {index + 1}
              </button>
            ))}
          </div> */}
        </>
      )}
    </>
  );
};

export default ServiceCard;
