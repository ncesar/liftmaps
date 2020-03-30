import React from 'react';
import { Marker, Popup } from 'react-map-gl';
import { SVG } from '../CustomSVGElement/CustomSVGElement';

export const LogEntries = props => {
  const {
    latitude,
    longitude,
    viewport,
    onSVGClick,
    showPopupId,
    onPopupClose,
    title,
    description,
    comments,
    visitDate,
    ...other
  } = props;
  return (
    <React.Fragment {...other}>
      <Marker latitude={latitude} longitude={longitude}>
        <SVG
          className="marker yellow"
          viewport={viewport}
          onClick={onSVGClick}
        />
      </Marker>
      {showPopupId && (
        <Popup
          latitude={latitude}
          longitude={longitude}
          closeButton={true}
          closeOnClick={false}
          dynamicPosition={true}
          onClose={onPopupClose}
          anchor="top"
        >
          <div className="popup">
            <div>{title}</div>
            <div>{description}</div>
            <div>{comments}</div>
            <small>
              Visited on: {new Date(visitDate).toLocaleDateString()}
            </small>
          </div>
        </Popup>
      )}
    </React.Fragment>
  );
};
