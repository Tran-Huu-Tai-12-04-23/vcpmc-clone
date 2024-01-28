import { ColumnsType } from "rc-table/lib/interface";
import {
  IContractMining,
  statusContractMining,
} from "../../../../Model/contractMining.model";
import PathUrl from "../../../../Routes/path-url";
import dayjs from "dayjs";
type ConfigTableMiningContractProps = {
  onNav: (link: string) => void;
};
export const ConfigTableMiningContract = (
  props: ConfigTableMiningContractProps,
) => {
  const ConfigColTale: ColumnsType<IContractMining> = [
    {
      title: "STT",
      dataIndex: "index",
      key: "index",
      render: (_, __, index) => index + 1,
    },
    {
      title: "Số hợp đồng",
      dataIndex: "numberContract",
      key: "numberContract",
    },
    {
      title: "Khách hàng",
      dataIndex: "customer",
      key: "customer",
    },
    {
      title: "Ngày tạo",
      key: "createAt",
      dataIndex: "createAt",
      render: (_, { createAt }) => (
        <div>{dayjs(createAt).format("DD/MM/YYYY")}</div>
      ),
    },
    {
      title: "Ngày hiệu lực",
      key: "applyDate",
      dataIndex: "applyDate",
      render: (_, { applyDate }) => (
        <div>{dayjs(applyDate).format("DD/MM/YYYY")}</div>
      ),
    },
    {
      title: "Ngày hết hạn",
      key: "expireDate",
      dataIndex: "expireDate",
      render: (_, { expireDate }) => (
        <div>{dayjs(expireDate).format("DD/MM/YYYY")}</div>
      ),
    },
    {
      title: "Hiệu lực hợp đồng",
      key: "status",
      dataIndex: "status",
      render: (_, { status }) => {
        let color = "#ff4747";
        let text = "Đã hủy";
        switch (status) {
          case statusContractMining.IS_NEW: {
            color = "#265030";
            text = "Mới";
            break;
          }
          case statusContractMining.IS_EFFECT: {
            color = "#3479fd";
            text = "Đang hiệu lực";
            break;
          }
          case statusContractMining.IS_EXPIRE: {
            color = "#878890";
            text = "Hết hiệu lực";
            break;
          }
        }
        return (
          <div className="box-start gap-2">
            <div
              className="h-4 w-4 rounded-full "
              style={{
                background: color,
              }}
            ></div>
            <span>{text}</span>
          </div>
        );
      },
    },
    {
      title: "",
      dataIndex: "id",
      key: "id",
      render: (_, { id }) => (
        <div className="box-start gap-4">
          <span
            onClick={() => {
              props.onNav(
                PathUrl.MANAGER_CONTRACT + "/" + PathUrl.AUTHORITY + "/" + id,
              );
            }}
            className="text-primary underline hover:text-primary hover:underline hover:brightness-110"
          >
            Xem chi tiết
          </span>
          <span
            onClick={() => {
              props.onNav(
                PathUrl.MANAGER_CONTRACT + "/" + PathUrl.AUTHORITY + "/" + id,
              );
            }}
            className="text-primary underline hover:text-primary hover:underline hover:brightness-110"
          >
            Sao chép hợp đồng
          </span>
        </div>
      ),
    },
  ];
  return ConfigColTale;
};
