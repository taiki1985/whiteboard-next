import Table from "@mui/material/Table";
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

export default function InfoTable(props) {

  const data = [
    {label: "表示名", value: "西鉄イン福岡"},
    {label: "表示名", value: "西鉄イン福岡"},
    {label: "表示名", value: "西鉄イン福岡"},
  ];

  const tableData = data.map(({label, value}) => {
    return(
      <>
        <TableRow hover>
          <TableCell align="right">
            {label}
          </TableCell>
          <TableCell align="right">
            {value}
          </TableCell>
        </TableRow>
      </>
    )
  })

  console.log(tableData)

  return (
    <>
      <Table
        size="small"
        stickyHeader
      >
        <TableBody>
          {/* {console.log(tableData)} */}
        </TableBody>
      </Table>
    </>
  )

  // return(
  //   <>
  //     <InfoTableWrapper>
  //       <Table
  //         size="small"
  //         sx={{
  //           maxWidth: 600,
  //         }}
  //         stickyHeader
  //       >
  //         <TableHead>
  //           <TableRow>
  //           <TableCell align="center"></TableCell>
  //             {tableHead}
  //           </TableRow>
  //         </TableHead>
  //         <TableBody>
  //           {tableData}
  //         </TableBody>
  //       </Table>
  //     </InfoTableWrapper>
  //   </>
  // )
}
