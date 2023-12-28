import React from "react";
import { Pagination, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import styled from "styled-components";

const WrapperTable = styled.div``;
const generateDummyData = (count: number): DataType[] => {
  const data: DataType[] = [];
  for (let i = 1; i <= count; i++) {
    data.push({
      id: `id_${i}`,
      index: i,
      numberContract: `Contract_${i}`,
      nameContract: `ContractName_${i}`,
      userAuthority: `User_${i}`,
      ownerShip: `Owner_${i}`,
      validityContract: i * 100, // Just an example value, replace with your logic
    });
  }
  return data;
};
interface DataType {
  id: string;
  index: number;
  numberContract: string;
  nameContract: string;
  userAuthority: string;
  ownerShip: string;
  validityContract: number;
}

const columns: ColumnsType<DataType> = [
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
    render: (_, { id }) => (
      <>
        <a
          href={id}
          className="text-primary underline hover:text-primary hover:underline hover:brightness-110"
        >
          Xem chi tiết
        </a>
      </>
    ),
  },
];
let data: DataType[] = generateDummyData(20);

const TableCustom: React.FC = () => (
  <WrapperTable>
    <Table
      bordered
      columns={columns}
      dataSource={data}
      pagination={false}
      footer={() => (
        <div className="flex items-center justify-between bg-transparent">
          <div>hello</div> <Pagination defaultCurrent={1} total={50} />
        </div>
      )}
    />
  </WrapperTable>
);

export default TableCustom;
