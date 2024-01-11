import { ColumnsType } from "antd/es/table";
import PathUrl from "../../../Routes/path-url";
import dayjs, { Dayjs } from "dayjs";
import { Switch } from "antd";
import { Link } from "react-router-dom";

const generateDummyDataRecord = (count: number): RecordColDataType[] => {
  const data: RecordColDataType[] = [];
  for (let i = 0; i < count; i++) {
    data.push({
      id: `record_${i + 1}`,
      index: i + 1,
      adminAccountName: "admin" + i,
      admin: "admin -- " + i,
      numberContract: "number " + i,
      user: "" + i,
      specifiedDevice: "15",
      expirationDate: dayjs(),
      status: i % 2 === 0 ? true : false,
    });
  }
  return data;
};

export interface RecordColDataType {
  id: string;
  index: number;
  adminAccountName: string;
  admin: string;
  numberContract: string;
  user: string;
  specifiedDevice: string;
  expirationDate: Dayjs;
  status: boolean;
}

export const ConfigUnitColTale: ColumnsType<RecordColDataType> = [
  {
    title: "STT",
    dataIndex: "index",
    key: "index",
  },
  {
    title: "Tên tài khoản quản trị",
    dataIndex: "adminAccountName",
    key: "adminAccountName",
  },
  {
    title: "Số hợp đồng",
    dataIndex: "numberContract",
    key: "numberContract",
  },
  {
    title: "Admin",
    dataIndex: "admin",
    key: "admin",
  },
  {
    title: "Người dùng",
    dataIndex: "user",
    key: "user",
    render: (_, { user }) => <div className="text-center">{user}</div>,
  },
  {
    title: "Thiết bị được chỉ định",
    dataIndex: "specifiedDevice",
    key: "specifiedDevice",
    render: (_, { specifiedDevice }) => (
      <div className="text-center">{specifiedDevice}</div>
    ),
  },
  {
    title: "Ngày hết hạn",
    dataIndex: "expirationDate",
    key: "expirationDate",
    render: (_, { expirationDate }) => (
      <div className="">{expirationDate.format("DD/MM/YY")}</div>
    ),
  },
  {
    title: "Trạng thái",
    dataIndex: "status",
    key: "status",
    render: (_, { status }) => (
      <div className="center-item gap-2">
        <Switch style={{}} value={status} />
        {status ? <h5>Đang kích hoạt</h5> : <h5>Đang kích hoạt</h5>}
      </div>
    ),
  },
  {
    title: "",
    dataIndex: "id",
    key: "id",
    render: (_, { id }) => (
      <div className="box-start gap-4">
        <Link
          to={id}
          className="text-primary underline hover:text-primary hover:underline hover:brightness-110"
        >
          Xem chi tiết
        </Link>
      </div>
    ),
  },
];

export const dataExampleUnit = generateDummyDataRecord(40);
