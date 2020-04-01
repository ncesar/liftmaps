import React, { useState, useEffect, useRef } from 'react';
import ReactMapGL from 'react-map-gl';
import Geocoder from 'react-map-gl-geocoder';
import { StyledGeolocateControl } from './styled';
import { LogEntries } from '../components/LogEntries/LogEntries';
import { AddLogEntry } from '../components/AddLogEntry/AddLogEntry';
import { listLogEntries } from '../data/API';

const Map = ({ ...other }) => {
  const [logEntries, setLogEntires] = useState([]);
  const [showPopup, setShowPopup] = useState({});
  const [addEntryLocation, setAddEntryLocation] = useState(null);
  const mapRef = useRef(null);
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: -26.914762,
    longitude: -49.081432,
    zoom: 14,
  });

  const getEntries = async () => {
    const logEntries = await listLogEntries();
    setLogEntires(logEntries);
  };

  useEffect(() => {
    getEntries();
    navigator.geolocation.getCurrentPosition(pos => {
      setViewport({
        ...viewport,
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      ref={mapRef}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      mapStyle="mapbox://styles/ceesar90/ck89fgqi501i71iprcilptp1k"
      onDblClick={showAddMarkerPopup}
      {...other}
    >
      <Geocoder
        mapRef={mapRef}
        onViewportChange={setViewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        placeholder="Procure o local"
      />
      <StyledGeolocateControl
        onViewportChange={setViewport}
        positionOptions={{ enableHighAccuracy: true }}
        trackUserLocation={true}
        fitBoundsOptions={{ maxZoom: viewport.zoom }}
        onGeolocate={setViewport}
      />
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
          website={entry.website}
          phone={entry.phone}
          placeOptions={entry.placeOptions}
          workingTime={entry.workingTime}
          category={entry.category}
          isWhatsapp={entry.isWhatsapp}
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
