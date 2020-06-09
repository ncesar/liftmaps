import styled from 'styled-components';
import { Paper, Modal } from '@material-ui/core';

export const StyledSobreWrapper = styled.div`
  position: absolute;
  left: 97px;
  bottom: 2px;
  display: inline-flex;
  align-items: center;
  a {
    color: #fff;
    display: flex;
    margin-left: 5px;
  }
  @media (max-width: 768px) {
    bottom: 80px;
    left: 5px;
  }
`;
export const StyledContentWrapper = styled.div``;
export const StyledModal = styled(Modal)`
  && {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
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
    p,
    a {
      color: #828282;
    }
    @media (max-width: 500px) {
      padding: 5px;
      max-width: 300px;
      p,
      span {
        font-size: 13px;
      }
    }
  }
`;
export const StyledCloseWrapper = styled.div`
  position: absolute;
  right: 5px;
  top: 2px;
  cursor: pointer;
  padding: 5px;
`;
export const StyledDonationOptionsWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  color: #828282;
  margin-bottom: 5px;
  img {
    margin-right: 3px;
  }
  a {
    color: #828282;
    display: flex;
    align-items: center;
  }
`;
export const StyledHeader = styled.h3`
  font-weight: 400;
  margin-bottom: 0;
  margin-top: 10px;
`;
