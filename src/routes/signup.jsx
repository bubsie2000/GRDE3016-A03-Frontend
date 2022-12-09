import auth from '../services/authService';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function SignUp(){
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSignUp = async (e) => {
        e.preventDefault()

        // sign up
        try{
            const user = await auth.signup(firstName, lastName, email, password)
            console.log(user)
            navigate('/login')
        }
        catch(error){
            return null
        }
    }

    useEffect(() => {
        document.title = 'Sign Up';
    })

    return (
        <div className="grid grid-cols-1 h-screen">
            <div className="mx-auto my-auto w-2/5">
                <h1 className="font-semibold text-3xl">Sign Up</h1>
                <form onSubmit={handleSignUp} className="mt-10">
                    <label htmlFor="firstName" className="block font-semibold">
                        First Name
                    </label>
                    <input onChange={e => setFirstName(e.target.value)} type="text" name="firstName" id="firstName" className="block my-4 px-2 w-full rounded-md h-12 border-loginborder border-[1px]"/>
                    <label htmlFor="lastName" className="block font-semibold">
                        Last Name
                    </label>
                    <input onChange={e => setLastName(e.target.value)} type="text" name="lastName" id="lastName" className="block my-4 px-2 w-full rounded-md h-12 border-loginborder border-[1px]"/>
                    <label htmlFor="studentEmail" className="block font-semibold">
                        Student Email
                    </label>
                    <input onChange={e => setEmail(e.target.value)} type="email" name="email" id="studentEmail" className="block my-4 px-2 w-full rounded-md h-12 border-loginborder border-[1px]"/>
                    <label htmlFor="signUpPassword" className="block font-semibold">
                        Password
                    </label>
                    <input onChange={e => setPassword(e.target.value)} type="password" name="signUppassword" id="signUpPassword" className="block my-4 px-2 w-full rounded-md h-12 border-loginborder border-[1px]"/>
                    <button type="submit" className="bg-primary font-semibold text-lg text-white py-3 rounded-md w-full mt-10">Sign Up</button>
                </form>
                <p className="text-center mt-10 font-medium text-lg">Already have an account? <Link to="/login" className="text-primary hover:cursor-pointer">Log In</Link></p>
            </div>
        </div>
    )
}