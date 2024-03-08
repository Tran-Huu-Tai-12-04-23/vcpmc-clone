import { ColumnsType } from "antd/es/table";
import dayjs from "dayjs";
import { IDevice } from "../../../Model/device.model";

export const ColConfigDevice: ColumnsType<IDevice> = [
  {
    title: (
      <div className="box-start gap-[4.5rem] font-semibold text-second">
        <h5>STT</h5> <h5 className="min-w-[10rem]">Tên thiết bị</h5>{" "}
        <h5>Trạng thái</h5>
      </div>
    ),
    fixed: true,
    dataIndex: "index",
    key: -1,
    width: 600,
    render: (_, { status, name }, index) => (
      <div className="box-start flex-shrink-0 gap-24">
        <h5>{index}</h5>
        <h5 className="min-w-[7rem]">{name}</h5>
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
    render: (_, {}) => <div>{dayjs().format("DD/MM/YY")}</div>,
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
    render: (_, { location }) => <div className="w-[40rem]">{location}</div>,
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
    render: (_, {}) => <div>{"0.00GB/32GB"}</div>,
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
      <div className="w-[40rem]">
        {dayjs(warrantyPeriod).format("DD/MM/YY")}
      </div>
    ),
  },
];
