import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Card from '@mui/material/Card';
import TableContainer from '@mui/material/TableContainer';
import CardHeader from '@mui/material/CardHeader';
import grey from '@mui/material/colors/grey';

export default function DetailList() {
  return (
    <TableContainer sx={{ mt: 2 }} component={Card}>
      <Table size="small">
        <TableHead sx={{
          bgcolor: grey[300],
          fontSize: "18px" }}
        >
          <TableRow>
            <TableCell>
              ホテル情報
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component="td" align='center'>
              ホテル名
            </TableCell>
            <TableCell component="td">
              西鉄イン福岡
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="td" align='center'>
              チェックイン日時
            </TableCell>
            <TableCell component="td">
              12月15日 09:00
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="td" align='center'>
              チェックアウト日時
            </TableCell>
            <TableCell component="td">
              12月15日 09:00
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="td" align='center'>
              部屋数
            </TableCell>
            <TableCell component="td">
              9
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="td" align='center'>
              食事
            </TableCell>
            <TableCell component="td">
              有り
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
