import MainFrame from "./MainFrame";
import Grid from "@mui/material/Grid";
import InfoDetailButtonGroup from "../molecules/InfoDetailButtonGroup";
import InfoConfirm from "../organisms/InfoConfirm";
import DetailsInCard from "../molecules/DetailInCard";

export default function InfoDetailTemplate(props) {

  return (
    <MainFrame subtitle={props.subtitle}>
      <Grid container spacing={1} sx={{ mt:3 }}>
        <Grid item xs={8}>
          <DetailsInCard />
        </Grid>
        <Grid container xs={4} alignItems="end" sx={{ pl:5, position: 'relative'}}>
          <InfoDetailButtonGroup />
          <InfoConfirm />
        </Grid>
      </Grid>
    </MainFrame>
  )
}
