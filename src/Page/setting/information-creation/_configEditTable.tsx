import React, { useContext, useEffect, useRef, useState } from "react";
import type { GetRef, InputProps } from "antd";
import { Button, Form, Table, Input, Pagination } from "antd";
import styled from "styled-components";
import { TableCustom } from "../../../Component";
import { GenreSongDataType } from ".";
import { cp } from "fs";

const CustomInput = styled(Input)<InputProps>`
  font-weight: 400;
  font-size: var(--text-size-primary);
  background: #33334d;
  border-radius: 8px;
  color: white;
  border-style: solid;
  border-width: 1px;
  border-color: #727288;
  :where(.css-dev-only-do-not-override-gzal6t).ant-input-affix-wrapper
    > input.ant-input {
    background: transparent;
  }
  &:focus,
  &:hover {
    border-color: #347aff;
    background: #33334d;
  }
`;

type InputRef = GetRef<typeof Input>;
type FormInstance<T> = GetRef<typeof Form<T>>;

const EditableContext = React.createContext<FormInstance<any> | null>(null);

interface Item {
  key: string;
  id: string;
  index: number;
  genre: string;
  description: string;
  isNewRow: boolean;
}

interface EditableRowProps {
  index: number;
}

const EditableRow: React.FC<EditableRowProps> = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

interface EditableCellProps {
  title: React.ReactNode;
  editable: boolean;
  children: React.ReactNode;
  dataIndex: keyof Item;
  record: Item;
  isNewRow: boolean;
  handleSave: (record: Item) => void;
}

const EditableCell: React.FC<EditableCellProps> = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  isNewRow = false,
  ...restProps
}) => {
  const [editing, setEditing] = useState(isNewRow);
  const inputRef = useRef<InputRef>(null);
  const form = useContext(EditableContext)!;

  const toggleEdit = () => {
    if (!isNewRow) {
      setEditing(!editing);
      form.setFieldsValue({ [dataIndex]: record[dataIndex] });
    }
  };

  const save = async () => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log("Save failed:", errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{ margin: 0 }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <CustomInput
          name={dataIndex}
          ref={inputRef}
          onPressEnter={save}
          onBlur={save}
        />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap "
        style={{ paddingRight: 24 }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

type EditableTableProps = Parameters<typeof Table>[0];

type ColumnTypes = Exclude<EditableTableProps["columns"], undefined>;
type TableEditProps = {
  isEdit: boolean;
  dataSource: GenreSongDataType[];
  onAddRow: () => void;
  onSaveEdit: (val: GenreSongDataType) => void;
};
const TableEdit = (props: TableEditProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const size = 13;
  // const handleDelete = (key: React.Key) => {
  //   const newData = dataSource.filter((item) => item.key !== key);
  //   setDataSource(newData);
  // };

  const defaultColumns: (ColumnTypes[number] & {
    editable?: boolean;
    dataIndex: string;
  })[] = [
    {
      title: "STT",
      dataIndex: "index",
      key: "index",
    },
    {
      title: "Tên thể loại",
      dataIndex: "genre",
      key: "genre",
      editable: props.isEdit,
    },
    {
      title: "Mô tả",
      dataIndex: "description",
      key: "description",
      editable: props.isEdit,
    },
  ];

  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };

  const columns = defaultColumns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: GenreSongDataType) => ({
        record,
        isNewRow: record.isNewRow ? record.isNewRow : false,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave: props.onSaveEdit,
      }),
    };
  });

  return (
    <Table
      style={
        {
          "--min-height-table": "800px",
        } as React.CSSProperties
      }
      components={components}
      rowClassName={() => "editable-row"}
      dataSource={props.dataSource}
      columns={columns as ColumnTypes}
      bordered
      pagination={false}
      footer={() => (
        <div className="mt-4 flex items-center justify-between bg-transparent">
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
            total={props.dataSource.length}
            pageSize={size}
            defaultPageSize={undefined}
            showSizeChanger={false}
          />
        </div>
      )}
    />
  );
};

export default TableEdit;
