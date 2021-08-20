import React from 'react';

const UserList = ({users}) => {
    console.log(users)
    return(
        <div>
            <div class="card">
                <div class="card-body">
                    This is some text within a card body.
                </div>
            </div>
            {users.map(user => {
                return(<div key={user.id}>
                    {user.name}
                </div>);
            })}
        </div>
    );
};

export default UserList;
