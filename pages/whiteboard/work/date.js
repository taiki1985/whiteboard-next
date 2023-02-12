import MainFrame from "../components/general/MainFrame";
import GeneralBodyTitle from "../components/general/GeneralBodyTitle"
import GeneralBreadcurmbs from "../components/general/GeneralBreadcrumbs";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Stack from '@mui/material/Stack';
import SnackbarContent from '@mui/material/SnackbarContent';
import CloseIcon from '@mui/icons-material/Close';
import FormGroupCard from '../components/work/formgroup/FormGroupCard';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

export default function WorkDate() {
  const steps = [
    '福岡空港 (15:35)',
    '博多駅 (17:00)',
    'ホテル (18:00)',
  ];
  return (
    <MainFrame>
      <GeneralBreadcurmbs />
      <GeneralBodyTitle title="12月9日 業務"/>
      <Grid container spacing={1} sx={{ mt:3 }}>
        <Grid item xs={8}>
          <Stack spacing={1}>
            <SnackbarContent message="テスト テスト" action={<CloseIcon fontSize="small"/>} sx={{ backgroundColor: "primary.dark" }}/>
            <SnackbarContent message="テスト テスト" action={<CloseIcon fontSize="small"/>} sx={{ backgroundColor: "primary.dark" }}/>
            <SnackbarContent message="テスト テスト" action={<CloseIcon fontSize="small"/>} sx={{ backgroundColor: "primary.dark" }}/>
          </Stack>
        </Grid>
        <Grid item xs={8}>
          <Stack spacing={1}>
            <FormGroupCard title="12月9日 中島/カローラ">
              <Box sx={{ width: '100%' }}>
                <Stepper activeStep={0} alternativeLabel>
                {/* <Stepper alternativeLabel> */}
                  {steps.map((label) => (
                    <Step key={label} active={true}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </Box>
            </FormGroupCard>
          </Stack>
        </Grid>
      </Grid>
    </MainFrame>
  )
}
