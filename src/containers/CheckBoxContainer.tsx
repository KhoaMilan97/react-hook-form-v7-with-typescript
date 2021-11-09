import { Controller, useFormContext } from 'react-hook-form';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormHelperText from '@mui/material/FormHelperText';

interface IProps {
  name: string;
  label: string;
}

function CheckBoxContainer({ name, label }: IProps) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <FormControlLabel
        sx={{ width: '100%', mt: 2, mb: 1 }}
        control={
          <Controller
            name={name}
            defaultValue={false}
            control={control}
            render={({ field }) => (
              <Checkbox
                onChange={(e) => field.onChange(e.target.checked)}
                checked={field.value as boolean}
              />
            )}
          />
        }
        label={label}
      />
      {!!errors[name] && (
        <FormHelperText error={!!errors[name]}>
          {errors[name]?.message}
        </FormHelperText>
      )}
    </>
  );
}

export default CheckBoxContainer;
