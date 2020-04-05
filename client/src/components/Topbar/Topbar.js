import React from 'react';
import { ErrorCircle as ErrorIcon } from '@styled-icons/boxicons-solid/ErrorCircle';
import Alert from '@material-ui/lab/Alert';
import { StyledAlertWrapper, StyledAlert } from './styled';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import SignOut from '../SignOut/SignOut';

export const Topbar = React.memo(({ currentUser, isNotLogged }) => {
  const alertStyle = {
    color: isNotLogged && '#fff',
    fontWeight: isNotLogged && 'bold',
    backgroundColor: isNotLogged && '#f44336',
  };
  return (
    <StyledAlertWrapper>
      {currentUser ? (
        <StyledAlert severity="success" action={<SignOut />}>
          Olá, {currentUser.email}. Clique duas vezes em qualquer lugar do mapa
          para adicionar um local.
        </StyledAlert>
      ) : (
        <Alert
          severity="info"
          style={alertStyle}
          icon={
            <ErrorIcon
              className="icon"
              style={{ fill: isNotLogged && '#fff' }}
            />
          }
          action={
            <>
              <Login />
              <SignUp />
            </>
          }
        >
          Para adicionar itens no mapa você precisa estar logado!
        </Alert>
      )}
    </StyledAlertWrapper>
  );
});
