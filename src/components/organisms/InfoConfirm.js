import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';

export default function InfoConfirm(props) {

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.close}
        maxWidth="xs"
        fullWidth={true}
      >
        <DialogTitle id="alert-dialog-title">
          {"確認します。"}
        </DialogTitle>
        <DialogActions>
          <Button onClick={props.close} autoFocus>
            する
          </Button>
          <Button onClick={props.close}>キャンセル</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
