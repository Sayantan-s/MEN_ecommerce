import { motion } from 'framer-motion';
import React from 'react'

const Box = ({ children,as,className, ...otherProps }) => {
    const Eletype = as;
    const styles = className || 'w-10/12 mx-auto'
    return (
        <Eletype className={styles} {...otherProps}>
            { children }
        </Eletype>
    )
}

Box.defaultProps = {
    as : motion.div
}

export default Box;
