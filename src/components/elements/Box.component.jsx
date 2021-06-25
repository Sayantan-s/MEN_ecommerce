import { motion } from 'framer-motion';
import React, { forwardRef } from 'react';

const Box = ({ children, as, className, isLayout, ...otherProps }, ref) => {
    const styles = className || 'mx-auto';
    const Eletype = as || motion.div;
    return (
        <Eletype ref={ref} className={`${styles} ${isLayout && 'w-10/12'}`} {...otherProps}>
            {children}
        </Eletype>
    );
};

export default forwardRef(Box);
