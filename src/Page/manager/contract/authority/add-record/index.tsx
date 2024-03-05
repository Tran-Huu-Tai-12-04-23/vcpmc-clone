import { useState } from "react";
import { Button, Paging, TextHeader } from "../../../../../Component";
import { CheckIcon } from "../../../../../assets/icon";
import ModalAddNewRecord from "../work-authority/ModalAddNewRecord";
import { IRecord } from "../../../../../Model/record.model";

const pagingItems = [
  {
    name: "Quản lý",
  },
  {
    name: "Quản lý hợp đồng",
  },
  {
    name: "Chỉnh sửa danh sách tác phẩm ủy quyền",
  },
];

function AddRecord() {
  const [isOpenModalAddNewRecord, setIsOpenModalAddNewRecord] =
    useState<boolean>(false);

  return (
    <div className="w-full">
      <ModalAddNewRecord
        isOpen={isOpenModalAddNewRecord}
        onCancel={() => {
          setIsOpenModalAddNewRecord(false);
        }}
      />

      <Paging items={pagingItems} />
      <TextHeader>Thêm thông tin bản ghi</TextHeader>

      <div className="mt-20 flex h-full w-full items-center justify-center">
        <div className="w-[40rem] rounded-lg bg-modal p-10">
          <div className="flex w-full items-center justify-center gap-2  border-b-[1px] border-solid border-[#b4b4bb] pb-4 ">
            <CheckIcon />
            <h5 className="text-[24px] font-semibold">
              Hợp đồng đã được tạo thành công
            </h5>
          </div>

          <div className="mb-4 mt-4 ">
            <h5 className="font-bold">Có 2 cách để tạo bản ghi:</h5>
            <div className="p-4">
              <h5 className="">
                <span className="font-bold text-primary">Cách 1:</span> Upload
                bản ghi trực tiếp
              </h5>
              <div className="ml-16 mt-2">
                <h5 className="mb-2">
                  Bạn có thể thực hiện thêm bản ghi ngay trên website
                </h5>
                <Button
                  onClick={() => setIsOpenModalAddNewRecord(true)}
                  sizetype="hug"
                  typebtn="primary"
                >
                  Thêm bản ghi trực tiếp
                </Button>
              </div>
            </div>
            <div className="p-4">
              <h5 className="">
                <span className="font-bold text-primary">Cách 2: </span>
                Upload bản ghi qua phần mềm
              </h5>
              <div className="ml-16 mt-2">
                <h5 className="mb-2">Bạn có thể thêm bản ghi bằng tool</h5>
                <Button sizetype="hug" typebtn="outline">
                  Thêm bản ghi bằng tool
                </Button>
              </div>
            </div>

            <h5 className="mt-10 text-error">
              Lưu ý: Hợp đồng chỉ có hiệu lực khi thêm bản ghi thành công.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddRecord;
