import { Box } from 'components';
import React, { forwardRef } from 'react';

const Image = ({ src, alt, className, ...otherProps }, ref) => {
    return (
        <Box ref={ref} className={`relative overflow-hidden ${className}`} {...otherProps}>
            <img
                className="absolute top-0 left-0 object-cover object-center w-full h-full"
                src={src}
                alt={alt}
            />
        </Box>
    );
};

export default forwardRef(Image);
