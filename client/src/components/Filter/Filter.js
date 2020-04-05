import React from 'react';
import {
  ExpansionPanelSummary,
  Typography,
  ExpansionPanelDetails,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@material-ui/core';
import { ChevronDown as ExpandMoreIcon } from '@styled-icons/boxicons-solid/ChevronDown';
import { StyledExpanderWrapper } from './styled';

export const Filter = React.memo((props) => {
  const { value, setValue } = props;
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <StyledExpanderWrapper elevation={0}>
      <ExpansionPanelSummary
        aria-controls="panel1a-content"
        expandIcon={<ExpandMoreIcon className="icon" />}
        id="panel1a-header"
      >
        <Typography style={{ color: '#828282' }}>Filtros</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="filtro"
            name="filtro"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              value="todos"
              control={<Radio color="primary" />}
              label="Todos ✔"
            />
            <FormControlLabel
              value="Mantimentos 🛒"
              control={<Radio color="primary" />}
              label="Mantimentos 🛒"
            />
            <FormControlLabel
              value="Refeições 🍽"
              control={<Radio color="primary" />}
              label="Refeições 🍽"
            />
            <FormControlLabel
              value="Serviços 💼"
              control={<Radio color="primary" />}
              label="Serviços 💼"
            />
            <FormControlLabel
              value="Pets 🐶"
              control={<Radio color="primary" />}
              label="Pets 🐶"
            />
            <FormControlLabel
              value="Outros 🛠"
              control={<Radio color="primary" />}
              label="Outros 🛠"
            />
          </RadioGroup>
        </FormControl>
      </ExpansionPanelDetails>
    </StyledExpanderWrapper>
  );
});
