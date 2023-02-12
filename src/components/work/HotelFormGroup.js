import * as React from 'react';
import FormGroupCard from "../formgroup/FormGroupCard"
import TextForm from "../../forms/TextForm"
import SelectForm from "../../forms/SelectForm"
import DateTimeForm from "../../forms/DateTimeForm"

export default function HotelFormGroup(props) {
  return (
    <FormGroupCard title={"ホテル"}>
        <TextForm />
        <SelectForm label="ホテル名"/>
        <DateTimeForm />
        <DateTimeForm />
    </FormGroupCard>
  );
}
