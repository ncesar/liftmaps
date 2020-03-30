import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { createLogEntry } from '../../data/API';
import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from '@material-ui/core';
import { StyledButton } from './styled';

const LogEntryForm = ({ location, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { register, handleSubmit } = useForm();
  const onSubmit = async data => {
    try {
      setLoading(true);
      data.latitude = location.latitude;
      data.longitude = location.longitude;
      const created = await createLogEntry(data);
      console.log(created);
      onClose();
    } catch (error) {
      console.log(error);
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="entry-form">
      {error && <h3 className="error">{error}</h3>}
      <TextField
        name="title"
        required
        inputRef={register}
        variant="outlined"
        label="Nome do local"
        margin="dense"
      />
      <TextField
        name="comments"
        rows={3}
        multiline
        inputRef={register}
        label="Sobre o local"
        variant="outlined"
        margin="dense"
      />
      <TextField
        name="comments"
        rows={3}
        multiline
        inputRef={register}
        label="Extras(tempo de entrega, etc)"
        variant="outlined"
        margin="dense"
      />
      <TextField
        name="link"
        inputRef={register}
        label="Site/Link"
        variant="outlined"
        margin="dense"
      />
      <TextField
        name="phone"
        inputRef={register}
        label="Whats/Telefone(DDD)"
        variant="outlined"
        margin="dense"
      />
      <FormControl variant="outlined" margin="dense">
        <InputLabel id="demo-simple-select-outlined-label">
          Esse local..
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value="menuItem"
          onChange="setMenuItem"
          label="Esse local.."
        >
          <MenuItem value={10}>Entrega em casa</MenuItem>
          <MenuItem value={20}>Retirada(drive-thru)</MenuItem>
          <MenuItem value={30}>Atendimento na loja</MenuItem>
          <MenuItem value={30}>Entrega e Retirada</MenuItem>
          <MenuItem value={30}>Reserva/Envio</MenuItem>
          <MenuItem value={30}>Virtual/Online</MenuItem>
        </Select>
      </FormControl>
      <label htmlFor="description">Description</label>
      <textarea name="description" rows={3} ref={register} />
      <label htmlFor="image">Image</label>
      <input name="image" ref={register} />
      <label htmlFor="visitDate">Visit Date</label>
      <input name="visitDate" type="date" required ref={register} />
      <StyledButton
        disabled={loading}
        variant="contained"
        color="primary"
        margin="dense"
      >
        {loading ? 'Loading...' : 'Create Log Entry'}
      </StyledButton>
    </form>
  );
};

export default LogEntryForm;
