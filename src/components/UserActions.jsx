import React from 'react';
import UserDetailsButton from './UserDetailsButton';

const UserActions = ({ user }) => {
  return (
    <div>
      {user.userId ? <UserDetailsButton user={user} /> : 'Login / Register'}
    </div>
  );
};

export default UserActions;
