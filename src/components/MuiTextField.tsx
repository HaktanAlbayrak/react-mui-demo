import { Stack, TextField, InputAdornment } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';

export const MuiTextField = () => {
  const [viewer, setViewer] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');

  const handleVisibility = () => {
    setViewer((prev) => !prev);
  };

  return (
    <Stack spacing={4} mt={2}>
      <Stack direction='row' spacing={2}>
        <TextField label='Name' variant='outlined' />
        <TextField label='Name' variant='filled' />
        <TextField label='Name' variant='standard' />
      </Stack>
      <Stack direction='row' spacing={2}>
        <TextField label='Small secondary' size='small' color='secondary' />
      </Stack>
      <Stack direction='row' spacing={2}>
        <TextField
          label='Form Input'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
          error={!value}
          helperText={
            !value
              ? 'This field is required'
              : 'Do not share your password with anyone'
          }
        />
        <TextField
          label='Password'
          type='password'
          helperText='Do not share your password with anyone'
          disabled
        />
        <TextField label='Read Only' InputProps={{ readOnly: true }} />
      </Stack>
      <Stack direction='row' spacing={2}>
        <TextField
          label='Amount'
          InputProps={{
            startAdornment: <InputAdornment position='start'>$</InputAdornment>,
          }}
        />
        <TextField
          label='Weight'
          InputProps={{
            endAdornment: <InputAdornment position='end'>kg</InputAdornment>,
          }}
        />
      </Stack>
      <Stack direction='row' spacing={2}>
        <TextField
          label='password'
          type={viewer ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end' onClick={handleVisibility}>
                {viewer ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </InputAdornment>
            ),
          }}
        />
      </Stack>
    </Stack>
  );
};
