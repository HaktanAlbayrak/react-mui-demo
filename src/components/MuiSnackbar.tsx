import { Snackbar, Button, Alert, AlertProps } from '@mui/material';
import { useState, forwardRef } from 'react';

const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(
  function SnackbarAlert(props, ref) {
    return <Alert elevation={6} ref={ref} {...props}></Alert>;
  }
);

export const MuiSnackbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <Button onClick={() => setOpen(true)}>Submit</Button>
      {/* <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        message='Form submitted successfully!'
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      /> */}
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <SnackbarAlert onClose={handleClose} severity='success'>
          Form submitted successfully!
        </SnackbarAlert>
      </Snackbar>
    </>
  );
};
