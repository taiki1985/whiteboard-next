import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useFormContext, Controller } from "react-hook-form";


export default function SelectForm(props) {

  const {control} = useFormContext();

  return (
    <>
      <Controller
        name={props.name}
        control={control}
        rules={props.rules}
        render={({ field }) => (
          <FormControl
            sx={{
              minWidth: 120,
              width: "100%",
            }}
            size="small"
          >
            <InputLabel id="demo-select-small">{props.label}</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              label={props.label}
              // onChange={props.onChange}
              {...field}
              value={props.value}
            >
              <MenuItem value="">
                <em>選択してください。</em>
              </MenuItem>
              {props.items}
            </Select>
          </FormControl>
        )}
      />
      {/* <FormControl
        sx={{
          minWidth: 120,
          width: "100%",
        }}
        size="small"
      >
        <InputLabel id="demo-select-small">{props.label}</InputLabel>
        <Controller
          name={props.name}
          control={control}
          rules={props.rules}
          render={({ field }) => (
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              label={ props.label }
              // onChange={props.onChange}
              {...field}
              value={props.value}
            >
              <MenuItem value="">
                <em>選択してください。</em>
              </MenuItem>
              {props.items}
            </Select>
          )}
        />
      </FormControl> */}
    </>
  );
}
