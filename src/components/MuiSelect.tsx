import { Box, TextField, MenuItem } from '@mui/material';
import { useState } from 'react';

export const MuiSelect = () => {
  const [countries, setCountries] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCountries(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <Box width='250px' mt={2}>
      <TextField
        label='Select country'
        select
        value={countries}
        onChange={handleChange}
        fullWidth
        SelectProps={{
          multiple: true,
        }}
        size='small'
        color='secondary'
        helperText='Please select your country'
        error
      >
        <MenuItem value='TR'>Turkey</MenuItem>
        <MenuItem value='US'>USA</MenuItem>
        <MenuItem value='FR'>France</MenuItem>
      </TextField>
    </Box>
  );
};
