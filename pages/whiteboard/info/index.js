import MainFrame from "../components/general/MainFrame";
import GeneralBodyTitle from "../components/general/GeneralBodyTitle"
import GeneralBreadcurmbs from "../components/general/GeneralBreadcrumbs";
import InfoDataTable from "../components/info/InfoTopTable";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Fab from "@mui/material/Fab";
import ReplyAllIcon from '@mui/icons-material/ReplyAll';

export default function InfoIndex() {

  return (
    <MainFrame>
      <GeneralBreadcurmbs />
      <GeneralBodyTitle title="ホテル一覧"/>
      <Grid container spacing={1} sx={{ mt:3 }}>
      <InfoDataTable />
        <Grid container xs={12} alignItems="end" sx={{position: 'relative'}}>
          <Fab sx={{position: 'absolute', top:-30, right:30}}>
            <ReplyAllIcon />
          </Fab>
        </Grid>
      </Grid>
    </MainFrame>
  )
}
