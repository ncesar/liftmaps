import styled from 'styled-components';
import { Modal, Paper } from '@material-ui/core';

export const StyledDonateWrapper = styled(Paper)`
  && {
    padding: 30px;
    background: #fff;
    max-width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 2px;
    position: relative;
    text-align: center;
    .underline {
      text-decoration: underline;
      font-weight: 500;
    }
    p {
      color: #828282;
    }
    @media (max-width: 500px) {
      padding: 5px;
      max-width: 300px;
      h3 {
        margin-top: 25px;
      }
    }
  }
`;
export const StyledModal = styled(Modal)`
  && {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const StyledCloseWrapper = styled.div`
  position: absolute;
  right: 5px;
  top: 2px;
  cursor: pointer;
  padding: 5px;
`;
export const StyledHeader = styled.h3`
  font-weight: 400;
  margin-bottom: 0;
  margin-top: 10px;
`;
