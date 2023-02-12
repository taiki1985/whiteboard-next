import * as React from 'react';
import Stack from '@mui/material/Stack';
import { useForm, FormProvider } from "react-hook-form";
import { render } from 'react-dom';

export default function InfoFormGroup(props) {

  const methods = useForm(props.defaultValues);
  // const methods = useForm({
  //   defaultValues: {
  //     content: '',
  //     expiration_date: ''
  //   }
  // });
  return (
    // <FormProvider methods={props.methods}>
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(data=>console.log(data))}>
      {/* <form onSubmit={props.onSubmit}> */}
        <Stack direction="column" spacing={2}>
          {props.children}
        </Stack>
      </form>
    </FormProvider>
  );
}
