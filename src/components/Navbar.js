import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className=" font-bold menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li><a>Aboutus</a></li>
                            <li>
                                <Link href={"/allservices"}>Services</Link>
                                <ul className="p-2">
                                    <ul className="p-2">
                                        <li><a>Mobile Repair </a></li>
                                        <li><a>Mobile Accesorise</a></li>
                                    </ul>
                                </ul>
                            </li>
                            <li><a>Contactus</a></li>
                        </ul>
                    </div>
                    <Link href={"/"} className="btn btn-ghost text-xl font-bold italic">E<span className='text-primary'>Mobile</span><span className=' text-slate-500'>Zone</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-bold">
                        <li>

                            <Link href={"/allservices"}>Services</Link>

                        </li>
                        <li><a>Aboutus</a></li>

                        <li><a>Contactus</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link href="/login" className="btn bg-primary text-white hover:text-black">Login</Link>

                </div>
            </div>


        </>
    );
};

export default Navbar;