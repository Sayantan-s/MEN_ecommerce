import React from 'react'
import { Page,Typography, Box, TextField, Button } from 'components'
import { motion } from 'framer-motion'
import { useForm } from 'hooks'
import { AtSymbolIcon, EyeIcon, UserCircleIcon, UserIcon } from '@heroicons/react/outline'

const Register = () => {
    const [form, onChangeHandler] = useForm({
        name : {
            as : 'input',
            ElementConfig : {
                type : 'text',
                placeholder : 'e.g. Jacob Doe',
            },
            value : '',
            icon : UserCircleIcon,
            labelName :'Full Name'
        },
        username : {
            as : 'input',
            ElementConfig : {
                type : 'text',
                placeholder : 'e.g. JakeDoe67',
            },
            value : '',
            icon : UserIcon,
            labelName :'Username'
        },
        email : {
            as : 'input',
            ElementConfig : {
                type : 'email',
                placeholder : 'e.g. sssamanta789@gmail.com'
            },
            value : '',
            icon : AtSymbolIcon,
            labelName :'Email Address'
        },
        password : {
            as : 'input',
            ElementConfig : {
                type : 'password',
                placeholder : 'e.g. Enter password with characters...'
            },
            value : '',
            icon : EyeIcon,
            labelName :'Password'
        },
        confirmPassword : {
            as : 'input',
            ElementConfig : {
                type : 'password',
                placeholder : 'e.g. 6 - 7 characters atleast...'
            },
            value : '',
            icon : EyeIcon,
            labelName :'Confirm password'
        }
    })

    return (
       <Page className="flex min-h-screen items-baseline">
            <Box className="w-1/2">
                    <Typography as={motion.h1} className="font-extrabold text-gray-900">
                        If you can dream it,
                        <br />
                        You can do it.
                    </Typography>
                    <Typography as={motion.h6} className="mt-12 font-bold text-gray-900">
                        YOUR ACCOUNT FOR EVERYTHING NIKE
                    </Typography>
                    <Typography as={motion.p} className="max-w-sm my-2 text-gray-400">
                    A new initiative by Nike to feature and celebrate all of its products in one place. 
                    </Typography>
            </Box>
            <Box className="w-1/2 mt-24 transform translate-y-16">
                <Typography as={motion.h2} className="my-2 text-gray-900">
                    Join us now.
                </Typography>
                <Typography as={motion.p} className="max-w-lg my-2 text-gray-400 font-semibold">
                    You’ve got a split second to decide, ‘is it good for me to keep this or...
                </Typography>
                <Box className="flex w-full mt-6">
                    <Button type="primary">
                        Sign up with Google
                    </Button>
                </Box>
                <Box 
                    as={motion.form} 
                    className="mt-8">
                        {
                            form.map(({ key, data },id) => (
                                <TextField
                                        key={key}
                                        half={key !== "name" ? true : false}
                                        className={`float-left ${id !== 0 && id % 2 === 0 ? 'pl-4' : ''}`}
                                        {...data}
                                        onChange={onChangeHandler}
                                    />
                            ))
                        }
                    <Button
                        type="primary"
                        className="w-full transform translate-y-6"
                    >
                        Sign in
                    </Button>
                </Box>
            </Box>
       </Page>
    )
}

export default Register


/*    ${key === 'name' ? 'w-1/2 mr-2 float-left'
                                    : key === 'username' ? 'w-1/2 ml-2'
                                    : ''}*/
//${id !== 0 && id % 2 === 0 ? 'float-left' : ''}