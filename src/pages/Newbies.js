import { Input, Page } from 'components';
import { motion } from 'framer-motion';
import React from 'react';

const Newbies = () => {
    return (
        <Page>
            <span>NewBie</span>
            <Input type="text" placeholder="Hello" />
            <Input as={motion.textarea} placeholder="Hello" />
        </Page>
    );
};

export default Newbies;
