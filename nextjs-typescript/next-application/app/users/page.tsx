import React from "react";

interface User {

  id: number;
  title: string;
}

const usersPage = async () => {
const res = await fetch('https://jsonplaceholder.typicode.com/users/1/posts', { cache: 'no-store'} 
 
);
const users: User[] = await res.json();

  return (
    <>
    <h1>Users</h1>
    <h1>{new Date().toLocaleTimeString()}</h1>
    <ul>
      {users.map(user => <li key={user.id}>{user.title}</li> )}
    </ul>
    </>
  );
};
export default usersPage;
