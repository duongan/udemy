import { useReducer } from 'react';

const inputDefaultState = {
    value: '',
    isTouched: false,
};

const inputStateReducer = (state, action) => {
    if (action.type === 'INPUT') {
        return {
            value: action.value,
            isTouched: state.isTouched,
        };
    }
    if (action.type === 'BLUR') {
        return {
            isTouched: true,
            value: state.value,
        };
    }
    if (action.type === 'RESET') {
        return { ...inputDefaultState };
    }
    return inputDefaultState;
};

const useForm = (validateFn) => {
    const [inputState, dispatch] = useReducer(
        inputStateReducer,
        inputDefaultState
    );
    // const [valueInput, setValueInput] = useState('');
    // const [isTouched, setIsTouched] = useState(false);

    // const isValid = validateFn(valueInput);
    // const hasError = !isValid && isTouched;
    const isValid = validateFn(inputState.value);
    const hasError = !isValid && inputState.isTouched;

    const inputChangeHandler = (event) => {
        dispatch({ type: 'INPUT', value: event.target.value });
        // setValueInput(event.target.value);
    };

    const inputBlurHandler = (event) => {
        dispatch({ type: 'BLUR' });
        // setIsTouched(true);
    };

    const reset = () => {
        dispatch({ type: 'RESET' });
        // setValueInput('');
        // setIsTouched(false);
    };

    return {
        value: inputState.value,
        isValid,
        hasError,
        inputChangeHandler,
        inputBlurHandler,
        reset,
    };
};

export default useForm;
