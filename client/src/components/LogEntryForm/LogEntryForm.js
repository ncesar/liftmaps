import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { createLogEntry } from '../../data/API';
import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';
import { LogEntryFormWrapper, StyledButton } from './styled';
import { DaysOfWork } from './DaysOfWork';

const LogEntryForm = ({ location, onClose }) => {
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState('');

  const [placeOptions, setPlaceOptions] = useState('');

  const [category, setCategory] = useState('');

  const [checked, setChecked] = useState(false);

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
      setError(error.message);

      setLoading(false);
    }
  };
  return (
    <LogEntryFormWrapper
      onSubmit={handleSubmit(onSubmit)}
      className="entry-form"
    >
      {error && <h3 className="error">{error}</h3>}
      <TextField
        name="title"
        required
        inputRef={register}
        variant="outlined"
        label="Nome do local"
        margin="dense"
      />
      <FormControl variant="outlined" margin="dense">
        <InputLabel id="demo-simple-select-outlined-label">
          A categoria desse local é..
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={category}
          onChange={e => setCategory(e.target.value)}
          label="Esse local.."
        >
          <MenuItem value="Mantimentos">Mantimentos</MenuItem>
          <MenuItem value="Refeições">Refeições</MenuItem>
          <MenuItem value="Serviços">Serviços</MenuItem>
          <MenuItem value="Pets">Pets</MenuItem>
          <MenuItem value="Outros">Outros</MenuItem>
        </Select>
        <input
          name="category"
          value={category}
          ref={register}
          readOnly
          style={{ display: 'none' }}
        />
      </FormControl>
      <FormControl variant="outlined" margin="dense">
        <InputLabel id="demo-simple-select-outlined-label">
          Esse local..
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={placeOptions}
          onChange={e => setPlaceOptions(e.target.value)}
          label="Esse local.."
        >
          <MenuItem value="Entrega em casa">Entrega em casa</MenuItem>
          <MenuItem value="Retirada(drive-thru)">Retirada(drive-thru)</MenuItem>
          <MenuItem value="Atendimento na loja">Atendimento na loja</MenuItem>
          <MenuItem value="Entrega e Retirada">Entrega e Retirada</MenuItem>
          <MenuItem value="Reserva/Envio">Reserva/Envio</MenuItem>
          <MenuItem value="Virtual/Online">Virtual/Online</MenuItem>
        </Select>
        <input
          name="placeOptions"
          value={placeOptions}
          ref={register}
          readOnly
          style={{ display: 'none' }}
        />
      </FormControl>
      <TextField
        name="description"
        rows={3}
        multiline
        inputRef={register}
        label="Sobre o local(tempo de entrega, etc)"
        variant="outlined"
        margin="dense"
      />
      <TextField
        name="website"
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
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            name="isWhatsapp"
            onChange={() => setChecked(!checked)}
            color="primary"
            inputRef={register}
          />
        }
        label="É whatsapp?"
      />
      <DaysOfWork registerRef={register} />
      <StyledButton
        disabled={loading}
        variant="contained"
        color="primary"
        margin="dense"
        type="submit"
      >
        {loading ? 'Loading...' : 'Create Log Entry'}
      </StyledButton>
    </LogEntryFormWrapper>
  );
};

export default LogEntryForm;
