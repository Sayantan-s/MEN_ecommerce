import { motion } from 'framer-motion';
import React, { forwardRef } from 'react';

const Heading = forwardRef(
    ({ level, as: Component = motion[`h${level}`], className, ...rest }, ref) => {
        let styles = {
            1 : {
                fontSize : 'text-3xl',
                fontWeight: 'font-bold'
            }
        };
        return <Component {...rest} ref={ref} className={` text-xl font-bold ${className} ${styles} text-gray-900`} />;
    }
);

Heading.defaultProps = {
    level: 1
};

export default Heading;
