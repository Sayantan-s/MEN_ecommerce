import { useState } from 'react';

const useForm = (formState) => {
    const [form, setForm] = useState(formState);
    let onChangeHandler;
    if (typeof form === 'object') {
        onChangeHandler = (eve) => {
            const { name, value } = eve.target;
            return setForm((prevState) => ({
                ...prevState,
                [name]: value
            }));
        };

        const onSubmitHandler = async (eve, callback) => {
            eve.preventDefault();
            callback(form);
        };

        return [form, onChangeHandler, onSubmitHandler];
    }

    onChangeHandler = (eve) => setForm(eve.target.value);

    return [form, setForm, onChangeHandler];
};

export default useForm;
