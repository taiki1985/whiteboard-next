import InfoTopTemplate from "../../../../src/components/templates/InfoTopTemplate";

export default function InfoTopHotel() {

  const createDate = (
    id = 1,
    nickname = "ホテル略称",
    name = "西鉄イン福岡",
    name_eng = "Hotel Name",
    postcode = "1234567",
    address = "住所入力欄",
    address_eng = "Address",
    tel = "888-8888-8888",
    fax = "888-8888-8888",
    email = "email@email.com",
    web = "web@web.com",
    created_user_id = 2,
    updated_user_id = 3,
    created_at = "2022-12-22 00:00:00",
    updated_at = "2022-12-22 00:00:00",
    comment = "Comment Area"
    ) => {
      return({
        id,
        nickname,
        name,
        name_eng,
        postcode,
        address,
        address_eng,
        tel,
        fax,
        email,
        web,
        created_user_id,
        updated_user_id,
        created_at,
        updated_at,
        comment
    })
  }

  const hotelData = [
    createDate(),
    createDate(),
    createDate(),
    createDate(),
    createDate(),
    createDate(),
    createDate(),
  ];

  const tableColumns = {name: "名前", tel: "電話番号"}

  return (
    <InfoTopTemplate subtitle={"ホテル"} tableColumns={tableColumns} tableData={hotelData} />
  )
}
