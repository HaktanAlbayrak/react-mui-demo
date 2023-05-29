import { Stack, Box } from '@mui/material';
import { DatePicker, DateTimePicker, TimePicker } from '@mui/x-date-pickers';
import { useState } from 'react';

export const MuiPicker = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);
  const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(null);
  console.log({
    selectedDate,
    selectedTime: selectedTime && selectedTime.toLocaleTimeString(),
    selectedDateTime,
  });
  return (
    <Box>
      <Stack spacing={4} sx={{ width: '250px' }} mt={8} mb={20}>
        <DatePicker
          label='Date picker'
          value={selectedDate}
          onChange={(newValue: Date | null) => {
            setSelectedDate(newValue);
          }}
        />
        <TimePicker
          label='Time picker'
          value={selectedTime}
          onChange={(newValue: Date | null) => {
            setSelectedTime(newValue);
          }}
        />
        <DateTimePicker
          label='Date Time Picker'
          value={selectedDateTime}
          onChange={(newValue) => {
            setSelectedDateTime(newValue);
          }}
        />
      </Stack>
    </Box>
  );
};
