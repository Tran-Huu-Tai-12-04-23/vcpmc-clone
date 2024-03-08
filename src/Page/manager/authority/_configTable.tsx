import { ColumnsType } from "antd/es/table";
import PathUrl from "../../../Routes/path-url";
import { Switch } from "antd";
import { Link } from "react-router-dom";
import { IAuthorizedPartner } from "../../../Model/authorizedPartner.model";
import dayjs from "dayjs";

export const ConfigColAuthority: ColumnsType<IAuthorizedPartner> = [
  {
    title: "STT",
    dataIndex: "index",
    key: "index",
    render: (_, __, index) => index + 1,
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
      <div>{dayjs(expirationDate).format("DD/MM/YY")}</div>
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
