import * as React from 'react';
import Stack from '@mui/material/Stack';
import CreateButton from '../atoms/CreateButton';
import InfoIconReply from '../atoms/InfoIconReply';

export default function InfoIndexButtonGroup() {
  return (
    <Stack alignItems="center" justifyContent="center" direction={"column"} spacing={2}>
      <CreateButton />
      <InfoIconReply />
    </Stack>
  );
}
