import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import { green } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: green[700],
    },
  },
});

export default function InfoIconEdit() {
  return(
    <>
      <ThemeProvider theme={theme}>
        <Tooltip title="編集する" placement="right">
          <Fab color={"success"} aria-label="edit">
            <EditIcon fontSize={"medium"} />
          </Fab>
        </Tooltip>
      </ThemeProvider>
    </>
  )
}
