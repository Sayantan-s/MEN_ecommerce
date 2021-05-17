import { Box } from 'components'
import React from 'react'

const Image = ({ src, alt, className, ...otherProps }) => {
    return (
        <Box className={`relative overflow-hidden ${className}`} {...otherProps}>
            <img 
                className="absolute top-0 left-0 object-cover object-center w-full h-full"
                src={src} 
                alt={alt} 
            />
        </Box>
    )
}

export default Image
