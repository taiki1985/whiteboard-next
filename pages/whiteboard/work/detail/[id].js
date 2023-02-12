import MainFrame from "../../../../src/components/templates/MainFrame";
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
import InfoIconCreate from "../../../../src/components/atoms/InfoIconCreate"
// フォームカード ここまで
// フォーム(タイムライン)
import WorkTimeline from "../../../../src/components/organisms/WorkTimeLine";
// フォーム(タイムライン) ここまで
import InfoDetailTable from "../../../../src/components/organisms/InfoDetailTable";

import Table from '@mui/material/Table'
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
              <Stack direction="column" spacing={3} justifyContent="center">
                <Card sx={{ width: "100%", maxWidth: 600 }}>
                  <CardHeader
                    action={<IconButton><CloseIcon /></IconButton>}
                    subheader="ホテル"
                  />
                  <CardContent>
                    <InfoDetailTable />
                  </CardContent>
                </Card>
              </Stack>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <InfoDetailTable />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Card sx={{ width: "100%", maxWidth: 600, mb: 1}}>
                <CardHeader
                  subheader="行動 1"
                />
                <CardContent>
                  <WorkTimeline />
                </CardContent>
              </Card>

            </TabPanel>
          </Box>
        </Grid>
      </Grid>
    </MainFrame>
  )
}
