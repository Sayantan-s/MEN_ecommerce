import { Box, Select } from 'components';
import { motion } from 'framer-motion';
import React from 'react';

const FormField = ({
    as,
    ElementConfig,
    value,
    onChange,
    children,
    className,
    icon: Icon,
    labelName,
    half,
    ...otherInpProps
}) => {
    let inputEle = null;

    const styles = 'w-full rounded-2xl p-4 border-2 border-gray-200 font-semibold';

    const inputStyles = 'w-full h-full focus:outline-none bg-transparent';

    switch (as) {
        case 'input':
            inputEle = (
                <motion.input
                    className={`${inputStyles}`}
                    {...ElementConfig}
                    value={value}
                    onChange={onChange}
                />
            );
            break;
        case 'textarea':
            inputEle = (
                <motion.textarea
                    className={`${inputStyles} resize-none`}
                    {...ElementConfig}
                    value={value}
                    onChange={onChange}
                />
            );
            break;
        case 'select':
            inputEle = <Select classname="my-2" />;
            break;
        default:
            inputEle = (
                <motion.input
                    className={`${inputStyles}`}
                    {...otherInpProps}
                    value={value}
                    onChange={onChange}
                />
            );
    }

    return (
        <Box className={`my-2 ${half ? 'w-1/2' : 'w-full'} ${className}`}>
            {labelName && <label className="text-gray-900 font-normal text-lg">{labelName}</label>}
            {as === 'dropdown' || as === 'select' ? (
                inputEle
            ) : (
                <>
                    <Box className={`flex items-center mt-2 ${styles}`}>
                        {inputEle}
                        {Icon && <Icon className="h-5 w-5" />}
                    </Box>
                </>
            )}
        </Box>
    );
};

export default FormField;
