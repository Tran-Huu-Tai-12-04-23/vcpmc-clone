import { ColumnsType } from "antd/es/table";
import { Switch } from "antd";
import { Link } from "react-router-dom";
import { IUnitUsed } from "../../../Model/unitUsed.model";
import dayjs from "dayjs";

export const ConfigUnitColTale: ColumnsType<IUnitUsed> = [
  {
    title: "STT",
    dataIndex: "index",
    key: "index",
    render: (_, __, index) => index + 1,
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
      <div className="">{dayjs(expirationDate).format("DD/MM/YY")}</div>
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
          to={id ?? "#"}
          className="text-primary underline hover:text-primary hover:underline hover:brightness-110"
        >
          Xem chi tiết
        </Link>
      </div>
    ),
  },
];
