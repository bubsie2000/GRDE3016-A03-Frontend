import axios from "axios";
import { toast } from 'react-toastify';
import auth from './authService';

axios.interceptors.response.use(null, error => {
    const expectedError = 
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500

    if(!expectedError){
        toast.error(`${error.response.data.statusText || error.response.data.message || error.statusText || error.message}`)
        console.log(error)
    }
    else {
        toast.error(`${error.response.data.statusText || error.response.data.message}`)
        console.log(error)
    }
})

function setAuthJwt(){
    const jwt = localStorage.getItem('token')
    axios.defaults.headers.common['authorization'] = `Bearer ${jwt}`
}

const exportObj = {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
    setAuthJwt
}

export default exportObj