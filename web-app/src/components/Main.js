import React, { Component } from "react";
import MainAppBar from "./MainAppBar"
import SideDrawer from "./SideDrawer"

export class Main extends Component {
  constructor (props) {
   super(props)
   this.state = {
     openMenuBar: true
   }
 }

  function handleMenuBarToggle(menuBarState) {
    console.log("change logged")
    this.setState({openMenuBar: menuBarState});
  }

  render() {
  return (
    <div id="parent">
    <MainAppBar
    onMenuBarToggle={handleMenuBarToggle}
    />
    <SideDrawer
    openMenuBar={this.state.openMenuBar}
    />
    </div>
  )
}
}

export default Main;
