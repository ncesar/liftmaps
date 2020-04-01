import styled from 'styled-components';

export const PopupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  a {
    text-decoration: none;
  }
`;
export const Title = styled.h3`
  font-size: 1.5rem;
  line-height: 0.7;
  font-weight: bold;
  color: #232222;
  margin: 0;
`;
export const Description = styled.h4`
  font-weight: bold;
  font-size: 1.1rem;
  color: rgb(108, 108, 108);
  margin: 0;
`;
export const Label = styled.p`
  font-weight: bold;
  font-size: 1.063rem;
  color: #232222;
  margin: 0;
`;
export const LabelType = styled.p`
  font-size: 14px;
  color: rgb(108, 108, 108);
  margin-bottom: 0;
`;
export const FavoritesWrapper = styled.div`
  display: inline-flex;
`;
