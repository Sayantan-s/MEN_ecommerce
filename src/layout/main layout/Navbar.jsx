import { Disclosure } from '@headlessui/react'
import Logo from 'assets/Logo'
import { motion } from 'framer-motion'
import React from 'react'
import { Cart } from 'assets/Icons'
import { WishList } from 'assets/Icons'
import { Box, Button, Dropdown, Link } from 'components'
import { useSelector } from 'react-redux'


const Navbar = () => {

  const { isAuthenticated } =  useSelector(state => state.AuthReducer);

  console.log(isAuthenticated)

    return (
      <header className="w-full bg-gray-50">
        <Disclosure as={motion.nav} className="flex items-center justify-between w-10/12 mx-auto">
          <Logo />
          <div className="flex ml-20">
            <Link 
              className="mx-3 text-gray-400"
              activeClassName="text-gray-700"
              to="/">
                Home
            </Link>
            <Link 
              className="mx-3 text-gray-400"
              activeClassName="text-gray-700"
              to="/shop">
                Shop
            </Link>
            <Link 
              className="mx-3 text-gray-400"
              activeClassName="text-gray-700"
              to="/collectives">
                Collectives
            </Link>
            <Dropdown 
              btnclassName="text-gray-400"
              btnname="Categories"
              data={['Clothing', 'Accessories', 'Shoes']}
            />
          </div>
          <Box className="flex">
            <Button moreStyles="relative mx-2">
              <WishList className="w-7 h-7 text-gray-900 stroke-2"/>
              <div className="bg-red-400 rounded-full w-2 h-2 absolute top-1 -right-1"/>
            </Button>
            <Button moreStyles="relative mx-2">
              <Cart className="w-7 h-7 text-gray-900 stroke-2"/>
              <div className="bg-red-400 rounded-full w-2 h-2 absolute top-1 -right-1"/>
            </Button>
            <Link
            to="/admin"
           className="bg-gray-900 text-gray-50 px-4 py-3 rounded-lg font-semibold uppercase flex text-md mx-2"
            >
                Admin
            </Link>
            <Button
            type="primary"
            >
                Logout
            </Button>
          </Box>
        </Disclosure>
      </header>
    )
}

export default Navbar
