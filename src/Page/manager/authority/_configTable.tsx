import { ColumnsType } from "antd/es/table";
import PathUrl from "../../../Routes/path-url";
import dayjs, { Dayjs } from "dayjs";
import { Switch } from "antd";
import { Link } from "react-router-dom";

const generateDummyDataAuthority = (count: number): AuthorityColDataType[] => {
  const data: AuthorityColDataType[] = [];
  for (let i = 0; i < count; i++) {
    data.push({
      id: `record_${i + 1}`,
      index: i + 1,
      username: "username" + i,
      fullName: "fullName" + i,
      phoneNumber: "023123123" + i,
      email: "email" + i + "@gmail.com",
      expirationDate: dayjs(),
      status: i % 2 === 0 ? true : false,
      role: "QA",
    });
  }
  return data;
};

export interface AuthorityColDataType {
  id: string;
  index: number;
  fullName: string;
  username: string;
  email: string;
  phoneNumber: string;
  expirationDate: Dayjs;
  status: boolean;
  role: string;
}

export const ConfigColAuthority: ColumnsType<AuthorityColDataType> = [
  {
    title: "STT",
    dataIndex: "index",
    key: "index",
  },
  {
    title: "Họ tên",
    dataIndex: "fullName",
    key: "fullName",
  },
  {
    title: "Tên đăng nhập",
    dataIndex: "username",
    key: "username",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    render: (_, { email }) => <div>{email}</div>,
  },
  {
    title: "Ngày hết hạn",
    dataIndex: "expirationDate",
    key: "expirationDate",
    render: (_, { expirationDate }) => (
      <div>{expirationDate.format("DD/MM/YY")}</div>
    ),
  },
  {
    title: "Số điện thoại",
    dataIndex: "phoneNumber",
    key: "phoneNumber",
    render: (_, { phoneNumber }) => <div className="">{phoneNumber}</div>,
  },
  {
    title: "Trạng thái",
    dataIndex: "status",
    key: "status",
    render: (_, { status }) => (
      <div className="box-start gap-2">
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
          to={PathUrl.EDIT + "/" + id}
          className="text-primary underline hover:text-primary hover:underline hover:brightness-110"
        >
          Cập nhật
        </Link>
      </div>
    ),
  },
];

export const dataExampleAuthority = generateDummyDataAuthority(40);
