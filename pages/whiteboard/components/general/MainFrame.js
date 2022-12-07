import * as React from 'react';
import TopBar from "./TopBar"
import Box from '@mui/material/Box';
import SideDrawer from "../side/SideDrawer";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";

export default function MainFrame(props) {
  const [openDrawer, setOpenDrawer] = React.useState(false)
  const handleClick = (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }

      setOpenDrawer( !openDrawer );
  };
  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TopBar onClick={handleClick} open={openDrawer}/>
          </Grid>
          <Grid item xs={0} md={3}>
            <SideDrawer onClick={handleClick} open={openDrawer} />
          </Grid>
          <Grid item xs={12} md={9}>
            <Box component="main">
              <Toolbar />
              {props.children}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
