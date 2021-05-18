import { Box } from 'components';
import { motion } from 'framer-motion';
import React from 'react';

const TextField = ({
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

    const styles = "w-full rounded-2xl p-4 border-2 border-gray-200 font-semibold focus:outline-none"

    switch (as) {
        case 'input':
            inputEle = <motion.input className={'w-full h-full'} {...ElementConfig} value={value} onChange={onChange} />;
            break;
        case 'textarea':
            inputEle = <motion.textarea className={'w-full h-full'} {...ElementConfig} value={value} onChange={onChange} />;
            break;
        default:
            inputEle = <motion.input className={'w-full h-full'} {...otherInpProps} value={value} onChange={onChange} />;
    }

    return (
       <Box className={`my-2 ${half ? 'w-1/2' : 'w-full'} ${className}`}>
            {labelName && <label className="text-gray-900 font-semibold text-lg">{labelName}</label>}
             <Box className={`flex items-center ${styles}`}>
                {inputEle}
                {Icon && <Icon className="h-5 w-5"/>}
            </Box>
       </Box>
    );
};

export default TextField;