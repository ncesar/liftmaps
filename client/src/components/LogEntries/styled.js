import styled from 'styled-components';
import { List, ListItem } from '@material-ui/core';
import { Popup } from 'react-map-gl';

export const PopupContentWrapper = styled(Popup)`
  && {
    padding: 2px;
  }
`;
export const PopupWrapper = styled(List)`
  display: flex;
  flex-direction: column;
  padding: 10px;
  a {
    text-decoration: none;
  }
  @media (max-width: 600px) {
    max-width: 100%;
  }
`;
export const PopupListItem = styled(ListItem)`
  && {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 5px;
  }
`;
export const Title = styled.h3`
  font-size: 1.5rem;
  line-height: 0.7;
  font-weight: 500;
  color: #232222;
  margin: 0;
`;
export const Description = styled.h4`
  font-weight: 400;
  font-size: 1.1rem;
  color: rgb(108, 108, 108);
  margin: 0;
`;
export const Label = styled.p`
  font-weight: 500;
  font-size: 1.063rem;
  color: #232222;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 13px;
  }
`;
export const LabelType = styled.p`
  font-size: 14px;
  color: rgb(108, 108, 108);
  margin: 0;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
