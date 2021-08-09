import { useState } from "react";

const useFileUpload = ({
    limit
}) => {

    const [fileInputs, setFiles] = useState([]);

    const [error, setError] = useState(false);

    const onRead = file => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => setFiles(prevState => ([
            ...prevState,
            reader.result
        ]))
    }

    const handleFiles = eve => {
        const { multiple } = eve.target;
        const files = Object.values(eve.target.files);
        if(multiple){
            if(files.length !== limit) return setError(true)
            files.forEach(file => onRead(file))
        }
        else onRead(files[0])
    }

    return [ fileInputs, handleFiles, error ]
}

export default useFileUpload;