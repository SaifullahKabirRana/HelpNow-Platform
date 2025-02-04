import logo from '../assets/volunteer.png'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className='bg-[#131318] py-6 md:py-8 lg:py-10 font-lato'>
            <div className="pt-6 md:pt-8 lg:pt-10 container mx-auto  px-6 md:px-12 lg:px-20 xl:px-0">
                <div className=" justify-center">
                    <Link>
                        <div className='flex  justify-center gap-1'>
                            <img className='w-6 md:w-8 h-6 md:h-8' src={logo} alt="" />
                            <h3 className='text-white font-inter text-xl md:text-2xl xl:text-3xl font-bold'>HelpNow</h3>
                        </div>
                    </Link>
                    <p className='text-white opacity-80 py-4 md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%] mx-auto text-center text-sm md:text-base '>Join hands with us to make a difference! Together, we empower communities, spread kindness, and create a brighter future. Volunteer with us and be the change the world needs.</p>
                    <div >
                        <a className='flex gap-3 lg:gap-4 text-white justify-center text-xl lg:text-2xl mt-2'>
                            <a href="https://www.facebook.com">
                                <FaFacebook />
                            </a>
                            <a href="https://www.instagram.com">
                                <FaInstagram />
                            </a>
                            <a href="https://x.com">
                                <RiTwitterXLine />
                            </a>
                            <a href="https://www.linkedin.com">
                                <TbBrandLinkedinFilled />
                            </a>
                        </a>
                    </div>
                    <hr className=' border-dashed border-white border-opacity-30 mt-6 md:mt-8 lg:mt-10 ' />
                    <p className='text-white opacity-85 text-center mt-8 md:mt-10 lg:mt-12 text-xs md:text-sm'>© Copyright 2025. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;