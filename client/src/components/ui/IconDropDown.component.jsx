import { Menu } from '@headlessui/react';
import { Box, Image } from 'components';
import { motion } from 'framer-motion';
import React from 'react';

const IconDropDown = ({ icon: Icon, avatar, className, onClick, children }) => {
    const dropdownAnimation = {
        from: {
            y: -30
        },
        to: {
            y: '0'
        }
    };

    if (Icon && avatar) throw new Error('Both cannot be added in the dropdown!');

    return (
        <motion.div onClick={onClick} className={className}>
            <Menu as={Box} className="relative block">
                <Menu.Button
                    className={
                        'flex items-center justify-center w-full text-sm font-medium text-white focus:outline-none'
                    }>
                    {Icon && <Icon className={'w-7 h-7 text-gray-900 stroke-current'} />}
                    {avatar && (
                        <Image className="w-10 h-10 rounded-full" src={'/jordan.jpg'} alt="avatar_user" />
                    )}
                </Menu.Button>
                <Menu.Items
                    as={Box}
                    variants={dropdownAnimation}
                    initial={'from'}
                    animate={'to'}
                    className="absolute right-0 w-72 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-2xl overflow-y-scroll max-h-64 scrollbar min-h-8 flex flex-col justify-between">
                    {children}
                </Menu.Items>
            </Menu>
        </motion.div>
    );
};

export default IconDropDown;
