import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {
    const [users, setUsers] = useState([]);

    const addUserHandler = (username, age) => {
        setUsers((prevUsers) => {
            return [
                ...prevUsers,
                { name: username, age, id: Math.random().toString() },
            ];
        });
    };
    return (
        <div>
            <AddUser onAddUser={addUserHandler} />
            <UserList users={users} />
        </div>
    );
}

export default App;
