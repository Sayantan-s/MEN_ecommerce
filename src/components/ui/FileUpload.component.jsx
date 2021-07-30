import { Button } from 'components';
import React, { useRef } from 'react';

const FileUpload = ({ onChange, ElementConfig, btnName, className, ...otherProps }) => {
    const fileRef = useRef(null);

    const TriggerHanlder = (eve) => {
        eve.preventDefault();
        fileRef.current.click();
    };
    const onChangeHandler = (eve, cb) => {
        const file = eve.target.files[0];
        return cb(file);
    };
    return (
        <>
            <input
                ref={fileRef}
                type="file"
                className={`hidden`}
                {...ElementConfig}
                onChange={(eve) => onChangeHandler(eve, onChange())}
            />
            <Button onClick={TriggerHanlder} className={className} {...otherProps}>
                {btnName}
            </Button>
        </>
    );
};

export default FileUpload;
