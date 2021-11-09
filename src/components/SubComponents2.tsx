import { Controller, useFormContext } from 'react-hook-form';

import { TextField } from '@mui/material';

const SubComponent2: React.FC = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <Controller
        name="firstName"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            variant="outlined"
            label="First Name"
            error={!!errors.firstName}
            helperText={errors.firstName ? errors.firstName?.message : ''}
            fullWidth
          />
        )}
      />
      <br />
      <br />
      <Controller
        name="lastName"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            variant="outlined"
            label="Last Name"
            error={!!errors.lastName}
            helperText={errors.lastName ? errors.lastName?.message : ''}
            fullWidth
          />
        )}
      />
      <br />

      <br />
    </>
  );
};

export default SubComponent2;
