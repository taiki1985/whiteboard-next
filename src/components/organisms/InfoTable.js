import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from "@mui/material/Table";
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import NextLink from 'next/link';
import Chip from '@mui/material/Chip';

export default function InfoTable(props) {

  const tableHead = Object.entries(props.tableColumns).map(([key, element]) => {
      return (
          <TableCell align="right">{element}</TableCell>
      )
  });

  const tableData = Object.entries(props.tableData).map(([key, element]) => {
    const contents = Object.entries(props.tableColumns).map(([headKey, headElement]) => {
      return (
        <TableCell align="right"><NextLink href=".">{element[headKey]}</NextLink></TableCell>
      )
    })
    return (
      <TableRow hover>
        <TableCell align="right">
          <Chip
            label={"詳細"}
            component={NextLink}
            href="."
            clickable
          />
          {/* <NextLink href=".">{"詳細"}</NextLink> */}
        </TableCell>
        {contents}
      </TableRow>
    )
  });


  return(
    <>
      <TableContainer
        component={Paper}
        sx={{
          width: 600,
        }}
      >
        <Table
          size="small"
          sx={{
            // maxWidth: 600,
          }}
          stickyHeader
        >
          <TableHead>
            <TableRow>
            <TableCell align="center"></TableCell>
              {tableHead}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
