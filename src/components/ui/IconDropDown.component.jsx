import { Menu } from '@headlessui/react';
import { Box } from 'components';
import { motion } from 'framer-motion';
import React from 'react';

const IconDropDown = ({ icon: Icon, className, onClick, children}) => {

    const dropdownAnimation = {
        from : {
            y : -30
        },
        to : {
            y : '0'
        }
    }

    return (
        <motion.div onClick={onClick} className="">
            <Menu as={Box} className="relative inline-block w-max">
                <Menu.Button className={"flex items-center justify-center w-full text-sm font-medium text-white focus:outline-none" + " " + className}>
                    <Icon className="w-7 h-7 text-gray-900 stroke-current" />
                </Menu.Button>
                <Menu.Items as={Box}
                variants={dropdownAnimation}
                initial={'from'}
                animate={'to'} 
                className="absolute right-0 w-72 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-sm ring-1 ring-black ring-opacity-5 focus:outline-none overflow-y-scroll max-h-64 scrollbar">
                    {children}
                </Menu.Items>
            </Menu>
        </motion.div>
    ); 
};

export default IconDropDown;


