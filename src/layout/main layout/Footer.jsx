import { Instagram } from 'assets/Icons';
import { Youtube } from 'assets/Icons';
import { Facebook } from 'assets/Icons';
import { Twitter } from 'assets/Icons';
import Logo from 'assets/Logo';
import { Box } from 'components';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const Links = [
        {
            headers: 'Info',
            sublinks: ['Find a store', 'Discount', 'Gift', 'Feedback', 'Become a member']
        },
        {
            headers: 'Shop',
            sublinks: ['Man', 'Woman', 'Kids', 'Collections', 'Contacts']
        },
        {
            headers: 'About',
            sublinks: ['News', 'Careers']
        }
    ];
    return (
        <footer className="w-screen bg-black text-gray-50 py-14">
            <Box isLayout>
                <div className="flex">
                    <div className="flex flex-col justify-between">
                        <Logo className={'text-gray-50 fill-current w-32'} />
                        <p className="w-max text-gray-400 font-light">
                            &copy; {new Date().getFullYear()} NIKE <br />
                            All Rights & Reserved
                        </p>
                    </div>
                    <div className="flex w-full justify-center">
                        {Links.map(({ headers, sublinks }, id) => {
                            return (
                                <div className={`${id !== 0 && 'ml-28'}`} key={headers}>
                                    <h2 className="font-normal text-lg">{headers}</h2>
                                    <div className="flex flex-col mt-3">
                                        {sublinks.map((link) => {
                                            return (
                                                <Link
                                                    className="text-gray-400 mt-2"
                                                    key={link}
                                                    to={`/${link}`}>
                                                    {link}
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="flex flex-col justify-between h-72">
                        <div className="flex items-center justify-end">
                            {[Twitter, Facebook, Instagram, Youtube].map((Icon, id) => (
                                <a
                                    className={`text-gray-50 ${id !== 0 && 'ml-4'}`}
                                    href="#/"
                                    key={id}>
                                    <Icon className="text-gray-50 fill-current" />
                                </a>
                            ))}
                        </div>
                        <p className="w-max text-gray-400 font-light">Privacy & Cookie policy</p>
                    </div>
                </div>
            </Box>
        </footer>
    );
};

export default Footer;
