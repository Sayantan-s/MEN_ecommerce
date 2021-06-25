import Logo from 'assets/Logo';
import { motion } from 'framer-motion';
import React, { useRef } from 'react';
import Bag from 'assets/icons/Bag';
import { Box, Button, Link, Search } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { GOT_NAV_VALUE } from 'store/types/getNavValue';
import Wishlist from 'assets/icons/Wishlist';

const Navbar = () => {
    const { isAuthenticated } = useSelector((state) => state.AuthReducer);

    const NavLinks = ['Home', 'Collectives', 'Newbies'];

    const navBarRef = useRef(null);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: GOT_NAV_VALUE, payload: navBarRef.current.offsetHeight });
    }, []);

    return (
        <header className="w-full bg-gray-50 fixed border-b-2 border-gray-200 z-50" ref={navBarRef}>
            <Box
                isLayout
                as={motion.nav}
                className="flex items-center justify-between w-10/12 mx-auto">
                <Logo />
                <div className="flex ml-20">
                    {NavLinks.map((link, id) => (
                        <Link
                            key={id}
                            type="transparent"
                            className="mx-4"
                            activeClassName="text-gray-700"
                            to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}>
                            {link}
                        </Link>
                    ))}
                </div>
                <Box className="flex">
                    <Button className="relative mx-2">
                        <Wishlist className="w-7 h-7 text-gray-900 stroke-2" />
                        <div className="bg-red-400 rounded-full w-2 h-2 absolute top-1 -right-1" />
                    </Button>
                    <Button className="relative mx-2">
                        <Bag className="w-7 h-7 text-gray-300 stroke-2" />
                        <div className="bg-red-400 rounded-full w-2 h-2 absolute top-1 -right-1" />
                    </Button>
                    {isAuthenticated ? (
                        <>
                            <Link
                                to="/admin/add-product"
                                type="outline"
                                className="mx-2 text-gray-900">
                                Admin
                            </Link>
                            <Button type="primary" className="ml-1">
                                Logout
                            </Button>
                        </>
                    ) : (
                        <Link to="/auth/register" type="primary" className="mx-2">
                            Join us
                        </Link>
                    )}
                </Box>
            </Box>
        </header>
    );
};

export default Navbar;
