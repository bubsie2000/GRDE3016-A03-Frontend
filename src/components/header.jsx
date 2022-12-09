import { useState } from "react";
import { BsBellFill } from "react-icons/bs";
import { RiUserLine } from "react-icons/ri";

export default function Header(){
    const [search, setSearch] = useState('')

    return(
        <header className="fixed top-0 right-0 w-full bg-mainbg flex flex-row items-center justify-around -z-0">
            <h1 className="text-4xl font-bold">{document.title}</h1>
            <input onChange={e => setSearch(e.target.value)} type="text" id="searchbar" className=" w-80 bg-white rounded-2xl h-14"/>
            <BsBellFill className="h-14 w-14 rounded-xl bg-white text-primary hover:cursor-pointer"/>
            <RiUserLine className="h-14 w-14 rounded-xl bg-primary text-white hover:cursor-pointer" />
        </header>
    )
}