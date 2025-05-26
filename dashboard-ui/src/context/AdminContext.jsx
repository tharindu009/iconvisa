import { useState } from "react";
import { createContext } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';

export const AdminContext = createContext();

const AdminContextProvider = (props) => {

    const [aToken, setAToken] = useState(Cookies.get('aToken') ? Cookies.get('aToken') : '');

    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const value = {
        aToken, setAToken,
        backendUrl
    }

    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )

}

export default AdminContextProvider