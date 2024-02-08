import { Paging, TextHeader, TextLabel } from "../../../../../Component";
import { useEffect, useState } from "react";
import {
  statusContractMining,
  typeContract,
} from "../../../../../Model/contractMining.model";
import FileItem from "../../../../../Component/UI/FileItem";
import Helper from "../../../../../Helper";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { RootState, actionContractMining } from "../../../../../State";
import dayjs from "dayjs";
import { useParams } from "react-router-dom";
import FloatingActionButton from "../../../../../Component/UI/FloatingActionButton";
import { EditIcon } from "../../../../../assets/icon";
import CancelIcon from "../../../../../assets/icon/cancel";
import ModalCancelContractMining from "../ModalCancelContract";
import { useRouter } from "../../../../../Routes/hooks";
import PathUrl from "../../../../../Routes/path-url";
const pagingItems = [
  {
    name: "Quản lý",
  },
  {
    name: "Quản lý hợp đồng",
  },
  {
    name: "Chi tiết",
  },
];

function DetailContractMining() {
  const { id } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const { changeCurrentContractMining } = bindActionCreators(
    actionContractMining,
    dispatch,
  );
  const { currentContractMining } = useSelector(
    (state: RootState) => state.contractMining,
  );

  const [isOpenModalCancelContractMining, setIsOpenModalCancelContractMining] =
    useState<boolean>(false);
  const floatingButtons = [
    {
      name: "Chỉnh sửa",
      icon: <EditIcon />,
      action: () => {
        // Define your action here
        router.push(
          PathUrl.URL_MANAGER +
            "/" +
            PathUrl.MANAGER_CONTRACT +
            "/" +
            PathUrl.CONTRACT_MINING +
            "/" +
            PathUrl.EDIT +
            "/" +
            id,
        );
      },
      hidden: currentContractMining?.status === statusContractMining.IS_EFFECT,
    },
    {
      name: "Hủy hợp đồng",
      icon: <CancelIcon />,
      action: () => {
        setIsOpenModalCancelContractMining(true);
      },
    },
  ];

  useEffect(() => {
    if (id) {
      changeCurrentContractMining(id);
    }
  }, []);

  return (
    currentContractMining && (
      <div className="w-full">
        <ModalCancelContractMining
          onOk={function (): void {
            throw new Error("Function not implemented.");
          }}
          onCancel={() => setIsOpenModalCancelContractMining(false)}
          isOpen={isOpenModalCancelContractMining}
        />
        <Paging items={pagingItems} />
        <TextHeader>
          Hợp đồng khai thác - HD{currentContractMining.numberContract}
        </TextHeader>
        <div className="flex w-full justify-between">
          <div className="flex w-full flex-col">
            <div className="mt-6 flex w-full items-start justify-between gap-24 ">
              <div className="flex w-1/3 flex-col gap-6">
                <div className="box-start gap-2">
                  <h5 className="font-semibold">Tên hợp đồng:</h5>
                  <h5>{currentContractMining.nameContract}</h5>
                </div>
                <div className="box-start gap-2">
                  <h5 className="font-semibold">Số hợp đồng:</h5>
                  <h5>{currentContractMining.numberContract}</h5>
                </div>
                <div className="box-start gap-2">
                  <h5 className="font-semibold">Ngày hiệu lực:</h5>
                  <h5>
                    {dayjs(currentContractMining.dateEffect).format(
                      "DD/MM/YYYY",
                    )}
                  </h5>
                </div>
                <div className="box-start gap-2">
                  <h5 className="font-semibold">Ngày hết hạn:</h5>
                  <h5>
                    {dayjs(currentContractMining.expireDate).format(
                      "DD/MM/YYYY",
                    )}
                  </h5>
                </div>
              </div>
              <div className="flex w-1/3 justify-start">
                <TextLabel width={200}>Đính kèm tệp:</TextLabel>
                <div className="flex flex-col">
                  {currentContractMining.file.map((file, index) => {
                    return <FileItem data={file} key={index} />;
                  })}
                </div>
              </div>
              <div className="flex w-1/3 flex-col gap-6">
                <div className="flex w-full items-center justify-start ">
                  <h5 className="min-w-[17rem] font-semibold">
                    Loại hợp đồng:
                  </h5>
                  <h5>{currentContractMining.typeContract}</h5>
                </div>
                {currentContractMining.typeContract ===
                  typeContract.ALL_IN_ONE && (
                  <>
                    <div className="flex w-full items-center justify-start ">
                      <h5 className="min-w-[17rem] font-semibold">
                        Giá trị hợp đồng (VNĐ):
                      </h5>
                      <h5>
                        {Helper.formatVnd(currentContractMining.valueContract)}
                      </h5>
                    </div>
                    <div className="flex w-full items-center justify-start ">
                      <h5 className="min-w-[17rem] font-semibold">
                        Giá trị phân phối (VNĐ/ngày):
                      </h5>
                      <h5>
                        {Helper.formatVnd(
                          currentContractMining.valueDistribute,
                        )}
                      </h5>
                    </div>
                  </>
                )}
                {currentContractMining.typeContract === typeContract.PLAYS && (
                  <>
                    <div className="flex w-full items-center justify-start ">
                      <h5 className="min-w-[17rem] font-semibold">
                        Giá trị lượt phát (VNĐ):
                      </h5>
                      <h5>
                        {Helper.formatVnd(currentContractMining.valuePlay)}
                      </h5>
                    </div>
                  </>
                )}
                <div className="flex w-full items-center justify-start ">
                  <h5 className="min-w-[17rem] font-semibold">Tình trạng:</h5>
                  {currentContractMining.status ===
                    statusContractMining.IS_NEW && (
                    <div className="box-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-700"></div>
                      <h5>Mới</h5>
                    </div>
                  )}
                  {currentContractMining.status ===
                    statusContractMining.IS_EFFECT && (
                    <div className="box-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-blue-700"></div>
                      <h5>Đang hiệu lực</h5>
                    </div>
                  )}
                  {currentContractMining.status ===
                    statusContractMining.IS_EXPIRE && (
                    <div className="box-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-gray-700"></div>
                      <h5>Hết hiệu lực</h5>
                    </div>
                  )}
                  {currentContractMining.status ===
                    statusContractMining.IS_CANCELLED && (
                    <div className="box-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-gray-700"></div>
                      <h5>Đã huỷ</h5>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* begin information  */}
            <div className="mt-24 flex flex-col ">
              <div className="flex w-full items-start justify-between gap-24">
                <div className="flex w-1/3 flex-col gap-6">
                  <div className="box-start gap-2">
                    <h5 className="min-w-[12rem] font-semibold">
                      Tên đơn vị sử dụng:
                    </h5>
                    <h5>{currentContractMining.nameOfUnitUsed}</h5>
                  </div>
                  <div className="box-start gap-2">
                    <h5 className="min-w-[12rem] font-semibold">
                      Người đại diện:
                    </h5>
                    <h5>{currentContractMining.representative}</h5>
                  </div>
                  <div className="box-start gap-2">
                    <h5 className="min-w-[12rem] font-semibold">Chức vụ:</h5>
                    <h5>{currentContractMining.role}</h5>
                  </div>
                  <div className="box-start gap-2">
                    <h5 className="min-w-[12rem] font-semibold">Ngày sinh:</h5>
                    <h5>
                      {dayjs(currentContractMining.birthDay).format(
                        "DD/MM/YYYY",
                      )}
                    </h5>
                  </div>
                  <div className="box-start gap-2">
                    <h5 className="min-w-[12rem] font-semibold">Quốc tịch:</h5>
                    <h5>{currentContractMining.nationality}</h5>
                  </div>
                  <div className="box-start gap-2">
                    <h5 className="min-w-[12rem] font-semibold">
                      Số điện thoại:
                    </h5>
                    <h5>{currentContractMining.phoneNumber}</h5>
                  </div>
                  <div className="box-start gap-2">
                    <h5 className="min-w-[12rem] font-semibold">Email:</h5>
                    <h5>{currentContractMining.email}</h5>
                  </div>
                </div>

                {/* -------------------------- */}
                <div className="flex w-1/3 flex-col gap-6">
                  <div className="box-start gap-2">
                    <h5 className="min-w-[12rem] font-semibold">Giới tính:</h5>
                    <h5>{currentContractMining.gender}</h5>
                  </div>
                  <div className="box-start gap-2">
                    <h5 className="min-w-[12rem] font-semibold">CMND/ CCCD:</h5>
                    <h5>{currentContractMining.CMND_CCCD}</h5>
                  </div>
                  <div className="box-start gap-2">
                    <h5 className="min-w-[12rem] font-semibold">Ngày cấp:</h5>
                    <h5>
                      {dayjs(currentContractMining.dateAllocated).format(
                        "DD/MM/YYYY",
                      )}
                    </h5>
                  </div>
                  <div className="box-start gap-2">
                    <h5 className="min-w-[12rem] font-semibold">Nơi cấp:</h5>
                    <h5>{currentContractMining.placeAllocated}</h5>
                  </div>
                  <div className="box-start gap-2">
                    <h5 className="min-w-[12rem] font-semibold">Mã số thuế:</h5>
                    <h5>{currentContractMining.taxNumber}</h5>
                  </div>
                  <div className="box-start gap-2">
                    <h5 className="min-w-[12rem] font-semibold">Nơi cư trú:</h5>
                    <h5>{currentContractMining.residence}</h5>
                  </div>
                </div>
                {/* -------- */}
                <div className="flex w-1/3 flex-col gap-6">
                  <div className="box-start gap-2">
                    <h5 className="min-w-[12rem] font-semibold">
                      Tên đăng nhập:
                    </h5>
                    <h5>{currentContractMining.username}</h5>
                  </div>
                  <div className="box-start gap-2">
                    <h5 className="min-w-[12rem] font-semibold">Mật khẩu:</h5>
                    <div className="box-start gap-[4px]">
                      {Array.from({
                        length: currentContractMining.password.length,
                      }).map((i, index) => {
                        return (
                          <div
                            key={index}
                            className="h-[0.8rem] w-[0.8rem] rounded-full bg-white"
                          ></div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="box-start gap-2">
                    <h5 className="min-w-[12rem] font-semibold">
                      Số tài khoản:
                    </h5>
                    <h5>{currentContractMining.numberAccount}</h5>
                  </div>
                  <div className="box-start gap-2">
                    <h5 className="min-w-[12rem] font-semibold">Ngân hàng:</h5>
                    <h5>{currentContractMining.nameBank}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <FloatingActionButton
              floatingActionButtonConfig={floatingButtons}
            />
          </div>
        </div>
      </div>
    )
  );
}

export default DetailContractMining;
