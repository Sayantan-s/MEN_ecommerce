import Logo from 'assets/Logo';
import { motion } from 'framer-motion';
import React, { useRef, useState } from 'react';
import { Box, Button, CartComponent, IconDropDown, Link, Typography } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { GOT_NAV_VALUE } from 'store/types/getNavValue';
import Bag from 'assets/icons/Bag';
import { logout } from 'store/actions/Auth.actions';
import { useHistory } from 'react-router-dom';
import Heart from 'assets/icons/outline/Heart';
import { Menu } from '@headlessui/react';
import http from 'utils/http';
import HeartAdd from 'assets/icons/outline/HeartAdd';

const Navbar = () => {
    const { isAuthenticated } = useSelector((state) => state.AuthReducer);

    const [cartData, setCartData] = useState([]);

    const NavLinks = ['Home', 'Collectives', 'Newbies'];

    const history = useHistory();

    const navBarRef = useRef(null);

    const dispatch = useDispatch();

    const userData = useSelector((state) => state.AuthReducer);

    const fetchCart = async () => {
        if (isAuthenticated) {
            const { data } = await http.get(`/cart?user_id=${userData.data?.user}`);
            setCartData(data.data);
        }
    };

    useEffect(() => {
        fetchCart();
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
                <Box className="flex items-center relative">
                    <IconDropDown icon={Heart}>
                        {cartData.length ? (
                            cartData.map(({ id, products, ...data }) => (
                                <motion.div key={id}>
                                    <Menu.Item as={motion.div}>
                                        <CartComponent {...products} {...data} />
                                    </Menu.Item>
                                </motion.div>
                            ))
                        ) : (
                            <Box className="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full p-4">
                                <Link to="/collectives" className="flex justify-center">
                                    <HeartAdd className="w-10 h-10 text-red-500 stroke-current" />
                                </Link>
                                <Typography as={motion.h5} className="text-red-300 text-lg">
                                    Create a wishlist
                                </Typography>
                            </Box>
                        )}
                    </IconDropDown>
                    <IconDropDown icon={Bag} className="ml-4">
                        {cartData.length ? (
                            cartData.map(({ id, products, ...data }) => (
                                <motion.div key={id}>
                                    <Menu.Item as={motion.div}>
                                        <CartComponent {...products} {...data} />
                                    </Menu.Item>
                                </motion.div>
                            ))
                        ) : (
                            <Box className="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full p-4">
                                <Typography as={motion.h5} className="text-gray-900">
                                    Your cart is empty!
                                </Typography>
                                <Typography className="text-sm mt-1">
                                    It's a good day to buy the items you saved for later!
                                </Typography>
                            </Box>
                        )}
                    </IconDropDown>
                    {isAuthenticated ? (
                        <>
                            <IconDropDown avatar className="ml-4">
                                <Box>
                                    <Menu.Item as={Box}>
                                        <Link to="/admin/add-product">Admin</Link>
                                    </Menu.Item>
                                </Box>
                                <Box>
                                    <Menu.Item as={Box}>
                                        <Link to="/admin/add-product">Orders</Link>
                                    </Menu.Item>
                                </Box>
                                <Box>
                                    <Menu.Item as={Box}>
                                        <Link to="/admin/add-product">Payments</Link>
                                    </Menu.Item>
                                </Box>
                                <Box>
                                    <Menu.Item as={Box}>
                                        <Button onClick={() => dispatch(logout(history))}>
                                            Logout
                                        </Button>
                                    </Menu.Item>
                                </Box>
                            </IconDropDown>
                        </>
                    ) : (
                        <Link to="/auth/login" type="primary" className="ml-4">
                            Join us
                        </Link>
                    )}
                </Box>
            </Box>
        </header>
    );
};

export default Navbar;
