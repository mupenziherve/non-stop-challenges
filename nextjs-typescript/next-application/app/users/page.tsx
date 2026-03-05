import React from "react";

interface User {

  id: number;
  name: string;
}

const usersPage = async () => {
const res = await fetch('https://jsonplaceholder.typicode.com/users/1/posts')
const users: User[] = await res.json();

  return (
    <>
    <h1>Users</h1>
    <ul>
      {users.map(user => user.id)}
    </ul>
    </>
  );
};
export default usersPage;
