import React from 'react';
import { Typography, Box, Button, Link, Input } from 'components';
import { motion } from 'framer-motion';
import { useForm, useToggle } from 'hooks';
import { Authenticate_user } from 'store/actions/Auth.actions';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import EyeSlash from 'assets/icons/outline/EyeSlash';
import Eye from 'assets/icons/outline/Eye';

const Login = () => {
    const history = useHistory();

    const dispatch = useDispatch();

    const [toggle, handleToggle] = useToggle();

    const [{ email, password }, handleChange, onSubmitHandler] = useForm({
        email: '',
        password: ''
    });


    const onSubmit = (eve) => {
        onSubmitHandler(eve, (formdata) => {
            dispatch(
                Authenticate_user(
                    {
                        input_data: formdata,
                        url: '/auth/login'
                    },
                    history
                )
            );
        });
    };
    return (
        <>
            <Typography as={motion.h3} className="my-2 text-gray-900 ">
                Welcome back, <span className="text-gray-300">Sayantan</span>.
            </Typography>
            <Typography as={motion.p} className="max-w-lg mt-2 text-gray-400 flex items-center">
                Dont't have an account?&nbsp;&nbsp;
                <Link type="transparent" className="text-gray-900" to="/auth/register">
                    Signup
                </Link>
            </Typography>
            <Box as={motion.form} onSubmit={onSubmit} className="mt-6">
                <Input
                    type="text"
                    name="email"
                    placeholder="e.g. sssamanta789@gmail.com"
                    variant="normal"
                    value={email}
                    onChange={handleChange}
                    labelName="Email Address"
                />
                <Input
                    type={toggle ? 'text' : 'password'}
                    name="password"
                    placeholder="e.g. Enter password with characters..."
                    variant="normal"
                    icon={toggle ? EyeSlash : Eye}
                    after
                    handlebutton={handleToggle}
                    value={password}
                    onChange={handleChange}
                    labelName="Password"
                />
                <Button type="primary" className="w-full mt-12">
                    log in
                </Button>
            </Box>
            <Box className="flex items-center justify-center max-w-xs my-6 mx-auto">
                <span className="w-32 h-mini bg-gray-300" />
                <Box as={motion.span} className="text-center mx-2 ">
                    Or
                </Box>
                <span className="w-32 h-mini bg-gray-300" />
            </Box>
            <Button type="outline" className="w-2/3 mx-auto">
                <svg
                    className="w-5 h-5"
                    width={2443}
                    height={2500}
                    viewBox="0 0 256 262"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid">
                    <path
                        d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                        fill="#4285F4"
                    />
                    <path
                        d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                        fill="#34A853"
                    />
                    <path
                        d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                        fill="#FBBC05"
                    />
                    <path
                        d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                        fill="#EB4335"
                    />
                </svg>
                <span className="text-gray-500 normal-case text-normal ml-3">
                    Sign in with Google
                </span>
            </Button>
        </>
    );
};

export default Login;
