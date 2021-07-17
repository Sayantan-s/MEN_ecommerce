import { Menu } from '@headlessui/react';
import { motion } from 'framer-motion';
import React from 'react';

const IconDropDown = ({ icon: Icon, className, onClick, children}) => {

    return (
        <Menu as={motion.div} className={'relative inline-flex' + ' ' + className} onClick={onClick}>
            <Menu.Button className="focus:outline-none" >
                <Icon className="w-7 h-7 text-gray-900 stroke-current" />
            </Menu.Button>
            <Menu.Items className="absolute -left-56 top-10 py-1 mt-2 bg-gray-50 shadow-md w-72 max-h-64 overflow-scroll scrollbar rounded-xl flex flex-col">
               {children}
            </Menu.Items>
        </Menu>
    ); 
};

export default IconDropDown;
