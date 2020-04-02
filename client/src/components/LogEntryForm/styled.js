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
    margin-top: 15px;
  }
`;
export const DaysOfWorkWrapper = styled.div`
  display: flex;
`;
export const StyledDropdown = styled(Button)`
  && {
    color: rgba(0, 0, 0, 0.54);
    font-size: 16px;
    padding-left: 13px;
    margin: 8px 0;
    background: transparent;
    border: 1px solid #eee;
    display: flex;
    justify-content: flex-start;
    font-weight: 400;
    text-transform: inherit;
    border: 1px solid #c4c4c4;
    box-shadow: none;
    height: 40px;
    &:hover {
      border: 1px solid #212121;
      background: transparent;
      box-shadow: none;
    }
  }
`;
