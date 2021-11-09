import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Grid, Typography, Button } from '@mui/material';
import { Box } from '@mui/system';
import SubComponent1 from '../components/SubComponent1';
import SubComponent2 from '../components/SubComponents2';

interface IFormInputs {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

const schema = yup.object().shape({
  email: yup.string().email(),
  password: yup.string().min(4).max(20).required(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
});

const ComplexForm: React.FC = () => {
  const methods = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    console.log(data);
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
          <form
            style={{ marginTop: '20px', marginBottom: '20px' }}
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            <SubComponent1 />
            <SubComponent2 />
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </form>
        </FormProvider>
      </Grid>
    </Grid>
  );
};

export default ComplexForm;
