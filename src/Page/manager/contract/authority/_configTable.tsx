import { ColumnsType } from "antd/es/table";
import PathUrl from "../../../../Routes/path-url";
import UseStatusContract from "../../../../Hook/useStatusContract";
import dayjs from "dayjs";
import {
  IContractAuthority,
  statusContractAuthority,
  typeAuthorizedLegalEntity,
} from "../../../../Model/contractAuthority.model";

export interface ColDataTypeListSongAuthority {
  id: string;
  index: number;
  singer: string;
  author: string;
  codeISRC: string;
  nameRecord: string;
  dateUpload: Date;
  key: number;
  status: number;
}

export const ConfigColTale: ColumnsType<IContractAuthority> = [
  {
    title: "STT",
    dataIndex: "index",
    key: "index",
    render: (_, __, index) => index + 1,
  },
  {
    title: "Số hợp đồng",
    dataIndex: "numberContract",
    key: "numberContract",
  },
  {
    title: "Tên hợp đồng",
    dataIndex: "nameContract",
    key: "nameContract",
  },
  {
    title: "Người ủy quyền",
    key: "personAuthority",
    dataIndex: "personAuthority",
    render: (_, { personAuthority }) => (
      <div className="box-start gap-4">
        {personAuthority.firstName + " " + personAuthority.lastName}
      </div>
    ),
  },
  {
    title: "Quyền sở hữu",
    render: (_, {}) => (
      <div className="box-start gap-4">{"Người biểu diễn"}</div>
    ),
  },
  {
    title: "Hiệu lực hợp đồng",
    key: "expireDate",
    dataIndex: "expireDate",
    render: (_, { status }) => (
      <div className="box-start gap-4">
        {status === statusContractAuthority.IS_EFFECT && (
          <>
            <div className="h-4 w-4 rounded-full bg-blue-600"></div>
            <span>Còn hiệu lực</span>
          </>
        )}
        {status === statusContractAuthority.IS_NEW && (
          <>
            <div className="h-4 w-4 rounded-full bg-green-600"></div>
            <span>Mới</span>
          </>
        )}{" "}
        {status === statusContractAuthority.IS_CANCELLED && (
          <>
            <div className="h-4 w-4 rounded-full bg-red-600"></div>
            <span>Đã hủy</span>
          </>
        )}{" "}
        {status === statusContractAuthority.IS_EXPIRE && (
          <>
            <div className="h-4 w-4 rounded-full bg-gray-600"></div>
            <span>Hết hiệu lực</span>
          </>
        )}
      </div>
    ),
  },
  {
    title: "Ngày tạo",
    key: "createAt",
    dataIndex: "createAt",
    render: (_, { createAt }) => (
      <div className="box-start gap-4">
        {dayjs(createAt).format("DD/MM/YYYY")}
      </div>
    ),
  },
  {
    title: "",
    dataIndex: "id",
    key: "id",
    render: (_, { id, status }) => (
      <div className="box-start gap-4">
        <a
          href={PathUrl.MANAGER_CONTRACT + "/" + PathUrl.AUTHORITY + "/" + id}
          className="text-primary underline hover:text-primary hover:underline hover:brightness-110"
        >
          Xem chi tiết
        </a>
        {status === statusContractAuthority.IS_CANCELLED && (
          <a
            href={id}
            className="text-primary underline hover:text-primary hover:underline hover:brightness-110"
          >
            Lý do hủy
          </a>
        )}
      </div>
    ),
  },
];

export const ConfigColTaleListSongInContractAuthority: ColumnsType<ColDataTypeListSongAuthority> =
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
      title: "Ca sĩ",
      key: "singer",
      dataIndex: "singer",
    },
    {
      title: "Tác giả",
      key: "author",
      dataIndex: "author",
    },
    {
      title: "Ngày tải",
      key: "dateUpload",
      dataIndex: "dateUpload",
      render: (_, { dateUpload }) => (
        <div className="box-start gap-4">
          {dayjs(dateUpload).format("DD/MM/YYYY")}
        </div>
      ),
    },
    {
      title: "Trạng thái",
      key: "status",
      dataIndex: "status",
      render: (_, { status }) => (
        <div className="box-start w-fit gap-4">
          {<UseStatusContract statusIndex={status} />}
        </div>
      ),
    },
    {
      title: "",
      dataIndex: "id",
      key: "id",
      render: (_, { id }) => (
        <a
          href={PathUrl.MANAGER_CONTRACT + "/" + PathUrl.AUTHORITY + "/" + id}
          className="text-primary hover:text-primary hover:underline hover:brightness-110"
        >
          Nghe
        </a>
      ),
    },
  ];

const generateDummyDataListSongAuthority = (
  count: number,
): ColDataTypeListSongAuthority[] => {
  const data: ColDataTypeListSongAuthority[] = [];
  for (let i = 1; i <= count; i++) {
    data.push({
      id: `id_${i}`,
      index: i,
      singer: `Singer_${i}`,
      author: `Author_${i}`,
      codeISRC: `ISRC_${i}`,
      nameRecord: `RecordName_${i}`,
      dateUpload: new Date(),
      key: i,
      status: i % 4,
    });
  }
  return data;
};

export const dataExampleListSong = generateDummyDataListSongAuthority(100);
