import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Link from '@material-ui/core/Link';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Copyright from '../../components/CopyRight';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  pos: {
    marginBottom: 12,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Chilco
          </Typography>
          <Button color="inherit" href="/signIn">Login</Button>
        </Toolbar>
      </AppBar>

      <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Download Chilco
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        Version 1.0
        </Typography>
        <Typography variant="body2" component="p">
          For Windows 7 x64 or later
        </Typography>
        <Typography variant="body2" color="textSecondary">
        <Link href="https://github.com/kaleresan/Chilco/releases" color="inherit">
        Release Notes
        </Link>
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small" variant="outlined" color="primary" href="https://github.com/kaleresan/Chilco/releases/download/1.0/ChilcoInstaller.msi">
      Download
      </Button>
      <Button size="small" variant="outlined" color="secondary" href="https://github.com/kaleresan/Chilco/releases">
      Earlier Versions
      </Button>
      </CardActions>
      </Card>

      <Copyright />
    </div>
  );
}
