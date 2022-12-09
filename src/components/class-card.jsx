import { Link } from 'react-router-dom';
import { FaGraduationCap } from 'react-icons/fa';

export default function ClassCard({ userClass }) {
    return (
        <Link to="/">
            <div className="h-28 w-80 flex flex-row items-center rounded-xl bg-white p-6">
                <FaGraduationCap className="w-14 h-14 rounded-lg bg-pink-200 text-pink-500 p-2"/>
                <div className="flex flex-col justify-around h-full ml-6">
                    <h2 className="font-bold">{userClass.name}</h2>
                    <p className="text-secgray text-sm">{userClass.day}, {userClass.startTime}-{userClass.endTime}</p>
                </div>
            </div>
        </Link>
    )
}