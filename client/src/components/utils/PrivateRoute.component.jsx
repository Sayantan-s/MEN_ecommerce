import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
const PrivateRoute = ({ condition, children, redirect, ...rest }) => {
    const { isAuthenticated } = useSelector((state) => state.AuthReducer);

    return (
        <Route
            {...rest}
            render={() => (condition || isAuthenticated ? children : <Redirect to={redirect} />)}
        />
    );
};

export default PrivateRoute;
