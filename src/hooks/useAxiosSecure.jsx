import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true
})

const useAxiosSecure = () => {
    const { logOut } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res;
        }, error => {
            console.log('error from axios interceptors', error);
            if (error.response.status === 401 || error.response.status === 403) {
                logOut();
                navigate('/login');

            }
            return Promise.reject(error);
        })
    }, [logOut, navigate])

    return axiosSecure;
};

export default useAxiosSecure;