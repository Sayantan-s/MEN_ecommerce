import { Box, FileUpload, Select } from 'components';
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
        tertiary = true,
        labelName,
        half,
        ...otherInpProps
    },
    fileRef
) => {
    let inputEle = null;

    const styles = 'w-full p-4 border-b-2 border-gray-200 font-semibold';

    const inputStyles = `w-full h-full focus:outline-none bg-transparent ${
        tertiary ? 'order-2' : 'order-1'
    }`;

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
            inputEle = (
                <Select className="my-2" {...otherInpProps} value={value} onChange={onChange} />
            );
            break;
        case 'file':
            inputEle = (
                <FileUpload
                    onChange={onChange}
                    ElementConfig={ElementConfig}
                    icon={Icon}
                    {...otherInpProps}
                />
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
            {as === 'dropdown' || as === 'select' || as === 'file' ? (
                inputEle
            ) : (
                <>
                    <Box className={`flex items-center mt-2 ${styles}`}>
                        {inputEle}
                        {Icon && (
                            <Icon
                                className={`h-6 w-6 stroke-current text-gray-400 ${
                                    tertiary ? 'order-1 ml-3' : 'order-2 mr-3'
                                }`}
                            />
                        )}
                    </Box>
                </>
            )}
        </Box>
    );
};

export default forwardRef(FormField);
