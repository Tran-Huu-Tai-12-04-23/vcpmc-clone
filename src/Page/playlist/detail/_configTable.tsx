import { ColumnsType } from "antd/es/table";
import PathUrl from "../../../Routes/path-url";

const generateDummyDataAudio = (count: number): AudioColDataType[] => {
  const data: AudioColDataType[] = [];
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

export interface AudioColDataType {
  id: string;
  key: number;
  index: number;
  nameRecord: string;
  single: string;
  author: string;
}

type ConfigColRecordsAddedProps = {
  onRemove: (id: string) => void;
};
export const ConfigColRecordsAdded = (props: ConfigColRecordsAddedProps) => {
  const configCol: ColumnsType<AudioColDataType> = [
    {
      title: "STT",
      dataIndex: "index",
      key: "index",
      render: (_, __, index) => index + 1,
    },
    {
      title: "Tên bản ghi",
      dataIndex: "nameRecord",
      key: "nameRecord",
      render: (_, { nameRecord }) => (
        <div className="min-w-[14rem]">{nameRecord}</div>
      ),
    },
    {
      title: "Ca sĩ",
      dataIndex: "single",
      key: "single",
      render: (_, { single }) => <div className="min-w-[14rem]">{single}</div>,
    },
    {
      title: "Tác giả",
      dataIndex: "author",
      key: "author",
      render: (_, { author }) => <div className="min-w-[14rem]">{author}</div>,
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
            className="text-primary underline hover:text-primary hover:underline hover:brightness-110"
          >
            Nghe
          </a>
          <span
            onClick={() => {
              props.onRemove(id);
            }}
            className="cursor-pointer text-primary underline hover:text-primary hover:underline hover:brightness-110"
          >
            Gỡ
          </span>
        </div>
      ),
    },
  ];

  return configCol;
};
