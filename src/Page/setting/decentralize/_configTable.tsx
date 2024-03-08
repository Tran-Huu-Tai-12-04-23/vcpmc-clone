import { ColumnsType } from "antd/es/table";
import dayjs from "dayjs";
import { Switch } from "antd";
import { Link } from "react-router-dom";
import { IRole } from "../../../Model/role.model";
import { IUser } from "../../../Model/user.model";

export const ConfigUserColTale: ColumnsType<IUser> = [
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
    title: "Vai trò",
    dataIndex: "role",
    key: "role",
  },
  {
    title: "Trạng thái",
    dataIndex: "status",
    key: "status",
    render: (_, { status }) => (
      <div className="box-start gap-4">
        <Switch defaultChecked={status} />
        <h5 className="text-third">
          {status ? "Đang kích hoạt" : "Ngừng kích hoạt"}{" "}
        </h5>
      </div>
    ),
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Số điện thoại",
    dataIndex: "phoneNumber",
    key: "phoneNumber",
  },
  {
    title: "Ngày hết hạn",
    dataIndex: "expirationDate",
    key: "expirationDate",
    render: (_, { dateExpired }) => (
      <div className="">{dayjs(dateExpired).format("DD/MM/YY")}</div>
    ),
  },
  {
    title: "",
    dataIndex: "id",
    key: "id",
    render: (_, { id }) => (
      <Link
        to={id ?? "#"}
        className="text-primary underline hover:text-primary hover:underline hover:brightness-110"
      >
        Chỉnh sửa
      </Link>
    ),
  },
];

type ConfigColRoleProps = {
  onRemove?: (id: string) => void;
};
export const ConfigColRole = (props: ConfigColRoleProps) => {
  const userRoleColTable: ColumnsType<IRole> = [
    {
      title: "STT",
      dataIndex: "index",
      key: "index",
      render: (_, __, index) => index + 1,
    },
    {
      title: "Tên nhóm người dùng",
      dataIndex: "nameRole",
      key: "nameRole",
    },
    {
      title: "Số lượng người dùng",
      dataIndex: "numberUser",
      key: "numberUser",
    },
    {
      title: "Vai trò",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Mô tả",
      dataIndex: "description",
      key: "description",
      render: (_, { description }) => (
        <p className="box-start max-w-[30rem] gap-4">{description}</p>
      ),
    },
    {
      title: "",
      dataIndex: "id",
      key: "id",
      render: (_, { id, isDefault }) => (
        <div className="center-item gap-4">
          <Link
            to={id ?? "#"}
            className="text-primary underline hover:text-primary hover:underline hover:brightness-110"
          >
            Cập nhật
          </Link>
          {!isDefault && (
            <div
              onClick={() => {
                props.onRemove && id && props.onRemove(id);
              }}
              className="text-error underline hover:text-error hover:underline hover:brightness-110"
            >
              Xóa
            </div>
          )}
        </div>
      ),
    },
  ];

  return userRoleColTable;
};

export const dataExampleRoleUser = [
  {
    id: "0",
    index: "0",
    nameGroupUser: "Super Admin",
    numberUser: 1,
    role: "System Admin",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    isDefault: true,
  },
  {
    id: "1",
    index: "1",
    nameGroupUser: "Group Admin",
    numberUser: 7,
    role: "System Admin",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    isDefault: true,
  },
  {
    id: "2",
    index: "2",
    nameGroupUser: "Sub - user",
    numberUser: 30,
    role: "Super Admin",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    isDefault: true,
  },
  {
    id: "3",
    index: "3",
    nameGroupUser: "Content manager",
    numberUser: 5,
    role: "Lisences",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    isDefault: true,
  },
  {
    id: "4",
    index: "4",
    nameGroupUser: "Content manager",
    numberUser: 5,
    role: "Lisences",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    isDefault: true,
  },
  {
    id: "5",
    index: "5",
    nameGroupUser: "Kế toán",
    numberUser: 1,
    role: "Lisences",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    isDefault: true,
  },
];

export const UserFeatureDefault = {
  managerUser: [
    { name: "nguoidung_phanquyen", key: 0, code: "Phân quyền người dùng" },
    { name: "nguoidung_tao", key: 1, code: "Tạo người dùng" },
    {
      name: "nguoidung_capnhat",
      key: 2,
      code: "Cập nhật thông tin người dùng",
    },
    { name: "nguoidung_xoa", key: 3, code: "Xóa người dùng" },
    { name: "nguoidung_xemchitiet", key: 4, code: "Xem thông tin chi tiết" },
  ],
  managerLibrary: [
    { name: "nguoidung_xemdanhsach", key: 5, code: "Danh sách Media" },
    { name: "nguoidung_tailentep", key: 6, code: "Tải lên Media" },
    { name: "nguoidung_chinhsua", key: 7, code: "Chỉnh sửa thông tin Media" },
    { name: "nguoidung_xoa", key: 8, code: "Xóa Media" },
    { name: "nguoidung_pheduyet", key: 9, code: "Phê duyệt Media" },
  ],
};
