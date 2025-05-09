import { useLoaderData } from "react-router-dom";
// for animation
import AOS from 'aos';
import 'aos/dist/aos.css';
import BeAVolunteer from "./BeAVolunteer";
import toast from "react-hot-toast";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

AOS.init();

const VolunteerDetails = () => {
    const volunteerNeed = useLoaderData();
    const [volunteersNeeded, setVolunteersNeeded] = useState(volunteerNeed?.volunteersNeeded || 0);

    const {
        thumbnail,
        postTitle,
        description,
        category,
        location,
        deadline,
        postDate,
        organizer,
    } = volunteerNeed || {};

    // for 05 FEB 2025 this format
    const options = { day: "2-digit", month: "short", year: "numeric" };
    const formattedDate = postDate ?
        new Date(postDate).toLocaleDateString("en-GB", options).toUpperCase()
        : "N/A";

    const handleBeAVolunteer = () => {
        if (volunteersNeeded === 0) {
            return toast.error("No more volunteers needed for this post!")
        }
        document.getElementById('my_modal_3').showModal();
    }

    return (
        <div data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="500" className="pt-24 md:pt-28 lg:pt-32 xl:pt-36 pb-16 md:pb-20 xl:pb-24 2xl:pb-28 xl:px-20 2xl:px-24">
            <Helmet>
                <title>Volunteer Details - HelpNow</title>
            </Helmet>
            <div className="mb-4 lg:mb-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center ">
                        <div className="flex items-center gap-2 lg:gap-4">
                            <img className="object-cover w-8 lg:w-10 h-8 lg:h-10 rounded-full" src={organizer?.photo} alt="User photo" referrerPolicy='no-referrer' />

                            <div className="flex flex-col ">
                                <a href="#" className=" font-semibold  opacity-95 text-sm lg:text-base" tabIndex={0} role="link">{organizer?.name}</a>
                                <span className=" text-xs lg:text-sm opacity-80 font-lato ">{formattedDate}</span>
                            </div>
                        </div>

                    </div>
                    <div className="px-3 py-2  bg-[#a8abff4b] border-none text-[#797DFC] font-medium rounded-3xl">
                        <p className="text-[10px] md:text-xs lg:text-sm ">Volunteers needed: {volunteersNeeded}</p>
                    </div>
                </div>
            </div>
            <div className="card sm:card-side bg-base-100 shadow-xl  ">
                <figure className="sm:w-1/3 xl:w-2/5">
                    <img
                        className="w-full h-full "
                        src={thumbnail}
                        alt="Album" />
                </figure>
                <div className="md:card-body p-4 md:p-8 xl:p-16 sm:w-2/3 xl:w-3/5 ">
                    <div className="flex justify-between mt-2">
                        <span className="text-xs md:text-sm font-medium text-[#797DFC] uppercase ">{category}</span>
                        <span className="text-xs md:font-sm lg:text-base font-medium opacity-85">Deadline: {new Date(deadline).toLocaleDateString()}</span>
                    </div>
                    <h2 className="card-title mt-3 md:mt-1 text-xl xl:text-2xl font-semibold opacity-95">{postTitle}</h2>
                    <p className="text-sm lg:text-base opacity-75 xl:w-[60%] mt-2 ">{description}</p>
                    <p className="text-base lg:text-lg opacity-85 mt-3">Location: {location}</p>

                    <div className="card-actions justify-end  mt-6 mb-4 md:mb-0">
                        {/* <Link className="btn-sm lg:btn-md btn  bg-[#797DFC] hover:bg-[#888cfcc0] text-white ">
                            <button className="font-bold text-sm lg:text-base ">Be a Volunteer</button>                           
                        </Link> */}
                        {/* Modal */}
                        <div>
                            {/* You can open the modal using document.getElementById('ID').showModal() method */}
                            <div
                                onClick={handleBeAVolunteer}
                                className="btn-sm lg:btn-md btn  bg-[#797DFC] hover:bg-[#888cfcc0] text-white ">
                                <button className="font-bold text-sm lg:text-base" >Be a Volunteer</button>
                            </div>
                            <dialog id="my_modal_3" className="modal">
                                <div className="modal-box max-w-xs sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                    </form>
                                    <BeAVolunteer volunteerNeed={volunteerNeed} volunteersNeeded={volunteersNeeded} setVolunteersNeeded={setVolunteersNeeded}></BeAVolunteer>
                                </div>
                            </dialog>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VolunteerDetails;