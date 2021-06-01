import { Button } from 'components';
import React, { useRef } from 'react'

const FileUpload = ({ onChange, ElementConfig, btnName, button }) => {
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
                onChange={onChange}
            />
            <Button onClick={TriggerHanlder} type={button} className={'w-full'}>
                {btnName}
            </Button>
    </>
    )
}

export default FileUpload
