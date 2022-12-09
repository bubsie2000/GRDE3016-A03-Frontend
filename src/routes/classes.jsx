import ClassCard from "../components/class-card";
import http from '../services/httpService';
import data from '../config.json';
import { useEffect, useState } from "react";

export default function Courses(){
    const [classes, setClasses] = useState(null)
    const classEndpoint = `${data.apiBase}/class`

    useEffect(() => {
        document.title = 'Classes';
        http.setAuthJwt()
        async function getUserClasses(){
            const { data, status } = await http.get(classEndpoint)
            if(status === 200){
                setClasses(data)
            }
        }
        getUserClasses()
    })
    return (
        <>
            <h1 className="text-4xl font-bold">Classes</h1>
            <div className="classes mt-6 grid grid-cols-[repeat(auto-fill,_minmax(20rem,_1fr))]">
                {classes && classes.map((userClass) => (
                    <ClassCard key={userClass._id} userClass={userClass}/>
                ))}
            </div>
        </>
    )
}