/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const AllServicesPage = ({ devices }) => {
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
                device.serviceName.toLowerCase().includes(lowerCaseSearchInput)

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
    const handleShowMore = (device) => {

        console.log(`Show more for ${device.serviceName}`);
    };

    return (
        <>
            <div className=' min-h-screen my-5'>
                <div>

                    <div className=' ml-16 lg:ml-0 mx-auto text-center font-bold p-5 my-10'>
                        <label htmlFor="searchInput" className='mx-2'>Search:</label>
                        <input
                            type="text"
                            id="searchInput"
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                            onBlur={performSearch}
                            className='input input-bordered w-2/4'
                            placeholder='Search for Service by ServiceName'
                        />
                    </div>

                    <div className=' my-5'>
                        <h1 className=' ml-16 lg:ml-0 font-extrabold text-center text-3xl text-primary'>Our All Services</h1>
                    </div>

                    <div className=" mx-auto ml-12 gap-5 lg:grid grid-cols-3">
                        {Array.isArray(currentDevices) && currentDevices.length > 0 ? (
                            currentDevices.map((device) => (
                                <div className="card w-96 bg-base-100 shadow-xl my-8"
                                    key={device.id} onClick={() => navigateToDevice(device.name)}>
                                    <Link href={`/services/${encodeURIComponent(device.serviceName)}`}>
                                        <figure>
                                            <img src={device.imageURL} alt="Services" className="rounded-2xl w-80 h-60" />
                                        </figure>
                                        <div className="card-body">
                                            <h2 className="card-title">{device.serviceName}</h2>
                                            <p className="description">{device.description.length > 100 ? `${device.description.slice(0, 100)}...` : device.description}</p>
                                            {device.description.length > 100 && (
                                                <button className="show-more-btn" onClick={() => handleShowMore(device)}>
                                                    Show More
                                                </button>
                                            )}
                                            <button className="bg-primary text-white rounded-full p-2">Get Now!</button>
                                        </div>
                                    </Link>
                                </div>
                            ))
                        ) : (
                            <p className="mx-auto text-center my-5 font-serif">Sorry! No devices found!!! Try Again later!</p>
                        )}
                    </div>

                    {/* Pagination */}
                    <div className=' lg:mx-20  items-end font-semibold mx-auto text-center'>
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
            'https://mobile-services-data.onrender.com/allServices'
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

export default AllServicesPage;

