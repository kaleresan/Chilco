import React, { Component } from "react";
import MainAppBar from "./MainAppBar";
import SideDrawer from "./SideDrawer";
import Devices from "./Devices";

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenuBar: false,
      showDevices: true
    };
    this.handleMenuBarOpen = this.handleMenuBarOpen.bind(this);
    this.handleMenuBarClose = this.handleMenuBarClose.bind(this);
    this.handleDevicesButton = this.handleDevicesButton.bind(this);
    this.handleSettingsButton = this.handleSettingsButton.bind(this);
  }

  handleMenuBarOpen() {
    this.setState({ openMenuBar: true });
  }

  handleMenuBarClose() {
    this.setState({ openMenuBar: false });
  }

  handleDevicesButton() {
    this.setState({ showDevices: true });
  }

  handleSettingsButton() {
    this.setState({ showDevices: false });
  }

  render() {
    return (
      <div id="parent">
        <MainAppBar onChildClick={this.handleMenuBarOpen} />
        <Devices
          showDevices={this.showDevices}
          onSettingsButtonClick={this.handleSettingsButton}
        />
        <SideDrawer
          openMenuBar={this.state.openMenuBar}
          onMenuBarClose={this.handleMenuBarClose}
          onDevicesButtonClick={this.handleDevicesButton}
        />
      </div>
    );
  }
}

export default Main;
