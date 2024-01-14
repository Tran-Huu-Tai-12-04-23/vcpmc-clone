import { ColumnsType } from "antd/es/table";

const generateScheduleDataExample = (count: number): DeviceColDataType[] => {
  const data: DeviceColDataType[] = [];
  for (let i = 0; i < count; i++) {
    data.push({
      id: `record_${i + 1}`,
      index: i + 1,
      key: i + 1,
      nameDevice: "device " + i,
      MACAddress: "192.168.1.8",
      SKU_ID: "232124264",
      unitUse: "Cửa hàng 1",
      username: "user " + i,
      workplace: "workplace " + i,
    });
  }
  return data;
};

export interface DeviceColDataType {
  id: string;
  key: number;
  index: number;
  nameDevice: string;
  MACAddress: string;
  SKU_ID: string;
  unitUse: string;
  username: string;
  workplace: string;
}
export const ColConfigDevice: ColumnsType<DeviceColDataType> = [
  {
    title: "STT",
    dataIndex: "index",
    key: "index",
  },
  {
    title: "Tên thiết bị",
    dataIndex: "nameDevice",
    key: "nameDevice",
    render: (_, { nameDevice }) => <div className="w-full ">{nameDevice}</div>,
  },
  {
    title: "Thời gian phát",
    dataIndex: "MACAddress",
    key: "MACAddress",
    render: (_, { MACAddress }) => <div className="w-full">{MACAddress}</div>,
  },
  {
    title: "SKU/ID",
    dataIndex: "SKU_ID",
    key: "SKU_ID",
    render: (_, { SKU_ID }) => <div className="w-full">{SKU_ID}</div>,
  },
  {
    title: "Đơn vị sử dụng",
    dataIndex: "unitUse",
    key: "unitUse",
    render: (_, { unitUse }) => <div className="w-full">{unitUse}</div>,
  },
  {
    title: "Tên đăng nhập",
    dataIndex: "username",
    key: "username",
    render: (_, { username }) => <div className="w-full">{username}</div>,
  },
  {
    title: "Địa điểm hoạt động",
    dataIndex: "workplace",
    key: "workplace",
    render: (_, { workplace }) => <div className="w-full">{workplace}</div>,
  },
];

export const dataExampleDevice = generateScheduleDataExample(40);
