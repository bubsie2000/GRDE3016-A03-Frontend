import { NavLink } from "react-router-dom"
import { BsCheckCircleFill,BsFillFileEarmarkTextFill } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { useLogout } from "../hooks/useLogout";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
    const { logout } = useLogout()
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        navigate('/login')
    }

    return (
        <div className="fixed w-60 h-screen px-8 pt-10 flex flex-col bg-white">
            <NavLink to="/" end className={({ isActive }) => (
                isActive ? "mb-4 p-2 text-primary flex items-center font-medium" : "mb-4 p-2 text-inactive flex items-center font-medium"
            )}>
                <MdSpaceDashboard/>
                <span className="ml-4">Dashboard</span>
            </NavLink>
            <NavLink to="/classes" className={({ isActive }) => (
                isActive ? "mb-4 p-2 text-primary flex items-center font-medium" : "mb-4 p-2 text-inactive flex items-center font-medium"
            )}>
                <FaGraduationCap/>
                <span className="ml-4">Classes</span>
            </NavLink>
            <NavLink to="/tasks" className={({ isActive }) => (
                isActive ? "mb-4 p-2 text-primary flex items-center font-medium" : "mb-4 p-2 text-inactive flex items-center font-medium"
            )}>
                <BsCheckCircleFill/>
                <span className="ml-4">Tasks</span>
            </NavLink>
            <NavLink to="/assignments" className={({ isActive }) => (
                isActive ? "mb-4 p-2 text-primary flex items-center font-medium" : "mb-4 p-2 text-inactive flex items-center font-medium"
            )}>
                <BsFillFileEarmarkTextFill/>
                <span className="ml-4">Assignments</span>
            </NavLink>
            <button onClick={handleLogout} className="bg-inactivebg text-secgray hover:bg-primary hover:text-white rounded-lg py-1 font-semibold">Log Out</button>
        </div>
    )
}