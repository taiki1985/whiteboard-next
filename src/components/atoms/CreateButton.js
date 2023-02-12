import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';


export default function CreateButton(props) {
  return(
    <>
      <Tooltip title={props.tooltipTitle} placement="right">
        <Fab color="primary">
          <AddIcon size={props.size}/>
        </Fab>
      </Tooltip>
    </>
  )
}
