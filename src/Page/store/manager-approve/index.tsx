import {
  Checkbox,
  DropDown,
  Input,
  Paging,
  TextHeader,
  TextLabel,
} from "../../../Component";
import { useEffect, useState } from "react";
import TableCustom from "../../../Component/UI/Table";
import {
  dataExample,
  ConfigRecordColTaleManagerApprove,
} from "../_configTable";
import { ApplicationIcon, CheckedIcon, ListIcon } from "../../../assets/icon";
import FloatingActionButton from "../../../Component/UI/FloatingActionButton";
import CancelIcon from "../../../assets/icon/cancel";
import ListCardRecord from "../ListCardRecord";
import ModalRejectRecord from "./ModalRejectRecord";
import { IRecord } from "../../../Model/record.model";
import { useDispatch, useSelector } from "react-redux";
import { RootState, actionRecord } from "../../../State";
import { loadRecords } from "../../../State/action-creators/recordAction";
import { bindActionCreators } from "@reduxjs/toolkit";

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
const pagingManagerApprove = [
  {
    name: "Kho bản ghi",
    path: "",
  },
  {
    name: "Quản lý phê duyệt",
    path: "",
  },
];

type DropItem = {
  name: string;
  key: number;
};
function ManagerApprove() {
  const dispatch = useDispatch();
  const { loadRecords } = bindActionCreators(actionRecord, dispatch);
  const records = useSelector((state: RootState) => state.records);
  const [dataSource, setDataSource] = useState<IRecord[]>([]);
  const [modeView, setModeView] = useState<"list" | "card">("list");
  const [genre, setGenre] = useState<DropItem>(typeDropItems[0]);
  const [format, setFormat] = useState<DropItem>(formatDropItems[0]);
  const [selectedItems, setSelectedItems] = useState<IRecord[]>([]);
  ///
  const [dataShowCardView, setDataShowCardView] = useState<IRecord[]>([]);
  const [isRejectRecord, setIsRejectRecord] = useState<boolean>(false);

  const floatingAction = [
    {
      name: "Phê duyệt",
      icon: <CheckedIcon />,
      action: () => {},
    },
    {
      name: "Từ chối",
      icon: <CancelIcon className="text-error" />,
      action: () => {
        setIsRejectRecord(true);
      },
    },
  ];

  // init data
  useEffect(() => {
    setDataSource(records.data ? records.data : []);
  }, [records]);

  // filter data source
  useEffect(() => {
    let filterData = records.data ? records.data : [];

    if (genre.key !== 1) {
      filterData = filterData.filter((dt) => {
        return dt.genre.toLowerCase() === genre.name.toLowerCase();
      });
    }

    if (format.key !== 1) {
      filterData = filterData.filter((d) => {
        const nameFormat = format.key === 2 ? "audio" : "video";
        return d.format.toLowerCase() === nameFormat;
      });
    }

    setDataSource(filterData);
  }, [genre, format]);

  // handle init data
  useEffect(() => {
    loadRecords();
  }, []);

  return (
    <div className="w-full">
      <ModalRejectRecord
        recordId=""
        isOpen={isRejectRecord}
        onOk={function (): void {
          throw new Error("Function not implemented.");
        }}
        onCancel={() => setIsRejectRecord(false)}
      />

      <Paging items={pagingManagerApprove} />
      <TextHeader>Phê duyệt bản ghi</TextHeader>
      <Input
        className="mb-5 mt-5"
        placeholder="Tên bản ghi, ca sĩ..."
        height={40}
        width={500}
        search
      />
      <div className="flex items-start justify-between gap-10">
        <div className="w-full">
          <div className="flex items-center justify-between">
            <div className="box-start mb-4 gap-24">
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
              <div className="box-start  gap-4">
                <TextLabel>Định dạng: </TextLabel>
                <DropDown
                  active={format}
                  dropItems={formatDropItems}
                  onSelect={(val) => {
                    setFormat(val);
                  }}
                />
                {modeView === "card" && (
                  <div className="box-start gap-2">
                    <Checkbox
                      checked={selectedItems.length === 8}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedItems(dataShowCardView);
                        } else {
                          setSelectedItems([]);
                        }
                      }}
                      id="select-all"
                    />
                    <TextLabel className="font-normal" idInput="select-all">
                      Chọn tất cả
                    </TextLabel>
                  </div>
                )}
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
          <div className="w-full">
            {modeView === "list" ? (
              <TableCustom
                loading={records.loading}
                numberCol={12}
                checked
                data={dataSource}
                col={ConfigRecordColTaleManagerApprove}
              ></TableCustom>
            ) : (
              <ListCardRecord
                dataSource={dataSource}
                selected={true}
                size={8}
                onUnSelect={(val: IRecord) => {
                  setSelectedItems((prev) => {
                    return prev.filter((it) => it.id !== val.id);
                  });
                }}
                onSelect={(val: IRecord) => {
                  setSelectedItems((prev) => [...prev, val]);
                }}
                setDataShow={(val: IRecord[]) => {
                  setDataShowCardView(val);
                }}
                onSelectAll={(val: IRecord[]) => {}}
                selectedItems={selectedItems}
              />
            )}
          </div>
        </div>

        <div className="w-fit">
          <FloatingActionButton floatingActionButtonConfig={floatingAction} />
        </div>
      </div>
    </div>
  );
}

export default ManagerApprove;
