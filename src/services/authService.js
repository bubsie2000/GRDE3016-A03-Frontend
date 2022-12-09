import http from "./httpService";
import data from '../config.json';
import axios from "axios";

const authEndpoint = `${data.apiBase}/auth/validate`

export default async function checkToken(){
    try{
        const jwt = localStorage.getItem('token')
        axios.defaults.headers.common['authorization'] = `Bearer ${jwt}`
        const { data } = await http.get(authEndpoint)
        if(data){
            return data
        }
        return null
    }
    catch(error){
        localStorage.removeItem('token')
        return null
    }
}