/* eslint-disable @next/next/no-img-element */
// pages/index.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Home = ({ devices }) => {
    const [searchInput, setSearchInput] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [filteredDevices, setFilteredDevices] = useState([]);
    const devicesPerPage = 9;
    
    const indexOfLastDevice = currentPage * devicesPerPage;
    const indexOfFirstDevice = indexOfLastDevice - devicesPerPage;
    const currentDevices = devices.slice(indexOfFirstDevice, indexOfLastDevice);

    const router = useRouter();

    const performSearch = () => {
        const lowerCaseSearchInput = searchInput.toLowerCase();

        const filtered = devices.filter(device =>
            device.name.toLowerCase().includes(lowerCaseSearchInput) ||
            device.id.toLowerCase().includes(lowerCaseSearchInput) ||
            device.os.toLowerCase().includes(lowerCaseSearchInput)
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
        <div>
            <div className=' mx-20'>
                <label htmlFor="searchInput" className=' font-bold'>Search:</label>
                <input
                
                    type="text"
                    id="searchInput"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    onInput={performSearch}
                />
            </div>
            <div className=" mx-auto ml-12  gap-5 lg:grid grid-cols-3">
                {Array.isArray(currentDevices) && currentDevices.length > 0 ? (
                    currentDevices.map(device => (
                        <>

                            <div className="card w-96 bg-base-100 shadow-xl my-8 " key={device.id}>
                                <Link href={`/services/${encodeURIComponent(device.name)}`}>
                                    <figure>
                                        <img src={device.picture} alt="Services" className="rounded-2xl w-80 h-60" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{device.name}</h2>
                                        <p>{device.os}</p>
                                        <button className="bg-primary text-white rounded-full p-2">Get Now!</button>
                                    </div>
                                </Link>
                            </div>
                        </>
                    ))
                ) : (
                    <p>No devices found.</p>
                )}

            </div>

         

            {/* Pagination */}
            <div>
                <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                    Previous Page
                </button>
                <span> Page {currentPage} </span>
                <button onClick={() => handlePageChange(currentPage + 1)} disabled={indexOfLastDevice >= devices.length}>
                    Next Page
                </button>
            </div>
        </div>
    );
};

export async function getStaticProps() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/ilyasozkurt/mobilephone-brands-and-models/master/devices.json');
        const data = await response.json();
        const devices = data.RECORDS;

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
