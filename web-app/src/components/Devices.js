import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';

const useStyles = makeStyles({
  root: {
    width: '90%',
    position: 'absolute', left: '50%', top: '25%',
    transform: 'translate(-50%, -50%)',
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
  dot: {
  height: '10px',
  width: '10px',
  borderRadius: '50%',
  display: 'inline-block'
  }
});

function createData(name, user, isOnline) {
  return { name, user, isOnline};
}

function statusColor(isOnline)  {
  if (isOnline) return {backgroundColor:'#00e676'};
  return {backgroundColor:'#e53935'}
}

const rows = [
  createData('PC-XG368', 'Hans Müller', true),
  createData('PC-BDF381', 'Max Müller', false)
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left">Device</TableCell>
            <TableCell align="left">User</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
            <TableCell align="left">
              <span className={classes.dot} style={statusColor(row.isOnline)}></span>
            </TableCell>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.user}</TableCell>
              <TableCell align="right">
                <IconButton edge="start" className={classes.settingsButton} color="inherit" aria-label="settings">
                  <SettingsIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
