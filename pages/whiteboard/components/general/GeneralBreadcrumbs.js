import Breadcrumbs from "@mui/material/Breadcrumbs"
import Link from "@mui/material/Link"
import Typography from "@mui/material/Typography"

export default function GeneralBreadcurms() {
  return(
    <Breadcrumbs sx={{ mb:2 }} aria-label="breadcrumb">
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
