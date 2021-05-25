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
            const { name, value } = eve.target;
            return setForm(prevState => ({
                ...prevState,
                [name] : { ...prevState[name],value }
            }))
        }

        const onSubmitHandler = eve => {
            eve.preventDefault();
            let data = {};
            const formData = new FormData(eve.target);
            for(let [key, value] of formData.entries()){
                data = {
                    ...data,
                    [key] : value
                }
            }
            console.log(data);
        }

        return [ formArray, onChangeHandler, onSubmitHandler ]
    }

    onChangeHandler = eve => setForm(eve.target.value);
    
    return [ form, onChangeHandler ];
}

export default useForm