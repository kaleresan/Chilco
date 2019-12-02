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
  settings: {
    padding: theme.spacing(3, 2),
    width: "15%"
  },
  processList: {
    width: "85%"
  },
  groupList: {
    width: "60%"
  },
  wrapper: {
    position: "relative",
    display: "flex",
    top: "40px"
  },
  root: {
    textAllign: "center"
  }
}));

interface DeviceSettingsPropsType {
  deviceId?: string;
}
export function DeviceSettings({  }: DeviceSettingsPropsType) {
  const classes = useStyles();
  const [state, setState] = React.useState<any>({
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
      data: []
    }
  });

  const updateGroupName = () => event => {
    setState({ ...state, groupName: event.target.value });
  };

  const updateTimeRollover = () => event => {
    setState({ ...state, timeRollover: event.target.checked });
    console.log(state.timeRollover);
  };

  const updateHours = () => event => {
    setState({ ...state, timeHours: event.target.value });
  };

  const updateMinutes = () => event => {
    setState({ ...state, timeMinutes: event.target.value });
  };

  function getSelectedProcesses(data) {
    setState({ ...state, selectedProcesses: data });
  }

  function updateGroupListData(data) {
    const temp = state.groupList;
    temp.data = data;
    setState({ ...state, groupList: temp });

    groupsToAPI();
  }

  function submitGroup() {
    if (
      state.groupName === "" ||
      state.timeMinutes === "" ||
      state.timeHours === "" ||
      state.selectedProcesses.length === 0
    )
      return;

    for (let index = 0; index < state.groupList.data.length; index++) {
      if (state.groupList.data[index].name === state.groupName) return;
    }

    addGroupToList(
      state.groupName,
      state.timeMinutes,
      state.timeHours,
      state.timeRollover
    );
    setState({ ...state, groupName: "" });
  }

  function addGroupToList(name, minutes, hours, timeRollover) {
    let rollover = "Disabled";
    if (timeRollover) rollover = "Enabled";
    const time = hours + ":" + minutes;
    const group = { name: name, time: time, timeRollover: rollover };
    const groupList = state.groupList;

    groupList.data.push(group);
    setState({ ...state, groupList: groupList });
  }

  function groupsToAPI() {
    // TODO: Send All Groups TO Database...
  }

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <ProcessList
          className={classes.processList}
          tableData={state}
          onProcessesSelected={getSelectedProcesses}
        />
        <Paper className={classes.settings}>
          <Typography variant="h5" component="h3">
            Settings
          </Typography>

          <TextField
            id="groupName"
            margin="normal"
            label="Group Name"
            value={state.groupName}
            onInput={updateGroupName()}
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
                  onChange={updateTimeRollover()}
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
      <GroupList
        className={classes.groupList}
        tableData={state}
        onGroupDelete={updateGroupListData}
      />
    </div>
  );
}
export default DeviceSettings;
