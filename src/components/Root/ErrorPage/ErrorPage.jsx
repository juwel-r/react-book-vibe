import React from 'react';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h1 className="text-5xl">Page Not Found!</h1>
            <button className='btn btn-outline m-4'><NavLink to='/'>Go Back</NavLink></button>
        </div>
    );
};

export default ErrorPage;