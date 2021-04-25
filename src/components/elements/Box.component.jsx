import { motion } from 'framer-motion';
import React from 'react'

const Box = ({ children,as,className, ...otherProps }) => {
    const Eletype = as;
    return (
        <Eletype className={`w-10/12 mx-auto ${className}`} {...otherProps}>
            { children }
        </Eletype>
    )
}

Box.defaultProps = {
    as : motion.div
}

export default Box;
