import { Disclosure } from '@headlessui/react'
import Logo from 'assets/Logo'
import { motion } from 'framer-motion'
import React from 'react'
import { Cart } from 'assets/Icons'
import { WishList } from 'assets/Icons'
import { Button, Dropdown, Link } from 'components'

const Navbar = () => {
    return (
      <header className="fixed w-full z-50 shadow-sm bg-gray-50" id="navbar">
        <Disclosure as={motion.nav} className="flex items-center justify-between w-10/12 mx-auto">
          <Logo />
          <div className="flex">
            <Link 
              className="mx-3 text-gray-400"
              activeClassName="text-gray-700"
              to="/">
                Home
            </Link>
            <Link 
              className="mx-3 text-gray-400"
              activeClassName="text-gray-700"
              to="/collections">
                Collections
            </Link>
            <Dropdown 
              btnclassName="text-gray-400"
              btnname="Categories"
              data={['Clothing', 'Accessories', 'Shoes']}
            />
          </div>
          <div className="flex">
            <Link
            to="/admin"
           className="bg-gray-900 text-gray-50 px-4 py-3 rounded-lg font-semibold uppercase flex text-md mx-2"
            >
                Admin
            </Link>
            <Button moreStyles="relative mx-2">
              <WishList className="w-7 h-7 text-gray-900 stroke-2"/>
              <div className="bg-red-400 rounded-full w-2 h-2 absolute top-1 -right-1"/>
            </Button>
            <Button moreStyles="relative mx-2">
              <Cart className="w-7 h-7 text-gray-900 stroke-2"/>
              <div className="bg-red-400 rounded-full w-2 h-2 absolute top-1 -right-1"/>
            </Button>
          </div>
        </Disclosure>
      </header>
    )
}

export default Navbar
