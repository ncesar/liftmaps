import styled from 'styled-components';
import { GeolocateControl } from 'react-map-gl';

export const StyledGeolocateControl = styled(GeolocateControl)`
  display: inline-flex;
  width: auto;
  position: absolute;
  right: 8px;
  bottom: 35px;
`;
export const StyledAlertWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  margin: 10px;
  z-index: 100;
`;
