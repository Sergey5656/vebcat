import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const AuthenticationButton = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return isAuthenticated ? (
    <button onClick={() => logout({ returnTo: window.location.origin })}>
      Выйти
    </button>
  ) : (
    <button onClick={loginWithRedirect}>Войти</button>
  );
};

export default AuthenticationButton;
