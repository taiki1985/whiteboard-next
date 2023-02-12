import * as React from 'react';
import Stack from '@mui/material/Stack';
import InfoIconEdit from '../atoms/InfoIconEdit';
import InfoIconDelete from '../atoms/InfoIconDelete';
import InfoIconReply from '../atoms/InfoIconReply';

export default function InfoDetailButtonGroup() {
  return (
    <Stack alignItems="center" justifyContent="center" direction={"column"} spacing={2}>
      <InfoIconDelete />
      <InfoIconEdit />
      <InfoIconReply />
    </Stack>
  );
}
