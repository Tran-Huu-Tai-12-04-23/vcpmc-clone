import { useEffect, useState } from "react";
import { DropDown, Input, TextHeader } from "../../../Component";
import FloatingActionButton from "../../../Component/UI/FloatingActionButton";
import TableCustom from "../../../Component/UI/Table";
import { AddIcon, LockIcon, TurnIcon } from "../../../assets/icon";
import ModalRemoveDevice from "./ModalRemoveDevice";
import CancelIcon from "../../../assets/icon/cancel";
import {
  ColConfigDevice,
  DeviceColDataType,
  dataExampleDevice,
} from "./_configTabel";
import { Button, Tooltip } from "antd";
import { ColumnsType } from "antd/es/table";
import { useRouter } from "../../../Routes/hooks";
import PathUrl from "../../../Routes/path-url";

const DropItemGroupAccounts = [
  {
    name: "Tất cả",
    key: 1,
  },
  {
    name: "Công ty TMCP Bách Hóa Xanh",
    key: 2,
  },
  {
    name: "Công ty TNHH XYZ",
    key: 3,
  },
  {
    name: "Công ty TMCP Adora",
    key: 4,
  },
];

const DropItemHideCols = [
  {
    name: "MAC Address",
    key: 1,
  },
  {
    name: "Memory",
    key: 2,
  },
  {
    name: "SKU/ID",
    key: 3,
  },
  {
    name: "Hạn bảo hành",
    key: 4,
  },
  {
    name: "Tên đăng nhập",
    key: 5,
  },
  {
    name: "Địa điểm",
    key: 6,
  },
  {
    name: "Hạn hợp đồng",
    key: 7,
  },
];

const checkHasCol = (
  listKeyCol: { name: string; key: number }[],
  keyCol?: any,
) => {
  if (keyCol === -1) return true;
  return listKeyCol.find((col) => col.key === keyCol) != null;
};

function DeviceManager() {
  const router = useRouter();
  const [deviceSelected, setDeviceSelected] = useState<DeviceColDataType[]>([]);
  const [typeAction, setTypeAction] = useState<"enable" | "disable" | "both">(
    "both",
  );
  const [isRemoveDevice, setIsRemoveDevice] = useState(false);
  const floatingAction = [
    {
      name: "Thêm thiết bị",
      icon: <AddIcon className="text-primary" />,
      action: () => {
        router.push(
          PathUrl.URL_MANAGER +
            "/" +
            PathUrl.MANAGER_DEVICES +
            "/" +
            PathUrl.ADD,
        );
      },
    },
    {
      name:
        typeAction === "enable"
          ? "Kích hoạt thiết bị"
          : "Ngừng kích hoạt thiết bị",
      disable: typeAction !== "both",
      icon:
        typeAction === "both" ? (
          <Tooltip
            placement="left"
            title={"Chỉ chọn các thiết bị đang ngừng kích hoạt"}
          >
            <button>
              <TurnIcon className={`text-gray-500`} />
            </button>
          </Tooltip>
        ) : (
          <TurnIcon className={`text-primary`} />
        ),
      action: () => {},
    },
    {
      disable: typeAction === "both",
      name: typeAction === "enable" ? "Khoá thiết bị" : "Mở khóa thiết bị",
      icon:
        typeAction === "both" ? (
          <Tooltip
            placement="left"
            title={"Chỉ chọn các thiết bị đang hoạt động"}
          >
            <button>
              <LockIcon className="text-gray-500" />
            </button>
          </Tooltip>
        ) : (
          <LockIcon className="text-primary" />
        ),
      action: () => {},
    },
    {
      name: "Xoá thiết bị",
      icon: <CancelIcon className="text-error" />,
      action: () => {
        setIsRemoveDevice(true);
      },
    },
  ];
  const [listColShow, setListColShow] = useState<
    {
      name: string;
      key: number;
    }[]
  >(DropItemHideCols);
  const [colTable, setColTable] =
    useState<ColumnsType<DeviceColDataType>>(ColConfigDevice);

  useEffect(() => {
    const isHasDeviceEnable = deviceSelected.find((dev) => dev.status === true);
    const isHasDeviceDisable = deviceSelected.find(
      (dev) => dev.status === false,
    );

    if (isHasDeviceDisable) {
      setTypeAction("enable");
    }
    if (isHasDeviceEnable) {
      setTypeAction("disable");
    }
    if (isHasDeviceDisable && isHasDeviceEnable) {
      setTypeAction("both");
    }
  }, [deviceSelected]);

  useEffect(() => {
    setColTable((prev) => {
      return ColConfigDevice.filter((col) => checkHasCol(listColShow, col.key));
    });
  }, [listColShow]);

  const handleRowClick = (record: DeviceColDataType, index: number) => {
    router.push(
      PathUrl.URL_MANAGER + "/" + PathUrl.MANAGER_DEVICES + "/" + record.id,
    );
  };
  const onRow = (record: DeviceColDataType, index: number) => ({
    onClick: () => handleRowClick(record, index),
  });
  return (
    <div className="w-full">
      <ModalRemoveDevice
        onOk={() => setIsRemoveDevice(false)}
        onCancel={() => setIsRemoveDevice(false)}
        isOpen={isRemoveDevice}
      />

      <TextHeader>Danh sách thiết bị</TextHeader>
      <div className="flex w-full items-start justify-between gap-10">
        <div className="w-full">
          <div className="flex items-center justify-between">
            <div className="box-start gap-6">
              <DropDown
                active={{
                  key: -1,
                  name: "Chọn nhóm tài khoản",
                }}
                classDropItem="w-[22rem] bg-main border-primary"
                dropItems={DropItemGroupAccounts}
                onSelect={function (value: {
                  name: string;
                  key: number;
                }): void {
                  throw new Error("Function not implemented.");
                }}
              />
              <DropDown
                multiple
                active={{
                  key: -1,
                  name: "Ẩn hiện cột",
                }}
                onSelect={(value) => {
                  setListColShow((prev) => [...prev, value]);
                }}
                onUnselect={(value) => {
                  setListColShow(
                    (prev) => prev?.filter((p) => p.key !== value.key),
                  );
                }}
                classDropItem="w-[18rem] bg-main border-primary"
                dropItems={DropItemHideCols}
              />
            </div>
            <Input
              className="mb-5 mt-5"
              placeholder="Tìm thiết bị theo tên, SKU, địa điểm, địa chỉ Mac"
              height={40}
              width={500}
              search
            />
          </div>
          <TableCustom
            onRow={onRow}
            onSelect={(value) => {
              setDeviceSelected(value);
            }}
            scroll
            numberCol={12}
            checked
            data={dataExampleDevice}
            col={colTable}
          />
        </div>
        <div className="w-fit">
          <FloatingActionButton floatingActionButtonConfig={floatingAction} />
        </div>
      </div>
    </div>
  );
}

export default DeviceManager;
