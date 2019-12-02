import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DevicesIcon from '@material-ui/icons/Devices';

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  }
});

interface SideDrawerPropsType {
  openMenuBar: boolean;
  onMenuBarClose: () => void;
  onDevicesButtonClick: () => void;
}
export default function SideDrawer({
  openMenuBar,
  onMenuBarClose = () => {},
  onDevicesButtonClick = () => {}
}: SideDrawerPropsType) {
  const classes = useStyles();
  const [state, setState] = React.useState(openMenuBar);
  React.useEffect(() => {
    setState(openMenuBar);
  }, [openMenuBar]);

  const openDrawer = open => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    onMenuBarClose();
  };

  const clickDevicesButton = event => {
    onDevicesButtonClick();
  };

  const sideList = () => (
    <div
      className={classes.list}
      role="presentation"
      onKeyDown={openDrawer(false)}
      onClick={openDrawer(false)}
    >
      <List>
        {['Devices'].map((text, index) => (
          <ListItem button key={text} onClick={clickDevicesButton}>
            <ListItemIcon>
              <DevicesIcon />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <Drawer open={state} onClose={openDrawer(false)}>
        {sideList()}
      </Drawer>
    </div>
  );
}
