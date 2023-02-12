import Button from '@mui/material/Button';
import { grey } from "@mui/material/colors";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    secondary: {
      main: grey[600]
    },
  }
})

export default function CancelButton(props) {

  return (
    <ThemeProvider theme={theme}>
     <Button size="large" variant="outlined" color="secondary" onClick={props.onClick}>キャンセル</Button>
    </ThemeProvider>
  )
}
