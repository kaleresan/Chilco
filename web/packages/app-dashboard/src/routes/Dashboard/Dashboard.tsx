import React, { Component } from 'react';
import styled from 'styled-components';

import MainAppBar from '../../components/MainAppBar';
import Devices from '../../components/Devices';
import SideDrawer from '../../components/SideDrawer';

const StyledContainer = styled.div`
  flex: 1;
`;

interface DashboardPropsType {}
interface DashboardStateType {
  showDevices: boolean;
  openMenuBar: boolean;
}
export class Dashboard extends Component<DashboardPropsType, DashboardStateType> {
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
      <StyledContainer>
        <MainAppBar onChildClick={this.handleMenuBarOpen} />
        <Devices
          showDevices={this.state.showDevices}
          onSettingsButtonClick={this.handleSettingsButton}
        />
        <SideDrawer
          openMenuBar={this.state.openMenuBar}
          onMenuBarClose={this.handleMenuBarClose}
          onDevicesButtonClick={this.handleDevicesButton}
        />
      </StyledContainer>
    );
  }
}
export default Dashboard;
