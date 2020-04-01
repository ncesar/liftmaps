import styled from 'styled-components';
import { GeolocateControl } from 'react-map-gl';

export const StyledGeolocateControl = styled(GeolocateControl)`
  display: inline-flex;
  width: auto;
  position: absolute;
  right: 8px;
  bottom: 35px;
`;
