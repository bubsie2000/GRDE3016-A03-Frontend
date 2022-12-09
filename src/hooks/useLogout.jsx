import { useUserContext } from "./useUserContext";
import { toast } from "react-toastify";

export const useLogout = () => {
    const { dispatch } = useUserContext()

    const logout = () => {
        // remove access token
        localStorage.removeItem('token')
        // set current user to null
        dispatch({type: 'LOGOUT'})
        // show log out toast
        toast('Goodbye for now 👋')
    }

    return { logout }
}