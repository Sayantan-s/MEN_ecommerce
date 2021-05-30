import React, { useRef } from 'react'

const FileUpload = ({ value, onChange, ElementConfig, btnName }) => {
    const fileRef = useRef(null);
    const TriggerHanlder = eve =>{
        eve.preventDefault();
        fileRef.current.click();
    };
    return (
        <>
            <input
                ref={fileRef}
                type="file"
                className={`hidden`}
                {...ElementConfig}
                value={value}
                onChange={onChange}
            />
            <Button onClick={TriggerHanlder}>
                {btnName}
            </Button>
    </>
    )
}

export default FileUpload
