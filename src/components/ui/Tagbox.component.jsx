import Close from 'assets/icons/outline/Close'
import { Box, Button, Input, Typography } from 'components'
import { motion } from 'framer-motion'
import React from 'react'

const Tagbox = ({ value, onChange, tags = [], onAddtag, onDeleteTag }) => {

    return (
      <Box className="flex items-center">
            <Box className="w-full">
                <Box className="w-full flex">
                    {
                        tags.map((tag,id) => (
                            <Tags tagname={tag} className={id !== 0 && "ml-2"} onDelete={onDeleteTag}/>
                        ))
                    }
                </Box>
                <Input type="text" placeholder="e.g. jordan" value={value} onChange={onChange}/>
            </Box>
           <Button type="primary" className="ml-4 whitespace-nowrap" onClick={onAddtag}>
               Add tag
           </Button>
      </Box>
    )
}

export default Tagbox


export const Tags = ({ tagname, className, onDelete }) => {
    return(
        <Box as={motion.span} className={"bg-gray-200 p-2 rounded-md text-gray-900 flex items-center w-max" + " " + className}>
            <span>
            #{tagname}
            </span>
            <Button className="flex items-center" onClick={onDelete}>
                <Close className="w-5 h-5 text-gray-900 stroke-current"/>
            </Button>
        </Box>
    )
}