import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import HeaderIcon from '../atoms/HeaderIcon';
import HeaderLoginButton from '../atoms/HeaderLoginButton';

export default function HeaderBar(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <HeaderIcon />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Growell
          </Typography>
          <HeaderLoginButton />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
