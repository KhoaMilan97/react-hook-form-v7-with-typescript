import { Controller, useFormContext } from 'react-hook-form';

import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

interface IProps {
  name: string;
  label: any;
}

function DatePickerContainer({ name, label }: IProps) {
  const { control } = useFormContext();
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Controller
        control={control}
        name={name}
        defaultValue={new Date()}
        render={({ field }) => (
          <DatePicker
            label={label}
            {...field}
            renderInput={(params: any) => (
              <TextField fullWidth margin="normal" {...params} />
            )}
          />
        )}
      />
    </LocalizationProvider>
  );
}

export default DatePickerContainer;
