import Typography from "@mui/material/Typography"

export default function MainSubtitle(props) {
  return(
    <Typography variant="h4" gutterBottom>
      {props.subtitle}
    </Typography>
  )
}
