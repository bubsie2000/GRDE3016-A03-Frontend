import { Outlet, Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import Sidebar from "../components/sidebar";

export default function Root() {
    const jwt = localStorage.getItem('token')
    if(!jwt){
        toast.error('Please log in', {
            toastId: "login-in-toast"
        })
        return <Navigate to='/login' />
    }
    return (
        <>
        <Sidebar/>
        <div className=" bg-mainbg h-full">
            <div id="detail" className="p-6 h-screen ml-60">
                <Outlet/>
            </div>
        </div>
        </>
    )
}