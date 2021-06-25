import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { Box } from '..';
const Page = ({ children, as, className, full, ...otherProps }) => {
    const { navHeightReducer } = useSelector((state) => state);

    return (
        <Box
            as={motion.section}
            className={`mt-[82px] ${full ? 'w-full' : 'w-10/12'} mx-auto min-h-screen h-auto ${
                className && className
            }`}
            {...otherProps}>
            {children}
        </Box>
    );
};

Page.defaultProps = {
    as: motion.div
};

export default Page;
