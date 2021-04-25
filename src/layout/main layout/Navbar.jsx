import { Disclosure } from '@headlessui/react'
import { LineLock } from 'assets/Icons'
import Logo from 'assets/Logo'
import Anchor from 'components/elements/Anchor.component'
import Button from 'components/elements/Button.component'
import Dropdown from 'components/elements/Dropdown.component'
import { motion } from 'framer-motion'
import React from 'react'
import { LockClosedIcon } from '@heroicons/react/outline'

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
            <Button
            type="primary"
            >
            <LineLock className="h-5 w-5 text-gray-50 stroke-current stroke-2 mr-1"/>
             <span>
               Admin
             </span>
            </Button>
          </div>
        </Disclosure>
      </header>
    )
}

export default Navbar
