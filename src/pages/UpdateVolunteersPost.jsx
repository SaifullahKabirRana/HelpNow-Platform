import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import useAxiosCommon from "../hooks/useAxiosCommon";
import DatePicker from "react-datepicker";
import { useLoaderData } from "react-router-dom";

const UpdateVolunteersPost = () => {
    const volunteerNeed = useLoaderData();
    const { user } = useAuth();
    const axiosCommon = useAxiosCommon();
    const {
        _id,
        thumbnail,
        postTitle,
        description,
        category,
        volunteersNeeded,
        location,
        deadline,
    } = volunteerNeed || {};
    const [startDate, setStartDate] = useState(deadline ? new Date(deadline) : new Date());
    

    const handleUpdateVolunteer = async e => {
        e.preventDefault();
        const form = e.target;
        const postTitle = form.postTitle.value;
        const thumbnail = form.thumbnail.value;
        const location = form.location.value;
        const category = form.category.value;
        const volunteersNeeded = parseFloat(form.volunteersNeeded.value);
        const deadline = startDate.toUTCString();
        const description = form.description.value;
        // const postDate = new Date().toISOString();
        const postDate = new Date();
        
        const UpdateData = {
            postTitle,
            thumbnail,
            location,
            category,
            volunteersNeeded,
            deadline,
            description,
            postDate,
            organizer: {
                name: user?.displayName,
                email: user?.email,
                photo: user?.photoURL
            },

        }

        try {
            const { data } = await axiosCommon.put(`/volunteerNeed/${_id}`, UpdateData);
            console.log(data);
            toast.success('Update successfully!')
        }
        catch (err) {
            toast.error(err?.code);
        }
    }

    return (
        <div className='flex justify-center items-center  pt-24 md:pt-28 lg:pt-32 xl:pt-36 pb-16 md:pb-20 xl:pb-24 2xl:pb-28 xl:px-20 2xl:px-24 animate__animated animate__zoomIn'>
            <section className='mx-0 md:mx-[5%] lg:mx-[10%] xl:mx-[20%] 2xl:mx-[25%] w-full p-4 md:p-6 bg-white rounded-md shadow-md '>
                <h2 className='text-lg font-semibold text-gray-700 capitalize text-center font-inter'>
                    Update Volunteer Post
                </h2>

                <form onSubmit={handleUpdateVolunteer}>
                    <div className='grid grid-cols-1  gap-3 md:gap-6 mt-6 sm:grid-cols-2 text-sm lg:text-base'>
                        <div>
                            <label className='text-gray-700 ' htmlFor='job_title'>
                                Post Title
                            </label>
                            <input
                                id='postTitle'
                                name='postTitle'
                                type='text'
                                defaultValue={postTitle}
                                required
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-gray-400 focus:ring-gray-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>
                        <div>
                            <label className='text-gray-700 ' htmlFor='job_title'>
                                Thumbnail
                            </label>
                            <input
                                id='thumbnail'
                                name='thumbnail'
                                type='url'
                                defaultValue={thumbnail}
                                required
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-gray-400 focus:ring-gray-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>
                        <div>
                            <label className='text-gray-700 ' htmlFor='job_title'>
                                Location
                            </label>
                            <input
                                id='location'
                                name='location'
                                type='text'
                                defaultValue={location}
                                required
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-gray-400 focus:ring-gray-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>

                        <div className='flex flex-col gap-2 '>
                            <label className='text-gray-700 ' htmlFor='category'>
                                Category
                            </label>
                            <select
                                name='category'
                                id='category'
                                defaultValue={category}
                                className='border p-2 rounded-md'
                            >
                                <option value='Healthcare'>Healthcare</option>
                                <option value='Education'>Education</option>
                                <option value='Social Service'>Social Service</option>
                                <option value='Animal Welfare'>Animal Welfare</option>
                            </select>
                        </div>
                        <div>
                            <label className='text-gray-700 ' htmlFor='min_price'>
                                No. of volunteers needed
                            </label>
                            <input
                                id='volunteersNeeded'
                                name='volunteersNeeded'
                                type='number'
                                defaultValue={volunteersNeeded}
                                required
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-gray-400 focus:ring-gray-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>

                        <div className='flex flex-col gap-2 '>
                            <label className='text-gray-700'>Deadline</label>

                            {/* Date Picker Input Field */}
                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}
                                className="p-2 w-full px-4 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-gray-400 focus:ring-gray-300 focus:ring-opacity-40  focus:outline-none focus:ring "
                            />
                        </div>

                        <div>
                            <label className='text-gray-700 ' htmlFor='emailAddress'>
                                Name
                            </label>
                            <input
                                id='name'
                                type='text'
                                name='name'
                                disabled
                                defaultValue={user?.displayName}
                                title={user?.displayName}
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-gray-400 focus:ring-gray-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>
                        <div>
                            <label className='text-gray-700 ' htmlFor='emailAddress'>
                                Email Address
                            </label>
                            <input
                                id='emailAddress'
                                type='email'
                                name='email'
                                disabled
                                defaultValue={user?.email}
                                title={user?.email}
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-gray-400 focus:ring-gray-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>


                    </div>
                    <div className='flex flex-col gap-2 mt-3 md:mt-6 text-sm lg:text-base'>
                        <label className='text-gray-700 ' htmlFor='description'>
                            Description
                        </label>
                        <textarea
                            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-gray-400 focus:ring-gray-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            name='description'
                            id='description'
                            defaultValue={description}
                            required
                        ></textarea>
                    </div>
                    <div className='flex justify-end mt-4 md:mt-6'>
                        <button className='btn-sm lg:btn-md btn bg-[#797DFC] hover:bg-[#888cfcc0] text-white '>
                            Update Post
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default UpdateVolunteersPost;