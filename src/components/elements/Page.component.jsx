import { motion } from "framer-motion";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Box } from '..'
const Page = ({ children,as,className, ...otherProps }) => {

    const [navHeight, setNavHeight] = useState(0);

    const pageRef = useRef(null);

    useEffect(() => {
        setNavHeight(document.getElementById('navbar').scrollHeight);
    },[])
    return (
        <Box 
            ref={pageRef}
            as={motion.section}
            className={`w-10/12 mx-auto min-h-screen ${className}`} 
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