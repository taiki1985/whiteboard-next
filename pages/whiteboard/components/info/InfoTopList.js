import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


export default function InfoTopList(props) {
  return (
    <Grid item xs={6}>
      <Box sx={{  backgroundColor: props.bgColor, borderRadius: 1  }}>
      <Button variant="text" startIcon={props.icon} color="inherit" sx={{ width: "100%", color:"#ffffff" }}>
      { props.name }
      </Button>
      </Box>
    </Grid>
  )
}
