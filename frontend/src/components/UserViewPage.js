import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserViewPage(props) {

    const [user, setUser] = useState(null);

    const userID = props.match.params.id;

    // async function fetchUser() {
    //     const user = await axios.get('http://localhost:8000/api-users/').then(res => {
    //         console.log("############", res);
    //         res.data.filter(u => {
    //             u.id === this.userID
    //         });
    //     });
    //     console.log(user)
    //     setUser(user.data);
    // }

    // useEffect( () => {
    //     fetchUser();
    // }, []);

    return (
        <div>
            <p>Dette er user view page. {userID}</p>
        </div>
    );
}

export default UserViewPage;