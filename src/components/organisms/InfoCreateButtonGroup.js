import Stack from '@mui/material/Stack';
import ConfirmButton from "../atoms/ConfirmButton";
import CancelButton from "../atoms/CancelButton";

export default function InfoCreateButtonGroup(props) {

  return (
    <Stack direction="row" spacing={2}>
      <ConfirmButton onClick={props.onClickConfirm}/>
      <CancelButton onClick={props.onClickCancel}/>
    </Stack>
  )
}
