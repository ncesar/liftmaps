import styled from 'styled-components';
import { Modal } from '@material-ui/core';

export const StyledLoginWrapper = styled.div``;
export const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const StyledFormWrapper = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-width: 300px;
  padding: 20px;
`;
export const StyledLabel = styled.h3`
  font-size: 1.5rem;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.87);
  margin-top: 0;
`;
