import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';

const Button = ({ as: Component = motion.button, type, size }) => {
    const ButtonType = {
        primary: 'bg-blue-500 hover:bg-blue-700 text-white font-bold',
        secondary: 'bg-blue-500 hover:bg-blue-700 text-white font-bold',
        basic: 'bg-white hover:bg-gray-700 text-gray-700 font-bold',
        delete: 'bg-red-300 hover:bg-red-500 text-white font-bold'
    };

    export const ButtonSize = {
        sm: 'py-2 px-4 text-xs',
        lg: 'py-3 px-6 text-lg'
    };

    const classNames = ButtonType;

    return <Component whileTap={{ scale: 0.99 }}></Component>;
};

export default forwardRef(Button);
