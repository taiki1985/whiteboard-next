import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack'

export default function DateTimeForm(props) {

  return (
    <Stack direction="row" spacing={2}>
      <TextField
        // label="チェックイン日付"
        sx={{
          '& .MuiFormHelperText-root': {
            marginTop: '0px',
          }
        }}
        helperText="チェックイン日付"
        id="outlined-size-small"
        defaultValue=""
        size="small"
        type="date"
      />
      <TextField
        // label="チェックイン時間"
        sx={{
          '& .MuiFormHelperText-root': {
            marginTop: '0px',
          }
        }}
        helperText="チェックイン時間"
        id="outlined-size-small"
        defaultValue=""
        size="small"
        type="time"
      />
    </Stack>
  );
}
