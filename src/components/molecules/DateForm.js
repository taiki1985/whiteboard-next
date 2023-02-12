import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import SelectForm from '../atoms/SelectForm';
import MenuItem from '@mui/material/MenuItem';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { useFormContext, Controller } from "react-hook-form";
import { useState } from "react";

// export default function DateForm(props) {

//   const days = [...Array(31)].map((_, i) => <MenuItem value={(i + 1).toString(10)}>{(i + 1).toString(10)}</MenuItem>);

//   function getMonthShortName(monthNumber) {
//     const date = new Date();
//     date.setMonth(monthNumber - 1);
//     return date.toLocaleString('en-US', {month: 'short'});
//   }

//   const months = [...Array(12)].map((_, i) => <MenuItem value={getMonthShortName(i + 1)}>{getMonthShortName(i + 1)}</MenuItem>);

//   const years = [...Array(100)].map((_, i) =>

//     <MenuItem value={(i + 1950).toString(10)}>
//       {(i + 1950).toString(10)}
//     </MenuItem>
//   );

//   return (
//     <>
//       <Grid container direction="row">
//         <Grid item xs={6}>
//           <SelectForm name="years" label="年" items={years}/>
//           {/* <SelectForm name="" label="年" items={<MenuItem value={"1"}>{"1"}</MenuItem>}/> */}
//         </Grid>
//         <Grid item xs={3}>
//           <SelectForm name="month" label="月" items={months}/>
//         </Grid>
//         <Grid item xs={3}>
//           <SelectForm name="day" label="日" items={days} />
//         </Grid>
//       </Grid>
//     </>
//   );
// }

export default function DateForm(props) {

  const {control} = useFormContext();

  const [value, setValue] = useState(null);

  return (
    <>
    <Controller
      name={props.name}
      control={control}
      rules={props.rules}
      render={({ field }) => (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DesktopDatePicker
              label={props.label}
              value={value}
              minDate={dayjs('2017-01-01')}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => (
                <>
                  <TextField {...field} {...params} size="small" />
                </>
              )}
          />
        </LocalizationProvider>
      )}
    />
    </>
  );
}
