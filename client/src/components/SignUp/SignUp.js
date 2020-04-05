import React, { useState, useCallback } from 'react';
import { withRouter } from 'react-router';
import app from '../../auth/base';
import {
  Button,
  Backdrop,
  Fade,
  Paper,
  Avatar,
  TextField,
  FormHelperText,
} from '@material-ui/core';
import { UserPlus as User } from '@styled-icons/boxicons-solid/UserPlus';
import ReCAPTCHA from 'react-google-recaptcha';
import {
  StyledLoginWrapper,
  StyledModal,
  StyledFormWrapper,
  StyledLabel,
} from './styled.js';

const SignUp = React.memo(({ history }) => {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  const [recaptcha, setRecaptcha] = useState(true);

  const handleSignUp = useCallback(async (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      // history.push('/');
    } catch (error) {
      // alert(error);
      setError(true);
    }
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <StyledLoginWrapper>
      <Button color="inherit" size="small" onClick={handleOpen}>
        Cadastrar
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
            <StyledFormWrapper onSubmit={handleSignUp}>
              <Avatar style={{ backgroundColor: '#2196f3' }}>
                <User className="icon" />
              </Avatar>
              <StyledLabel>Cadastrar</StyledLabel>
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
                  Houve um erro no cadastramento. Informe ao responsável do site
                </FormHelperText>
              )}
              <ReCAPTCHA
                sitekey="6LcYy-YUAAAAAMPb92I3opCflZeiyEthEe4gV_fi"
                onChange={() => setRecaptcha(true)}
              />
              <Button
                disabled={recaptcha}
                variant="contained"
                color="primary"
                type="submit"
                margin="dense"
                style={{ width: '70%', marginTop: '9px' }}
              >
                Fazer cadastro
              </Button>
            </StyledFormWrapper>
          </Paper>
        </Fade>
      </StyledModal>
    </StyledLoginWrapper>
  );
});

export default withRouter(SignUp);
