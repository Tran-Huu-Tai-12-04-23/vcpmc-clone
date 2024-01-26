import { useEffect, useState, memo } from "react";
import {
  Button,
  DropDown,
  Input,
  Paging,
  TextHeader,
  TextLabel,
} from "../../../Component";
import TableCustom from "../../../Component/UI/Table";
import { ConfigRecordColTale, ConfigRecordColTaleAdded } from "./_configTable";
import { useDispatch, useSelector } from "react-redux";
import { RootState, actionRecord } from "../../../State";
import { IRecord } from "../../../Model/record.model";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useRouter } from "../../../Routes/hooks";
import Helper from "../../../Helper";
const PagingItemAddRecord = [
  {
    name: "Playlist",
  },
  {
    name: "Thêm playlist mới",
  },
  {
    name: "Thêm bản ghi vào playlist",
  },
];

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

const playlistPrototype = [
  {
    name: "Playslist 1",
    key: 1,
  },
  {
    name: "Playslist 2",
    key: 2,
  },
  {
    name: "Playslist 3",
    key: 3,
  },
  {
    name: "Playslist 4",
    key: 4,
  },
];
type DropItem = {
  name: string;
  key: number;
};
function AddRecord() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { loadRecords, searchRecord } = bindActionCreators(
    actionRecord,
    dispatch,
  );
  const { data, loading } = useSelector((state: RootState) => state.records);
  const [dataSource, setDataSource] = useState<IRecord[]>([]);
  const [genre, setGenre] = useState<DropItem>(typeDropItems[0]);
  const [playlist, setPlaylist] = useState<DropItem>({
    name: "Playlist mẫu",
    key: -1,
  });
  const [recordsAdded, setRecordsAdded] = useState<IRecord[]>([]);
  const [totalDuration, setTotalDuration] = useState<number>(0);
  const [searchKey, setSearchKey] = useState<string>("");

  const handleAddRecord = (id: string) => {
    const record = dataSource.find((rc) => rc.id === id);
    record &&
      setRecordsAdded((prev) => {
        const recordExist = prev.find((rec) => rec.id === record.id);
        return recordExist ? prev : [...prev, record];
      });
  };
  const handleRemoveRecord = (id: string) => {
    setRecordsAdded((prev) => prev.filter((rec) => rec.id !== id));
  };
  const col = ConfigRecordColTale({
    onAddRecord: (id: string) => {
      handleAddRecord(id);
    },
  });

  const colAdded = ConfigRecordColTaleAdded({
    onRemove: (id: string) => {
      handleRemoveRecord(id);
    },
  });

  const handleSaveRecord = () => {
    const rcAdds: any[] = recordsAdded.map((re) => re?.id);

    if (rcAdds && rcAdds.length > 0) {
      localStorage.setItem("rc-added", rcAdds.join("-"));
    }

    router.back();
  };

  //init data
  useEffect(() => {
    data && setDataSource(data);
  }, [data]);

  // init records
  useEffect(() => {
    if (!data) loadRecords();
  }, []);

  // filter data
  useEffect(() => {
    let filterData = data ? data : [];

    if (genre.key !== 1) {
      filterData = filterData.filter((dt) => {
        return dt.genre.toLowerCase() === genre.name.toLowerCase();
      });
    }

    setDataSource(filterData);
  }, [genre]);

  useEffect(() => {
    const totalDur = recordsAdded.reduce(
      (acc, record) => acc + (record.duration || 0),
      0,
    );

    if (recordsAdded.length <= 0) {
      setTotalDuration(0);
    } else {
      setTotalDuration(totalDur);
    }
  }, [recordsAdded]);

  useEffect(() => {
    if (searchKey) {
      searchRecord(searchKey);
    } else {
      loadRecords();
    }
  }, [searchKey]);

  //init record added
  useEffect(() => {
    const rcAdded = localStorage.getItem("rc-added")?.split("-");

    if (data && rcAdded) {
      const recordsAddedFind = data.filter((rc: IRecord) =>
        rcAdded.includes(rc.id ? rc.id : ""),
      );
      setRecordsAdded(recordsAddedFind);
      console.log(recordsAddedFind);
    }
  }, [data]);

  return (
    <div className="w-full">
      <Paging items={PagingItemAddRecord} />
      <TextHeader>Thêm bản ghi</TextHeader>
      <div className="mt-8 flex items-start justify-between gap-10 pr-20">
        <div className="w-1/2 overflow-hidden rounded-lg bg-[#2a2a3b]">
          <div className="p-4 pb-0">
            <h5 className="text-[18px] font-semibold">Kho bản ghi</h5>
            <div className="box-start mt-2 w-fit  flex-col ">
              <div className="flex w-full items-center justify-between">
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
                    active={playlist}
                    dropItems={playlistPrototype}
                    onSelect={(val) => {
                      setPlaylist(val);
                    }}
                  />
                </div>
              </div>
              <Input
                background="#33334D"
                className="mb-5 mt-5"
                placeholder="Tên bản ghi, ca sĩ..."
                height={48}
                width={653}
                search
                value={searchKey}
                onChange={(e) => setSearchKey(e.target.value)}
              />
            </div>
          </div>
          <TableCustom
            minHeight="400px"
            numberCol={8}
            data={dataSource}
            col={col}
            loading={loading}
          />
        </div>
        <div className="w-1/2">
          <h5 className="text-[18px] font-semibold">
            Danh sách bản ghi được thêm vào Playlist
          </h5>

          <div className="box-start w-fit flex-col gap-2">
            <div className="mt-4 flex w-full items-center justify-between">
              <div className="box-start gap-8">
                <TextLabel>Tổng số: </TextLabel>
                <span>{recordsAdded.length} bản ghi</span>
              </div>
              <div className="box-start gap-8">
                <TextLabel>Tổng thời lượng: </TextLabel>
                <span>
                  {totalDuration <= 0
                    ? "--:--:--"
                    : Helper.convertDurationToString(totalDuration)}
                </span>
              </div>
            </div>
            <Input
              background="#33334D"
              className="mb-5 mt-2"
              placeholder="Tên bản ghi, ca sĩ..."
              height={48}
              width={653}
              search
            />
          </div>

          <TableCustom
            minHeight="550px"
            numberCol={8}
            data={recordsAdded}
            locale={{
              emptyText: (
                <div className="flex items-center justify-center gap-2">
                  <span>Vui lòng chọn bản ghi để thêm vào Playlist</span>
                  <span className="mt-2 text-error">*</span>
                </div>
              ),
            }}
            col={colAdded}
          />
        </div>
      </div>

      <div className="mt-20 flex w-full items-center justify-center gap-24">
        <Button typebtn="outline" sizetype="hug" onClick={() => router.back()}>
          Hủy
        </Button>
        <Button onClick={handleSaveRecord} typebtn="primary" sizetype="hug">
          Lưu
        </Button>
      </div>
    </div>
  );
}

export default memo(AddRecord);
