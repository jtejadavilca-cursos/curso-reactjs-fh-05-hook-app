import { useState } from "react";

export const useForm = (initialForm = {}) => {


    // {
    //     username: 'strider',
    //     email: 'strider@gmail.com',
    //     password: ''
    // }

    const [formState, setFormState] = useState(initialForm);

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        

        setFormState({
            ...formState,
            [name]: value
        });
    };

    const onResetForm = () => {
        setFormState( initialForm );
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    };
}
