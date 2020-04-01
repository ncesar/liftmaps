import styled from 'styled-components';
import { Button } from '@material-ui/core';

export const LogEntryFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  #demo-simple-select-outlined-label {
    background: white;
  }
`;
export const StyledButton = styled(Button)`
  && {
    margin-top: 8px;
  }
`;
export const DaysOfWorkWrapper = styled.div`
  display: flex;
`;
