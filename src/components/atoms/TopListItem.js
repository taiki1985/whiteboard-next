import Button from '@mui/material/Button';
import StarBorderIcon from '@mui/icons-material/StarBorder';

export default function TopListItem(props) {
  return (
    <>
      <Button
        variant="text"
        fullWidth={true}
        startIcon={props.icon}
        sx={{
          // bgcolor: "#42a5f5",
          bgcolor: props.bgColor,
          color: "#ffffff",
          "&:hover":{
            bgcolor: props.bgColor,
            opacity: [1, 0.9, 0.8],
          }
        }}
      >
          { props.name }
      </Button>
    </>
  )
}
