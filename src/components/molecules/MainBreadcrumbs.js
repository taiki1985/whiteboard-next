import Breadcrumbs from "@mui/material/Breadcrumbs"
import Link from "@mui/material/Link"
import Typography from "@mui/material/Typography"

export default function MainBreadcurms() {
  return(
    <Breadcrumbs sx={{ mb:2 }}>
      <Link underline="hover" color="inherit" href="/whiteboard">
        White Board
      </Link>
      <Link
        underline="hover"
        color="inherit"
        href="/whiteboard/"
      >
        Infomation
      </Link>
      <Typography color="text.primary">Top</Typography>
    </Breadcrumbs>
  )
}
