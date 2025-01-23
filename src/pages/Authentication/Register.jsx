import { Link } from "react-router-dom";
import logo from '../../assets/volunteer.png'
import { useState } from "react";
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const {createUser, signInWithGoogle, updateUserProfile, setUser} = useAuth();

    const handleSignUp = async e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(name, email, photo, password);

        try{
            const result = await createUser(email, password);
            await updateUserProfile(name, photo);
            // Optimistic UI update
            setUser({...result?.user, photoURL: photo, displayName: name} );
            toast.success('SignUp Successfully')

        }
        catch(err) {
            console.log(err);
            toast.success(err?.message)
        }

    }
    return (
        <div>
            <section className="font-lato ">
                <div className="container flex items-center justify-center mt-10 md:mt-16 lg:mt-20 xl:mt-28 px-6 mx-auto">
                    <div className="w-full max-w-md">
                        <img className="w-auto h-8 sm:h-9" src={logo} alt="logo" />
                        <h1 className="mt-3 text-2xl font-semibold text-gray-800 capitalize sm:text-3xl font-lato">sign Up</h1>

                        <form
                            onSubmit={handleSignUp}
                            className=''>
                            <div className="relative flex items-center mt-6 md:mt-8">
                                <span className="absolute">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                                        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </span>
                                <input
                                    type="text"
                                    name='name'
                                    placeholder='Name'
                                    className="block w-full py-3 text-gray-700  border rounded-lg px-11    focus:border-gray-400  focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                            <div className="relative flex items-center mt-3 md:mt-4">
                                <span className="absolute">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </span>
                                <input
                                    type="email"
                                    name='email'
                                    placeholder='Email address'
                                    className="block w-full py-3 text-gray-700  border rounded-lg px-11    focus:border-gray-400  focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                            <div className="relative flex items-center mt-3 md:mt-4">
                                <span className="absolute">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                                        <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                    </svg>
                                </span>
                                <input
                                    type="url"
                                    name='photo'
                                    placeholder='Photo URL'
                                    className="block w-full py-3 text-gray-700  border rounded-lg px-11    focus:border-gray-400  focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                            <div className=" relative flex items-center mt-3 md:mt-4">
                                <span className="absolute">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                                        <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </span>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder='Password'
                                    name='password'
                                    className="block w-full py-3 text-gray-700  border rounded-lg px-11    focus:border-gray-400  focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                                <span
                                    className="absolute right-5 text-lg md:text-xl "
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <VscEyeClosed></VscEyeClosed> : <VscEye></VscEye>}
                                </span>

                            </div>
                            <div className='mt-5 md:mt-6'>
                                <input
                                    className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#797DFC] rounded-lg hover:bg-[#888cfcc0] focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
                                    type="submit" value="Sign up" />
                                {/* <input className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#797DFC] rounded-lg hover:bg-[#888cfcc0] focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50" type="button" value="Sign up" /> */}
                                {/* <button >
                                   
                                </button> */}
                            </div>
                        </form>

                        <div className="">
                            <p className="mt-4 text-center text-gray-600 dark:text-gray-400">or sign up with</p>
                            <a href="#" className="flex items-center justify-center px-6 py-3 mt-4  transition-colors duration-300 transform border rounded-lg hover:text-white hover:bg-gray-800">
                                <svg className="w-6 h-6 mx-2" viewBox="0 0 40 40">
                                    <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                                    <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                                    <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                                    <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                                </svg>

                                <span className="mx-2">Sign up with Google</span>
                            </a>

                            <div className="mt-4 md:mt-6 text-center ">
                                <Link to='/login'>
                                    <a href="" className="text-sm  hover:underline">
                                        Already have an account? <span className='text-[#797DFC] font-semibold'> Sign in</span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Register;