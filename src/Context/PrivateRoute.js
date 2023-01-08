import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";



const PrivateRoute=({children})=>{
    const token = useSelector((state)=>state.auth.token)
    if(token){
        return children
    }
    return <Navigate to="/login" />

}

export default PrivateRoute