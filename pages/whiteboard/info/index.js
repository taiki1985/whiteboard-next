import IndexTemplate from "../../../src/components/templates/IndexTemplate"
import ApartmentIcon from '@mui/icons-material/Apartment';
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';
import AirlinesIcon from '@mui/icons-material/Airlines';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import PublicIcon from '@mui/icons-material/Public';
import DirectionsBoatFilledIcon from '@mui/icons-material/DirectionsBoatFilled';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { red, pink, purple, deepPurple, indigo, cyan, teal, green, lightGreen, deepOrange } from '@mui/material/colors';

export default function InfoIndex() {

  const mainsubtitle = "基本情報 一覧";

  const elements = {
    campany: {
      name: "会社",
      bgColor: red[700],
      icon: <ApartmentIcon />
    },
    hotel: {
      name: "ホテル",
      bgColor: pink[700],
      icon: <HotelOutlinedIcon />
    },
    airline: {
      name: "航空会社",
      bgColor: purple[700],
      icon: <AirlinesIcon />
    },
    airport: {
      name: "空港",
      bgColor: deepPurple[700],
      icon: <FlightTakeoffIcon />
    },
    country: {
      name: "国籍",
      bgColor: indigo[700],
      icon: <PublicIcon />
    },
    port: {
      name: "港",
      bgColor: cyan[700],
      icon: <DirectionsBoatFilledIcon />
    },
    zone: {
      name: "区域",
      bgColor: teal[700],
      icon: <FmdGoodIcon />
    },
    rank: {
      name: "ランク",
      bgColor: green[700],
      icon: <MilitaryTechIcon />
    },
    car: {
      name: "車両",
      bgColor: lightGreen[700],
      icon: <DirectionsCarIcon />
    },
    authority: {
      name: "官庁",
      bgColor: deepOrange[700],
      icon: <AccountBalanceIcon />
    },
  }

  return (
    <IndexTemplate subtitle={mainsubtitle} listItems={elements}/>
  )
}
