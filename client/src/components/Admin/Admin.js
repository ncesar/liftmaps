import React, { useState, useEffect } from 'react';
import { listLogEntries, editLogEntry, deleteLogEntry } from '../../data/API';
import {
  Paper,
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
} from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { StyledAdminWrapper, StyledLabel, StyledButtonWrapper } from './styled';
import { CommentCheck as Yes } from '@styled-icons/boxicons-solid/CommentCheck';

export const Admin = () => {
  const [logEntries, setLogEntires] = useState([]);

  const [address, setAddress] = useState('');

  const { register, handleSubmit } = useForm();
  // eslint-disable-next-line
  const [accepted, setAccepted] = useState(false);

  const [remove, setRemove] = useState(false);

  const [error, setError] = useState('');

  const getEntries = async () => {
    const logEntries = await listLogEntries('logs/not-accepted');
    setLogEntires(logEntries);
  };

  const GetAddressName = async (long, lat) => {
    try {
      const apiURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/%20${long}%2C${lat}.json?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}&cachebuster=1585709154325&autocomplete=false&types=address&limit=1`;
      const response = await fetch(apiURL);
      let data = response.json();
      data.then((data) => {
        setAddress(data.features[0].place_name);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEntries();
  }, []);

  const onSubmit = async (data) => {
    if (remove) {
      try {
        const removed = await deleteLogEntry(data._id);
        console.log(removed);
      } catch (error) {
        setError(error.message);
        console.log(error);
      }
    } else {
      try {
        const created = await editLogEntry(data._id, data);
        console.log(created);
      } catch (error) {
        setError(error.message);
        console.log(error);
      }
    }
  };

  return (
    <StyledAdminWrapper onSubmit={handleSubmit(onSubmit)}>
      {error && <h3 className="error">{error}</h3>}
      {logEntries.map((entry) => (
        <Paper key={entry._id} style={{ padding: 30 }}>
          <TextField
            name="title"
            rows={2}
            multiline
            label="Título"
            variant="outlined"
            margin="dense"
            inputRef={register}
            defaultValue={entry.title}
          />
          <TextField
            name="description"
            rows={2}
            multiline
            label="Descrição"
            variant="outlined"
            margin="dense"
            inputRef={register}
            defaultValue={entry.description}
          />
          <StyledLabel
            style={{ cursor: 'pointer' }}
            onClick={() => GetAddressName(entry.longitude, entry.latitude)}
          >
            Endereço: {address}
          </StyledLabel>
          <StyledLabel>Categoria: {entry.category}</StyledLabel>
          <StyledLabel>Opções: {entry.placeOptions}</StyledLabel>
          <StyledLabel>Dias: {entry.workingTime}</StyledLabel>
          <TextField
            name="website"
            rows={2}
            multiline
            label="Website"
            variant="outlined"
            margin="dense"
            inputRef={register}
            defaultValue={entry.website}
          />
          <TextField
            name="phone"
            rows={2}
            multiline
            label="Telefone"
            variant="outlined"
            margin="dense"
            inputRef={register}
            defaultValue={entry.phone}
          />
          <StyledLabel>Criado em: {entry.createdAt}</StyledLabel>
          <StyledLabel>Atualizado em: {entry.updatedAt}</StyledLabel>
          <TextField
            inputRef={register}
            name="_id"
            label="id"
            margin="dense"
            defaultValue={entry._id}
          />
          <StyledButtonWrapper>
            <FormControlLabel
              control={
                <Checkbox
                  name="accepted"
                  onChange={(e) => setAccepted(e.target.checked)}
                  color="primary"
                  inputRef={register}
                />
              }
              label="Aceitar"
              style={{ marginTop: '-10px' }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="removed"
                  onChange={() => setRemove(!remove)}
                  color="secondary"
                  inputRef={register}
                />
              }
              label="Remover"
              style={{ marginTop: '-10px' }}
            />
            <Button type="submit" variant="contained" color="primary">
              <Yes className="icon" />
            </Button>
          </StyledButtonWrapper>
        </Paper>
      ))}
    </StyledAdminWrapper>
  );
};
