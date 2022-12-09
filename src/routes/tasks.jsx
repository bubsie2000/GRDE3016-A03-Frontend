import { useEffect } from "react"

export default function Tasks() {
    useEffect(() => {
        document.title = 'Tasks';
    })
    return (
        <>
            <h1 className="text-4xl font-bold">Tasks</h1>
        </>
    )
}