import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InfoTable from '../molecules/InputDataTable';
import Table from "@mui/material/Table";
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

export default function InfoConfirmFormContents(props) {
  // console.log(descriptionElementRef)
  // React.useEffect(() => {
  //   if (props.open) {
  //     const { current: descriptionElement } = descriptionElementRef;
  //     if (descriptionElement !== null) {
  //       descriptionElement.focus();
  //     }
  //   }
  // }, [props.open]);

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.onClose}
        maxWidth="sm"
        fullWidth
        scroll="paper"
      >
        <DialogTitle>入力内容確認</DialogTitle>
        <DialogContent dividers="paper">
          <Table
            size="small"
            stickyHeader
          >
            <TableBody>
              <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align="center" width={"30%"}>
                  表示名
                </TableCell>
                <TableCell align="center">
                  <strong>西鉄イン福岡</strong>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" width={"30%"}>
                  ラベル
                </TableCell>
                <TableCell align="center">
                  データ
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" width={"30%"}>
                  ラベル
                </TableCell>
                <TableCell align="center">
                  データ
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" width={"30%"}>
                  ラベル
                </TableCell>
                <TableCell align="center">
                  データ
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" width={"30%"}>
                  ラベル
                </TableCell>
                <TableCell align="center">
                  データ
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" width={"30%"}>
                  ラベル
                </TableCell>
                <TableCell align="center">
                  データ
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" width={"30%"}>
                  ラベル
                </TableCell>
                <TableCell align="center">
                  データ
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" width={"30%"}>
                  ラベル
                </TableCell>
                <TableCell align="center">
                  データ
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" width={"30%"}>
                  ラベル
                </TableCell>
                <TableCell align="center">
                  データ
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" width={"30%"}>
                  ラベル
                </TableCell>
                <TableCell align="center">
                  データ
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" width={"30%"}>
                  ラベル
                </TableCell>
                <TableCell align="center">
                  データ
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" width={"30%"}>
                  ラベル
                </TableCell>
                <TableCell align="center">
                  データ
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" width={"30%"}>
                  ラベル
                </TableCell>
                <TableCell align="center">
                  データ
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" width={"30%"}>
                  ラベル
                </TableCell>
                <TableCell align="center">
                  データ
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" width={"30%"}>
                  ラベル
                </TableCell>
                <TableCell align="center">
                  データ
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" width={"30%"}>
                  ラベル
                </TableCell>
                <TableCell align="center">
                  データ
                </TableCell>
              </TableRow>
              <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align="center" width={"30%"}>
                  ラベル
                </TableCell>
                <TableCell align="center">
                  データ
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onClick} type="submit">送信</Button>
          <Button onClick={props.onClose}>キャンセル</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
