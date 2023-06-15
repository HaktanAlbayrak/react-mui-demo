import { Box } from '@mui/material';
import { DateRangePicker, DateRange } from '@mui/x-date-pickers-pro';
import { useState } from 'react';

export const MuiDateRangePicker = () => {
  const [value, setValue] = useState<DateRange<Date>>([null, null]);

  return (
    <Box width='500px'>
      <DateRangePicker
        label='Date Range Picker'
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
  );
};
