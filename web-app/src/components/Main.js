import React from "react";
import MainAppBar from "./MainAppBar";
import SideDrawer from "./SideDrawer";
import Devices from "./Devices";

export default function Main(props) {
  const [state, setState] = React.useState({
    openMenuBar: false,
    isAuthenticated: props.auth.isAuthenticated,
    token: props.auth.token
  });
  React.useEffect(() => {
    setState({ ...state, isAuthenticated: props.auth.isAuthenticated });
    setState({ ...state, token: props.auth.token });
    checkAuth();
  }, [props.auth]);

  function checkAuth() {
    if (!state.isAuthenticated) props.history.push("/");
  }

  function handleMenuBarOpen() {
    setState({ openMenuBar: true });
  }

  function handleMenuBarClose() {
    setState({ openMenuBar: false });
  }

  function handleDevicesButton() {
    setState({ showDevices: true });
  }

  function handleSettingsButton() {
    setState({ showDevices: false });
  }

  return (
    <div id="parent">
      <MainAppBar onChildClick={handleMenuBarOpen} />
      <Devices token={state.token}/>
      <SideDrawer
        openMenuBar={state.openMenuBar}
        onMenuBarClose={handleMenuBarClose}
      />
    </div>
  );
}
