import { useState } from "react";
import { Pagination, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import styled from "styled-components";

const WrapperTable = styled.div``;
const generateDummyData = (count: number): DataType[] => {
  const data: DataType[] = [];
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
interface DataType {
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
    render: (_, { id, isCancel }) => (
      <div className="box-start gap-4">
        <a
          href={id}
          className="text-primary underline hover:text-primary hover:underline hover:brightness-110"
        >
          Xem chi tiết
        </a>
        {isCancel && (
          <a
            href={id}
            className="text-primary underline hover:text-primary hover:underline hover:brightness-110"
          >
            Ly do huy
          </a>
        )}
      </div>
    ),
  },
];
let data: DataType[] = generateDummyData(100);

const TableCustom = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const size = 13;
  return (
    <WrapperTable>
      <Table
        bordered
        columns={columns}
        dataSource={data.slice((currentPage - 1) * size, currentPage * size)}
        pagination={false}
        footer={() => (
          <div className="flex items-center justify-between bg-transparent pt-4">
            <div className="box-start gap-2 text-[#b9b9c4]">
              <h5> Hien thi</h5>
              <h5 className="border-type-primary center-item h-[32px] w-[50px]  rounded-[4px] text-white">
                13
              </h5>
              <h5> hang trong moi hang</h5>
            </div>
            <Pagination
              onChange={(page, pageSize) => {
                setCurrentPage(page);
              }}
              defaultCurrent={currentPage}
              total={data.length}
              pageSize={size}
              defaultPageSize={undefined}
              showSizeChanger={false}
            />
          </div>
        )}
      />
    </WrapperTable>
  );
};

export default TableCustom;
