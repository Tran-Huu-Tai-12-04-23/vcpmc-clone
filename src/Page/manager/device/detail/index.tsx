import { useEffect, useState } from "react";
import { Paging, TextHeader, TextLabel } from "../../../../Component";
import FloatingActionButton from "../../../../Component/UI/FloatingActionButton";
import { EditIcon, LockIcon, RecoveryIcon } from "../../../../assets/icon";
import dayjs from "dayjs";
import ModalEditDevice from "./ModalEditDevice";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { RootState, actionDevice } from "../../../../State";

const PagingItems = [
  {
    name: "Danh sách thiết bị",
  },
  {
    name: "Chi tiết thiết bị",
  },
];
function DetailDevice() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { changeCurrentDevice } = bindActionCreators(actionDevice, dispatch);
  const { currentDevice } = useSelector((state: RootState) => state.devices);
  const [isModalEditDevice, setIsModalEditDevice] = useState<boolean>(false);
  const floatingAction = [
    {
      name: "Chỉnh sửa",
      icon: <EditIcon className="text-primary" />,
      action: () => {
        setIsModalEditDevice(true);
      },
    },
    {
      name: "Khôi phục mật khẩu",
      icon: <LockIcon className="text-primary" />,
      action: () => {},
    },
    {
      name: "Khôi phục bộ nhớ",
      icon: <RecoveryIcon className="text-primary" />,
      action: () => {},
    },
  ];

  useEffect(() => {
    id && changeCurrentDevice(id);
  }, [id]);
  return (
    currentDevice && (
      <div className="w-full">
        <ModalEditDevice
          data={currentDevice}
          isOpen={isModalEditDevice}
          onOk={() => setIsModalEditDevice(false)}
          onCancel={() => setIsModalEditDevice(false)}
        />
        <Paging items={PagingItems} />
        <TextHeader>Thông tin thiết bị - {currentDevice.name}</TextHeader>

        <div className="mt-10 flex items-start justify-between gap-10 ">
          <div className="flex w-full items-start justify-center gap-44 rounded-lg bg-input p-8">
            <div className="flex flex-col gap-8">
              <h5 className="text-[24px] font-semibold text-primary">
                Thông tin thiết bị
              </h5>
              <img
                className="h-[160px] w-[340px] rounded-xl"
                src="data:image/png;base64,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"
              />

              <div className="box-start gap-[4px]">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span>Hoạt động</span>
              </div>

              <div className="flex items-start justify-start gap-[10px]">
                <TextLabel>Ghi chú:</TextLabel>
                <p className="max-w-[20rem] text-third">{currentDevice.note}</p>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <h5 className="text-[24px] font-semibold text-primary">
                {currentDevice.name}
              </h5>
              <div className="box-start gap-2">
                <TextLabel className="min-w-[10rem]">SKU/ID:</TextLabel>
                <h5 className="text-third">{currentDevice.SKU_ID}</h5>
              </div>
              <div className="box-start gap-2">
                <TextLabel className="min-w-[10rem]">Địa chỉ Mac:</TextLabel>
                <h5 className="text-third">{currentDevice.macAddress}</h5>
              </div>
              <div className="box-start gap-2">
                <TextLabel className="min-w-[10rem]">Tên đăng nhập:</TextLabel>
                <h5 className="text-third">{currentDevice.username}</h5>
              </div>
              <div className="box-start gap-2">
                <TextLabel className="min-w-[10rem]">Định dạng:</TextLabel>
                <h5 className="text-third">Displayable</h5>
              </div>
              <div className="box-start gap-2">
                <TextLabel className="min-w-[10rem]">Vị trí:</TextLabel>
                <h5 className="text-third">{currentDevice.location}</h5>
              </div>
              <div className="box-start gap-2">
                <TextLabel className="min-w-[10rem]">
                  Thời hạn bảo hành:
                </TextLabel>
                <h5 className="text-third">
                  {dayjs(currentDevice.warrantyPeriod).format("DD/MM/YY")}
                </h5>
              </div>
              <div className="box-start gap-2">
                <TextLabel className="min-w-[10rem]">
                  Trạng thái thiết bị:
                </TextLabel>
                <h5 className="text-third">
                  {currentDevice.status ? "Activated" : "Deactivated"}
                </h5>
              </div>
            </div>
            <div className="flex flex-col  gap-8">
              <h5 className="text-[24px] font-semibold text-primary">
                Thông tin phiên bản
              </h5>
              <div className="flex items-start justify-start">
                <TextLabel className="min-w-[12rem]">
                  Phiên bản cũ nhất:
                </TextLabel>
                <div className="flex flex-col items-start justify-start gap-10">
                  <h5 className="text-third">12.3 (20/02/2020)</h5>
                  <h5 className="text-third">12.3 (20/02/2020)</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="w-fit">
            <FloatingActionButton floatingActionButtonConfig={floatingAction} />
          </div>
        </div>
      </div>
    )
  );
}

export default DetailDevice;
