import MainFrame from "../../../src/components/templates/MainFrame";
// import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import * as React from 'react';
// import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// フォームカード
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Divider from '@mui/material/Divider';
// import InfoIconCreate from "../../../src/components/atoms/InfoIconCreate"
// フォームカード ここまで
// フォーム(タイムライン)
import WorkTimeline from "../../../src/components/organisms/WorkTimeLine";
// フォーム(タイムライン) ここまで

// import SelectForm from "../components/forms/SelectForm";
import Button from "@mui/material/Button";
import { Work } from "@mui/icons-material";
// import HotelFormGroup from "../components/work/formgroup/HotelFormGroup";
// import CrewFormGroup from "../components/work/formgroup/CrewFormGroup";
// import ActionPlanFormGroup from "../components/work/formgroup/ActionPlanFormGroup";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function InfoIndex() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [age, setAge] = React.useState('');

  const handleChangeSelect = (event) => {
    setAge(event.target.value);
  };

  return (
    <MainFrame>
      <Grid container spacing={1} sx={{ mt:3 }}>
        <Grid item xs={8}>
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Item One" {...a11yProps(0)} />
                <Tab label="Item Two" {...a11yProps(1)} />
                <Tab label="Item Three" {...a11yProps(2)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              {/* <HotelFormGroup /> */}
              <Stack direction="column" spacing={3} justifyContent="center">
                <Card sx={{ width: "100%", maxWidth: 600 }}>
                  <CardHeader
                    action={<IconButton><CloseIcon /></IconButton>}
                    subheader="ホテル"
                  />
                  <CardContent>
                    <Stack spacing={1}>
                      <TextField label="Outlined" size="small" variant="outlined" />
                      <TextField label="Outlined" size="small" variant="outlined" />
                      <TextField label="Outlined" size="small" variant="outlined" />
                      <TextField label="Outlined" size="small" variant="outlined" />
                    </Stack>
                  </CardContent>
                </Card>
                <Card sx={{ width: "100%", maxWidth: 600 }}>
                  <CardHeader
                    action={<IconButton><CloseIcon /></IconButton>}
                    subheader="ホテル"
                  />
                  <CardContent>
                    <Stack spacing={1}>
                      <TextField label="Outlined" size="small" variant="outlined" />
                      <TextField label="Outlined" size="small" variant="outlined" />
                      <TextField label="Outlined" size="small" variant="outlined" />
                      <TextField label="Outlined" size="small" variant="outlined" />
                    </Stack>
                  </CardContent>
                </Card>
                <Card sx={{ width: "100%", maxWidth: 600 }}>
                  <CardHeader
                    action={<IconButton><CloseIcon /></IconButton>}
                    subheader="ホテル"
                  />
                  <CardContent>
                    <Stack spacing={1}>
                      <TextField label="Outlined" size="small" variant="outlined" />
                      <TextField label="Outlined" size="small" variant="outlined" />
                      <TextField label="Outlined" size="small" variant="outlined" />
                      <TextField label="Outlined" size="small" variant="outlined" />
                    </Stack>
                  </CardContent>
                </Card>
                {/* <SelectForm /> */}
                {/* <Button variant="contained">追加</Button> */}
              </Stack>
            </TabPanel>
            <TabPanel value={value} index={1}>
              {/* <Card sx={{ width: "100%", maxWidth: 600, p:1 }}>
                <CardContent>
                  <Stack direction="row" spacing={2} sx={{mb:3}}>
                    <FormControl sx={{  width:"100%"}} size="small">
                    <InputLabel id="demo-select-small">人数</InputLabel>
                    <Select
                      labelId="demo-select-small"
                      id="demo-select-small"
                      value={age}
                      label="人数"
                      onChange={handleChangeSelect}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>1</MenuItem>
                      <MenuItem value={20}>2</MenuItem>
                    </Select>
                    </FormControl>
                    <FormControl sx={{  width:"100%"}} size="small">
                      <InputLabel id="demo-select-small">入国形態</InputLabel>
                      <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={age}
                        label="入国形態"
                        onChange={handleChangeSelect}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>T.V. (IN)</MenuItem>
                        <MenuItem value={20}>T.V. OUT</MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl sx={{  width:"100%"}} size="small">
                      <InputLabel id="demo-select-small">乗下船</InputLabel>
                      <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={age}
                        label="乗下船"
                        onChange={handleChangeSelect}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>乗船</MenuItem>
                        <MenuItem value={20}>下船</MenuItem>
                        <MenuItem value={30}>訪船</MenuItem>
                      </Select>
                    </FormControl>
                  </Stack>
                  <Stack>
                    <Divider>船員1</Divider>
                    <Grid container spacing={1.5} sx={{ '&.MuiGrid2-root': {mt: 0, mb:1} }}>
                      <Grid item xs={12}>
                        <TextField label="氏名 (船員1)" size="small" variant="outlined" sx={{ width:"100%" }} />
                      </Grid>
                      <Grid item xs={6}>
                        <FormControl sx={{ width:"100%" }} size="small">
                          <InputLabel id="demo-select-small">ランク</InputLabel>
                          <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            value={age}
                            label="ランク"
                            onChange={handleChangeSelect}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={6}>
                        <FormControl sx={{ width:"100%" }} size="small">
                          <InputLabel id="demo-select-small">国籍</InputLabel>
                          <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            value={age}
                            label="国籍"
                            onChange={handleChangeSelect}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>ANTIGUA AND BARBUDA</MenuItem>
                            <MenuItem value={20}>アメリカ</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={2}>
                        <FormControl sx={{  width:"100%" }} size="small">
                          <InputLabel id="demo-select-small">日</InputLabel>
                          <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            value={age}
                            label="日"
                            onChange={handleChangeSelect}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>20</MenuItem>
                            <MenuItem value={20}>31</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={2}>
                        <FormControl sx={{  width:"100%"}} size="small">
                          <InputLabel id="demo-select-small">月</InputLabel>
                          <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            value={age}
                            label="月"
                            onChange={handleChangeSelect}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Jan</MenuItem>
                            <MenuItem value={20}>Sep</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={3}>
                        <FormControl sx={{  width:"100%"}} size="small">
                          <InputLabel id="demo-select-small">年</InputLabel>
                          <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            value={age}
                            label="々"
                            onChange={handleChangeSelect}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>1999</MenuItem>
                            <MenuItem value={20}>2023</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={5}>
                        <TextField label="パスポートNo." size="small" variant="outlined" sx={{ width:"100%" }}/>
                      </Grid>
                    </Grid>
                    <Divider>船員1</Divider>
                    <Grid container sx={{ '&.MuiGrid2-root': {mt: 0, mb:1} }}>
                      <Grid xs={12}>
                        <TextField label="氏名 (船員1)" size="small" variant="outlined" sx={{ width:"100%" }} />
                      </Grid>
                      <Grid xs={6}>
                        <FormControl sx={{ width:"100%" }} size="small">
                          <InputLabel id="demo-select-small">ランク</InputLabel>
                          <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            value={age}
                            label="ランク"
                            onChange={handleChangeSelect}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid xs={6}>
                        <FormControl sx={{ width:"100%" }} size="small">
                          <InputLabel id="demo-select-small">国籍</InputLabel>
                          <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            value={age}
                            label="国籍"
                            onChange={handleChangeSelect}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>ANTIGUA AND BARBUDA</MenuItem>
                            <MenuItem value={20}>アメリカ</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid xs={2}>
                        <FormControl sx={{  width:"100%" }} size="small">
                          <InputLabel id="demo-select-small">日</InputLabel>
                          <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            value={age}
                            label="日"
                            onChange={handleChangeSelect}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>20</MenuItem>
                            <MenuItem value={20}>31</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid xs={2}>
                        <FormControl sx={{  width:"100%"}} size="small">
                          <InputLabel id="demo-select-small">月</InputLabel>
                          <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            value={age}
                            label="月"
                            onChange={handleChangeSelect}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Jan</MenuItem>
                            <MenuItem value={20}>Sep</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid xs={2}>
                        <FormControl sx={{  width:"100%"}} size="small">
                          <InputLabel id="demo-select-small">年</InputLabel>
                          <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            value={age}
                            label="々"
                            onChange={handleChangeSelect}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>1999</MenuItem>
                            <MenuItem value={20}>2023</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid xs={6}>
                        <TextField label="パスポートNo." size="small" variant="outlined" sx={{ width:"100%" }}/>
                      </Grid>
                    </Grid>
                  </Stack>
                </CardContent>
              </Card> */}
              <Stack spacing={2}>
                <Card sx={{ width: "100%", maxWidth: 600 }}>
                  <CardContent>
                    <Stack direction="row" spacing={2}>
                      <FormControl sx={{  width:"100%"}} size="small">
                      <InputLabel id="demo-select-small">人数</InputLabel>
                      <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={age}
                        label="人数"
                        onChange={handleChangeSelect}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>1</MenuItem>
                        <MenuItem value={20}>2</MenuItem>
                      </Select>
                      </FormControl>
                      <FormControl sx={{  width:"100%"}} size="small">
                        <InputLabel id="demo-select-small">入国形態</InputLabel>
                        <Select
                          labelId="demo-select-small"
                          id="demo-select-small"
                          value={age}
                          label="入国形態"
                          onChange={handleChangeSelect}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={10}>T.V. (IN)</MenuItem>
                          <MenuItem value={20}>T.V. OUT</MenuItem>
                        </Select>
                      </FormControl>
                      <FormControl sx={{  width:"100%"}} size="small">
                        <InputLabel id="demo-select-small">乗下船</InputLabel>
                        <Select
                          labelId="demo-select-small"
                          id="demo-select-small"
                          value={age}
                          label="乗下船"
                          onChange={handleChangeSelect}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={10}>乗船</MenuItem>
                          <MenuItem value={20}>下船</MenuItem>
                          <MenuItem value={30}>訪船</MenuItem>
                        </Select>
                      </FormControl>
                    </Stack>
                  </CardContent>
                </Card>
                <Card sx={{ width: "100%", maxWidth: 600 }}>
                  <CardHeader
                    subheader="Crew 1"
                    sx={{ pb: 0 }}
                  />
                  <CardContent sx={{ pt: 1 }}>
                    <Grid container spacing={1} sx={{ '&.MuiGrid2-root': {mt: 0, mb:1} }}>
                      <Grid item xs={12}>
                        <TextField label="氏名 (船員1)" size="small" variant="outlined" sx={{ width:"100%" }} />
                      </Grid>
                      <Grid item xs={6}>
                        <FormControl sx={{ width:"100%" }} size="small">
                          <InputLabel id="demo-select-small">ランク</InputLabel>
                          <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            value={age}
                            label="ランク"
                            onChange={handleChangeSelect}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={6}>
                        <FormControl sx={{ width:"100%" }} size="small">
                          <InputLabel id="demo-select-small">国籍</InputLabel>
                          <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            value={age}
                            label="国籍"
                            onChange={handleChangeSelect}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>ANTIGUA AND BARBUDA</MenuItem>
                            <MenuItem value={20}>アメリカ</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={2}>
                        <FormControl sx={{  width:"100%" }} size="small">
                          <InputLabel id="demo-select-small">日</InputLabel>
                          <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            value={age}
                            label="日"
                            onChange={handleChangeSelect}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>20</MenuItem>
                            <MenuItem value={20}>31</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={2}>
                        <FormControl sx={{  width:"100%"}} size="small">
                          <InputLabel id="demo-select-small">月</InputLabel>
                          <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            value={age}
                            label="月"
                            onChange={handleChangeSelect}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Jan</MenuItem>
                            <MenuItem value={20}>Sep</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={2}>
                        <FormControl sx={{  width:"100%"}} size="small">
                          <InputLabel id="demo-select-small">年</InputLabel>
                          <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            value={age}
                            label="々"
                            onChange={handleChangeSelect}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>1999</MenuItem>
                            <MenuItem value={20}>2023</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={6}>
                        <TextField label="パスポートNo." size="small" variant="outlined" sx={{ width:"100%" }}/>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
                <Card sx={{ width: "100%", maxWidth: 600 }}>
                  <CardHeader
                    action={<IconButton><CloseIcon /></IconButton>}
                    subheader="1"
                    sx={{ pb: 0 }}
                  >
                    船員1
                  </CardHeader>
                  <CardContent sx={{ pt: 1 }}>
                    <Grid container spacing={1} sx={{ '&.MuiGrid2-root': {mt: 0, mb:1} }}>
                      <Grid item xs={12}>
                        <TextField label="氏名 (船員1)" size="small" variant="outlined" sx={{ width:"100%" }} />
                      </Grid>
                      <Grid item xs={6}>
                        <FormControl sx={{ width:"100%" }} size="small">
                          <InputLabel id="demo-select-small">ランク</InputLabel>
                          <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            value={age}
                            label="ランク"
                            onChange={handleChangeSelect}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={6}>
                        <FormControl sx={{ width:"100%" }} size="small">
                          <InputLabel id="demo-select-small">国籍</InputLabel>
                          <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            value={age}
                            label="国籍"
                            onChange={handleChangeSelect}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>ANTIGUA AND BARBUDA</MenuItem>
                            <MenuItem value={20}>アメリカ</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={2}>
                        <FormControl sx={{  width:"100%" }} size="small">
                          <InputLabel id="demo-select-small">日</InputLabel>
                          <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            value={age}
                            label="日"
                            onChange={handleChangeSelect}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>20</MenuItem>
                            <MenuItem value={20}>31</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={2}>
                        <FormControl sx={{  width:"100%"}} size="small">
                          <InputLabel id="demo-select-small">月</InputLabel>
                          <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            value={age}
                            label="月"
                            onChange={handleChangeSelect}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Jan</MenuItem>
                            <MenuItem value={20}>Sep</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={2}>
                        <FormControl sx={{  width:"100%"}} size="small">
                          <InputLabel id="demo-select-small">年</InputLabel>
                          <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            value={age}
                            label="々"
                            onChange={handleChangeSelect}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>1999</MenuItem>
                            <MenuItem value={20}>2023</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={6}>
                        <TextField label="パスポートNo." size="small" variant="outlined" sx={{ width:"100%" }}/>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Stack>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Card sx={{ width: "100%", maxWidth: 600, mb: 1}}>
                <CardHeader
                  action={<IconButton><CloseIcon /></IconButton>}
                  subheader="ホテル"
                />
                <CardContent>
                  <WorkTimeline />
                </CardContent>
              </Card>
              {/* <InfoIconCreate /> */}
            </TabPanel>
          </Box>
        </Grid>
      </Grid>
    </MainFrame>
  )
}
