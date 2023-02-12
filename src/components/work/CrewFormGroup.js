import * as React from 'react';
import TextForm from "../../forms/TextForm";
import SelectForm from "../../forms/SelectForm";
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import Typography from '@mui/material/Typography';
import { AlignVerticalCenter } from '@mui/icons-material';

export default function CrewFormGroup() {
  return (
    <>
      <Stack direction="row" spacing={2}>
        <SelectForm label="人数" />
        <SelectForm label="形態" />
        <SelectForm label="乗下船" />
      </Stack>
      <Grid container sx={{ mt:3 }}>
        <Grid item xs={6}>
          <Typography variant='h6' sx={{ display: 'inline' }}>1.</Typography><TextForm />
        </Grid>
        <Grid container item xs={12} justifyContent="space-between">
          <Grid item xs={4}>
            <SelectForm label="ランク" />
          </Grid>
          <Grid item xs={4}>
            <SelectForm label="国籍" />
          </Grid>
          <Grid item xs={4}>
            <TextForm />
          </Grid>
        </Grid>
      </Grid>
      <Grid container sx={{ mt:3 }}>
        <Grid item xs={6}>
        <Typography variant='h6' sx={{ display: 'inline' }}>2.</Typography><TextForm />
        </Grid>
        <Grid container item xs={12} justifyContent="space-between">
          <Grid item xs={4}>
            <SelectForm label="ランク" />
          </Grid>
          <Grid item xs={4}>
            <SelectForm label="国籍" />
          </Grid>
          <Grid item xs={4}>
            <TextForm />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
