import React, { useState } from 'react';
import {
  FormGroup,
  FormControl,
  FormControlLabel,
  Checkbox,
  Popover,
} from '@material-ui/core';
import { DaysOfWorkWrapper, StyledDropdown } from './styled';

export const PlaceOptions = props => {
  const { registerRef, ...other } = props;

  const [anchorEl, setAnchorEl] = useState(null);
  const [checkboxState, setCheckboxState] = useState({
    retirada: false,
    reservaEnvio: false,
    virtualOnline: false,
    entregaRetirada: false,
    atendimentoLoja: false,
  });
  const [placeOptions, setPlaceOptions] = useState('');

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handlePopoverClick = e => {
    setAnchorEl(e.currentTarget);
  };

  const handleCheckboxOnChange = e => {
    setCheckboxState({ ...checkboxState, [e.target.name]: e.target.checked });
  };

  const acceptedValues = [true];
  const filterDaysOfWork = Object.keys(checkboxState).reduce(function(r, e) {
    if (acceptedValues.includes(checkboxState[e])) r[e] = checkboxState[e];
    return r;
  }, {});

  const setDays = () => {
    let arrayOfDays = Object.keys(filterDaysOfWork);
    let result = [];
    if (arrayOfDays.includes('retirada')) {
      result.push('Retirada(drive-thru)');
    }
    if (arrayOfDays.includes('reservaEnvio')) {
      result.push('Reserva/Envio');
    }
    if (arrayOfDays.includes('virtualOnline')) {
      result.push('Virtual/Online');
    }
    if (arrayOfDays.includes('entregaRetirada')) {
      result.push('Entrega e Retirada');
    }
    if (arrayOfDays.includes('atendimentoLoja')) {
      result.push('Atendimento na loja');
    }
    const days = result.join(' ,');
    setPlaceOptions(days);
  };

  const handlePopoverClose = e => {
    setAnchorEl(null);
    setDays();
  };

  const {
    retirada,
    reservaEnvio,
    virtualOnline,
    entregaRetirada,
    atendimentoLoja,
  } = checkboxState;
  const checkAndShowString =
    placeOptions.length > 20
      ? `${placeOptions.substr(0, 20)}...`
      : placeOptions;
  return (
    <DaysOfWorkWrapper {...other}>
      <StyledDropdown
        aria-describedby={id}
        variant="contained"
        onClick={handlePopoverClick}
        style={{ width: '100%' }}
      >
        {placeOptions ? checkAndShowString : 'Opções de atendimento:'}
        <svg
          className="MuiSvgIcon-root MuiSelect-icon MuiSelect-iconOutlined"
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M7 10l5 5 5-5z"></path>
        </svg>
      </StyledDropdown>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        PaperProps={{
          style: {
            padding: '5px 10px',
            minWidth: 200,
          },
        }}
      >
        <FormControl>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={retirada}
                  onChange={handleCheckboxOnChange}
                  name="retirada"
                  color="primary"
                />
              }
              label="Retirada(drive-thru)"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={reservaEnvio}
                  onChange={handleCheckboxOnChange}
                  name="reservaEnvio"
                  color="primary"
                />
              }
              label="Reserva/Envio"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={virtualOnline}
                  onChange={handleCheckboxOnChange}
                  name="virtualOnline"
                  color="primary"
                />
              }
              label="Virtual/Online"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={entregaRetirada}
                  onChange={handleCheckboxOnChange}
                  name="entregaRetirada"
                  color="primary"
                />
              }
              label="Entrega e Retirada"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={atendimentoLoja}
                  onChange={handleCheckboxOnChange}
                  name="atendimentoLoja"
                  color="primary"
                />
              }
              label="Atendimento na loja"
            />
          </FormGroup>
        </FormControl>
      </Popover>
      <input
        name="placeOptions"
        value={placeOptions}
        ref={registerRef}
        readOnly
        style={{ display: 'none' }}
      />
    </DaysOfWorkWrapper>
  );
};
