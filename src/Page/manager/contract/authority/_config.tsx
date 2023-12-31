import { ColumnsType } from "antd/es/table";
import PathUrl from "../../../../Routes/path-url";
import UseStatusContract from "../../../../Hook/useStatusContract";
import dayjs from "dayjs";

const generateDummyData = (count: number): ColDataType[] => {
  const data: ColDataType[] = [];
  for (let i = 1; i <= count; i++) {
    data.push({
      key: i,
      id: `id_${i}`,
      index: i,
      numberContract: `Contract_${i}`,
      nameContract: `ContractName_${i}`,
      userAuthority: `User_${i}`,
      ownerShip: `Owner_${i}`,
      validityContract: i * 100,
      isCancel: i > 20 ? true : false,
    });
  }
  return data;
};
export interface ColDataType {
  id: string;
  index: number;
  numberContract: string;
  nameContract: string;
  userAuthority: string;
  ownerShip: string;
  validityContract: number;
  isCancel: boolean;
  key: number;
}

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

export const ConfigColTale: ColumnsType<ColDataType> = [
  {
    title: "STT",
    dataIndex: "index",
    key: "index",
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
    key: "userAuthority",
    dataIndex: "userAuthority",
  },
  {
    title: "Quyền sở hữu",
    key: "ownerShip",
    dataIndex: "ownerShip",
  },
  {
    title: "Hiệu lực hợp đồng",
    key: "validityContract",
    dataIndex: "validityContract",
  },
  {
    title: "Ngày tạo",
    key: "createAt",
    dataIndex: "createAt",
  },
  {
    title: "Quyền sở hữu",
    key: "ownerShip",
    dataIndex: "ownerShip",
  },
  {
    title: "",
    dataIndex: "id",
    key: "id",
    render: (_, { id, isCancel }) => (
      <div className="box-start gap-4">
        <a
          href={PathUrl.MANAGER_CONTRACT + "/" + PathUrl.AUTHORITY + "/" + id}
          className="text-primary underline hover:text-primary hover:underline hover:brightness-110"
        >
          Xem chi tiết
        </a>
        {isCancel && (
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
export const data: ColDataType[] = generateDummyData(100);

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
