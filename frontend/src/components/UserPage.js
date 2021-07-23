import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

function UserPage() {

  const [userList, setUserList] = useState([]);

  async function getUsers() {
    const users = await axios.get('http://localhost:8000/api-users/');
    setUserList(users.data);
  }

  useEffect( () => {
    getUsers();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>NAME</th>
            <th>HOMECOURSE</th>
            <th>HCP</th>
          </tr>
        </thead>
        <tbody>
          {userList.map(user => {
            return(
              <tr>
                <th>{user.id}</th>
                <th>{user.firstname + " " + user.surname}</th>
                <th>{user.homecourse}</th>
                <th>{user.hcp}</th>
                {/* <th><Button onClick={handleDelete} id={animal.id}>DELETE</Button></th> */}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default UserPage;


