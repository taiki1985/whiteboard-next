import Fab from '@mui/material/Fab';
import Tooltip from '@mui/material/Tooltip';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';

const theme = createTheme({
  palette: {
    primary: {
      main: grey[600],
    },
  },
});

export default function InfoIconReply() {
  return(
    <>
      <ThemeProvider theme={theme}>
        <Tooltip title="一覧に戻る" placement="right">
          <Fab color={"primary"} aria-label="reply">
            <ReplyAllIcon />
          </Fab>
        </Tooltip>
      </ThemeProvider>
    </>
  )
}
