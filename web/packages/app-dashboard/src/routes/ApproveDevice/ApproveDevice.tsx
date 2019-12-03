import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import PageContainer from '../../components/PageContainer';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/core/SvgIcon/SvgIcon';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Copyright from '../../components/CopyRight';
import { makeStyles } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { approveDevice } from '../../actions/api';
import { StateType } from '../../reducers';
import { SIGN_IN_PATH } from '../../App/AppRouter';
import { push } from 'connected-react-router';

const StyledContainer = styled.div`
  flex: 1;
`;

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
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

interface ApproveDevicePropsType {
  match: any;
}
export function ApproveDevice({
  match: {
    params: { token }
  }
}: ApproveDevicePropsType) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [isErrored, setIsErrored] = useState(false);

  const authToken = useSelector((state: StateType) => state.account.token);
  useEffect(() => {
    !authToken &&
      dispatch(push(`${SIGN_IN_PATH}?path=${window.location.pathname}`));
  }, [authToken, dispatch]);

  const onSubmit = event => {
    event.preventDefault();
    dispatch(approveDevice(token, () => setIsErrored(true)));
  };

  if (isErrored) {
    return (
      <StyledContainer>
        <PageContainer>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
              <Avatar className={classes.avatarLarge}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Your token does not work please try it again!
              </Typography>
              <form
                className={classes.form}
                onSubmit={() => dispatch(push('/'))}
              >
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Go to Dashboard
                </Button>
              </form>
            </div>
            <Box mt={8}>
              <Copyright />
            </Box>
          </Container>
        </PageContainer>
      </StyledContainer>
    );
  }

  return (
    <StyledContainer>
      <PageContainer>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatarLarge}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              You need to approve the device
            </Typography>
            <form className={classes.form} onSubmit={onSubmit}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Approve Device
              </Button>
            </form>
          </div>
          <Box mt={8}>
            <Copyright />
          </Box>
        </Container>
      </PageContainer>
    </StyledContainer>
  );
}
export default ApproveDevice;
