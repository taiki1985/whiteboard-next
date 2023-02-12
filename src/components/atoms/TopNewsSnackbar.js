import Alert from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close'

export default function TopNewsSnackbar(props) {


  return (
    <>
      <Alert
        action={<CloseIcon fontSize="small"/>}
        severity="info"
        variant="filled"
        sx={{
          py: 0.25,
          "& .MuiAlert-message": {
            padding : 0.5,
            lineHeight: 1.5,
          },
          "& .MuiAlert-icon": {
            padding : 0.5,
          },
          "& .MuiAlert-action": {
            padding : 0.5,
          },
        }}
      >
        {props.content}
      </Alert>
    </>

  )
}
