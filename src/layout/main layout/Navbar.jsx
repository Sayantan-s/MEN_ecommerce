import { Disclosure } from '@headlessui/react'
import { LineLock } from 'assets/Icons'
import Logo from 'assets/Logo'
import Anchor from 'components/elements/Anchor.component'
import Dropdown from 'components/elements/Dropdown.component'
import { motion } from 'framer-motion'
import React from 'react'

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
          <div>
            <Anchor 
            className="ml-8 whitespace-nowrap inline-flex  px-4 py-2 rounded-lg shadow-sm font-medium text-white bg-gray-900 hover:bg-gray-700"
            to="/admin">
              <LineLock className="stroke-current mr-1" width={24}/>
              <span className="transform translate-y-0">
                Admin
              </span>
            </Anchor>
          </div>
        </Disclosure>
      </header>
    )
}

export default Navbar
