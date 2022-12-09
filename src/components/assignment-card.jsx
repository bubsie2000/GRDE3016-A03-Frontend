import { Link } from "react-router-dom";
import {BsFillFileEarmarkTextFill} from "react-icons/bs";

export default function AssignmentCard({ assignment }) {
    return (
        <Link to="/">
            <div className="w-96 flex flex-col rounded-2xl p-6 bg-white">
                <div className="flex flex-row items-center content-start h-14 w-full mb-4">
                    <BsFillFileEarmarkTextFill className="w-14 h-14 text-primary"/>
                    <div className="flex flex-col justify-between h-full ml-4">
                        <h3 className="text-lg font-bold">{assignment.name}</h3>
                        <p className="text-secgray">{assignment.class.name}</p>
                    </div>
                </div>
                <div className="mb-4 flex flex-row w-full items-center justify-between">
                    <div className="h-3 w-72 bg-gray-100 rounded-full">
                        <div className="h-3 w-2/4 bg-pink-400 rounded-full"></div>
                    </div>
                    <h5 className="font-semibold">50%</h5>
                </div>
                <div className="flex flex-row items-center justify-between w-full">
                    <h4 className="font-semibold text-sm">{assignment.dueDate}</h4>
                    <p className=" text-center bg-pink-100 text-pink-400 px-4 py-1 rounded-full text-xs font-semibold">8 days left</p>
                </div>
            </div>            
        </Link>
    )
}