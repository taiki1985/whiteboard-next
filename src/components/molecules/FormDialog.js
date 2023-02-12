import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import InfoFormGroup from "../organisms/InfoFormGroup"
import TextForm from "../atoms/TextForm"
import TextareaForm from '../atoms/TextareaForm';
import DateForm from './DateForm';
import { TextField } from '@mui/material';
import { useForm, FormProvider } from "react-hook-form";
import {useState} from 'react';


export default function FormDialog(props) {

  const [inputValue, setInputValue] = useState({
      content: '',
      expiration_date: ''
    });

  // const defaultValues = {
  //   content: '',
  //   expiration_date: ''
  // }
  const methods = useForm({
    defaultValues: {
      content: '',
      expiration_date: ''
    }
  });

  return(
    <>

          <Dialog
            open={props.open}
            onClose={props.onClose}
            fullWidth={true}
            maxWidth="sm"
          >
              <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(data=>console.log(data))}>
            <DialogContent>
              <DialogContentText sx={{ mb: 1 }}>
                お知らせを入力してください。
              </DialogContentText>
              <TextareaForm name="content" label="内容" onChange={(e)=>setInputValue({...inputValue, content:e.target.value})} value={inputValue.content}/>
              <DateForm name="expiration_date" label="掲載期限" />
            </DialogContent>
            <DialogActions>
              <Button onClick={props.onClose}>キャンセル</Button>
              {/* <Button type="submit">登録</Button> */}
              <Button type="submit" onClick={props.onClose} >登録</Button>
            </DialogActions>
                </form>
              </FormProvider>
          </Dialog>

    </>
  )
}
