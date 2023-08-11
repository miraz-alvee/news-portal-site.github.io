import React, { useContext } from 'react';
import { authContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(authContext);
    const location = useLocation();
    if(loading){
        return <Spinner animation="border" varient="primary" />
    }
    if(user){
        return children;
    }
    return <Navigate state={{from:location}} to="/login" replace></Navigate>
};

export default PrivateRoute;