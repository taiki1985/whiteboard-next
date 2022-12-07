import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import WorkIcon from '@mui/icons-material/Work';
import InfoIcon from '@mui/icons-material/Info';
import CalculateIcon from '@mui/icons-material/Calculate';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import DescriptionIcon from '@mui/icons-material/Description';
import CircleIcon from '@mui/icons-material/Circle';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { ListItem } from '@mui/material';


export default function SideList() {

  const [toggleList, setToggleList] = React.useState({
    work_list: true,
    info_list: false,
  });

  const handleClick = (anchor) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setToggleList({ ...toggleList, [anchor] : !toggleList[anchor] });
  };

  const work = {
    today: "本日の業務",
    create: "新規登録",
    calendar: "カレンダー",
    booking: "予約状況",
    trushbox: "ゴミ箱",
    search: "データ検索",
  }

  const info = {
    user: "ユーザー",
    comapny: "会社",
    hotel: "ホテル",
    airline: "航空会社",
    airport: "空港",
    country: "国籍",
    port: "港",
    zone: "区域",
    rank: "ランク",
    car: "車両",
    authority: "官庁",
  }

  const createList = (list) => {
    const array_list = Object.entries(list).map(([key, value]) => {
      return(
        <ListItemButton sx={{ pl: 4 }} dense={true}>
            <ListItemIcon>
              <CircleOutlinedIcon fontSize="small"/>
            </ListItemIcon>
            <ListItemText primary={value} />
        </ListItemButton>
      )
    })
    return array_list
  }

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
    >
      {/* 業務管理 */}
      <ListItemButton onClick={handleClick('work_list')}>
        <ListItemIcon>
          <WorkIcon />
        </ListItemIcon>
        <ListItemText primary="業務管理" />
        {toggleList['work_list'] ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={toggleList['work_list']} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {createList(work)}
        </List>
      </Collapse>
      {/* 見積作成 */}
      <ListItem>
        <ListItemIcon>
          <CalculateIcon />
        </ListItemIcon>
        <ListItemText primary="見積作成" />
      </ListItem>
      {/* 請求書管理 */}
      <ListItem>
        <ListItemIcon>
          <DescriptionIcon />
        </ListItemIcon>
        <ListItemText primary="請求書管理" />
      </ListItem>
      {/* 基本情報 */}
      <ListItemButton onClick={handleClick('info_list')}>
        <ListItemIcon>
          <InfoIcon />
        </ListItemIcon>
        <ListItemText primary="基本情報" />
        {toggleList['info_list'] ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={toggleList['info_list']} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {createList(info)}
        </List>
      </Collapse>
    </List>
  );
}
