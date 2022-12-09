import axios from "axios";
import { createContext, useReducer, useEffect} from "react";
import http from '../services/httpService';
import data from '../config.json';

export const UserContext = createContext()

export const userReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN': 
            return { user: action.payload }
        case 'LOGOUT': 
            return { user: null }
        default: return state
    }
}

export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, {
        user: null
    })


    useEffect(() => {
        const endpoint = `${data.apiBase}/auth/validate`
        async function validateToken(){
            const jwt = localStorage.getItem('token')
            if(jwt==null){
                return
            }
            try{
                axios.defaults.headers.common['authorization'] = `Bearer ${jwt}`
                const { data } = await http.get(endpoint)
                const user = data.user
                if(user){                    
                    dispatch({type: 'LOGIN', payload: user})
                }
            }
            catch(error){
                localStorage.removeItem('token')
                return
            }
        };
        validateToken();
        return()=>{}
    }, [])

    return (
        <UserContext.Provider value={{...state, dispatch}}>
            { children }
        </UserContext.Provider>
    )
}