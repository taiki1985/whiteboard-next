import Fab from '@mui/material/Fab';
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey, red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      // main: grey[700],
      main: red[900],
    },
  },
});

export default function InfoIconDelete() {
  return(
    <>
      <ThemeProvider theme={theme}>
        <Tooltip title="削除する" placement="right">
          <Fab size="medium" color={"primary"} aria-label="edit">
            <DeleteIcon size="medium" />
          </Fab>
        </Tooltip>
      </ThemeProvider>
    </>
  )
}
