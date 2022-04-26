import useForm from '../hooks/use-form';

const BasicForm = (props) => {
    const {
        value: firstNameInputValue,
        isValid: firstNameInputIsValid,
        hasError: firstNameInputHasError,
        inputChangeHandler: firstNameInputChangeHandler,
        inputBlurHandler: firstNameInputBlurHandler,
        reset: resetFirstNameInput,
    } = useForm((value) => value.trim() !== '');

    const {
        value: lastNameInputValue,
        isValid: lastNameInputIsValid,
        hasError: lastNameInputHasError,
        inputChangeHandler: lastNameInputChangeHandler,
        inputBlurHandler: lastNameInputBlurHandler,
        reset: resetLastNameInput,
    } = useForm((value) => value.trim() !== '');

    const {
        value: emailInputValue,
        isValid: emailInputIsValid,
        hasError: emailInputHasError,
        inputChangeHandler: emailInputChangeHandler,
        inputBlurHandler: emailInputBlurHandler,
        reset: resetEmailInput,
    } = useForm((value) => value.includes('@'));

    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log({
            firstName: firstNameInputValue,
            lastName: lastNameInputValue,
            email: emailInputValue,
        });

        resetFirstNameInput();
        resetLastNameInput();
        resetEmailInput();
    };

    let formIsInvalid = firstNameInputHasError || !firstNameInputIsValid;
    formIsInvalid =
        formIsInvalid || lastNameInputHasError || !lastNameInputIsValid;
    formIsInvalid = formIsInvalid || emailInputHasError || !emailInputIsValid;

    const firtNameInputClasses = firstNameInputHasError
        ? 'form-control invalid'
        : 'form-control';

    const lastNameInputClasses = lastNameInputHasError
        ? 'form-control invalid'
        : 'form-control';

    const emailInputClasses = emailInputHasError
        ? 'form-control invalid'
        : 'form-control';

    return (
        <form onSubmit={onSubmitHandler}>
            <div className="control-group">
                <div className={firtNameInputClasses}>
                    <label htmlFor="name">First Name</label>
                    <input
                        type="text"
                        id="name"
                        onChange={firstNameInputChangeHandler}
                        onBlur={firstNameInputBlurHandler}
                        value={firstNameInputValue}
                    />
                    {firstNameInputHasError && (
                        <p className="error-text">
                            First Name must not be empty.
                        </p>
                    )}
                </div>
                <div className={lastNameInputClasses}>
                    <label htmlFor="name">Last Name</label>
                    <input
                        type="text"
                        id="name"
                        onChange={lastNameInputChangeHandler}
                        onBlur={lastNameInputBlurHandler}
                        value={lastNameInputValue}
                    />
                    {lastNameInputHasError && (
                        <p className="error-text">
                            Last Name must not be empty.
                        </p>
                    )}
                </div>
            </div>
            <div className={emailInputClasses}>
                <label htmlFor="name">E-Mail Address</label>
                <input
                    type="text"
                    id="name"
                    onChange={emailInputChangeHandler}
                    onBlur={emailInputBlurHandler}
                    value={emailInputValue}
                />
                {emailInputHasError && (
                    <p className="error-text">Please enter a valid email.</p>
                )}
            </div>
            <div className="form-actions">
                <button disabled={formIsInvalid}>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;
