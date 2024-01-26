import { ColumnsType } from "antd/es/table";
import PathUrl from "../../Routes/path-url";
import dayjs from "dayjs";
import { IRecord } from "../../Model/record.model";

const generateDummyDataRecord = (count: number): IRecord[] => {
  const data: IRecord[] = [];
  for (let i = 0; i < count; i++) {
    data.push({
      id: `record_${i + 1}`,
      codeISRC: `ISRC_${i + 1}`,
      nameRecord: `Record ${i + 1}`,
      duration: Math.floor(Math.random() * 300) + 60,
      single: `Single ${i + 1}`,
      author: `Author ${i + 1}`,
      genre: "genre " + i,
      format: `Format ${i + 1}`,
      expiryDate: dayjs(),
      key: i + 1,
      thumbnails: "",
      numberContract: "number " + i,
    });
  }
  return data;
};

export const ConfigRecordColTale: ColumnsType<IRecord> = [
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
    render: (_, { expiryDate }) => {
      const dateCheck = dayjs(expiryDate);
      return (
        <div className="">
          {dateCheck.isAfter(dayjs()) || dateCheck.isSame(dayjs()) ? (
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
            {dateCheck.format("DD/MM/YYYY")}
          </h5>
        </div>
      );
    },
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
export const ConfigRecordColTaleManagerApprove: ColumnsType<IRecord> = [
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
    render: (_, { expiryDate }) => {
      const dateCheck = dayjs(expiryDate);
      return (
        <div className="">
          {dateCheck.isAfter(dayjs()) || dateCheck.isSame(dayjs()) ? (
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
            {dateCheck.format("DD/MM/YYYY")}
          </h5>
        </div>
      );
    },
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
