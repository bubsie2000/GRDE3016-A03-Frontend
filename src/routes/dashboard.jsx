import {useEffect, useState } from "react";
import { useUserContext } from "../hooks/useUserContext";
import http from '../services/httpService';
import data from '../config.json';
import ClassCard from "../components/class-card";
import AssignmentCard from "../components/assignment-card";

export default function Dashboard() {
    const { user } = useUserContext()

    const [classes, setClasses] = useState(null)
    const [assignments, setAssignments] = useState(null)

    useEffect(() => {
        document.title = 'Dashboard';
        const classEndpoint = `${data.apiBase}/class`
        const assignmentEndpoint = `${data.apiBase}/assignment`
        http.setAuthJwt()
        async function getUserClasses(){
            const { data, status } = await http.get(classEndpoint)
            if(status === 200){
                setClasses(data)
            }
        }
        async function getUserAssignments(){
            const { data, status } = await http.get(assignmentEndpoint)
            if(status === 200){
                setAssignments(data)
            }
        }
        getUserClasses()
        getUserAssignments()
    }, [])

    if(user)return (
        <>
            <h1 className="text-4xl font-bold">Welcome {user.firstName}</h1>
            <h2 className=" text-xl font-bold mt-10">Classes</h2>
            <div className="classes mt-6 grid grid-cols-[repeat(auto-fill,_minmax(20rem,_1fr))]">
                {classes && classes.map((userClass) => (
                    <ClassCard key={userClass._id} userClass={userClass}/>
                ))}
            </div>
            <h2 className=" text-xl font-bold mt-10">Upcoming Assignments</h2>
            <div className="classes mt-6 grid grid-cols-[repeat(auto-fill,_minmax(24rem,_1fr))]">
                {assignments && assignments.map((assignment) => (
                    <AssignmentCard key={assignment._id} assignment={assignment}/>
                ))}
            </div>
        </>
    )
}