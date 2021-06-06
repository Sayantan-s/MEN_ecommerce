import { Button } from 'components';
import React, { useRef } from 'react';

const FileUpload = ({ onChange, ElementConfig, btnName, button, className, ...otherProps }) => {
    const fileRef = useRef(null);

    const TriggerHanlder = (eve) => {
        eve.preventDefault();
        fileRef.current.click();
    };
    const onChangeHandler = (eve, cb) => {
        const file = eve.target.files[0];
        return cb(file);
    }
    return (
        <>
            <input
                ref={fileRef}
                type="file"
                className={`hidden`}
                {...ElementConfig}
                onChange={eve => onChangeHandler(eve,onChange())}
            />
            <Button onClick={TriggerHanlder} type={button} className={'w-full'} {...otherProps}>
                {btnName}
            </Button>
        </>
    );
};

export default FileUpload;
