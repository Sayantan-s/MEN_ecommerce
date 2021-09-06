import { motion } from 'framer-motion';
import React, { forwardRef } from 'react';

const defaultStyles = {
    1: 'font-bold text-7xl text-gray-800',
    2: 'font-bold text-6xl text-gray-800',
    3: 'font-semibold text-5xl text-gray-800',
    4: 'font-semibold text-3xl text-gray-800',
    5: 'font-regular text-2xl text-gray-800',
    6: 'font-regular text-xl text-gray-800'
};

const Heading = ({ level, as: Component = motion[`h${level}`], className = '', ...rest }, ref) => (
    <Component {...rest} ref={ref} className={`${defaultStyles[level]} ${className}`} />
);

export default forwardRef(Heading);
