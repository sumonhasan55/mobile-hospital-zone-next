import React from 'react';
import ContactUs from './ContactUs';


const ContactPage = () => {

    return (
        <div className=' bg-base-200 shadow-2xl  '> 
            <h1 className=' text-center text-2xl py-10 lg:text-5xl lg:my-20 font-extrabold  text-slate-500 pb-10 '>Contact us!</h1>
            <ContactUs/>

        </div>
    );
};

export default ContactPage;