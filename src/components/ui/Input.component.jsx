import { Box, Button } from 'components';
import { motion } from 'framer-motion';
import React from 'react';

const Input = ({
    as: Component = motion.input,
    icon: Icon,
    before,
    after,
    handlebutton,
    variant,
    labelName,
    styles,
    ...rest
}) => {
    if (before && after) throw new Error('Cannot have two icons!');

    const textArea = Component === motion.textarea || (Component === 'textarea' && 'resize-none');

    const colorState = variant === 'success' ? 'green' : variant === 'danger' ? 'red' : 'gray';

    const iconButtonHandle = (eve) => {
        eve.preventDefault();
        handlebutton();
    };

    return (
        <>
            <Box className={`w-full ${styles}`}>
                {labelName && (
                    <label className="text-gray-900 font-normal text-lg">{labelName}</label>
                )}
                <Box
                    className={`flex items-center w-full border-${colorState}-200 border-b-2 font-semibold focus-within:border-gray-300 mb-4 mt-2`}>
                    {before && (
                        <Button onClick={iconButtonHandle}>
                            <Icon className={`w-5 h-5 text-${colorState}-400 stroke-current`} />
                        </Button>
                    )}
                    <Component
                        {...rest}
                        className={`outline-none p-4 focus:outline-none w-full h-full bg-transparent ${textArea} placeholder-${colorState}-300`}
                    />
                    {after && (
                        <Button onClick={iconButtonHandle}>
                            <Icon className={`w-5 h-5 text-${colorState}-400 stroke-current`} />
                        </Button>
                    )}
                </Box>
            </Box>
            {variant === 'danger' && <Box className="bottom-0 left-0 text-red-500">I am error</Box>}
        </>
    );
};

Input.defaultProps = {
    variant: 'normal'
};

export default Input;
