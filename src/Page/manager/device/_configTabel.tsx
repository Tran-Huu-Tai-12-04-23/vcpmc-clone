import { ColumnsType } from "antd/es/table";
import dayjs, { Dayjs } from "dayjs";

const generateScheduleDataExample = (count: number): DeviceColDataType[] => {
  const data: DeviceColDataType[] = [];
  for (let i = 0; i < count; i++) {
    data.push({
      id: `record_${i + 1}`,
      index: i + 1,
      key: i + 1,
      nameDevice: "device " + i,
      macAddress: "192.168.1.8",
      status: (i + 1) % 2 == 0 ? false : true,
      place: "86/33, Âu Cơ, Phường 9, Tân Bình, TP Hồ Chí Minh",
      expiredContract: dayjs(),
      memory: "0.00GB/32GB",
      username: "username" + i,
      SKU_ID: "12313213123" + i,
      warrantyPeriod: dayjs(),
    });
  }
  return data;
};

export interface DeviceColDataType {
  id: string;
  key: number;
  index: number;
  nameDevice: string;
  status: boolean;
  place: string;
  expiredContract: Dayjs;
  macAddress: string;
  memory: string;
  username: string;
  SKU_ID: string;
  warrantyPeriod: Dayjs;
}
type ConfigColProps = {
  listKeyCol?: { name: string; key: number }[];
};

export const ColConfigDevice: ColumnsType<DeviceColDataType> = [
  {
    title: (
      <div className="box-start gap-[4.5rem] font-semibold text-second">
        <h5>STT</h5> <h5>Tên thiết bị</h5> <h5>Trạng thái</h5>
      </div>
    ),
    key: -1,
    fixed: true,
    dataIndex: "status",
    width: 600,
    render: (_, { status, nameDevice, index }) => (
      <div className="box-start flex-shrink-0 gap-24">
        <h5>{index}</h5>
        <h5>{nameDevice}</h5>
        <div className="box-start w-fit gap-4">
          {status ? (
            <div className="box-start gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <h5 className="text-white">Đang kích hoạt | Đang hoạt động </h5>
            </div>
          ) : (
            <div className="box-start  gap-2">
              <div className="h-2 w-2 rounded-full bg-red-500"></div>
              <h5 className="text-white">Đang bị khoá </h5>
            </div>
          )}
        </div>
      </div>
    ),
  },
  {
    title: <div className="w-max">Hạn hợp đồng</div>,
    dataIndex: "expiredContract",
    key: 7,
    width: 200,
    render: (_, { expiredContract }) => (
      <div>{expiredContract.format("DD/MM/YY")}</div>
    ),
  },
  {
    title: <div className="w-max">Tên đăng nhập</div>,
    dataIndex: "username",
    key: 5,
    width: 200,
    render: (_, { username }) => <div className="w-[40rem]">{username}</div>,
  },
  {
    title: <div className="w-max">Địa điểm</div>,
    dataIndex: "place",
    key: 6,
    width: 300,
    render: (_, { place }) => <div className="w-[40rem]">{place}</div>,
  },

  {
    title: <div className="w-max">Mac Address</div>,
    dataIndex: "macAddress",
    key: 1,
    width: 200,
    render: (_, { macAddress }) => <div>{macAddress}</div>,
  },
  {
    title: <div className="w-max">Memory</div>,
    dataIndex: "memory",
    width: 200,
    key: 2,
    render: (_, { memory }) => <div>{memory}</div>,
  },
  {
    title: <div className="w-max">SKU/ID</div>,
    dataIndex: "SKU_ID",
    key: 3,
    width: 200,
    render: (_, { SKU_ID }) => <div className="w-[40rem]">{SKU_ID}</div>,
  },
  {
    title: <div className="w-max">Hạn bảo hành</div>,
    dataIndex: "warrantyPeriod",
    key: 4,
    width: 200,
    render: (_, { warrantyPeriod }) => (
      <div className="w-[40rem]">{warrantyPeriod.format("DD/MM/YY")}</div>
    ),
  },
];

export const dataExampleDevice = generateScheduleDataExample(40);
