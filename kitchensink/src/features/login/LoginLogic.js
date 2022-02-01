import React from 'react';
import { useLogin } from './LoginContext';
import { LoginForm } from './LoginForm';

export const LoginLogic = ({ root }) => {
  const { user, login } = useLogin();

  // Blocking UI to login the user
  if (!user) {
    return <LoginForm login={login} />;
  }

  // Render the received component
  return React.createElement(root.component, root.props);
};
