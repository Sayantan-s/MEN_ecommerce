import { motion } from 'framer-motion';
import React from 'react';

const Button = ({ children, type, className, ...otherprops }) => {
    let styles;
    switch (type) {
        case 'primary':
            styles =
                ' bg-gray-900 text-gray-50 px-4 py-3 rounded-lg font-semibold uppercase flex items-center justify-center text-md ';
            break;
        case 'secondary':
            styles =
                'bg-gray-200 text-gray-900 px-4 py-3 rounded-lg font-semibold uppercase flex items-center justify-center text-md ';
            break;
        case 'outline':
            styles =
                'text-gray-900 border-2 border-gray-200 px-4 py-3 rounded-lg font-semibold uppercase flex items-center justify-center text-md ';
            break;
        case 'transparent':
            styles =
                'text-gray-900 rounded-lg font-semibold uppercase flex items-center justify-center text-md';
            break;
        default:
            styles = '';
    }
    return (
        <motion.button
            whileTap={{ scale: 0.99 }}
            className={`${styles} ${className} focus:outline-none`}
            {...otherprops}>
          {children}
        </motion.button>
    );
};

export default Button;
