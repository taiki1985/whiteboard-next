import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function HeaderIcon(props) {
  return(
    <div>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{
          mr: 2,
        }}
        onClick={props.onClick}
      >
        <MenuIcon />
      </IconButton>
    </div>
  )
}
