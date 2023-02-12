import MainFrame from "./MainFrame";
import Grid from "@mui/material/Grid";
import InfoTable from "../organisms/InfoTable";
import InfoIndexButtonGroup from "../molecules/InfoIndexButtonGroup";

export default function InfoTopTemplate(props) {

  return (
    <MainFrame subtitle={props.subtitle + "詳細"}>
      <Grid container spacing={1} sx={{ mt:3 }}>
        <Grid item xs={8}>
          <InfoTable tableColumns={props.tableColumns} tableData={props.tableData}/>
        </Grid>
        <Grid container xs={4} alignItems="end" sx={{pl:1, position: 'relative' }}>
          <InfoIndexButtonGroup />
        </Grid>
      </Grid>
    </MainFrame>
  )
}
