import React, { useContext, useRef, useState } from "react";
import type { GetRef, InputProps } from "antd";
import { Form, Table, Input } from "antd";
import styled from "styled-components";
import { GenreSongDataType } from "../../information-creation";
import { TypeContract, dataTypeContract } from "../_configTable";
import { Paging, TextHeader, Button, DatePicker } from "../../../../Component";
import { useRouter } from "../../../../Routes/hooks";
import { AddIcon, TrashIcon } from "../../../../assets/icon";
import FloatingActionButton from "../../../../Component/UI/FloatingActionButton";

const CustomInput = styled(Input)<InputProps>`
  font-weight: 400;
  font-size: var(--text-size-primary);
  background: #33334d;
  border-radius: 5px;
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
  dataIndex: keyof TypeContract;
  record: TypeContract;
  isNewRow: boolean;
  handleSave: (record: TypeContract) => void;
  typeInput: "input" | "pickDate";
}

const EditableCell: React.FC<EditableCellProps> = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  typeInput = "input",
  isNewRow = false,
  ...restProps
}) => {
  const inputRef = useRef<InputRef>(null);
  const form = useContext(EditableContext)!;
  const save = async () => {
    try {
      const values = await form.validateFields();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log("Save failed:", errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = isNewRow ? (
      <Form.Item
        style={{ margin: 0 }}
        initialValue={record[dataIndex]}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        {isNewRow}
        {typeInput === "pickDate" ? (
          <DatePicker
            placeholder="dd/mm/yyyy hh:ss:mm"
            height={28}
            hiddenIcon
            background="#33334d"
            bordered
          />
        ) : (
          <CustomInput
            name={dataIndex}
            ref={inputRef}
            onPressEnter={save}
            onBlur={save}
          />
        )}
      </Form.Item>
    ) : (
      <div className="editable-cell-value-wrap " style={{ paddingRight: 24 }}>
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

type EditableTableProps = Parameters<typeof Table>[0];

type ColumnTypes = Exclude<EditableTableProps["columns"], undefined>;

const PagingItems = [
  {
    name: "Cài đặt",
  },
  {
    name: "Quản lý loại hợp đồng",
  },
];
const EditTypeContract = () => {
  const router = useRouter();
  const [dataSource, setDataSource] = useState<TypeContract[]>([
    ...dataTypeContract,
  ]);
  const defaultColumns: (ColumnTypes[number] & {
    editable?: boolean;
    dataIndex: string;
    typeInput?: "input" | "pickDate";
  })[] = [
    {
      title: "STT",
      dataIndex: "index",
      key: "index",
    },
    {
      title: "Loại hợp đồng",
      dataIndex: "typeContract",
      key: "typeContract",
      editable: true,
    },
    {
      title: "Doanh thu VCPCM/hợp đồng (Đơn vị: %) ",
      dataIndex: "VCPCMRevenue_contract",
      key: "VCPCMRevenue_contract",
      render: (_, { VCPCMRevenue_contract }) => (
        <h5>{VCPCMRevenue_contract * 100}%</h5>
      ),
      editable: true,
    },
    {
      title: "Ngày áp dụng",
      dataIndex: "dateApply",
      key: "dateApply",
      render: (_, { dateApply }) => (
        <h5>{dateApply && dateApply.format("DD/MM/YY HH:mm:ss")}</h5>
      ),
      editable: true,
      typeInput: "pickDate",
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
        typeInput: col.typeInput,
        isNewRow: record.isNewRow ? record.isNewRow : false,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave: () => {},
      }),
    };
  });
  const handleAddRow = () => {
    setDataSource((prev) =>
      prev.map((d) => {
        return { ...d, isNewRow: false };
      }),
    );
    const newRow = {
      id: dataSource.length + 1 + "",
      index: dataSource.length + 1,
      key: dataSource.length + 1,
      typeContract: "",
      VCPCMRevenue_contract: "",
      isNewRow: true,
    };

    setDataSource([...dataSource, newRow]);
    setDataSource([...dataSource, newRow]);
  };

  const FloatingButtons = [
    {
      name: "Thêm mới",
      icon: <AddIcon />,
      action: () => {
        handleAddRow();
      },
    },
    {
      name: "Xóa",
      icon: <TrashIcon />,
      action: () => {},
    },
  ];

  return (
    <div className="w-full">
      <Paging items={PagingItems} />
      <TextHeader>Loại hợp đồng</TextHeader>
      <div className="mt-10 flex w-full items-start justify-between gap-10">
        <div className=" w-full">
          <div className="max-w-[1143px]">
            <Table
              style={
                {
                  "--min-height-table": "444px",
                } as React.CSSProperties
              }
              components={components}
              rowClassName={() => "editable-row"}
              dataSource={dataSource}
              columns={columns as ColumnTypes}
              bordered
              pagination={false}
            />
          </div>
          <div className="center-item mt-[10%] gap-10">
            <Button
              typebtn="outline"
              sizetype="hug"
              onClick={() => {
                router.back();
              }}
            >
              Hủy
            </Button>
            <Button
              onClick={() => {
                router.back();
              }}
              typebtn="primary"
              sizetype="hug"
            >
              Lưu
            </Button>
          </div>
        </div>
        <div className="w-fit">
          <FloatingActionButton floatingActionButtonConfig={FloatingButtons} />
        </div>
      </div>
    </div>
  );
};

export default EditTypeContract;
