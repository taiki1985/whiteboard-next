import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from "@mui/material/Table";
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors';

export default function DetailInCard(props) {

  return (
    <>
      <TableContainer
        component={Paper}
        sx={{
          width: 600,
        }}
      >
        <Table size="medium">
          <TableBody>
            <TableRow
              sx={{
                '&:nth-of-type(even)': {
                  backgroundColor: grey[200]
                }
              }}
              >
              <TableCell component={"th"} align="right" sx={{ width: "30%" }}>名前</TableCell>
              <TableCell component={"td"} align="center">
                <Typography variant="subtitle1">BUENDICHO GERRY CURIOSO</Typography>
              </TableCell>
            </TableRow>
            <TableRow
              sx={{
                '&:nth-of-type(even)': {
                  backgroundColor: grey[200]
                }
              }}
              >
              <TableCell component={"th"} align="right" sx={{ width: "30%" }}>名前</TableCell>
              <TableCell component={"td"} align="center">
                <Typography variant="subtitle1">BUENDICHO GERRY CURIOSO</Typography>
              </TableCell>
            </TableRow>
            <TableRow
              sx={{
                '&:nth-of-type(even)': {
                  backgroundColor: grey[200]
                }
              }}
              >
              <TableCell component={"th"} align="right" sx={{ width: "30%" }}>名前</TableCell>
              <TableCell component={"td"} align="center">
                <Typography variant="subtitle1">BUENDICHO GERRY CURIOSO</Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
