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
import { styled } from '@mui/material/styles';

const StyledTableCell = styled(TableCell)`
  white-space: nowrap;
`;

export default function CrewDetailList() {
  return (
    <TableContainer sx={{ mt: 2 }} component={Card}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell colSpan={5} sx={{ bgcolor: grey[300] }}>
              クルー情報
            </TableCell>
            <TableCell sx={{ bgcolor: grey[300] }}></TableCell>
            <TableCell sx={{ bgcolor: grey[300] }}></TableCell>
            <TableCell sx={{ bgcolor: grey[300] }}></TableCell>
            <TableCell sx={{ bgcolor: grey[300] }}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component="td" align='left'>
              1.
            </TableCell>
            <StyledTableCell>
              REYES EMERSON MADLANGBAYAN
            </StyledTableCell>
            <TableCell component="td">
            CAPT
            </TableCell>
            <TableCell component="td">
            24/JUN/1989
            </TableCell>
            <TableCell component="td">
            T01704900
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="td" align='left'>
              2.
            </TableCell>
            <TableCell component="td">
            REYES EMERSON MADLANGBAYAN
            </TableCell>
            <TableCell component="td">
            2/O
            </TableCell>
            <TableCell component="td">
            24/JUN/1989
            </TableCell>
            <TableCell component="td">
            T01704900
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="td" align='left'>
              2.
            </TableCell>
            <TableCell component="td">
            MONTESCLAROS RANDY QUIMBO
            </TableCell>
            <StyledTableCell>
             ASSISTANTE MANAGER SEAMAN
            </StyledTableCell>
            <TableCell component="td">
            24/JUN/1989
            </TableCell>
            <TableCell component="td">
            T01704900
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="td" align='left'>
              1.
            </TableCell>
            <StyledTableCell>
              REYES EMERSON MADLANGBAYAN
            </StyledTableCell>
            <TableCell component="td">
            CAPT
            </TableCell>
            <TableCell component="td">
            24/JUN/1989
            </TableCell>
            <TableCell component="td">
            T01704900
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="td" align='left'>
              2.
            </TableCell>
            <TableCell component="td">
            REYES EMERSON MADLANGBAYAN
            </TableCell>
            <TableCell component="td">
            2/O
            </TableCell>
            <TableCell component="td">
            24/JUN/1989
            </TableCell>
            <TableCell component="td">
            T01704900
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="td" align='left'>
              2.
            </TableCell>
            <TableCell component="td">
            MONTESCLAROS RANDY QUIMBO
            </TableCell>
            <StyledTableCell>
             ASSISTANTE MANAGER SEAMAN
            </StyledTableCell>
            <TableCell component="td">
            24/JUN/1989
            </TableCell>
            <TableCell component="td">
            T01704900
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="td" align='left'>
              1.
            </TableCell>
            <StyledTableCell>
              REYES EMERSON MADLANGBAYAN
            </StyledTableCell>
            <TableCell component="td">
            CAPT
            </TableCell>
            <TableCell component="td">
            24/JUN/1989
            </TableCell>
            <TableCell component="td">
            T01704900
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="td" align='left'>
              2.
            </TableCell>
            <TableCell component="td">
            REYES EMERSON MADLANGBAYAN
            </TableCell>
            <TableCell component="td">
            2/O
            </TableCell>
            <TableCell component="td">
            24/JUN/1989
            </TableCell>
            <TableCell component="td">
            T01704900
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="td" align='left'>
              2.
            </TableCell>
            <TableCell component="td">
            MONTESCLAROS RANDY QUIMBO
            </TableCell>
            <StyledTableCell>
             ASSISTANTE MANAGER SEAMAN
            </StyledTableCell>
            <TableCell component="td">
            24/JUN/1989
            </TableCell>
            <TableCell component="td">
            T01704900
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
