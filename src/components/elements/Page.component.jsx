import { motion } from "framer-motion";
import { Box } from '..'
const Page = ({ children, as, className, full, ...otherProps }) => {
    return (
        <Box 
            as={motion.section}
            className={`${full ? 'w-full' : 'w-10/12'} mx-auto ${className} min-h-screen h-auto`}
            {...otherProps}
        >
            { children }
        </Box>
    )
}

Page.defaultProps = {
    as : motion.div
}

export default Page;