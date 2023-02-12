import * as React from 'react';
import MainFrame from "./MainFrame";
import Grid from "@mui/material/Grid";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
// ボタン群
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
// import InfoDetailTable from "../organisms/InfoDetailTable"
import { Stack } from '@mui/system';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';

export default function WorkSearchTemplate(props) {
  function generate(element) {
    return [0, 1, 2].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }
  const [secondary, setSecondary] = React.useState(false);
  return (
    <MainFrame subtitle="業務検索">
      <Grid
        container
        direction="column"
        spacing={2}
      >
        {/* 検索フォーム */}
        <Grid item>
          <Paper
          component="form"
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search"
            inputProps={{ 'aria-label': 'search google maps' }}
          />
          <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
          </Paper>
        </Grid>
        <Grid item>
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">検索期間</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="1ヶ月" control={<Radio />} label="1ヶ月" />
              <FormControlLabel value="3ヶ月" control={<Radio />} label="3ヶ月" />
              <FormControlLabel value="6ヶ月" control={<Radio />} label="6ヶ月" />
              <FormControlLabel value="1年" control={<Radio />} label="1年" />
              <FormControlLabel value="全て" control={<Radio />} label="全て" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl>
            <FormControlLabel value="期間" control={<Radio />} label="期間" />
            <Grid container direction="row" spacing={1}>
              <Grid item>
                <FormControl sx={{  width:"100%" }} size="small">
                  <InputLabel id="demo-select-small">年</InputLabel>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={1900}
                    label="年"
                    onChange={()=>{}}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1900}>1900</MenuItem>
                    <MenuItem value={2000}>2000</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item>
                <FormControl sx={{  width:"100%" }} size="small">
                  <InputLabel id="demo-select-small">月</InputLabel>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={10}
                    label="月"
                    onChange={()=>{}}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>01</MenuItem>
                    <MenuItem value={20}>02</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item>
                <FormControl sx={{  width:"100%" }} size="small">
                  <InputLabel id="demo-select-small">日</InputLabel>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={10}
                    label="日"
                    onChange={()=>{}}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>01</MenuItem>
                    <MenuItem value={20}>31</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item>
                <FormControl sx={{  width:"100%" }} size="small">
                  <InputLabel id="demo-select-small">年</InputLabel>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={1900}
                    label="年"
                    onChange={()=>{}}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1900}>1900</MenuItem>
                    <MenuItem value={2000}>2000</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item>
                <FormControl sx={{  width:"100%" }} size="small">
                  <InputLabel id="demo-select-small">月</InputLabel>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={1}
                    label="月"
                    onChange={()=>{}}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>1</MenuItem>
                    <MenuItem value={20}>2</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item>
                <FormControl sx={{  width:"100%" }} size="small">
                  <InputLabel id="demo-select-small">日</InputLabel>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={10}
                    label="日"
                    onChange={()=>{}}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>01</MenuItem>
                    <MenuItem value={20}>31</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              {/* </FormControl> */}

              {/* <Grid item>
                <FormControl sx={{  width:"100%" }} size="small">
                  <InputLabel id="demo-select-small">年</InputLabel>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={1900}
                    label="年"
                    onChange={()=>{}}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1900}>1900</MenuItem>
                    <MenuItem value={2000}>2000</MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={{  width:"100%" }} size="small">
                  <InputLabel id="demo-select-small">月</InputLabel>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={1}
                    label="月"
                    onChange={()=>{}}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>1</MenuItem>
                    <MenuItem value={20}>2</MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={{  width:"100%" }} size="small">
                  <InputLabel id="demo-select-small">日</InputLabel>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={10}
                    label="日"
                    onChange={()=>{}}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>01</MenuItem>
                    <MenuItem value={20}>31</MenuItem>
                  </Select>
                </FormControl>
              </Grid> */}
            </Grid>
          </FormControl>
        </Grid>
        <Divider sx={{ my: 2 }}/>
        {/* <InfoDetailTable /> */}
        {/* ボタン群 */}
        <Grid item>
          <List sx={{ width: '100%', maxWidth: 400, bgcolor: 'background.paper' }}>
            <ListItem
              alignItems="flex-start"
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemText
                primary="JAG LOKESH"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.secoundry"
                    >
                      インチケープシッピング 乗船 3名
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider component="li" />
            <ListItem
              alignItems="flex-start"
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemText
                primary="JAG LOKESH"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.secoundry"
                    >
                      インチケープシッピング 乗船 3名
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider component="li" />
            <ListItem
              alignItems="flex-start"
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemText
                primary="JAG LOKESH"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.secoundry"
                    >
                      インチケープシッピング 乗船 3名
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider component="li" />
            <ListItem
              alignItems="flex-start"
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemText
                primary="JAG LOKESH"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.secoundry"
                    >
                      インチケープシッピング 乗船 3名
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider component="li" />
            <ListItem
              alignItems="flex-start"
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemText
                primary="JAG LOKESH"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.secoundry"
                    >
                      インチケープシッピング 乗船 3名
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider component="li" />
            <ListItem
              alignItems="flex-start"
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemText
                primary="JAG LOKESH"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.secoundry"
                    >
                      インチケープシッピング 乗船 3名
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider component="li" />
          </List>
        </Grid>
      </Grid>
    </MainFrame>
  )
}
