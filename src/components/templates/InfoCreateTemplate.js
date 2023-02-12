import * as React from 'react';
import MainFrame from "./MainFrame";
import InfoConfirm from "../organisms/InfoConfirm";
import InfoFormGroup from '../organisms/InfoFormGroup';
import InfoCreateButtonGroup from "../organisms/InfoCreateButtonGroup";
import InfoConfirmFormContents from "../organisms/InfoConfirmFormContents";
import { useForm } from "react-hook-form";
import InfoTable from '../molecules/InputDataTable';


export default function InfoCreateTemplate(props) {
  const [openConfirm, setOpenConfirm] = React.useState(false);
  const methods = useForm(props.defaultValues);

  const handleConfirmOpen = () => {
    setOpenConfirm(true);
  };
  const handleConfirmClose = () => {
    setOpenConfirm(false);
  };

  const [openConfirmFormContents, setOpenConfirmFormContents] = React.useState(false);

  const handleConfirmFormContentsOpen = () => {
    setOpenConfirmFormContents(true);
  };
  const handleConfirmFormContentsClose = () => {
    setOpenConfirmFormContents(false);
  };

  return (
    <MainFrame subtitle={props.subtitle + "新規登録"}>
      <InfoFormGroup
        defaultValues={props.defaultValues}
      >
        {props.children}
        <InfoCreateButtonGroup
          onClickConfirm={handleConfirmFormContentsOpen}
          onClickCancel={handleConfirmOpen}
        />
        <InfoConfirm
          open={openConfirm}
          close={handleConfirmClose}
        />
        <InfoConfirmFormContents
          open={openConfirmFormContents}
          onClose={handleConfirmFormContentsClose}
          onClick={methods.handleSubmit(data=>console.log(data))}
        />
      </InfoFormGroup>
    </MainFrame>
  )
}
