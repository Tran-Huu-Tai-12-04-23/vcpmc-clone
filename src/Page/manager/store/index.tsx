import { useState } from "react";
import { DropDown, Input, TextHeader, TextLabel } from "../../../Component";
import { ApplicationIcon, EditIcon, ListIcon } from "../../../assets/icon";
import FloatingActionButton from "../../../Component/UI/FloatingActionButton";
import ListRecord from "./ListRecord";
import CardRecord from "./ListCardRecord";
import { useRouter } from "../../../Routes/hooks";
import PathUrl from "../../../Routes/path-url";

const typeDropItems = [
  {
    name: "Tất cả",
    key: 1,
  },
  {
    name: "Pop",
    key: 2,
  },
  {
    name: "EDM",
    key: 3,
  },
  {
    name: "Ballad",
    key: 4,
  },
];

const formatDropItems = [
  {
    name: "Tất cả",
    key: 1,
  },
  {
    name: "Âm thanh",
    key: 2,
  },
  {
    name: "Video",
    key: 3,
  },
];

const expiryDateDropItems = [
  {
    key: 1,
    name: "Tất cả",
  },
  {
    name: "Còn thời hạn",
    key: 2,
  },
  {
    key: 3,
    name: "Hết hạn",
  },
];
const statusDropItems = [
  {
    name: "Tất cả",
    key: 1,
  },
  {
    name: "Duyệt bơi người dùng",
    key: 2,
  },
  {
    name: "Duyệt tự động",
    key: 3,
  },
];
type DropItem = {
  name: string;
  key: number;
};
function Store() {
  const router = useRouter();
  const [modeView, setModeView] = useState<"list" | "card">("list");
  const [genre, setGenre] = useState<DropItem>(typeDropItems[0]);
  const [format, setFormat] = useState<DropItem>(formatDropItems[0]);
  const [expiryDate, setExpiryDate] = useState<DropItem>(
    expiryDateDropItems[0],
  );
  const [status, setStatus] = useState<DropItem>(statusDropItems[0]);
  const floatingAction = [
    {
      name: "Quản lý phê duyệt",
      icon: <EditIcon className="text-primary" />,
      action: () => {
        router.push(PathUrl.URL_STORE_RECORD + "/" + PathUrl.MANAGER_APPROVE);
      },
    },
  ];
  return (
    <div className=" w-full">
      <TextHeader>Kho bản ghi</TextHeader>
      <Input
        className="mb-5 mt-5"
        placeholder="Tên bản ghi, ca sĩ,..."
        height={40}
        width={500}
        search
      />
      <div className="flex items-start justify-between gap-8">
        <div className=" w-full">
          <div className="flex w-full flex-shrink-0 items-center justify-between">
            <div className="box-start w-full gap-14">
              <div className="box-start gap-4">
                <TextLabel>Thể loại: </TextLabel>
                <DropDown
                  active={genre}
                  dropItems={typeDropItems}
                  onSelect={(val) => {
                    setGenre(val);
                  }}
                />
              </div>
              <div className="box-start gap-4">
                <TextLabel>Định dạng: </TextLabel>
                <DropDown
                  active={format}
                  dropItems={formatDropItems}
                  onSelect={(val) => {
                    setFormat(val);
                  }}
                />
              </div>
              <div className="box-start gap-4">
                <TextLabel>Thể loại: </TextLabel>
                <DropDown
                  active={expiryDate}
                  dropItems={expiryDateDropItems}
                  onSelect={(val) => {
                    setExpiryDate(val);
                  }}
                />
              </div>
              <div className="box-start gap-4">
                <TextLabel>Trạng thái: </TextLabel>
                <DropDown
                  active={status}
                  dropItems={statusDropItems}
                  onSelect={(val) => {
                    setStatus(val);
                  }}
                />
              </div>
            </div>

            <div className="box-end gap-5">
              <ListIcon
                onClick={() => setModeView("list")}
                className={`cursor-pointer ${
                  modeView === "list" && "text-primary"
                }`}
              />
              <ApplicationIcon
                onClick={() => setModeView("card")}
                className={`cursor-pointer ${
                  modeView === "card" && "text-primary"
                }`}
              />
            </div>
          </div>

          <div className="pt-10">
            {modeView === "list" ? <ListRecord /> : <CardRecord />}
          </div>
        </div>
        <div className="w-fit flex-shrink-0">
          <FloatingActionButton floatingActionButtonConfig={floatingAction} />
        </div>
      </div>
    </div>
  );
}

export default Store;
