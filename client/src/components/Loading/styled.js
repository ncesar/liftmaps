import styled from 'styled-components';

export const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 99;
  height: 100%;
  svg {
    width: 100px;
    height: 100px;
    margin: 20px;
    display: inline-block;
    circle {
      fill: #18436d;
    }
  }
`;
