import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  FormHelperText,
  RadioGroup,
  Radio,
} from '@mui/material';
import { useState } from 'react';

export const MuiRadioButton = () => {
  const [value, setValue] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Box>
      <FormControl error>
        <FormLabel id='job-experience-group-label'>
          Years of experience
        </FormLabel>
        <RadioGroup
          name='job-experience-group'
          aria-label='job-experience-group'
          value={value}
          onChange={handleChange}
          row
        >
          <FormControlLabel
            control={<Radio size='medium' color='secondary' />}
            label='0-2'
            value='0-2'
          />
          <FormControlLabel control={<Radio />} label='3-5' value='3-5' />
          <FormControlLabel control={<Radio />} label='6-10' value='6-10' />
        </RadioGroup>
        <FormHelperText>Invalid selection</FormHelperText>
      </FormControl>
    </Box>
  );
};
