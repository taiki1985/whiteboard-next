import Button from "@mui/material/Button";


export default function ConfirmButton(props) {

  return (
    <Button size="large" variant="contained" onClick={props.onClick}>確認</Button>
  )
}
