import React, { useState } from 'react';
import './App.css';
import AddUser from './components/User/AddUser';
import UsersList from './components/User/UsersList';

function App() {
    const [usersList, setUsersList] = useState([]);

    const addUserHandler = (uName, uAge) => {
        setUsersList((prevUsersList) => {
            return [...prevUsersList, { name: uName, age: uAge, id: Math.random().toString() },];
        });
    };

    return (
        <>
            <AddUser onAddUser={addUserHandler} />
            <UsersList users={usersList} />
        </>
    );
}

export default App;
