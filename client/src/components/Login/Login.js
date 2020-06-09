import React, { useState, useCallback, useContext } from 'react';
import { Redirect } from 'react-router';
import app from '../../auth/base.js';
import { AuthContext } from '../../auth/Auth.js';
import {
  Button,
  Backdrop,
  Fade,
  Paper,
  Avatar,
  TextField,
  FormHelperText,
} from '@material-ui/core';
import { LogIn } from '@styled-icons/boxicons-solid/LogIn';
import ReCAPTCHA from 'react-google-recaptcha';
import {
  StyledLoginWrapper,
  StyledModal,
  StyledFormWrapper,
  StyledLabel,
} from './styled.js';

const Login = React.memo(() => {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  const [recaptcha, setRecaptcha] = useState(true);

  const handleLogin = useCallback(async (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app.auth().signInWithEmailAndPassword(email.value, password.value);
      // history.push('/');
    } catch (error) {
      // alert(error);
      setError(true);
    }
  }, []);

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const onChange = () => {
    setRecaptcha(false);
  };
  return (
    <StyledLoginWrapper>
      <Button color="inherit" size="small" onClick={handleOpen}>
        Logar
      </Button>
      <StyledModal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Paper elevation={2}>
            <StyledFormWrapper onSubmit={handleLogin}>
              <Avatar style={{ backgroundColor: '#2196f3' }}>
                <LogIn className="icon" />
              </Avatar>
              <StyledLabel>Logar</StyledLabel>
              <TextField
                label="E-mail"
                variant="outlined"
                name="email"
                type="email"
                placeholder="seunome@email.com"
                required
                margin="dense"
              />
              <TextField
                label="Senha"
                variant="outlined"
                name="password"
                type="password"
                required
                margin="dense"
              />
              {error && (
                <FormHelperText style={{ color: 'red' }}>
                  O login ou senha informado é incorreto.
                </FormHelperText>
              )}
              <ReCAPTCHA
                sitekey="6LcYy-YUAAAAAMPb92I3opCflZeiyEthEe4gV_fi"
                onChange={onChange}
              />
              <Button
                disabled={recaptcha}
                variant="contained"
                color="primary"
                type="submit"
                margin="dense"
                style={{ width: '70%', marginTop: '9px' }}
              >
                Logar
              </Button>
            </StyledFormWrapper>
          </Paper>
        </Fade>
      </StyledModal>
    </StyledLoginWrapper>
  );
});

export default React.memo(Login);
