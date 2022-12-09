import http from '../services/httpService';
import data from '../config.json';
import { useEffect, useState } from "react";
import AssignmentCard from "../components/assignment-card";

export default function Assignments() {
    const [assignments, setAssignments] = useState(null)

    useEffect(() => {
        const assignmentEndpoint = `${data.apiBase}/assignment`
        http.setAuthJwt()
        document.title = 'Assignments';

        async function getUserAssignments(){
            const { data, status } = await http.get(assignmentEndpoint)
            if(status === 200){
                setAssignments(data)
            }
        }
        getUserAssignments()
    })
    return (
        <>
            <h1 className="text-4xl font-bold">Assignments</h1>
            <div className="classes mt-6 grid grid-cols-[repeat(auto-fill,_minmax(24rem,_1fr))]">
                {assignments && assignments.map((assignment) => (
                    <AssignmentCard key={assignment._id} assignment={assignment}/>
                ))}
            </div>
        </>
    )
}