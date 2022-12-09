import { useState } from "react";
import { useUserContext } from "./useUserContext";
import http from "../services/httpService";
import data from '../config.json';
import { toast } from "react-toastify";


export const useLogin = () => {
    const authEndpoint = `${data.apiBase}/auth`
    const { dispatch } = useUserContext()
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)

    const login = async (email, password) => {
        setIsLoading(true)
        setError(null)

        const { data, status } = await http.post(`${authEndpoint}/signin`, { email, password})
        if(status === 200){
            // show welcome toast
            data.user.new === false ? toast.success(`Welcome back ${data.user.firstName}!`) : toast.success(`Welcome ${data.user.firstName}!`)
            // save access token to local storage
            localStorage.setItem('token', data.accessToken)
            // set current user
            dispatch({type: 'LOGIN', payload: data.user})
            // reset isLoading
            setIsLoading(false)
            return
        }
        if(status !== 200){
            setIsLoading(false)
            setError(status)
        }
    }

    return { login, isLoading, error }
}