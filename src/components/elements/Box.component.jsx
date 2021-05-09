import { motion } from 'framer-motion';
import React, { forwardRef } from 'react'

const Box = ({ children, as , className, ...otherProps },ref) => {
    const styles = className || 'w-10/12 mx-auto'
    const Eletype = motion.div || as; 
    return (
        <Eletype
        ref={ref}
        className={styles} 
        {...otherProps}>
            { children }
        </Eletype>
    )
}

export default forwardRef(Box);
