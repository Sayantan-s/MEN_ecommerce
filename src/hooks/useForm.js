import { useState } from "react"

const useForm = (formState) => {
    const [form, setForm] = useState(formState);
    let onChangeHandler;
    if(typeof form === 'object'){
        let formArray = [];
        for(let i in form){
            formArray.push({
                key : i,
                data : {
                    ...form[i],
                    ElementConfig : {
                        ...form[i].ElementConfig,
                        name : i
                    }
                }
            })
        }
        onChangeHandler = eve => {
            const { name, value, type } = eve.target;
            return setForm(prevState => ({
                ...prevState,
                [name] : { ...prevState[name],value }
            }))
        }
        return [ formArray, onChangeHandler ]
    }

    onChangeHandler = eve => setForm(eve.target.value);
    
    return [ form, onChangeHandler ];
}

export default useForm