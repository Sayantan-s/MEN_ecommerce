import { motion } from 'framer-motion';
import React, { forwardRef } from 'react'

const Heading = forwardRef(({
    level,
    as: Component = motion[`h${level}`],
    className,
    ...rest
}, ref
) => {

    let styles;

    switch (level) {
        case 1:
            styles = 'text-7xl font-bold';
            break;
        case 2:
            styles = 'text-6xl font-bold';
            break;
        case 3:
            styles = 'text-5xl font-semibold';
            break;
        case 4:
            styles = 'text-3xl font-semibold';
            break;
        case 5:
            styles = 'text-xl font-regular';
            break;
        case 6:
            styles = 'text-md font-regular';
            break;
        default:
            styles = 'text-normal';
    }
    return (
       <Component {...rest} ref={ref} className={`${className} ${styles}`} />
    )
})

Heading.defaultProps = {
    level : 1
}

export default Heading
