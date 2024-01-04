/* eslint-disable react/no-unescaped-entities */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrochip, faMoneyCheck, faCalendar, faPersonBiking } from '@fortawesome/free-solid-svg-icons';


const WhyusPage = () => {
    return (
        <div className=' my-20'>
            <h1 className=" text-center text-5xl font-extrabold my-20 text-slate-500">Why us!</h1>
            <div className=" mx-auto items-center ml-20 lg:ml-8 lg:grid grid-cols-4 gap-3">

                <div className="card w-80 bg-base-500 ">
                    <div className="card-body items-center text-center">
                        <div className=' my-auto mx-5  text-slate-500'>
                            <FontAwesomeIcon width={92} height={82} icon={faCalendar} />
                        </div>
                        <h2 className="card-title ">24/7 Support Availability!</h2>
                        <p>We feel proud to say that we are always availavel to Support you via Phone,Email and in store for any queries.</p>

                    </div>
                </div>
                <div className="card w-80 bg-base-500">
                    
                    <div className="card-body items-center text-center">
                        <div className=' my-auto mx-5  text-slate-500'>
                            <FontAwesomeIcon width={92} height={82} icon={faMoneyCheck} />
                        </div>
                        <h2 className="card-title ">Money Back Guarantee!</h2>
                        <p>As per our terms if the repair dosen't work,we offer full money back within the guaranteed period specified.</p>

                    </div>
                </div>
                <div className="card w-80 bg-base-500">
                    <div className="card-body items-center text-center">
                        <div className=' my-auto mx-5  text-slate-500'>
                            <FontAwesomeIcon width={92} height={82} icon={faMicrochip} />
                        </div>
                        <h2 className="card-title ">Genuine Hardware!</h2>
                        <p>Our First priority is to use 100% Genuine spares,if not availavel will be replesed with best posible options only with your approval.</p>

                    </div>
                </div>
                <div className="card w-80 bg-base-500">
                    <div className="card-body items-center text-center">
                        <div className=' my-auto mx-5  text-slate-500'>
                            <FontAwesomeIcon width={92} height={82} icon={faPersonBiking} />
                        </div>
                        <h2 className="card-title ">Pickup & Drop Facility!</h2>
                        <p>We also get damaged or faulty mobile devices pickedup from your residence to easy the process for our customers.</p>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default WhyusPage;