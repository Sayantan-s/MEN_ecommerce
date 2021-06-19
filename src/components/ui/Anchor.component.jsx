import React, { forwardRef } from 'react';
import { NavLink } from 'react-router-dom';

const Link = ({ to, children, activeClassName, className, type, ...otherProps }, ref) => {
    let styles;
    switch (type) {
        case 'primary':
            styles = 'bg-gray-900 text-gray-50 px-5 py-3 font-semibold uppercase flex text-md';
            break;
        case 'secondary':
            styles = 'bg-gray-200 text-gray-900 px-5 py-3 font-semibold uppercase flex text-md';
            break;
        case 'outline':
            styles =
                'text-gray-900 border-2 text-gray-900 px-5 py-3 font-semibold uppercase flex text-md items-center';
            break;
        case 'transparent':
            styles = 'text-gray-400 font-semibold uppercase flex text-md';
            break;
        default:
            styles = '';
    }
    return (
        <NavLink
            ref={ref}
            className={`${styles} ${className}`}
            to={to}
            activeClassName={activeClassName}
            {...otherProps}>
            {children}
        </NavLink>
    );
};

export default forwardRef(Link);
