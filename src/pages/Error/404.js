import { Typography } from 'components';
import { motion } from 'framer-motion';
import React from 'react';

const PageNotFound = () => {
    return (
        <Typography as={motion.h1} className="text-gray-900 uppercase">
            404! page not found
        </Typography>
    );
};

export default PageNotFound;
