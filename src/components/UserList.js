import React from 'react';
import Home from './Home';

const UserLIst = (props)=>{

        const users = props.users;
        const listItems = users.map((user) =>
          // Correct! Key should be specified inside the array.
          <Home key={user.id} />
      
        );
        return (
          <ul>
            {listItems}
          </ul>
        );
      }


export default UserLIst;