import { motion } from "framer-motion";
import { Box } from '..'
const Page = ({ children,as,className, ...otherProps }) => {
    return (
        <Box 
            as={motion.section}
            className={`w-10/12 mx-auto min-h-screen ${className}`} 
            {...otherProps}
        >
            { children }
        </Box>
    )
}

Box.defaultProps = {
    as : motion.div
}

export default Page;