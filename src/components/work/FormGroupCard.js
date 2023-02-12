import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

export default function FormGroupCard(props) {
  return (
    <Card sx={{ mb:2 }}>
      <CardHeader
        title={<Typography variant='h5'>{props.title}</Typography>}
        action={<CloseIcon fontSize='large'/>}
        sx={{ py: 1}}
      />
      <CardContent sx={{ py: 1}}>
        <Stack direction="column" spacing={1.5}>
          {props.children}
        </Stack>
      </CardContent>
    </Card>
  );
}
