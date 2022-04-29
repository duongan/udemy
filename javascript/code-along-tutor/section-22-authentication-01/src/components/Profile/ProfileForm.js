import { useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../store/auth-context';

import classes from './ProfileForm.module.css';

const ProfileForm = () => {
    const history = useHistory();
    const authCtx = useContext(AuthContext);

    const newPasswordInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredNewPassword = newPasswordInputRef.current.value;

        // optional: add validation

        fetch(
            'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCT2ziLjhvBVHV_ne8Z4ae3ATxVWD7EKAU',
            {
                method: 'POST',
                body: JSON.stringify({
                    idToken: authCtx.token,
                    password: enteredNewPassword,
                    returnSecureToken: false,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        ).then((res) => {
            // assumption: always succeeds!

            history.replace('/');
        });
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor="new-password">New Password</label>
                <input
                    type="password"
                    id="new-password"
                    minLength="7"
                    ref={newPasswordInputRef}
                />
            </div>
            <div className={classes.action}>
                <button>Change Password</button>
            </div>
        </form>
    );
};

export default ProfileForm;
