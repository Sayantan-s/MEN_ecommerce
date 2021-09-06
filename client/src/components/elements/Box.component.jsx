import { motion } from 'framer-motion';
import React, { forwardRef } from 'react';

const Box = (
    { children, as: Component = motion.div, className, isLayout = false, ...otherProps },
    ref
) => {
    const styles = className || 'mx-auto';
    return (
        <Component ref={ref} className={`${styles} ${isLayout && 'w-10/12'}`} {...otherProps}>
            {children}
        </Component>
    );
};

export default forwardRef(Box);
