import { ColumnsType } from "antd/es/table";
import dayjs, { Dayjs } from "dayjs";
import { Link } from "react-router-dom";
import PathUrl from "../../../../Routes/path-url";

const generateDummyDataDetailUnitUsed = (
  count: number,
): DetailUnitUsedColDataType[] => {
  const data: DetailUnitUsedColDataType[] = [];
  for (let i = 0; i < count; i++) {
    data.push({
      id: `user_${i + 1}`,
      index: i + 1,
      name: "name " + i,
      role: i % 2 === 0 ? "QC" : "Content Manager",
      email: "nguyenvanb@gmail.com" + i,
      username: "nguyenvanb " + i,
      dateLastUpdate: dayjs(),
      status: i % 2 === 0 ? true : false,
    });
  }
  return data;
};

export interface DetailUnitUsedColDataType {
  id: string;
  index: number;
  name: string;
  role: string;
  email: string;
  username: string;
  dateLastUpdate: Dayjs;
  status: boolean;
}

export const ConfigDetailUnitColTale: ColumnsType<DetailUnitUsedColDataType> = [
  {
    title: "STT",
    dataIndex: "index",
    key: "index",
  },
  {
    title: "Tên người dùng",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Vai trò",
    dataIndex: "role",
    key: "role",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
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
    render: (_, { dateLastUpdate }) => (
      <div className="box-start">{dateLastUpdate.format("DD/MM/YY")}</div>
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
    render: (_, { id }) => (
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
            id
          }
          className="text-primary underline hover:text-primary hover:underline hover:brightness-110"
        >
          Xem chi tiết
        </Link>
      </div>
    ),
  },
];

export const dataExampleDetailUnit = generateDummyDataDetailUnitUsed(40);
