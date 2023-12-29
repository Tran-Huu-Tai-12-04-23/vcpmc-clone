import {
  ButtonUpload,
  DatePicker,
  Input,
  Paging,
  TextHeader,
  TextLabel,
} from "../../../Component";
const pagingItems = [
  {
    name: "Quan ly",
  },
  {
    name: "Quan ly hop dong",
  },
  {
    name: "Them hop dong",
  },
];
function AddContract() {
  return (
    <div className="">
      <Paging items={pagingItems} />
      <TextHeader>Them hop dong uy quyen moi</TextHeader>
      <div className="mt-6 flex items-start justify-between gap-10 ">
        <div className="flex w-1/3 flex-shrink-0 flex-col items-start gap-5">
          <div className=" flex w-full items-center justify-between">
            <TextLabel nameInput="number-contract">
              So hop dong:<span className="text-error">*</span>
            </TextLabel>
            <Input id="number-contract" />
          </div>
          <div className="flex w-full items-center justify-between">
            <TextLabel nameInput="name-contract">
              Ten hop dong:<span className="text-error">*</span>
            </TextLabel>
            <Input id="name-contract" />
          </div>
          <div className="flex w-full items-center justify-between">
            <TextLabel nameInput="date-effect">
              Ngay hieu luc:<span className="text-error">*</span>
            </TextLabel>
            <DatePicker id="date-effect" />
          </div>
          <div className="flex w-full items-center justify-between">
            <TextLabel nameInput="date-validity">
              Ngay het han:<span className="text-error">*</span>
            </TextLabel>
            <DatePicker id="date-validity" />
          </div>
        </div>
        <div className="box-start w-1/3">
          <TextLabel>Dinh kem tep</TextLabel>
          <ButtonUpload />
        </div>
        <div className="box-start w-1/3">
          <TextLabel>Dinh kem tep</TextLabel>
          <ButtonUpload />
        </div>
      </div>
    </div>
  );
}

export default AddContract;
