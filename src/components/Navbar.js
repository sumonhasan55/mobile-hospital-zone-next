import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';



const Navbar = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleButtonClick = async () => {
        try {
          setIsLoading(true);
          await router.push('/services');
        } catch (error) {
          console.error('Error navigating to /services', error);
        } finally {
          setIsLoading(false);
        }
      };



    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="font-bold menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
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

                    <div className='lg:hidden flex ml-20'>
                        <div className=' my-auto'>
                            <button
                                type="submit"
                                className={`btn btn-sm btn-ghost mx-2 ${isLoading ? 'loading' : ''}`}
                                onClick={handleButtonClick}
                            >
                                {isLoading ? (
                                      <span className="loading loading-spinner text-accent"></span>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                                    </svg>
                                )}
                            </button>
                        </div>

                        <Link href="/login" className="btn bg-primary text-white hover:text-black ">Login</Link>

                    </div>
                </div>
                <div className="navbar-center lg:flex hidden">
                    <ul className="menu menu-horizontal px-1 font-bold">
                        <li>
                            <Link href={"/allservices"}>Services</Link>
                        </li>
                        <li><a>Aboutus</a></li>
                        <li><a>Contactus</a></li>
                    </ul>
                </div>
                <div className="navbar-end lg:flex hidden">

                    <Link href="/services"> <button type="submit" className="btn btn-sm btn-ghost mx-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                    </svg></button></Link>
                    <Link href="/login" className="btn bg-primary text-white hover:text-black ml-2">Login</Link>
                </div>
            </div>



        </>
    );
};


export default Navbar;


