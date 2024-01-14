import { useState } from "react";
import { Pagination, Table } from "antd";

type TableProps = {
  data: any[];
  col: any;
  checked?: boolean;
  onSelect?: (value: any[]) => void;
  numberCol?: number;
  locale?: {
    emptyText: any;
  };
  minHeight?: string;
  scroll?: boolean;
  onRow?: any;
  maxWidth?: string;
};

const TableCustom = (props: TableProps) => {
  const [selectionType, setSelectionType] = useState<"checkbox">("checkbox");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const size = props.numberCol ? props.numberCol : 13;

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: any[]) => {
      // console.log(
      //   `selectedRowKeys: ${selectedRowKeys}`,
      //   "selectedRows: ",
      //   selectedRows,
      // );
      props.onSelect && props.onSelect(selectedRows);
    },
    getCheckboxProps: (record: any) => ({
      disabled: record.name === "Disabled User",
      name: record.name,
    }),
  };

  return (
    <Table
      className="custom-scroll"
      {...(props.checked && {
        rowSelection: {
          type: selectionType,
          ...rowSelection,
        },
      })}
      onRow={props.onRow}
      scroll={{ x: props.scroll ? 600 : undefined }}
      style={
        {
          "--min-height-table": props.minHeight ? props.minHeight : "800px",
          width: "100%",
          maxWidth: props.maxWidth ? props.maxWidth : "80vw",
          // Enable vertical scrolling
        } as React.CSSProperties
      }
      bordered
      locale={props.locale}
      columns={props.col}
      dataSource={props.data.slice(
        (currentPage - 1) * size,
        currentPage * size,
      )}
      pagination={false}
      footer={() => (
        <div className="flex items-center justify-between bg-transparent pt-20">
          <div className="box-start gap-2 text-[#b9b9c4]">
            <h5> Hien thi</h5>
            <h5 className="border-type-primary center-item h-[32px] w-[50px]  rounded-[4px] text-white">
              {size}
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
