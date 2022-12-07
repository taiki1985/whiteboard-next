import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import SideList from './SideList';
import useMediaQuery from '@mui/material/useMediaQuery';


export default function SideDrawer(props) {

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onKeyDown={props.onClick}
    >
      <SideList />
    </Box>
  );
  const drawerWidth = 255;

  const variant = useMediaQuery('(min-width:800px)');

  return (
    <div>
      {/* <React.Fragment> */}
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
          }}
          anchor="left"
          open={props.open}
          variant={variant ? 'permanent' : 'temporary'}
          onClose={props.onClick}
        >
          <Toolbar />
          {list("left")}
        </Drawer>
      {/* </React.Fragment> */}
    </div>
  );
}
