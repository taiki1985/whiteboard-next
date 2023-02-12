import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';

export default function AddNewsButton(props) {
  return(
    <>
      <Tooltip title="情報追加" placement="right">
        <Button
          size="small"
          color="info"
          variant="outlined"
          endIcon={<AddIcon />}
          onClick={props.onClick}
        >
          追加
        </Button>
      </Tooltip>
    </>
  )
}
