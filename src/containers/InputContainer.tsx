import { Controller, useFormContext } from 'react-hook-form';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

interface IProps {
  name: string;
  type?: string;
  label: string;
  showPass?: boolean;
  showCfPass?: () => void;
  handleClickShowPassword?: () => void;
}

function InputContainer({
  name,
  type = 'text',
  label,
  showPass,
  showCfPass,
  handleClickShowPassword,
}: IProps) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <TextField
          fullWidth
          sx={{ textTransform: 'capitalize' }}
          label={label}
          margin="normal"
          error={!!errors[name]}
          helperText={errors[name]?.message}
          type={
            type === 'password'
              ? showPass || showCfPass
                ? 'text'
                : 'password'
              : type
          }
          InputProps={{
            endAdornment: type === 'password' && (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPass ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          {...field}
        />
      )}
    />
  );
}

export default InputContainer;
