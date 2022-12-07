import Typography from "@mui/material/Typography"

export default function GeneralBodyTitle(props) {
  return(
    <Typography variant="h3" gutterBottom>
      {props.title}
    </Typography>
  )
}
