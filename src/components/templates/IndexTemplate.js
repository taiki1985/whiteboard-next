import MainFrame from "./MainFrame";
import Grid from '@mui/material/Unstable_Grid2';
import TopList from "../organisms/TopList";
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import Fab from '@mui/material/Fab';

export default function IndexTemplate(props) {

  return (
    <MainFrame subtitle={props.subtitle}>
      <TopList listItems={props.listItems}/>
    </MainFrame>
  )
}
