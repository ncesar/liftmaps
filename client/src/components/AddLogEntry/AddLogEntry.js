import React from 'react';
import { Marker, Popup } from 'react-map-gl';
import LogEntryForm from '../LogEntryForm/LogEntryForm';
import { SVG } from '../CustomSVGElement/CustomSVGElement';
import { Typography } from '@material-ui/core';
import { StyledPopupWrapper } from './styled';

export const AddLogEntry = (props) => {
  const {
    latitude,
    longitude,
    viewport,
    onPopupClose,
    onLogEntryClose,
    location,
  } = props;
  return (
    <React.Fragment>
      <Marker latitude={latitude} longitude={longitude}>
        <SVG className="marker red" viewport={viewport} />
      </Marker>
      <Popup
        latitude={latitude}
        longitude={longitude}
        closeButton={true}
        closeOnClick={false}
        onClose={onPopupClose}
        anchor="right"
      >
        <StyledPopupWrapper>
          <Typography variant="h5">Novo local</Typography>
          <LogEntryForm onClose={onLogEntryClose} location={location} />
        </StyledPopupWrapper>
      </Popup>
    </React.Fragment>
  );
};
