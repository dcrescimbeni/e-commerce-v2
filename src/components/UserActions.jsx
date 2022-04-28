import React from 'react';
import LoginRegister from './LoginRegister';
import UserDetailsButton from './UserDetailsButton';

const UserActions = ({ user }) => {
  return (
    <div>
      {user.userId ? <UserDetailsButton user={user} /> : <LoginRegister />}
    </div>
  );
};

export default UserActions;
