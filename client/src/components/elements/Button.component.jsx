import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';

const Button = ({ as: Component = motion.button, className, variant , size, ...rest }) => {
    const ButtonType = {
        primary: 'bg-gray-800 hover:bg-blue-700 text-white font-bold',
        secondary: 'bg-gray-50 hover:bg-gray-100 text-gray-800 font-bold',
        outline: 'bg-white hover:bg-gray-700 text-gray-800 font-bold',
        transparent: 'text-gray-800 font-bold'
    };

    const ButtonSize = {
        sm: 'py-2 px-4 text-xs',
        lg: 'py-3 px-6 text-lg'
    };

    return <Component whileTap={{ scale: 0.99 }} className={ButtonType + " " + ButtonSize + " " + className} {...rest} />;
};

export default forwardRef(Button);
