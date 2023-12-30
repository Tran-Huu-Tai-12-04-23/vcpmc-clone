import { ColumnsType } from "antd/es/table";
import PathUrl from "../../../../Routes/path-url";

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
