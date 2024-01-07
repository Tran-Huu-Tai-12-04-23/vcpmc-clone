import { ColumnsType } from "antd/es/table";
import PathUrl from "../../../Routes/path-url";
import dayjs, { Dayjs } from "dayjs";

const generateDummyDataRecord = (count: number): RecordColDataType[] => {
  const data: RecordColDataType[] = [];
  for (let i = 0; i < count; i++) {
    data.push({
      id: `record_${i + 1}`,
      index: i + 1,
      codeISRC: `ISRC_${i + 1}`,
      nameRecord: `Record ${i + 1}`,
      duration: Math.floor(Math.random() * 300) + 60, // Random duration between 60 and 360 seconds
      single: `Single ${i + 1}`,
      author: `Author ${i + 1}`,
      genre: Math.floor(Math.random() * 5) + 1, // Random genre between 1 and 5
      format: `Format ${i + 1}`,
      expiryDate: dayjs(), // Random expiry date within the next 30 days
      key: i + 1,
      thumbnails: "",
      numberContract: "number " + i,
    });
  }
  return data;
};

export interface RecordColDataType {
  id: string;
  index: number;
  codeISRC: string;
  nameRecord: string;
  duration: number;
  single: string;
  author: string;
  genre: number;
  format: string;
  expiryDate: Dayjs;
  key: number;
  thumbnails: string;
  numberContract: string;
}

export const ConfigRecordColTale: ColumnsType<RecordColDataType> = [
  {
    title: "STT",
    dataIndex: "index",
    key: "index",
  },
  {
    title: "Tên bản ghi",
    dataIndex: "nameRecord",
    key: "nameRecord",
  },
  {
    title: "Mã ISRC",
    dataIndex: "codeISRC",
    key: "codeISRC",
  },
  {
    title: "Thời lượng",
    key: "duration",
    dataIndex: "duration",
  },
  {
    title: "Ca sĩ",
    key: "single",
    dataIndex: "single",
  },
  {
    title: "Tác giả",
    key: "author",
    dataIndex: "author",
  },
  {
    title: "Thể loại",
    key: "genre",
    dataIndex: "genre",
  },
  {
    title: "Định dạng",
    key: "format",
    dataIndex: "format",
  },
  {
    title: "Thời hạn sử dụng",
    key: "expiryDate",
    dataIndex: "expiryDate",
    render: (_, { id, expiryDate }) => (
      <div className="">
        {expiryDate.isBefore(dayjs()) ? (
          <div className="flex items-center justify-start">
            <div className="mr-2 h-2 w-2 rounded-full bg-blue-600"></div>
            <div>Còn thời hạn</div>
          </div>
        ) : (
          <div className="flex items-center justify-start">
            <div className="mr-2 h-2 w-2 rounded-full bg-gray-500"></div>
            <div>Hết thời hạn</div>
          </div>
        )}
        <h5 className="text-[12px] text-[#808089]">
          {expiryDate.format("YY/MM/DD")}
        </h5>
      </div>
    ),
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
          Cập nhật
        </a>
        <a
          href={id}
          className="text-primary underline hover:text-primary hover:underline hover:brightness-110"
        >
          Nghe
        </a>
      </div>
    ),
  },
];
export const ConfigRecordColTaleManagerApprove: ColumnsType<RecordColDataType> =
  [
    {
      title: "STT",
      dataIndex: "index",
      key: "index",
    },
    {
      title: "Tên bản ghi",
      dataIndex: "nameRecord",
      key: "nameRecord",
    },
    {
      title: "Mã ISRC",
      dataIndex: "codeISRC",
      key: "codeISRC",
    },
    {
      title: "Thời lượng",
      key: "duration",
      dataIndex: "duration",
    },
    {
      title: "Ca sĩ",
      key: "single",
      dataIndex: "single",
    },
    {
      title: "Tác giả",
      key: "author",
      dataIndex: "author",
    },
    {
      title: "Mã ISRC",
      key: "codeISRC",
      dataIndex: "codeISRC",
    },
    {
      title: "Số hợp đồng",
      key: "numberContract",
      dataIndex: "numberContract",
    },
    {
      title: "Thời hạn sử dụng",
      key: "expiryDate",
      dataIndex: "expiryDate",
      render: (_, { id, expiryDate }) => (
        <div className="">
          {expiryDate.isBefore(dayjs()) ? (
            <div className="flex items-center justify-start">
              <div className="mr-2 h-2 w-2 rounded-full bg-blue-600"></div>
              <div>Còn thời hạn</div>
            </div>
          ) : (
            <div className="flex items-center justify-start">
              <div className="mr-2 h-2 w-2 rounded-full bg-gray-500"></div>
              <div>Hết thời hạn</div>
            </div>
          )}
          <h5 className="text-[12px] text-[#808089]">
            {expiryDate.format("YY/MM/DD")}
          </h5>
        </div>
      ),
    },
    {
      title: "",
      dataIndex: "id",
      key: "id",
      render: (_, { id }) => (
        <div className="box-start gap-4">
          <a
            href={id}
            className="text-primary underline hover:text-primary hover:underline hover:brightness-110"
          >
            Nghe
          </a>
        </div>
      ),
    },
  ];

export const dataExample = generateDummyDataRecord(40);
