import React, { useState, useContext } from 'react';
import { Marker } from 'react-map-gl';
import { SVG } from '../CustomSVGElement/CustomSVGElement';
import {
  PopupWrapper,
  Title,
  Label,
  Description,
  LabelType,
  PopupListItem,
  PopupContentWrapper,
} from './styled';
import { MapContext } from '../../layout/MapContext';

export const LogEntries = (props) => {
  const { viewport, category, ...other } = props;

  const [address, setAddress] = useState('');

  const [showPopup, setShowPopup] = useState({});

  const { logEntries } = useContext(MapContext);

  const GetAddressName = async (long, lat) => {
    try {
      const apiURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/%20${long}%2C${lat}.json?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}&cachebuster=1585709154325&autocomplete=false&types=address&limit=1`;
      const response = await fetch(apiURL);
      let data = response.json();
      data.then((data) => {
        setAddress(data.features[0].place_name);
      });
    } catch (error) {
      // console.log(error);
      alert(
        'Algum erro ocorreu na busca do endereço, contate o administrador.',
      );
    }
  };

  const loadAddressAndSVGProps = (long, lat, entryId) => {
    GetAddressName(long, lat);
    setShowPopup({ [entryId]: true });
  };

  const logWithFilter = logEntries.filter(
    (filter) => filter.category === category,
  );
  const getEntryType = category === 'todos' ? logEntries : logWithFilter;

  return getEntryType.map((entry) => (
    <React.Fragment key={entry._id} {...other}>
      <Marker latitude={entry.latitude} longitude={entry.longitude}>
        <SVG
          className="marker yellow"
          viewport={viewport}
          onClick={() =>
            loadAddressAndSVGProps(entry.longitude, entry.latitude, entry._id)
          }
        />
      </Marker>
      {showPopup[entry._id] && (
        <PopupContentWrapper
          className="popup2"
          latitude={entry.latitude}
          longitude={entry.longitude}
          closeButton={true}
          closeOnClick={false}
          dynamicPosition={true}
          onClose={() => setShowPopup({})}
          anchor="top"
        >
          <PopupWrapper className="popup">
            <PopupListItem button>
              <Title>{entry.title}</Title>
              <Description>{entry.description}</Description>
            </PopupListItem>
            <PopupListItem button>
              <LabelType>Endereço:</LabelType>
              <Label>{address}</Label>
            </PopupListItem>
            {entry.website && (
              <PopupListItem button>
                <LabelType>Site/Link:</LabelType>
                <a
                  href={entry.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Label>{entry.website}</Label>
                </a>
              </PopupListItem>
            )}
            {entry.phone !== '(__) _____-____' ? (
              entry.isWhatsapp ? (
                <PopupListItem button>
                  <LabelType>Whatsapp(clique para abrir)</LabelType>
                  <a
                    href={`http://api.whatsapp.com/send?phone=55${entry.phone}&text=Ola,%20eu%20achei%20o%20seu%20estabelecimento%20no%20site%20LiftMaps.com%,%20pode%20me%20ajudar?%3f&source=&data=`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Label>{entry.phone}</Label>
                  </a>
                </PopupListItem>
              ) : (
                <PopupListItem button>
                  <LabelType>Telefone</LabelType>
                  <a href={`tel:+${entry.phone}`}>
                    <Label>{entry.phone}</Label>
                  </a>
                </PopupListItem>
              )
            ) : null}
            {entry.placeOptions && (
              <PopupListItem button>
                <LabelType>Opções de atendimento:</LabelType>
                <Label>{entry.placeOptions}</Label>
              </PopupListItem>
            )}
            {entry.workingTime && (
              <PopupListItem button>
                <LabelType>Horário de funcionamento:</LabelType>
                <Label>{entry.workingTime}</Label>
              </PopupListItem>
            )}
            {entry.category && (
              <PopupListItem button>
                <LabelType>Categoria:</LabelType>
                <Label>{entry.category}</Label>
              </PopupListItem>
            )}
          </PopupWrapper>
        </PopupContentWrapper>
      )}
    </React.Fragment>
  ));
};
