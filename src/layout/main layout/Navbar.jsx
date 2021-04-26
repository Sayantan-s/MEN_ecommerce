import { Disclosure } from '@headlessui/react'
import { LineLock } from 'assets/Icons'
import Logo from 'assets/Logo'
import Anchor from 'components/elements/Anchor.component'
import Button from 'components/elements/Button.component'
import Dropdown from 'components/elements/Dropdown.component'
import { motion } from 'framer-motion'
import React from 'react'
import { LockClosedIcon } from '@heroicons/react/outline'
import { Cart } from 'assets/Icons'
import { WishList } from 'assets/Icons'

const Navbar = () => {
    return (
      <header>
        <Disclosure as={motion.nav} className="flex items-center justify-between w-10/12 mx-auto">
          <Logo />
          <div className="flex">
            <Anchor 
            className="mx-2"
            to="/">
              Home
            </Anchor>
            <Anchor 
            className="mx-2"
            to="/collections">
              Collections
            </Anchor>
            <Dropdown 
            btnname="Categories"
            data={['Clothing', 'Accessories', 'Shoes']}/>
          </div>
          <div className="flex">
            <Anchor
            to="/admin"
           className="bg-gray-900 text-gray-50 px-4 py-3 rounded-lg font-semibold uppercase flex text-md"
            >
                Admin
            </Anchor>
            <Button moreStyles="relative">
              <WishList className="w-7 h-7 text-gray-900 stroke-2"/>
              <div className="bg-red-400 rounded-full w-2 h-2 absolute top-1 -right-1"/>
            </Button>
            <Button moreStyles="relative">
              <Cart className="w-7 h-7 text-gray-900 stroke-2"/>
              <div className="bg-red-400 rounded-full w-2 h-2 absolute top-1 -right-1"/>
            </Button>
          </div>
        </Disclosure>
      </header>
    )
}

export default Navbar
