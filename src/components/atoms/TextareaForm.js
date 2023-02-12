import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useFormContext, Controller } from "react-hook-form";


export default function TextareaForm(props) {
  const {control} = useFormContext();

  return (
    <>
      <Controller
        name={props.name}
        control={control}
        rules={props.rules}
        render={({ field }) => (
          <FormControl
            variant="outlined"
            sx={{
              width: '100%'
            }}
          >
          <InputLabel
            htmlFor="component-simple"
            size="small"
          >
            {props.label}
          </InputLabel>
          <OutlinedInput
            id="component-outlined"
            label={props.label}
            size="small"
            multiline
            rows={3}
            {...field}
            // onChange={props.onChange}
            // value={props.value}
          />
        </FormControl>
        )}
      />
    </>
  );
}
