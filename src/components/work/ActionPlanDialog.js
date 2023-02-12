import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormGroupCard from './FormGroupCard';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import TextForm from '../../forms/TextForm';
import Stack from '@mui/material/Stack';
import SelectForm from '../../forms/SelectForm';

export default function ActionPlanDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const steps = [
    '福岡空港 (15:35)',
    '博多駅 (17:00)',
    'ホテル (18:00)',
  ];

  return (
    <div>
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
      <Button variant="outlined" onClick={handleClickOpen}>
        行動追加
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>行動計画</DialogTitle>
        <DialogContent>
          <Stack>
            <Stack direction={"row"}>
             <SelectForm /><TextForm mb={1}/>
            </Stack>
            <Stack direction={"row"}>
             <SelectForm /><TextForm mb={1}/>
            </Stack>
            <Stack direction={"row"}>
             <SelectForm /><TextForm mb={1}/>
            </Stack>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
