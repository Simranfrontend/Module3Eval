import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/Authcontext";

const ProtectedRoute = ({ children, role}) => {
    const { user } = useContext(Authcontext);

    if (!user) return <Navigate to="/" />
    if (role && user.role !== role) return
    <Navigate to="/" />

    return children;

};

export default ProtectedRoute;