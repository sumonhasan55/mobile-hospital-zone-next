/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react';
import Cart from '../cart';



const ServiceDetail = ({ service }) => {

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Function to handle removing item from the cart
  const removeFromCart = (itemToRemove) => {
    const updatedCart = cartItems.filter((item) => item.name !== itemToRemove.name);
    setCartItems(updatedCart);
    // Update local storage
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const [loading, setLoading] = useState(!service);


  useEffect(() => {
    setLoading(!service);
  }, [service]);


  const addToCart = () => {
    const newItem = {
      name: service.name,
    };
    const updatedCart = [...cartItems, newItem];
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
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
            <button onClick={addToCart}>Add to Cart</button>
          </div>
        </div>

      </div>
      <Cart cartItems={cartItems} onRemoveItem={removeFromCart} />

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
