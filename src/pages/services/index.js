/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Home = ({ devices }) => {
    const [searchInput, setSearchInput] = useState('');
    const [filteredDevices, setFilteredDevices] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const devicesPerPage = 9;


    const indexOfLastDevice = currentPage * devicesPerPage;
    const indexOfFirstDevice = indexOfLastDevice - devicesPerPage;
    const currentDevices = filteredDevices.slice(indexOfFirstDevice, indexOfLastDevice);

    const router = useRouter();

    useEffect(() => {

        setFilteredDevices(devices);
    }, [devices]);

    const performSearch = () => {
        const lowerCaseSearchInput = searchInput.toLowerCase();

        const filtered = devices.filter(
            (device) =>
                device.name.toLowerCase().includes(lowerCaseSearchInput) 
             
        );

        setFilteredDevices(filtered);
        setCurrentPage(1);
    };

    const navigateToDevice = (deviceName) => {
        router.push(`/device/${encodeURIComponent(deviceName)}`);
    };

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <>
            <div className=' min-h-screen'>
                <div>

                    <div className='mx-auto text-center font-bold p-5 my-10'>
                        <label htmlFor="searchInput" className='mx-2'>Search:</label>
                        <input
                            type="text"
                            id="searchInput"
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                            onBlur={performSearch}
                            className='input input-bordered w-2/4'
                            placeholder='Search for devices by name or OS'
                        />
                    </div>

                    <div className=' my-5'>
                        <h1 className=' font-extrabold text-center text-3xl text-primary'>Our Devices</h1>
                    </div>

                    <div className=" mx-auto ml-12  gap-5 lg:grid grid-cols-3">
                        {Array.isArray(currentDevices) && currentDevices.length > 0 ? (
                            currentDevices.map((device) => (

                                <>
                                    <div className="card w-96 bg-base-100 shadow-xl my-8 " key={device.id} onClick={() => navigateToDevice(device.name)}>
                                        <Link href={`/services/${encodeURIComponent(device.name)}`}>
                                            <figure>
                                                <img src={device.imageURL} alt="Services" className="rounded-2xl w-80 h-60" />
                                            </figure>
                                            <div className="card-body">
                                                <h2 className="card-title">{device.name}</h2>
                                                <p>{device.description}</p>
                                                <button className="bg-primary text-white rounded-full p-2">Get Now!</button>
                                            </div>
                                        </Link>
                                    </div>
                                </>
                            ))
                        ) : (
                            <p className=' mx-auto text-center  my-5 font-serif'> Sorry! No devices found!!! Try Again latter!</p>
                        )}
                    </div>

                    {/* Pagination */}


                    <div className=' mx-20  items-end font-semibold'>
                        <button className="join-item btn btn-outline" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                            Previous Page
                        </button>
                        <span> Page{currentPage} </span>
                        <button className="join-item btn btn-outline" onClick={() => handlePageChange(currentPage + 1)} disabled={indexOfLastDevice >= filteredDevices.length}>
                            Next Page
                        </button>
                    </div>
                </div>

            </div>

        </>


    );
};

export async function getStaticProps() {
    try {
        const response = await fetch(
            'https://mobile-services-data.onrender.com/services'
        );

        if (!response.ok) {
            throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }

        const data = await response.json();

        const devices = data;

        if (!Array.isArray(devices)) {
            throw new Error('Invalid data format received from the API');
        }

        return {
            props: {
                devices,
            },
        };
    } catch (error) {
        console.error('Error fetching data:', error);

        return {
            props: {
                devices: [],
            },
        };
    }
}

export default Home;
