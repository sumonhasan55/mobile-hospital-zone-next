/* eslint-disable @next/next/no-img-element */
"use client"
import Cart from '@/components/Cart';
import Link from 'next/link';
import { useState, useEffect } from 'react';


const ServiceDetail = ({ service }) => {
  const [loading, setLoading] = useState(!service);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setLoading(!service);
  }, [service]);

  const addToCart = () => {
    setCartItems((prevItems) => [...prevItems, service]);
  };

  const removeFromCart = (itemToRemove) => {
    setCartItems((prevItems) => prevItems.filter((item) => item !== itemToRemove));
  };

  if (loading) {
    return <span className="loading loading-spinner text-accent"></span>;
  }

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <section>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={service.imageURL} alt="Services" className="rounded-2xl w-80  h-96 mx-2" />
          <div>
            <h1 className="text-5xl font-bold">{service?.name}</h1>
            <p className="py-2"><span className=' font-semibold'>Description:</span>{service.description}</p>
            <p className="py-1"> <span className=' font-serif italic'>Availability:</span>{service.availability}</p>
            <p className="py-1"> <span className=' font-serif italic'>BookingOptions:</span>{service.bookingOptions}</p>
            <p className="py-1"> <span className=' font-serif italic'>Location:</span>{service.location}</p>
            <p className="py-1"><span className=' font-serif italic'>Rating:</span>{service.rating}</p>
            <p className="py-1"> <span className=' font-serif italic'>Reviews:</span>{service.reviews}</p>
            <p className=''><span className=' font-semibold'>Contact: </span><p> <span className=' font-serif italic mx-4'>Phone:</span>{service.contactInformation.phone}</p>
              <p className="py-1"> <span className=' font-serif italic mx-4'>Email:</span>{service.contactInformation.email}</p>

            </p>
            
              
            <Link href="/cart" className="btn bg-primary text-white hover:text-black ml-2">
              Go to Cart
            </Link>
            <button className="btn bg-primary text-white hover:text-black ml-2" onClick={addToCart}>
              Add to Cart
            </button>
          
          </div>
        </div>
      </div>
      <Cart vcartItems={cartItems} onRemoveItem={removeFromCart} />
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
