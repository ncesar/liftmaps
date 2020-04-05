import styled from 'styled-components';
import { ExpansionPanel } from '@material-ui/core';

export const StyledExpanderWrapper = styled(ExpansionPanel)`
  && {
    position: absolute;
    min-width: 240px;
    left: 9px;
    top: 270px;
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    @media (max-width: 600px) {
      bottom: 36px;
      top: unset;
    }
  }
`;
