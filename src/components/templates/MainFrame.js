import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import HeaderBar from '../organisms/HeaderBar';
import SideDrawer from "../organisms/SideDrawer";
import MainSubtitle from "../atoms/MainSubtitle";
import MainBreadcrums from "../molecules/MainBreadcrumbs";

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
            <HeaderBar onClick={handleClick} open={openDrawer}/>
          </Grid>
          <Grid item xs={0} md={3}>
            <SideDrawer onClick={handleClick} open={openDrawer} />
          </Grid>
          <Grid item xs={12} md={9}>
            <Box component="main">
              <Toolbar />
              <MainBreadcrums />
              <MainSubtitle subtitle={props.subtitle} />
              {props.children}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
