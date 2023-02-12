import InfoCreateTemplate from "../../../../../src/components/templates/InfoCreateTemplate";
import TextForm from "../../../../../src/components/atoms/TextForm";
// import SelectForm from "../../../../src/components/atoms/SelectForm";
import { useState, useRef, useEffect } from "react";

export default function InfoCreateHotel() {

    const defaultValues = {
      nickname: "",
      name: "",
      name_eng: "",
      postcode: "",
      address: "",
      address_eng: "",
      tel: "",
      fax: "",
      email: "",
      web: "",
      comment: "",
    };

  return (
    <InfoCreateTemplate subtitle="ホテル" defaultValues={defaultValues}>
      <TextForm label="表示名" name="nickname" />
      <TextForm label="名称" name="name" />
      <TextForm label="名称(英語)" name="name_eng" />
      <TextForm label="郵便番号" name="postcode" />
      <TextForm label="住所" name="address" />
    </InfoCreateTemplate>
  )
}
