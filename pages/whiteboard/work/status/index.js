import IndexTemplate from "../../../../src/components/templates/IndexTemplate"
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
import { red, pink, yellow, purple, deepPurple, indigo, cyan, teal, green, lightGreen, deepOrange } from '@mui/material/colors';

export default function InfoIndex() {

  const mainsubtitle = "業務ステータス 一覧";

  const elements = {
    hotel: {
      name: "ホテル予約",
      bgColor: yellow[700],
      icon: <HotelOutlinedIcon />
    },
    airline: {
      name: "航空会社通報系",
      bgColor: yellow[700],
      icon: <AirlinesIcon />
    },
    car: {
      name: "レンタカー予約",
      bgColor: yellow[700],
      icon: <DirectionsCarIcon />
    },
  }

  return (
    <IndexTemplate subtitle={mainsubtitle} listItems={elements}/>
  )
}
