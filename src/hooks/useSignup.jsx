import http from "../services/httpService";
import data from '../config.json';
import { toast } from "react-toastify";

export const useSignup = () => {
    const endpoint = `${data.apiBase}/user`

    const signup = async (firstName, lastName, email, password) => {
        const { data, status } = await http.post(endpoint, { firstName, lastName, email, password })
        if(status === 201){
            toast.success(`Successfully created account for ${data.user.firstName} ${data.user.lastName} 👍`)
            const closeSignUp = document.querySelector('#close-signup-modal')
            closeSignUp.click()
        }
        const closeSignUp = document.querySelector('#close-signup-modal')
        closeSignUp.click()
    }

    return { signup }
}