import React, { useState } from 'react';
import { Marker, Popup } from 'react-map-gl';
import { SVG } from '../CustomSVGElement/CustomSVGElement';
import { Heart } from '@styled-icons/boxicons-solid/Heart';
import {
  PopupWrapper,
  Title,
  Label,
  FavoritesWrapper,
  Description,
  LabelType,
  PopupListItem,
} from './styled';

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
    website,
    phone,
    placeOptions,
    workingTime,
    category,
    isWhatsapp,
    ...other
  } = props;

  const [address, setAddress] = useState('');

  const GetAddressName = async (long, lat) => {
    try {
      const apiURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/%20${long}%2C${lat}.json?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}&cachebuster=1585709154325&autocomplete=false&types=address&limit=1`;
      const response = await fetch(apiURL);
      let data = response.json();
      data.then(data => {
        setAddress(data.features[0].place_name);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const loadAddressAndSVGProps = props => {
    GetAddressName(longitude, latitude);
    props();
  };
  return (
    <React.Fragment {...other}>
      <Marker latitude={latitude} longitude={longitude}>
        <SVG
          className="marker yellow"
          viewport={viewport}
          onClick={() => loadAddressAndSVGProps(onSVGClick)}
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
          <PopupWrapper className="popup">
            <FavoritesWrapper>
              <Label>Adicionar aos favoritos</Label>
              <Heart className="icon" />
            </FavoritesWrapper>
            <PopupListItem button>
              <Title>{title}</Title>
              <Description>{description}</Description>
            </PopupListItem>
            <PopupListItem button>
              <LabelType>Endereço:</LabelType>
              <Label>{address}</Label>
            </PopupListItem>
            {website && (
              <PopupListItem button>
                <LabelType>Site/Link:</LabelType>
                <a href={website} target="_blank" rel="noopener noreferrer">
                  <Label>{website}</Label>
                </a>
              </PopupListItem>
            )}
            {phone ? (
              isWhatsapp ? (
                <PopupListItem button>
                  <LabelType>Whatsapp</LabelType>
                  <a
                    href={`http://api.whatsapp.com/send?phone=55${phone}&text=Ola,%20eu%20achei%20o%20seu%20estabelecimento%20no%20site%20X,%20pode%20me%20ajudar?%3f&source=&data=`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Label>{phone}</Label>
                  </a>
                </PopupListItem>
              ) : (
                <PopupListItem button>
                  <LabelType>Telefone</LabelType>
                  <a href={`tel:+${phone}`}>
                    <Label>{phone}</Label>
                  </a>
                </PopupListItem>
              )
            ) : null}
            {placeOptions && (
              <PopupListItem button>
                <LabelType>Opções de atendimento:</LabelType>
                <Label>{placeOptions}</Label>
              </PopupListItem>
            )}
            {workingTime && (
              <PopupListItem button>
                <LabelType>Horário de funcionamento:</LabelType>
                <Label>{workingTime}</Label>
              </PopupListItem>
            )}
            {category && (
              <PopupListItem button>
                <LabelType>Categoria:</LabelType>
                <Label>{category}</Label>
              </PopupListItem>
            )}
          </PopupWrapper>
        </Popup>
      )}
    </React.Fragment>
  );
};
