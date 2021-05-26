import { Box, Select } from 'components';
import { motion } from 'framer-motion';
import React from 'react';
import { forwardRef } from 'react';

const FormField = (
    {
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
    },
    fileRef
) => {
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
            inputEle = <Select className="my-2" />;
            break;
        case 'file':
            inputEle = (
                <>
                    <input
                        ref={fileRef}
                        className={`${inputStyles} hidden`}
                        {...ElementConfig}
                        value={value}
                        onChange={onChange}
                    />
                </>
            );
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
                        {Icon && <Icon className="h-6 w-6 stroke-current text-gray-400" />}
                    </Box>
                </>
            )}
        </Box>
    );
};

export default forwardRef(FormField);
