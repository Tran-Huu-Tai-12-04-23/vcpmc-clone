import { useState } from "react";
import { TextLabel } from "../../../../Component";
import FloatingActionButton from "../../../../Component/UI/FloatingActionButton";
import UseStatusContract from "../../../../Hook/useStatusContract";
import { ContractIcon, EditIcon, WarningIcon } from "../../../../assets/icon";
import CancelIcon from "../../../../assets/icon/cancel";
import ModalCancelContract from "./ModalCancelContract";
import ModalRenewalContract from "./ModalRenewalContract";
import { useRouter } from "../../../../Routes/hooks";
import PathUrl from "../../../../Routes/path-url";
import {
  IContractAuthority,
  typeAuthorizedLegalEntity,
} from "../../../../Model/contractAuthority.model";
import dayjs from "dayjs";
import FileItem from "../../../../Component/UI/FileItem";
import { File } from "../../../../Model/contractMining.model";

type InformationProps = {
  id?: string;
  data: IContractAuthority;
};
function InformationContract(props: InformationProps) {
  const router = useRouter();
  const [isOpenCancelContract, setIsOpenCancelContract] =
    useState<boolean>(false);
  const [isShowModalRenewalContract, setIsShowModalRenewalContract] =
    useState<boolean>(false);

  const floatingAction = [
    {
      name: "Chỉnh sửa hợp đồng",
      icon: <EditIcon className="text-primary" />,
      action: () => {
        router.push(
          PathUrl.URL_MANAGER +
            "/" +
            PathUrl.MANAGER_CONTRACT +
            "/" +
            PathUrl.AUTHORITY +
            "/" +
            PathUrl.EDIT +
            "/" +
            props.id,
        );
      },
    },
    {
      name: "Gia hạn hợp đồng",
      icon: <ContractIcon className="text-primary" />,
      action: () => {
        setIsShowModalRenewalContract(true);
      },
    },
    {
      name: "Hủy hợp đồng",
      icon: <CancelIcon className="text-error" />,
      action: () => {
        setIsOpenCancelContract(true);
      },
    },
  ];
  return (
    <div className="flex w-full justify-between">
      <ModalCancelContract
        onOk={function (): void {
          throw new Error("Function not implemented.");
        }}
        onCancel={() => setIsOpenCancelContract(false)}
        contractId={""}
        isOpen={isOpenCancelContract}
      />

      <ModalRenewalContract
        isOpen={isShowModalRenewalContract}
        onOk={function (): void {
          throw new Error("Function not implemented.");
        }}
        onCancel={() => setIsShowModalRenewalContract(false)}
        contractId={""}
      />
      <div className=" w-full">
        <div className="mt-6 flex items-start justify-between gap-24 ">
          <div className="flex w-1/3 flex-col items-start gap-5">
            <div className="flex w-full items-center ">
              <TextLabel width={140} idInput="number-contract">
                Số hợp đồng:
              </TextLabel>
              <h5 className="text-third">{props.data.numberContract}</h5>
            </div>
            <div className="flex w-full items-center ">
              <TextLabel width={140} idInput="name-contract">
                Tên hợp đồng:
              </TextLabel>
              <h5 className="text-third">{props.data.nameContract}</h5>
            </div>
            <div className="flex w-full items-center ">
              <TextLabel width={140} idInput="date-effect">
                Ngày hiệu lực:
              </TextLabel>
              <h5 className="text-third">
                {dayjs(props.data.dateEffect).format("DD/MM/YYYY")}
              </h5>
            </div>
            <div className="flex w-full items-center ">
              <TextLabel width={140} idInput="date-validity">
                Ngày hết hạn:
              </TextLabel>
              <h5 className="text-third">
                {dayjs(props.data.expireDate).format("DD/MM/YYYY")}
              </h5>
            </div>
            <div className="flex w-full items-center ">
              <TextLabel width={140} idInput="date-validity">
                Tình trạng:
              </TextLabel>
              <UseStatusContract
                statusIndex={props.data.status}
              ></UseStatusContract>
            </div>
          </div>
          <div className="flex w-1/3 justify-start">
            <TextLabel width={200}>Đính kèm tệp:</TextLabel>
            <div className="flex flex-col">
              {props.data.file.map((file, index) => {
                return <FileItem data={file} key={index} />;
              })}
            </div>
          </div>
          <div className=" flex w-1/3 flex-col  items-start justify-start gap-4 ">
            <div className="box-start w-full gap-2 text-size-primary font-bold text-[#ffac69]">
              <WarningIcon />
              <span>Mức nhuận bút</span>
            </div>
            <div className="flex w-[20rem] items-center justify-between gap-2 text-size-primary font-bold ">
              <h5>Quyền tác giả</h5>
              <h5 className="font-normal">0%</h5>
            </div>
            <div className="flex w-[20rem] flex-col gap-2 text-size-primary font-bold ">
              <h5>Quyền liên quan</h5>
              <div className="flex flex-col justify-start font-normal">
                <div className="flex w-full items-center justify-between gap-2 text-size-primary  ">
                  <h5>Quyền của người biểu diễn:</h5>
                  <h5>50%</h5>
                </div>
                <div className="flex w-[20rem] items-center justify-between gap-2 text-size-primary  ">
                  <h5 className="w-[14rem]">
                    Quyền của nhà sản xuất: (Bản ghi/video)
                  </h5>
                  <h5>50%</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* begin information  */}
        <div className="mt-24 flex flex-col ">
          <h5 className="mb-8 text-[18px] font-bold text-second">
            Thông tin pháp nhân uỷ quyền
          </h5>

          <div className="flex w-full items-start justify-between gap-24">
            <div className="flex w-1/3 flex-col gap-3">
              <div className="flex items-center justify-start">
                <h5 className="min-w-[200px] font-bold">Pháp nhân ủy quyền:</h5>
                <h5 className="text-third">
                  {props.data.authorizedLegalEntity ===
                  typeAuthorizedLegalEntity.PERSONAL
                    ? "Cá nhân"
                    : "Tổ chức"}
                </h5>
              </div>
              <div className="flex ">
                <TextLabel width={200} idInput="name-user-authority">
                  Tên người ủy quyền:
                </TextLabel>
                <h5 className="text-third">
                  {props.data.personAuthority.firstName +
                    " " +
                    props.data.personAuthority.lastName}
                </h5>
              </div>
              <div className="flex items-center justify-start">
                <h5 className="min-w-[200px] flex-shrink-0 font-bold">
                  Ngày sinh
                </h5>
                <h5 className="text-third">
                  {dayjs(props.data.personAuthority.dateOfBirth).format(
                    "DD/MM/YYYY",
                  )}
                </h5>
              </div>
              <div className="flex ">
                <TextLabel width={200} idInput="date-of-birth">
                  Giới tính:
                </TextLabel>
                <h5 className="text-third">{props.data.gender}</h5>
              </div>
              <div className="flex ">
                <TextLabel width={200}>Quốc tịch:</TextLabel>
                <h5 className="text-third">{props.data.nationality}</h5>
              </div>
              <div className="flex ">
                <TextLabel width={200} idInput="phone-number">
                  Số diện thoại:
                </TextLabel>
                <h5 className="text-third">
                  {props.data.personAuthority.phoneNumber}
                </h5>
              </div>
            </div>

            {/* -------- */}
            <div className="flex w-1/3 flex-col gap-3">
              <div className="flex items-center ">
                <TextLabel width={140} idInput="cmnd-cccd">
                  CMDD/CCCD:
                </TextLabel>
                <h5 className="text-third">{props.data.CMND_CCCD}</h5>
              </div>
              <div className="flex ">
                <TextLabel width={140} idInput="date-provided">
                  Ngày cấp:
                </TextLabel>
                <h5 className="text-third">
                  {dayjs(props.data.dateAllocated).format("DD/MM/YYYY")}
                </h5>
              </div>
              <div className="flex items-center ">
                <TextLabel width={140} idInput="place-provided">
                  Nơi cấp:
                </TextLabel>
                <h5 className="text-third">{props.data.placeAllocated}</h5>
              </div>
              <div className="flex items-center ">
                <TextLabel width={140} idInput="code-">
                  Mã số thuế:
                </TextLabel>
                <h5 className="text-third">{props.data.taxNumber}</h5>
              </div>
              <div className="flex ">
                <TextLabel width={140} idInput="place-lived">
                  Nơi cư trú:
                </TextLabel>
                <h5 className="w-[16rem] text-third">{props.data.residence}</h5>
              </div>
            </div>

            {/* -------- */}
            <div className="flex w-1/3 flex-col gap-3">
              <div className="flex items-center ">
                <TextLabel width={140} idInput="email">
                  Email:
                </TextLabel>
                <h5 className="w-[16rem] text-third">
                  {props.data.personAuthority.email}
                </h5>
              </div>
              <div className="flex ">
                <TextLabel width={140} idInput="username">
                  Tên đăng nhập:
                </TextLabel>
                <h5 className="w-[16rem] text-third">{props.data.username}</h5>
              </div>
              <div className="flex items-center ">
                <TextLabel width={140} idInput="password">
                  Mật khẩu:
                </TextLabel>
                <h5 className="w-[16rem] text-third">*********</h5>
              </div>
              <div className="flex items-center ">
                <TextLabel width={140} idInput="number-bank">
                  Số tài khoản:
                </TextLabel>
                <h5 className="w-[16rem] text-third">
                  {props.data.numberAccount}
                </h5>
              </div>
              <div className="flex items-center ">
                <TextLabel width={140} idInput="name-bank">
                  Ngân hàng:
                </TextLabel>
                <h5 className="w-[16rem] text-third">{props.data.nameBank}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-y-20">
        <FloatingActionButton floatingActionButtonConfig={floatingAction} />
      </div>
    </div>
  );
}

export default InformationContract;
