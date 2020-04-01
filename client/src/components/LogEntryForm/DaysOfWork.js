import React, { useState } from 'react';
import {
  FormGroup,
  FormControl,
  FormControlLabel,
  Checkbox,
  Button,
  Popover,
} from '@material-ui/core';
import { DaysOfWorkWrapper } from './styled';

export const DaysOfWork = props => {
  const { registerRef, ...other } = props;

  const [anchorEl, setAnchorEl] = useState(null);
  const [checkboxState, setCheckboxState] = useState({
    seg: false,
    ter: false,
    qua: false,
    qui: false,
    sex: false,
    sab: false,
    dom: false,
  });
  const [workingTime, setWorkingTime] = useState('');

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
    for (let i = 0; i < arrayOfDays.length; i++) {
      arrayOfDays[i] =
        arrayOfDays[i].charAt(0).toUpperCase() + arrayOfDays[i].substr(1);
    }
    const days = arrayOfDays.join(', ');
    setWorkingTime(days);
  };

  const handlePopoverClose = e => {
    setAnchorEl(null);
    setDays();
  };

  const { seg, ter, qua, qui, sex, sab, dom } = checkboxState;

  return (
    <DaysOfWorkWrapper {...other}>
      <Button
        aria-describedby={id}
        variant="contained"
        onClick={handlePopoverClick}
      >
        Quando está aberto?
      </Button>
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
          },
        }}
      >
        <FormControl>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={seg}
                  onChange={handleCheckboxOnChange}
                  name="seg"
                  color="primary"
                />
              }
              label="Segunda"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={ter}
                  onChange={handleCheckboxOnChange}
                  name="ter"
                  color="primary"
                />
              }
              label="Terça"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={qua}
                  onChange={handleCheckboxOnChange}
                  name="qua"
                  color="primary"
                />
              }
              label="Quarta"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={qui}
                  onChange={handleCheckboxOnChange}
                  name="qui"
                  color="primary"
                />
              }
              label="Quinta"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={sex}
                  onChange={handleCheckboxOnChange}
                  name="sex"
                  color="primary"
                />
              }
              label="Sexta"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={sab}
                  onChange={handleCheckboxOnChange}
                  name="sab"
                  color="primary"
                />
              }
              label="Sábado"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={dom}
                  onChange={handleCheckboxOnChange}
                  name="dom"
                  color="primary"
                />
              }
              label="Domingo"
            />
          </FormGroup>
        </FormControl>
      </Popover>
      <input
        name="workingTime"
        value={workingTime}
        ref={registerRef}
        readOnly
        style={{ display: 'none' }}
      />
    </DaysOfWorkWrapper>
  );
};
