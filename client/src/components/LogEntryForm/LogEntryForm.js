import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { createLogEntry } from '../../data/API';
import InputMask from 'react-input-mask';
import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';
import { Send } from '@styled-icons/boxicons-solid/Send';
import ReCAPTCHA from 'react-google-recaptcha';
import { LogEntryFormWrapper, StyledButton, StyledFeedback } from './styled';
import { DaysOfWork } from './DaysOfWork';
import { PlaceOptions } from './PlaceOptions';

const LogEntryForm = ({ location, onClose }) => {
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState('');

  const [category, setCategory] = useState('');

  const [tel, setTel] = useState('');

  const [checked, setChecked] = useState(false);

  const { register, handleSubmit } = useForm();

  const [userAccepted, setUserAccepted] = useState(undefined);

  const [recaptcha, setRecaptcha] = useState(true);

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      data.latitude = location.latitude;
      data.longitude = location.longitude;

      await createLogEntry(data);
      // console.log(created);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  if (userAccepted) {
    onClose();
  }
  const onChange = () => {
    setRecaptcha(false);
  };
  return (
    <React.Fragment>
      {loading && (
        <StyledFeedback>
          Obrigado pela sua contribuição, em até um dia útil a sua marcação será
          aprovada{' '}
          <span role="img" aria-label="Carinha feliz">
            😊
          </span>
          <StyledButton
            variant="contained"
            color="primary"
            margin="dense"
            onClick={() => setUserAccepted(true)}
          >
            Confirmar envio
          </StyledButton>
        </StyledFeedback>
      )}
      <LogEntryFormWrapper
        onSubmit={handleSubmit(onSubmit)}
        className="entry-form"
        style={userAccepted === false ? { display: 'none' } : {}}
      >
        {error && <h3 className="error">{error}</h3>}
        <TextField
          name="title"
          required={true}
          inputRef={register}
          variant="outlined"
          label="Nome do local"
          margin="dense"
          inputProps={{ maxLength: 30 }}
        />
        <FormControl variant="outlined" margin="dense">
          <InputLabel id="demo-simple-select-outlined-label">
            A categoria desse local é..
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            label="Esse local.."
          >
            <MenuItem value="Mantimentos 🛒">
              Mantimentos
              <span role="img" aria-label="Mantimentos">
                &nbsp;🛒
              </span>
            </MenuItem>
            <MenuItem value="Refeições 🍽">
              Refeições
              <span role="img" aria-label="Refeições">
                &nbsp;🍽
              </span>
            </MenuItem>
            <MenuItem value="Serviços 💼">
              Serviços
              <span role="img" aria-label="Serviços">
                &nbsp;💼
              </span>
            </MenuItem>
            <MenuItem value="Pets 🐶">
              Pets
              <span role="img" aria-label="Pets">
                &nbsp;🐶
              </span>
            </MenuItem>
            <MenuItem value="Outros 🛠">
              Outros
              <span role="img" aria-label="Outros">
                &nbsp;🛠
              </span>
            </MenuItem>
          </Select>
          <input
            name="category"
            value={category}
            ref={register}
            readOnly
            style={{ display: 'none' }}
          />
        </FormControl>
        <PlaceOptions registerRef={register} />
        <DaysOfWork registerRef={register} />
        <TextField
          name="description"
          rows={2}
          multiline
          inputRef={register}
          label="Sobre o local(tempo de entrega, etc)"
          variant="outlined"
          margin="dense"
          inputProps={{ maxLength: 60 }}
          required={true}
        />
        <TextField
          name="website"
          inputRef={register}
          label="Site/Link"
          variant="outlined"
          margin="dense"
          inputProps={{ maxLength: 35 }}
        />
        <InputMask
          value={tel}
          name="phone"
          mask="(99) 99999-9999"
          alwaysShowMask
          onChange={(e) => setTel(e.target.value)}
        >
          {(inputProps) => (
            <TextField
              {...inputProps}
              inputRef={register}
              name="phone"
              label="Whats/Telefone(DDD)"
              variant="outlined"
              margin="dense"
              placeholder="(99) 9.9999-9999"
            />
          )}
        </InputMask>
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
          style={{ marginTop: '-10px' }}
        />
        <ReCAPTCHA
          sitekey="6LcYy-YUAAAAAMPb92I3opCflZeiyEthEe4gV_fi"
          onChange={onChange}
        />
        <StyledButton
          disabled={recaptcha}
          variant="contained"
          color="primary"
          margin="dense"
          type="submit"
          onClick={onChange}
        >
          {loading ? (
            'Carregando...'
          ) : (
            <span>
              Adicionar local
              <Send className="icon" style={{ marginLeft: 5 }} />
            </span>
          )}
        </StyledButton>
      </LogEntryFormWrapper>
    </React.Fragment>
  );
};

export default LogEntryForm;
