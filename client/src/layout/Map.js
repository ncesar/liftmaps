import React, { useState, useEffect } from 'react';
import ReactMapGL from 'react-map-gl';
import { listLogEntries } from '../data/API';
import { LogEntries } from '../components/LogEntries/LogEntries';
import { AddLogEntry } from '../components/AddLogEntry/AddLogEntry';

const Map = ({ ...other }) => {
  const [logEntries, setLogEntires] = useState([]);
  const [showPopup, setShowPopup] = useState({});
  const [addEntryLocation, setAddEntryLocation] = useState(null);
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: -26.914762,
    longitude: -49.081432,
    zoom: 13,
  });

  const getEntries = async () => {
    const logEntries = await listLogEntries();
    setLogEntires(logEntries);
  };

  useEffect(() => {
    getEntries();
  }, []);

  const showAddMarkerPopup = e => {
    const [longitude, latitude] = e.lngLat;
    setAddEntryLocation({
      latitude,
      longitude,
    });
  };
  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={setViewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      mapStyle="mapbox://styles/ceesar90/ck89fgqi501i71iprcilptp1k"
      onDblClick={showAddMarkerPopup}
      {...other}
    >
      {logEntries.map(entry => (
        <LogEntries
          key={entry._id}
          latitude={entry.latitude}
          longitude={entry.longitude}
          viewport={viewport.zoom}
          onSVGClick={() => setShowPopup({ [entry._id]: true })}
          showPopupId={showPopup[entry._id]}
          onPopupClose={() => setShowPopup({})}
          title={entry.title}
          description={entry.description}
          visitDate={entry.visitDate}
        />
      ))}
      {addEntryLocation && (
        <AddLogEntry
          latitude={addEntryLocation.latitude}
          longitude={addEntryLocation.longitude}
          viewport={viewport.zoom}
          onPopupClose={() => setAddEntryLocation(null)}
          onLogEntryClose={() => {
            setAddEntryLocation(null);
            getEntries();
          }}
          location={addEntryLocation}
        />
      )}
    </ReactMapGL>
  );
};

export default Map;
