/* eslint-disable react/prop-types */

import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const VolunteerCard = ({ volunteerNeed }) => {

    const {
        _id,
        thumbnail,
        postTitle,
        description,
        category,
        deadline,
        postDate,
        organizer,
    } = volunteerNeed;
    
    // for 05 FEB 2025 this format
    const options = { day: "2-digit", month: "short", year: "numeric" };
    const formattedDate = postDate ?
        new Date(postDate).toLocaleDateString("en-GB", options).toUpperCase()
        : "N/A";
    
    return (
        <div>
            <Fade>
                <Link to={`/volunteerNeed/${_id}`}>
                    <div className="flex flex-col h-full ">
                        <div className="max-w-2xl h- overflow-hidden  rounded-lg shadow-md hover:scale-[1.05] transition-all flex flex-col h-full">
                            <div className="p-4 lg:p-6 rounded-2xl">
                                <img className="object-cover rounded-2xl   w-full h-48 md:h-56 lg:h-60 xl:h-64" src={thumbnail} alt="thumbnail" />
                            </div>

                            <div className="p-4 lg:p-6 ">
                                <div className="">
                                    <div className="flex justify-between">
                                        <span className="text-xs font-medium text-[#797DFC] uppercase ">{category}</span>
                                        <span className="text-xs lg:text-sm font-medium text-gray-700">{new Date(deadline).toLocaleDateString()}</span>
                                    </div>
                                    <h2 className="block mt-2 text-lg md:text-xl font-semibold text-gray-800 transition-colors duration-300 transform  hover:text-gray-600  hover:underline flex-grow" tabIndex={0} role="link">{postTitle}</h2>
                                    <p className="mt-2 text-sm text-gray-600 flex-grow">{description}</p>
                                </div>

                                <div className="mt-4 lg:mt-6 flex justify-between items-center">
                                    <div className="flex items-center ">
                                        <div className="flex items-center gap-2 lg:gap-4">
                                            <img className="object-cover h-8 lg:h-10 rounded-full" src={organizer?.photo} alt="User photo" />

                                            <div className="flex flex-col ">
                                                <a href="#" className=" font-semibold  text-gray-800 text-sm lg:text-base" tabIndex={0} role="link">{organizer?.name}</a>
                                                <span className=" text-xs lg:text-sm text-gray-600 ">{formattedDate}</span>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="hover:text-[#797DFC] hover:underline hover:cursor-pointer text-sm lg:text-base ">
                                        View details
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </Fade>
        </div>
    );
};

export default VolunteerCard;