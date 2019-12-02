import React from 'react';

import PageContainer from '../../components/PageContainer';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/core/SvgIcon/SvgIcon';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core';
import Copyright from '../../components/CopyRight';
import { useDispatch } from 'react-redux';
import { register } from '../../actions/api';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatarLarge: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export interface SignUpPropsType {
  history: any;
}
export interface SignUpStateType {
  email: string;
  password: string;
  lastname: string;
  firstname: string;
  isEmailValid: boolean;
  isLastnameValid: boolean;
  isPasswordValid: boolean;
  isFirstnameValid: boolean;
}
export function SignUp({ history }: SignUpPropsType) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [state, setState] = React.useState({
    email: '',
    password: '',
    lastname: '',
    firstname: '',
    isEmailValid: true,
    isFirstnameValid: true,
    isLastnameValid: true,
    isPasswordValid: true
  });

  const updateFirstName = () => event => {
    setState({
      ...state,
      firstname: event.target.value,
      isFirstnameValid: true
    });
  };

  const updateLastName = () => event => {
    setState({ ...state, lastname: event.target.value, isLastnameValid: true });
  };

  const updateEmail = () => event => {
    setState({ ...state, email: event.target.value, isEmailValid: true });
  };

  const updatePassword = () => event => {
    setState({ ...state, password: event.target.value, isPasswordValid: true });
  };

  function signUpRequest(event) {
    const { email, password, firstname, lastname } = state;

    if (
      (email || '').match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      setState({ ...state, isPasswordValid: false });
      return;
    }

    dispatch(register({ email, password, firstname, lastname }));
    event.preventDefault();
  }
  return (
    <PageContainer>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatarLarge}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} onSubmit={signUpRequest}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={updateFirstName()}
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  error={!state.isFirstnameValid}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={updateLastName()}
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                  error={!state.isLastnameValid}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={updateEmail()}
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  error={!state.isEmailValid}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={updatePassword()}
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  error={!state.isPasswordValid}
                  autoComplete="current-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </PageContainer>
  );
}
export default SignUp;
