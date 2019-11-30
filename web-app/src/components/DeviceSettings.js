import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ProcessList from "./ProcessList";
import GroupList from "./GroupList";
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
    groupName: "",
    timeMinutes: "",
    timeHours: "",
    timeRollover: false,
    selectedProcesses: [],
    processList: {
      columns: [{ title: "Process Name", field: "name" }],
      data: [{ name: "test" }, { name: "test2" }, { name: "test3" }]
    },
    groupList: {
      columns: [
        { title: "Group Name", field: "name" },
        { title: "Time", field: "time" },
        { title: "Time Rollover", field: "timeRollover" }
      ],
      data: [{ name: "test", time: "1:25", timeRollover: "Enabled" }]
    }
  });

  const updateGroupName = value => event => {
    setState({ ...state, groupName: event.target.value });
  };

  const updateTimeRollover = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const updateHours = value => event => {
    setState({ ...state, timeHours: event.target.value });
  };

  const updateMinutes = value => event => {
    setState({ ...state, timeMinutes: event.target.value });
  };

  function getSelectedProcesses(data) {
    setState({ ...state, selectedProcesses: data });
  }

  function submitGroup() {
    if (
      state.groupName === "" ||
      state.timeMinutes === "" ||
      state.timeHours === "" ||
      state.selectedProcesses.length === 0
    )
      return;
    addGroupToList(
      state.groupName,
      state.timeMinutes,
      state.timeHours,
      state.selectedProcesses
    );
  }

  function addGroupToList(name, minutes, hours, timeRollover) {
    let rollover = "Disabled";
    if (timeRollover) rollover = "Enabled";
    let time = hours + ":" + minutes;
    let group = { name: name, time: time, timeRollover: rollover };
    let groupList = state.groupList;

    groupList.data.push(group);
    setState({ ...state, groupList: groupList });
  }

  function groupsToAPI() {
    // TODO: Send All Groups TO Database...
  }

  return (
    <div className={classes.wrapper}>
      <ProcessList
        className={classes.processList}
        tableData={state}
        onProcessesSelected={getSelectedProcesses}
      />
      <GroupList className={classes.groupList} tableData={state} />
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          Settings
        </Typography>

        <TextField
          id="groupName"
          label="Group Name"
          value={state.groupName}
          onInput={updateGroupName()}
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

        <Button variant="contained" color="primary" onClick={submitGroup}>
          Submit
        </Button>
      </Paper>
    </div>
  );
}
