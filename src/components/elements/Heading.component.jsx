import React, { forwardRef } from 'react'

const Heading = forwardRef(({
    level,
    as: Component = `h${level}`,
    size,weight,color,
    ...rest
}, ref
) => {
    switch (as) {
        case motion.h1:
            styles = 'text-7xl font-bold';
            break;
        case motion.h2:
            styles = 'text-6xl font-bold';
            break;
        case motion.h3:
            styles = 'text-5xl font-semibold';
            break;
        case motion.h4:
            styles = 'text-3xl font-semibold';
            break;
        case motion.h5:
            styles = 'text-xl font-regular';
            break;
        case motion.h6:
            styles = 'text-md font-regular';
            break;
        case motion.p:
            styles = 'text-base font-normal';
            break;
        default:
            styles = 'text-normal';
    }
    const styles = {
        1 : {
            size : 7,
            weight : 'bold'
        }
    }
    return (
       <Component {...rest} ref={ref} className={`text-${size || styles[level].size}`} />
    )
})

Heading.defaultProps = {

}

export default Heading
