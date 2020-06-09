import styled from 'styled-components';
import { ExpansionPanel } from '@material-ui/core';

export const StyledExpanderWrapper = styled(ExpansionPanel)`
  && {
    position: absolute;
    min-width: 153px;
    width: 175px;
    top: 11px;
    z-index: 107;
    left: 217px;
    top: 10px;
    border-radius: 4px;
    box-shadow: 0 0px 10px 2px rgba(0, 0, 0, 0.1);
    @media (max-width: 424px) {
      display: none;
    }
    @media (max-width: 600px) {
      left: unset;
      right: 11px;
      > div {
        padding: 0 8px;
        min-height: 30px;
      }
      .MuiExpansionPanelDetails-root {
        padding: 0;
      }
      .MuiExpansionPanelSummary-content {
        margin: 5px 0;
      }
    }
  }
`;
