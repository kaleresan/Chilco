import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ProcessList from "./ProcessList";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    width: "40%"
  },
  processList: {
    width: "60%"
  },
  wrapper: {
    position: "relative",
    overflow: "hidden",
    width: "70%",
    display: "flex"
  }
}));

export default function Settings() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    timeMinutes: "",
    timeHours: "",
    timeRollover: false
  });

  const updateTimeRollover = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const updateHours = value => event => {
    setState({ ...state, timeHours: event.target.value });
  };

  const updateMinutes = value => event => {
    setState({ ...state, timeMinutes: event.target.value });
  };

  return (
    <div className={classes.wrapper}>
      <ProcessList className={classes.processList} />
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          Settings
        </Typography>

        <TextField
          id="groupName"
          label="Group Name"
          className={classes.textField}
          margin="normal"
        />

        <FormControl>
          <FormControl>
            <InputLabel>Hours</InputLabel>
            <Select value={state.timeHours} onChange={updateHours()}>
              <MenuItem value={0}>0</MenuItem>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={8}>8</MenuItem>
              <MenuItem value={9}>9</MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={11}>11</MenuItem>
              <MenuItem value={12}>12</MenuItem>
            </Select>
          </FormControl>

          <FormControl>
            <InputLabel>Minutes</InputLabel>
            <Select value={state.timeMinutes} onChange={updateMinutes()}>
              <MenuItem value={0}>0</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={15}>15</MenuItem>
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={25}>25</MenuItem>
              <MenuItem value={30}>30</MenuItem>
              <MenuItem value={35}>35</MenuItem>
              <MenuItem value={40}>40</MenuItem>
              <MenuItem value={45}>45</MenuItem>
              <MenuItem value={50}>50</MenuItem>
              <MenuItem value={55}>55</MenuItem>
            </Select>
          </FormControl>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.timeRollover}
                onChange={updateTimeRollover("timeRollover")}
              />
            }
            label="Enable time rollover"
          />
        </FormControl>

        <Button variant="contained" color="primary">
          Submit
        </Button>
      </Paper>
    </div>
  );
}
