import Grid from '@mui/material/Unstable_Grid2';
import TopListItem from '../atoms/TopListItem';

export default function TopList(props) {

  const items = Object.entries(props.listItems).map(([key,element]) => {
    return (
      <Grid item>
        <TopListItem name={element.name} bgColor={element.bgColor} icon={element.icon} />
      </Grid>
    )
  });

  return (
    <>
      {/* <Grid container direction={"column"} spacing={1}> */}
      <Grid container sx={{ maxWidth:300 }} direction={"column"} columns={2} spacing={0.5}>
        {items}
      </Grid>
    </>
  )
}
