import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faClock, faMessage, faPhoneAlt, } from '@fortawesome/free-solid-svg-icons';



const ContactUs = () => {
    return (
        <div>

            <div className="min-h-screen hero ">
                <div className="flex-col hero-content lg:flex-row-reverse justify-between gap-36 ">

                    <div className=' my-5'>

                        <div className=' flex  mb-8'>
                            <div className=' my-auto mx-5  text-slate-500'>
                                <FontAwesomeIcon width={22} icon={faMapMarkerAlt} />
                            </div>

                            <div>
                                <h1 className=' font-semibold text-2xl  text-slate-500'>Our Office Address</h1>
                                <p>Dhaka-1211,Bangladesh</p>
                            </div>
                        </div>
                        <div className=' flex  my-8'>
                            <div className=' my-auto mx-5  text-slate-500'>
                                <FontAwesomeIcon width={22} icon={faMessage} />
                            </div>

                            <div>
                                <h1 className=' font-semibold text-2xl  text-slate-500'>General Enquiries</h1>
                                <p>Dhaka-1211,Bangladesh</p>
                            </div>
                        </div>
                        <div className=' flex  my-8'>
                            <div className=' my-auto mx-5  text-slate-500'>
                                <FontAwesomeIcon width={22} icon={faPhoneAlt} />
                            </div>

                            <div>
                                <h1 className=' font-semibold text-2xl  text-slate-500'>Call Us</h1>
                                <p>+880-01303434869</p>
                            </div>
                        </div>
                        <div className=' flex  my-8'>
                            <div className=' my-auto mx-5  text-slate-500'>
                                <FontAwesomeIcon width={22} icon={faClock} />
                            </div>

                            <div>
                                <h1 className=' font-semibold text-2xl  text-slate-500'>Our Timing</h1>
                                <p>09:00 am-12:00 pm</p>
                            </div>
                        </div>

                    </div>




                    <div className="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Subject</span>
                                </label>
                                <input type="text" placeholder="subject" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <input type="text" placeholder="message" className="input input-bordered" required />

                            </div>
                            <div className="mt-6 form-control">
                                <button className="btn btn-accent">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ContactUs;