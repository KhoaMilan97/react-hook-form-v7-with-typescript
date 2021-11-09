import { Controller, useFormContext } from 'react-hook-form';

import { TextField } from '@mui/material';

const SubComponent1: React.FC = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <Controller
        name="email"
        control={control}
        defaultValue="Example@gamil.com"
        render={({ field }) => (
          <TextField
            {...field}
            variant="outlined"
            label="Email"
            error={!!errors.email}
            helperText={errors.email ? errors.email?.message : ''}
            fullWidth
          />
        )}
      />
      <br />
      <br />
      <Controller
        name="password"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            type="password"
            variant="outlined"
            label="Password"
            error={!!errors.password}
            helperText={errors.password ? errors.password?.message : ''}
            fullWidth
          />
        )}
      />
      <br />

      <br />
    </>
  );
};

export default SubComponent1;
