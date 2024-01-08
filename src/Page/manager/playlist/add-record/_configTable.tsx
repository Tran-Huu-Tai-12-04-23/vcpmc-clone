import { ColumnsType } from "antd/es/table";
import PathUrl from "../../../../Routes/path-url";

const generateDummyDataAudio = (count: number): RecordColDataType[] => {
  const data: RecordColDataType[] = [];
  for (let i = 0; i < count; i++) {
    data.push({
      id: `record_${i + 1}`,
      index: i + 1,
      key: i + 1,
      nameRecord: "record" + i,
      single: "signle " + i,
      author: "author " + i,
    });
  }
  return data;
};

export interface RecordColDataType {
  id: string;
  key: number;
  index: number;
  nameRecord: string;
  single: string;
  author: string;
}

type ConfigRecordColTaleProps = {
  onAddRecord: (id: string) => void;
};

export const ConfigRecordColTale = (props: ConfigRecordColTaleProps) => {
  const ConfigRecordColTale: ColumnsType<RecordColDataType> = [
    {
      title: "STT",
      dataIndex: "index",
      key: "index",
    },
    {
      title: "Tên bản ghi",
      dataIndex: "nameRecord",
      key: "nameRecord",
      render: (_, { nameRecord }) => (
        <div className="min-w-[10rem]">{nameRecord}</div>
      ),
    },
    {
      title: "Ca sĩ",
      dataIndex: "single",
      key: "single",
      render: (_, { single }) => <div className="min-w-[10rem]">{single}</div>,
    },
    {
      title: "Tác giả",
      dataIndex: "author",
      key: "author",
      render: (_, { author }) => <div className="min-w-[10rem]">{author}</div>,
    },
    {
      title: "",
      dataIndex: "id",
      key: "id",
      render: (_, { id }) => (
        <div className="box-start gap-4">
          <a
            href={
              PathUrl.URL_STORE_RECORD + "/" + PathUrl.UPDATE_RECORD + "/" + id
            }
            className="min-w-[6rem] text-primary underline hover:text-primary hover:underline hover:brightness-110"
          >
            Nghe
          </a>
          <span
            onClick={() => props.onAddRecord(id)}
            className="min-w-[6rem] cursor-pointer text-primary underline hover:text-primary hover:underline hover:brightness-110"
          >
            Thêm
          </span>
        </div>
      ),
    },
  ];
  return ConfigRecordColTale;
};
type ConfigRecordColTaleAddedProps = {
  onRemove: (id: string) => void;
};
export const ConfigRecordColTaleAdded = (
  props: ConfigRecordColTaleAddedProps,
) => {
  const ConfigRecordColTale: ColumnsType<RecordColDataType> = [
    {
      title: "STT",
      dataIndex: "index",
      key: "index",
    },
    {
      title: "Tên bản ghi",
      dataIndex: "nameRecord",
      key: "nameRecord",
      render: (_, { nameRecord }) => (
        <div className="min-w-[10rem]">{nameRecord}</div>
      ),
    },
    {
      title: "Ca sĩ",
      dataIndex: "single",
      key: "single",
      render: (_, { single }) => <div className="min-w-[10rem]">{single}</div>,
    },
    {
      title: "Tác giả",
      dataIndex: "author",
      key: "author",
      render: (_, { author }) => <div className="min-w-[10rem]">{author}</div>,
    },
    {
      title: "",
      dataIndex: "id",
      key: "id",
      render: (_, { id }) => (
        <div className="box-start gap-4">
          <a
            href={
              PathUrl.URL_STORE_RECORD + "/" + PathUrl.UPDATE_RECORD + "/" + id
            }
            className="min-w-[6rem] text-primary underline hover:text-primary hover:underline hover:brightness-110"
          >
            Nghe
          </a>
          <span
            onClick={() => props.onRemove(id)}
            className="min-w-[6rem] cursor-pointer text-primary underline hover:text-primary hover:underline hover:brightness-110"
          >
            Gỡ
          </span>
        </div>
      ),
    },
  ];
  return ConfigRecordColTale;
};

export const dataExampleRecord = generateDummyDataAudio(40);
