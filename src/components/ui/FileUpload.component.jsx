import { Button } from 'components';
import React, { useRef } from 'react';

const FileUpload = ({ type, ElementConfig, btnName, className, ...otherProps }) => {
    const fileRef = useRef(null);

    const TriggerHanlder = (eve) => {
        eve.preventDefault();
        fileRef.current.click();
    };
    return (
        <>
            <input ref={fileRef} type="file" className={`hidden`} {...otherProps} />
            <Button onClick={TriggerHanlder} className={className} type={type}>
                {btnName}
            </Button>
        </>
    );
};

export default FileUpload;
