import styled from 'styled-components';
import Alert from '@material-ui/lab/Alert';

export const StyledAlertWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  margin: 10px;
  z-index: 100;
  @media (max-width: 1000px) {
    top: 51px;
  }
`;
export const StyledAlert = styled(Alert)`
  @media (max-width: 768px) {
    padding: 5px;
  }
`;
