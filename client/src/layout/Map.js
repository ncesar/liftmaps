import React, { useState, useEffect, useRef, useMemo, useContext } from 'react';
import ReactMapGL from 'react-map-gl';
import Geocoder from 'react-map-gl-geocoder';
import { StyledGeolocateControl } from './styled';
import { LogEntries } from '../components/LogEntries/LogEntries';
import { AddLogEntry } from '../components/AddLogEntry/AddLogEntry';
// import { listLogEntries } from '../data/API';
import { AuthContext } from '../auth/Auth';
import { MapContext } from './MapContext';
import { Topbar } from '../components/Topbar/Topbar';
import { Filter } from '../components/Filter/Filter';
import { DonateModal } from '../components/DonateModal/DonateModal';
import { WelcomeModal } from '../components/WelcomeModal/WelcomeModal';
import { About } from '../components/About/About';
import { storedData } from '../data/storedData';

const Map = ({ ...other }) => {
  const [logEntries, setLogEntries] = useState([]);

  const [isNotLogged, setIsNotLogged] = useState(false);

  const [addEntryLocation, setAddEntryLocation] = useState(null);

  const [filter, setFilter] = useState('todos');

  const [donateModal, setDonateModal] = useState(false);
  const [welcomeModal, setWelcomeModal] = useState(false);

  const mapRef = useRef(null);

  const [viewport, setViewport] = useState({
    latitude: -26.914762,
    longitude: -49.081432,
    zoom: 14,
  });

  const getEntries = async () => {
    // const logEntries = await listLogEntries('logs');
    // setLogEntries(logEntries);
    const logEntries = storedData;
    setLogEntries(logEntries);
  };

  const checkVisitTime = () => {
    if (!localStorage.getItem('timesVisited')) {
      localStorage.setItem('timesVisited', 1);
    } else if (localStorage.getItem('timesVisited') < 15) {
      let timesVisited = parseInt(localStorage.getItem('timesVisited'));
      localStorage.setItem('timesVisited', ++timesVisited);
    }
    if (
      JSON.parse(localStorage.getItem('timesVisited')) === 5 ||
      JSON.parse(localStorage.getItem('timesVisited')) === 14
    ) {
      setDonateModal(true);
    }
    // always show since the site is gone
    setWelcomeModal(true);
    if (JSON.parse(localStorage.getItem('timesVisited')) === 1) {
      setWelcomeModal(true);
    }
  };

  useEffect(() => {
    checkVisitTime();
    getEntries();
    navigator.geolocation.getCurrentPosition((pos) => {
      setViewport((viewport) => ({
        ...viewport,
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      }));
    });
  }, []);

  const mapContext = useMemo(
    () => ({
      logEntries,
    }),
    [logEntries],
  );

  const { currentUser } = useContext(AuthContext);
  const showAddMarkerPopup = (e) => {
    if (currentUser) {
      const [longitude, latitude] = e.lngLat;
      setAddEntryLocation({
        latitude,
        longitude,
      });
    } else {
      setIsNotLogged(true);
    }
  };

  return (
    <MapContext.Provider value={mapContext}>
      <ReactMapGL
        {...viewport}
        onViewportChange={setViewport}
        ref={mapRef}
        width="100vw"
        height="100vh"
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/ceesar90/ck89fgqi501i71iprcilptp1k?optimize=true"
        onDblClick={showAddMarkerPopup}
        {...other}
      >
        {donateModal && (
          <DonateModal
            donateModal={donateModal}
            setDonateModal={setDonateModal}
          />
        )}
        {welcomeModal && (
          <WelcomeModal
            welcomeModal={welcomeModal}
            setWelcomeModal={setWelcomeModal}
          />
        )}
        <Topbar currentUser={currentUser} isNotLogged={isNotLogged} />
        <Filter value={filter} setValue={setFilter} />
        <Geocoder
          mapRef={mapRef}
          onViewportChange={setViewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          placeholder="Procure por endereço"
          position="top-left"
        />
        <StyledGeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
          fitBoundsOptions={{ maxZoom: viewport.zoom }}
        />
        <LogEntries viewport={viewport.zoom} category={filter} />
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
        <About />
      </ReactMapGL>
    </MapContext.Provider>
  );
};

export default Map;
