import { useState } from 'react';

const useForm = (validateFn) => {
    const [valueInput, setValueInput] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const isValid = validateFn(valueInput);
    const hasError = !isValid && isTouched;

    const inputChangeHandler = (event) => {
        setValueInput(event.target.value);
    };

    const inputBlurHandler = (event) => {
        setIsTouched(true);
    };

    const reset = () => {
        setValueInput('');
        setIsTouched(false);
    };

    return {
        value: valueInput,
        isValid,
        hasError,
        inputChangeHandler,
        inputBlurHandler,
        reset,
    };
};

export default useForm;
