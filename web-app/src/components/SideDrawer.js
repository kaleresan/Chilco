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
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function SideDrawer(props) {
  const classes = useStyles();
  const [state, setState] = React.useState(props.openMenuBar);
  React.useEffect(() => { setState(props.openMenuBar);
   }, [props.openMenuBar]);

  const openDrawer = (open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    props.onMenuBarClose();
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onKeyDown={openDrawer(false)}
    >
      <List>
        {["Devices"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon><DevicesIcon /></ListItemIcon>
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
