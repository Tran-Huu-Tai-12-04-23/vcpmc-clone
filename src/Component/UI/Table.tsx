import { useState } from "react";
import { Pagination, Table } from "antd";

type TableProps = {
  data: any[];
  col: any;
};
const TableCustom = (props: TableProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const size = 13;
  return (
    <Table
      bordered
      columns={props.col}
      dataSource={props.data.slice(
        (currentPage - 1) * size,
        currentPage * size,
      )}
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
            total={props.data.length}
            pageSize={size}
            defaultPageSize={undefined}
            showSizeChanger={false}
          />
        </div>
      )}
    />
  );
};

export default TableCustom;
