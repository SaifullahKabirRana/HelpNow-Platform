import axios from "axios";
import { useEffect, useState } from "react";
import VolunteerCard from "./VolunteerCard";
import { Link } from "react-router-dom";
import { Fade,  Zoom } from "react-awesome-reveal";

const VolunteerNeeds = () => {
    const [volunteerNeeds, setVolunteerNeeds] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`http://localhost:5000/volunteerNeeds`);
            setVolunteerNeeds(data)
        }
        getData()
    }, [])
    console.log(volunteerNeeds);
    return (
        <div className="pb-10 md:pb-14 xl:pb-24 ">
            <div className="font-lato ">
                <div className="text-center mb-6 md:mb-8 lg:mb-10 xl:mb-12">
                    <Fade direction="left">
                    <h3  className="text-xl md:text-2xl xl:text-3xl font-semibold">Volunteer Needs Now</h3>
                    </Fade>
                    <Zoom>

                    <p   className="max-w-xl mx-auto mt-2 lg:mt-3 text-gray-500 text-sm lg:text-base">Join urgent volunteer opportunities and bring positive change to society. Your support can be a beacon of hope for those in need.</p>
                    </Zoom>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-8 xl:gap-8 2xl:gap-12  ">
                {
                    volunteerNeeds.map(volunteerNeed => <VolunteerCard
                        key={volunteerNeed._id}
                        volunteerNeed={volunteerNeed}
                    ></VolunteerCard>)
                }
            </div>
            <div className="text-center mt-5 md:mt-8 lg:mt-10 xl:mt-12 ">
                <Link className="btn-sm lg:btn-md btn btn-outline border-[#797DFC] text-[#797DFC]  hover:bg-[#797DFC] hover:border-none hover:text-white ">
                <button className="px-6 md:px-10 font-inter font-bold lg:text-base ">See all</button>
                </Link>
            </div>
        </div>
    );
};

export default VolunteerNeeds;