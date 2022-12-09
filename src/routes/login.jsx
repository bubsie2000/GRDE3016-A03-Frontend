import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../hooks/useLogin';
import { useSignup } from '../hooks/useSignup';

export default function LogIn(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login } = useLogin() 
    const { signup } = useSignup()
    
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [SUEmail, setSUEmail] = useState('')
    const [SUPassword, setSUPassword] = useState('')

    const navigate = useNavigate()

    const handleLogIn = async (e) => {
        e.preventDefault()
        
        await login(email, password)
        navigate('/')
    }

    const handleSignUp = async (e) => {
        e.preventDefault()

        await signup(firstName, lastName, SUEmail, SUPassword)
    }

    useEffect(() => {
        document.title = 'Log In';
    })

    return (
        <div className="grid grid-cols-2 h-screen bg-white">
            <div className="mx-auto my-auto w-3/5">
                <img className=" h-8" src="/images/curtin-logo.png" alt="Curtin University horizontal logo"/>
                <div className="flex items-center mt-14" id="app-logo">
                    <img className="rounded-md w-16 h-16" src="/images/curtin-icon.jpeg" alt="Curtin University icon"/>
                    <h1 className="text-3xl font-medium ml-6">CurtinApp</h1>
                </div>
                <h1 className="font-semibold text-3xl mt-10">Log in</h1>
                <form onSubmit={handleLogIn} className="mt-10">
                    <label htmlFor="email" className="block font-semibold">
                       Student Email
                    </label>
                    <input onChange={e => setEmail(e.target.value)} type="email" name="email" id="email" className="block my-4 px-2 w-full rounded-md h-12 border-loginborder border-[1px]"/>
                    <label htmlFor="password" className="block font-semibold">
                        Password
                    </label>
                    <input onChange={e => setPassword(e.target.value)} type="password" name="password" id="password" className="block my-4 px-2 w-full rounded-md h-12 border-loginborder border-[1px]"/>
                    <button type="submit" className="bg-primary font-semibold text-lg text-white py-3 rounded-lg w-full mt-10">Log In</button>
                </form>
                <p className="text-center mt-10 font-medium text-lg">Don't have an account? 
                    <a href='#signup' className="text-primary hover:cursor-pointer">
                        Sign Up
                    </a>
                </p>
            </div>
            <div id='signup' className="modal">
                <div className="modal-box mx-auto my-auto w-3/5 max-w-3xl p-16 rounded-3xl">
                    <h1 className="font-semibold text-3xl">Sign Up</h1>
                    <p className="text-secgray mt-4">Create a new account</p>
                    <form onSubmit={handleSignUp} className="mt-8">
                        <p htmlFor="firstName" className="block font-semibold text-sm">
                            Student Name
                        </p>
                        <div className="flex gap-6">
                            <input onChange={e => setFirstName(e.target.value)} type="text" name="firstName" id="firstName" placeholder='first name' className="block my-4 px-2 w-full rounded-md h-12 border-loginborder border-[1px]"/>
                            <input onChange={e => setLastName(e.target.value)} type="text" name="lastName" id="lastName" placeholder='surname' className="block my-4 px-2 w-full rounded-md h-12 border-loginborder border-[1px]"/>
                        </div>
                        <label htmlFor="studentEmail" className="block font-semibold text-sm">
                            Student Email
                        </label>
                        <input onChange={e => setSUEmail(e.target.value)} type="email" name="email" id="studentEmail" className="block my-4 px-2 w-full rounded-md h-12 border-loginborder border-[1px]"/>
                        <label htmlFor="signUpPassword" className="block font-semibold text-sm">
                            Password
                        </label>
                        <input onChange={e => setSUPassword(e.target.value)} type="password" name="signUppassword" id="signUpPassword" className="block my-4 px-2 w-full rounded-md h-12 border-loginborder border-[1px]"/>
                        <div className="modal-actions flex gap-6 mt-10">
                            <a href='#' id='close-signup-modal' className="bg-inactivebg font-semibold text-lg text-inactive py-3 rounded-lg w-full text-center">Close</a>
                            <button type="submit" className="bg-primary font-semibold text-lg text-white py-3 rounded-lg w-full">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
            <img className="h-full object-cover object-left-bottom" src="https://bpaeng.com.au/wp-content/uploads/2018/01/Curtin-Uni-1.jpg" alt="Curtin University Bentley Campus BPA Engineering Building"/>
        </div>
    )
}