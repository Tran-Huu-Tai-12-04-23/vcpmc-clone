import { useEffect, useState } from "react";
import { DropDown, Input, TextHeader, TextLabel } from "../../Component";
import { ApplicationIcon, EditIcon, ListIcon } from "../../assets/icon";
import FloatingActionButton from "../../Component/UI/FloatingActionButton";
import ListRecord from "./ListRecord";
import CardRecord from "./ListCardRecord";
import { useRouter } from "../../Routes/hooks";
import PathUrl from "../../Routes/path-url";
import { RecordsResponseType } from "../../Service/record.service";
import { IRecord } from "../../Model/record.model";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { RootState, actionRecord } from "../../State";

const genreDropItems = [
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
    name: "video",
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
  const dispatch = useDispatch();
  const { loadRecords, searchRecord } = bindActionCreators(
    actionRecord,
    dispatch,
  );
  const records = useSelector((state: RootState) => state.records);
  const router = useRouter();
  const [dataSource, setDataSource] = useState<IRecord[]>([]);
  const [modeView, setModeView] = useState<"list" | "card">("list");
  const [genre, setGenre] = useState<DropItem>(genreDropItems[0]);
  const [format, setFormat] = useState<DropItem>(formatDropItems[0]);
  const [expiryDate, setExpiryDate] = useState<DropItem>(
    expiryDateDropItems[0],
  );
  const [status, setStatus] = useState<DropItem>(statusDropItems[0]);
  const [searchKey, setSearchKey] = useState<string>("");
  const floatingAction = [
    {
      name: "Quản lý phê duyệt",
      icon: <EditIcon className="text-primary" />,
      action: () => {
        router.push(PathUrl.URL_STORE_RECORD + "/" + PathUrl.MANAGER_APPROVE);
      },
    },
  ];

  // filter data
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

    if (expiryDate.key !== 1) {
      filterData = filterData.filter((d) => {
        const currentDate = dayjs();
        const specificDate = dayjs(d.expiryDate);
        const isDateValid =
          specificDate.isSame(currentDate) || specificDate.isAfter(currentDate);
        if (expiryDate.key === 2) {
          // con thoi han
          return isDateValid;
        } else {
          //het thoi han
          return !isDateValid;
        }
      });
    }

    if (status.key !== 1) {
    }

    setDataSource(filterData);
  }, [genre, format, expiryDate, status]);

  // init data
  useEffect(() => {
    setDataSource(records.data ? records.data : []);
  }, [records]);

  useEffect(() => {
    loadRecords();
  }, []);

  useEffect(() => {
    if (searchKey) {
      const handleSearch = setTimeout(() => {
        searchRecord(searchKey);
      }, 1000);
      return () => {
        clearTimeout(handleSearch);
      };
    } else {
      loadRecords();
    }
  }, [searchKey]);

  return (
    <div className=" w-full">
      <TextHeader>Kho bản ghi</TextHeader>
      <Input
        value={searchKey}
        onChange={(e) => setSearchKey(e.target.value)}
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
                  dropItems={genreDropItems}
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
                <TextLabel>Thời hạn sử dụng: </TextLabel>
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
                  width="18rem"
                  classDropItem="border-primary bg-main"
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
            {modeView === "list" ? (
              <ListRecord dataSource={dataSource} />
            ) : (
              <CardRecord dataSource={dataSource} />
            )}
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
