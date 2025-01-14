
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Auth-Provider/AuthProvider";
import { useContext } from "react";



const ProtectedRoute = ({children}) => {
    // console.log(children);

    const location  = useLocation()

    const {user} = useContext(AuthContext)
    if(user) {
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
   
};

export default ProtectedRoute;