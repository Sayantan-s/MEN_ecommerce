import Logo from 'assets/Logo';
import { motion } from 'framer-motion';
import React, { useRef } from 'react';
import { Box, Button, IconDropDown, Link } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { GOT_NAV_VALUE } from 'store/types/getNavValue';
import Wishlist from 'assets/icons/Wishlist';
import Bag from 'assets/icons/Bag';
import { logout } from 'store/actions/Auth.actions';
import { useHistory } from 'react-router-dom';
import Heart from 'assets/icons/outline/Heart';

const Navbar = () => {
    const { isAuthenticated } = useSelector((state) => state.AuthReducer);

    const NavLinks = ['Home', 'Collectives', 'Newbies'];

    const history = useHistory();

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
                            exact={link === 'Home' ? true : false}
                            to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}>
                            {link}
                        </Link>
                    ))}
                </div>
                <Box className="flex">
                    <IconDropDown icon={Heart} className="mx-2" />
                    <IconDropDown icon={Bag} className="mx-2" />
                    {isAuthenticated ? (
                        <>
                            <Link
                                to="/admin/add-product"
                                type="outline"
                                className="mx-2 text-gray-900">
                                Admin
                            </Link>
                            <Button
                                type="primary"
                                className="ml-1"
                                p="px-5 py-3"
                                onClick={() => dispatch(logout(history))}>
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
