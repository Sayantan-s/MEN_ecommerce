import { motion } from 'framer-motion';
import React from 'react';

const Button = ({ children, type, className, p, fontWeight, ...otherprops }) => {
    let styles;

    const padding = p || 'px-5 py-4';
    const weight = fontWeight || 'font-bold';
    switch (type) {
        case 'primary':
            styles = ` bg-gray-900 text-gray-50 ${padding} ${weight} uppercase flex items-center justify-center text-md `;
            break;
        case 'secondary':
            styles = `bg-gray-200 text-gray-900 ${padding} ${weight} uppercase flex items-center justify-center text-md `;
            break;
        case 'outline':
            styles = `text-gray-900 border-2 border-gray-200 ${padding} ${weight} uppercase flex items-center justify-center text-md `;
            break;
        case 'transparent':
            styles = `text-gray-900 ${weight} uppercase flex items-center justify-center text-md`;
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
