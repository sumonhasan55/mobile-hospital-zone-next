/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const ServiceDetail = ({ service }) => {
  const [loading, setLoading] = useState(!service);

  useEffect(() => {
    setLoading(!service);
  }, [service]);

  if (loading) {
    // Render loading spinner while data is being fetched
    return <span className="loading loading-spinner text-accent"></span>;
  }

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <section>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={service.imageURL} alt="Services" className="rounded-2xl w-80 h-60" />
          <div>
            <h1 className="text-5xl font-bold">{service?.name}</h1>
            <p className="py-6">{service.description}</p>
            <Link href="/cart">
              <button className="btn btn-primary">Add to Cart</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export async function getServerSideProps({ params }) {
  try {
    const { serviceName } = params;
    const res = await fetch(`https://mobile-services-data.onrender.com/services?name=${encodeURIComponent(serviceName)}`);

    if (!res.ok) {
      throw new Error('Failed to fetch service data');
    }

    const data = await res.json();
    console.log(data);
    const service = data[0];

    if (!service) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        service,
      },
    };
  } catch (error) {
    console.error('Error fetching service data:', error);
    return {
      notFound: true,
    };
  }
}

export default ServiceDetail;
