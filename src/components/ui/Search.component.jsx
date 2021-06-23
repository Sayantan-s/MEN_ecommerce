import { SearchIcon } from '@heroicons/react/outline';
import { Box, FormField } from 'components';
import { AnimatePresence, motion } from 'framer-motion';
import { useForm } from 'hooks';
import React from 'react';
import { useState } from 'react';

const Search = ({}) => {
    const [search, handleSearch] = useForm('');

    const [focus, setFocus] = useState(false);

    const animationVariants = {
        from: {
            height: 0,
            opacity: 0
        },
        to: {
            height: 500,
            opacity: 1
        },
        exit: {
            height: 0,
            opacity: 0
        }
    };

    return (
        <Box className="relative w-1/3">
            <FormField
                type="search"
                placeholder="eg. Nike jorda..."
                value={search}
                onChange={handleSearch}
                onClick={() => setFocus(!focus)}
                icon={SearchIcon}
            />
            <AnimatePresence>
                {focus && (
                    <Box
                        className="w-full bg-gray-50 max-h-40 h-40 shadow absolute rounded-xl flex justify-center items-center font-regular"
                        variants={animationVariants}
                        initial={'from'}
                        animate={'to'}
                        exit={'exit'}>
                        No results
                    </Box>
                )}
            </AnimatePresence>
        </Box>
    );
};

export default Search;
