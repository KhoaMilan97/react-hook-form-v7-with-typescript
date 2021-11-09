import { useState } from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Grid, Typography, Button } from '@mui/material';
import { Box } from '@mui/system';

import InputContainer from '../containers/InputContainer';
import CheckBoxContainer from '../containers/CheckBoxContainer';
import RadioContainer from '../containers/RadioContainer';
import DatePickerContainer from '../containers/DatePickerContainer';
import SelectContainer from '../containers/SelectContainer';

export interface IFormInputs {
  username: string;
  email: string;
  password: string;
  cf_password: string;
  hobbies: string[];
  acceptTerms: boolean;
}

const schema = yup
  .object({
    username: yup.string().required(),
    email: yup.string().required().email(),
    password: yup.string().required().min(6).max(32),
    cf_password: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Password must match'),
    hobbies: yup.array().min(1, 'Pick at least 1 hobbies'),
    acceptTerms: yup
      .bool()
      .oneOf([true], 'Accept Terms & Conditions must be checked'),
  })
  .required();

function SignUp() {
  const [showPass, setShowPass] = useState(false);
  const [showCfPass, setShowCfPass] = useState(false);

  const methods = useForm<IFormInputs>({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    console.log(data);
  };

  const handleClickShowPassword = () => {
    setShowPass((prev) => !prev);
  };

  const handleClickShowCfPassword = () => {
    setShowCfPass((prevState) => !prevState);
  };

  return (
    <Grid container justifyContent="center">
      <Grid
        item
        xs={7}
        component={Box}
        sx={{
          mt: '3rem',
          mb: '3rem',
          backgroundColor: 'white',
          padding: '3rem',
          borderRadius: '5px',
          boxShadow:
            '0px 3px 3px -2px rgb(154 11 179), 0px 3px 4px 0px rgb(80 10 92), 0px 1px 8px 0px rgb(92 7 106)',
        }}
      >
        <Typography align="center" color="primary" variant="h4" component="h1">
          Register
        </Typography>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
            <InputContainer name="username" label="Username" />
            <InputContainer name="email" label="Email" />
            <InputContainer
              name="password"
              label="Password"
              type="password"
              showPass={showPass}
              handleClickShowPassword={handleClickShowPassword}
            />
            <InputContainer
              name="cf_password"
              label="Confirm Password"
              type="password"
              showPass={showCfPass}
              handleClickShowPassword={handleClickShowCfPassword}
            />
            <RadioContainer
              name="gender"
              label="Gender"
              defaultValue="female"
            />
            <DatePickerContainer name="birthday" label="Birthday" />
            <SelectContainer name="hobbies" label="Hobbies" />
            <CheckBoxContainer
              name="acceptTerms"
              label="I Agree To The Term & Conditions"
            />
            <Button
              type="submit"
              sx={{ mt: 2, mb: 2 }}
              variant="contained"
              color="secondary"
            >
              Register
            </Button>
          </form>
        </FormProvider>
      </Grid>
    </Grid>
  );
}

export default SignUp;
