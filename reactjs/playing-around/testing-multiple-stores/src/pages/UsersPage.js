import { useRef } from 'react';
import { connect } from 'react-redux';
import { contextB } from '../contexts';

const UsersPage = (props) => {
  const nameInputRef = useRef();
  const emailInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const { value: name } = nameInputRef.current;
    const { value: email } = emailInputRef.current;
    props.addUser({ name, email });
  };
  return (
    <>
      <ul>
        {props.users.map((user) => (
          <li key={user.email}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
      <form onSubmit={submitHandler}>
        <input id="user-name" type="text" ref={nameInputRef} />
        <input id="user-email" type="text" ref={emailInputRef} />
        <button type="submit">Add User</button>
      </form>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (user) => dispatch({ type: 'ADD_USER', payload: user }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps, null, {
  context: contextB,
})(UsersPage);
