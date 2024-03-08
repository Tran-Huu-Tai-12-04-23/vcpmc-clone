import { ColumnsType } from "antd/es/table";
import dayjs, { Dayjs } from "dayjs";
import { Link } from "react-router-dom";
import PathUrl from "../../../../Routes/path-url";
import { IUser } from "../../../../Model/user.model";

export interface IU {
  id: string;
  index: number;
  name: string;
  role: string;
  email: string;
  username: string;
  dateLastUpdate: Dayjs;
  status: boolean;
}

export const ConfigDetailUnitColTale: ColumnsType<IUser> = [
  {
    title: "STT",
    dataIndex: "index",
    key: "index",
    render: (_, __, index) => index + 1,
  },
  {
    title: "Tên người dùng",
    dataIndex: "name",
    key: "name",
    render: (_, { userDetail }) => (
      <div className="text-center">
        {userDetail?.firstName ?? "" + userDetail?.lastName ?? ""}
      </div>
    ),
  },
  {
    title: "Vai trò",
    dataIndex: "role",
    key: "role",
    render: (_, { userDetail }) => (
      <div className="text-center">{userDetail?.role}</div>
    ),
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    render: (_, { userDetail }) => (
      <div className="text-center">{userDetail?.email}</div>
    ),
  },
  {
    title: "Tên đăng nhập",
    dataIndex: "username",
    key: "username",
  },
  {
    title: "Cập nhật lần cuối",
    dataIndex: "dateLastUpdate",
    key: "dateLastUpdate",
    render: (_, { updateDate }) => (
      <div className="box-start">{dayjs(updateDate).format("DD/MM/YY")}</div>
    ),
  },
  {
    title: "Trạng thái",
    dataIndex: "status",
    key: "status",
    render: (_, { status }) => (
      <div className="box-start gap-2">
        {status ? (
          <>
            <div className="h-2 w-2 rounded-full bg-green-500"></div>
            <h5>Đang hoạt động</h5>
          </>
        ) : (
          <>
            <div className="h-2 w-2 rounded-full bg-red-600"></div>
            <h5>Ngưng hoạt động</h5>
          </>
        )}
      </div>
    ),
  },
  {
    title: "",
    dataIndex: "id",
    key: "id",
    render: (_, { userDetail }) => (
      <div className="box-start gap-4">
        <Link
          to={
            "/" +
            PathUrl.URL_MANAGER +
            "/" +
            PathUrl.MANAGER_UNIT_USED +
            "/" +
            PathUrl.INFO_USER +
            "/" +
            userDetail?.email
          }
          className="text-primary underline hover:text-primary hover:underline hover:brightness-110"
        >
          Xem chi tiết
        </Link>
      </div>
    ),
  },
];
