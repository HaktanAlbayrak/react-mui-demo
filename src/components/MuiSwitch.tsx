import { Box, FormControlLabel, Switch } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useState } from 'react';

export const MuiSwitch = () => {
  const [checked, setChecked] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Box>
      <FormControlLabel
        control={
          <Switch
            checked={checked}
            icon={<DarkModeIcon color='secondary' />}
            checkedIcon={<LightModeIcon />}
            onChange={handleChange}
          />
        }
        label='Dark mode'
      />
    </Box>
  );
};
