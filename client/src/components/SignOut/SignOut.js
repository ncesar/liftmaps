import React from 'react';
import app from '../../auth/base';
import { Button } from '@material-ui/core';

const SignOut = () => (
  <Button
    color="inherit"
    variant="outlined"
    size="small"
    onClick={() => app.auth().signOut()}
  >
    Deslogar
  </Button>
);

export default React.memo(SignOut);
