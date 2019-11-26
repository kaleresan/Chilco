import React, { Component } from "react";
import MainAppBar from "./MainAppBar";
import SideDrawer from "./SideDrawer";
import Devices from "./Devices";
import DeviceSettings from "./DeviceSettings";

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenuBar: false
    };
    this.handleMenuBarOpen = this.handleMenuBarOpen.bind(this);
    this.handleMenuBarClose = this.handleMenuBarClose.bind(this);
  }

  handleMenuBarOpen() {
    this.setState({ openMenuBar: true });
  }

  handleMenuBarClose() {
    this.setState({ openMenuBar: false });
  }

  render() {
    return (
      <div id="parent">
        <MainAppBar onChildClick={this.handleMenuBarOpen} />
        <DeviceSettings />
        <SideDrawer
          openMenuBar={this.state.openMenuBar}
          onMenuBarClose={this.handleMenuBarClose}
        />
      </div>
    );
  }
}

export default Main;
