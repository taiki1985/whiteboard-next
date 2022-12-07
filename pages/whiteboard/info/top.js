import MainFrame from "../components/general/MainFrame";
import GeneralBodyTitle from "../components/general/GeneralBodyTitle"
import GeneralBreadcurmbs from "../components/general/GeneralBreadcrumbs"
import Grid from '@mui/material/Unstable_Grid2';
import InfoTopList from "../components/info/InfoTopList";
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import Fab from '@mui/material/Fab';

export default function InfoTop() {
  const elements = {
    hotel: {
      name: "ホテル",
      bgColor: "#3f51b5",
      icon: <HotelOutlinedIcon />
    },
    car: {
      name: "車両",
      bgColor: "#f44336",
      icon: <DirectionsCarIcon />
    },
    campany: {
      name: "会社",
      bgColor: "#f44336",
      icon: <DirectionsCarIcon />
    },
    airport: {
      name: "車両",
      bgColor: "#f44336",
      icon: <DirectionsCarIcon />
    },
    country: {
      name: "会社",
      bgColor: "#f44336",
      icon: <DirectionsCarIcon />
    },
    port: {
      name: "車両",
      bgColor: "#f44336",
      icon: <DirectionsCarIcon />
    },
    zone: {
      name: "会社",
      bgColor: "#f44336",
      icon: <DirectionsCarIcon />
    },
  }

  const items = () => {
    const lists = Object.entries(elements).map((value) => {
      const [key, element] = value
      return <InfoTopList name={element.name} bgColor={element.bgColor} icon={element.icon} />
    });
    return lists
  }

  return (
    <MainFrame>
      <GeneralBreadcurmbs />
      <GeneralBodyTitle title="Top"/>
      <Grid container spacing={1} sx={{ mt:3 }}>
        {items()}
        <Grid container xs={12} alignItems="end" sx={{position: 'relative'}}>
          <Fab sx={{position: 'absolute', top:75, right:-75}}>
            <ReplyAllIcon />
          </Fab>
        </Grid>
      </Grid>
    </MainFrame>
  )
}
