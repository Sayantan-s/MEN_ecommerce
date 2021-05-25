import React from 'react';
import { Page, Typography, Box, Button } from 'components';
import { motion } from 'framer-motion';
import { ChevronRightIcon } from '@heroicons/react/solid';

const AuthLayout = ({ children }) => {
    return (
        <Page className="flex items-baseline">
            <Box className="w-1/2 mt-20">
                <Typography as={motion.h1} className="font-extrabold text-gray-900">
                    If you can dream it,
                    <br />
                    You can do it.
                </Typography>
                <Typography as={motion.h6} className="mt-20 font-bold text-gray-900">
                    YOUR ACCOUNT FOR EVERYTHING NIKE
                </Typography>
                <Typography as={motion.p} className="max-w-sm my-2 text-gray-400">
                    A new initiative by Nike to feature and celebrate all of its products in one
                    place.
                </Typography>
                <Button className="mt-8 text-gray-400 w-max" type="transparent">
                    <span>Know more</span>
                    <ChevronRightIcon className="h-6 w-6 text-gray-900 fill-current" />
                </Button>
            </Box>
            <Box className="w-1/2">{children}</Box>
        </Page>
    );
};

export default AuthLayout;
