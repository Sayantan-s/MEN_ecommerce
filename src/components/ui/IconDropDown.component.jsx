import { Menu } from '@headlessui/react';
import { motion } from 'framer-motion';
import React from 'react';

const IconDropDown = ({ icon: Icon, className }) => {
    return (
        <Menu as={motion.div} className={'relative inline-flex' + ' ' + className}>
            <Menu.Button className="focus:outline-none">
                <Icon className="w-7 h-7 text-gray-900" />
            </Menu.Button>
            <Menu.Items className="absolute -left-56 top-10 py-1 mt-2 bg-gray-50 shadow-md w-64 max-w-xs rounded-xl flex flex-col">
                <Menu.Item className="p-2">
                    {({ active }) => (
                        <a className={`${active && 'bg-blue-500'}`} href="/account-settings">
                            Account settings
                        </a>
                    )}
                </Menu.Item>
                <Menu.Item>
                    {({ active }) => (
                        <a className={`${active && 'bg-blue-500'}`} href="/account-settings">
                            Documentation
                        </a>
                    )}
                </Menu.Item>
                <Menu.Item disabled>
                    <span className="opacity-75">Invite a friend (coming soon!)</span>
                </Menu.Item>
            </Menu.Items>
        </Menu>
    );
};

export default IconDropDown;
