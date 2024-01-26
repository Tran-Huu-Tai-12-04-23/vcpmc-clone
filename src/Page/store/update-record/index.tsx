import { Avatar, Form, Upload } from "antd";
import {
  Button,
  DropDown,
  Input,
  Paging,
  TextHeader,
  TextLabel,
} from "../../../Component";
import FloatingActionButton from "../../../Component/UI/FloatingActionButton";
import CancelIcon from "../../../assets/icon/cancel";
import { CameraIcon, FolderMusicIcon } from "../../../assets/icon";
import dayjs from "dayjs";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, actionRecord } from "../../../State";
import { IRecord } from "../../../Model/record.model";
import { useRouter } from "../../../Routes/hooks";
import { useParams } from "react-router-dom";
import { bindActionCreators, current } from "@reduxjs/toolkit";
import { uploadImage } from "../../../Service/common.service";
import {
  removeRecordById,
  updateRecordById,
} from "../../../Service/record.service";
import ModalRemoveRecord from "./ModalRemoveRecord";
const pagingUpdateRecord = [
  {
    name: "Kho bản ghi",
    path: "",
  },
  {
    name: "Cập nhật thông tin",
    path: "",
  },
];

const genreMusicDropItems = [
  {
    name: "Pop",
    key: 1,
  },
  {
    name: "Ballad",
    key: 2,
  },
  {
    name: "Rock",
    key: 3,
  },
  {
    name: "EDM",
    key: 4,
  },
];
function UpdateRecord() {
  const [form] = Form.useForm();
  const router = useRouter();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { changeCurrentRecord, updateRecord, removeRecord } =
    bindActionCreators(actionRecord, dispatch);
  const { currentRecord } = useSelector((state: RootState) => state.records);
  const inputThumbnails = useRef<HTMLInputElement | null>(null);
  const [genreMusic, setGenreMusic] = useState<any>(genreMusicDropItems[0]);
  const [thumbnails, setThumbnails] = useState<string>("");
  const [isRemoveRecord, setIsRemoveRecord] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const floatingAction = [
    {
      name: "Xóa bản ghi",
      icon: <CancelIcon className="text-error" />,
      action: () => {
        setIsRemoveRecord(true);
      },
    },
  ];

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      const url = await uploadImage(selectedFile);
      console.log("Selected file:", selectedFile);
      console.log("url file:", url);
      url && setThumbnails(url);
    }
  };

  const dateCheck = dayjs(currentRecord?.expiryDate);

  const handleUpdateRecord = async () => {
    if (!currentRecord) return;
    const data = form.getFieldsValue();
    const newData: IRecord = {
      ...currentRecord,
      thumbnails: thumbnails,
      nameRecord: data.nameRecord || currentRecord?.nameRecord || "",
      codeISRC: data.codeISRC || currentRecord?.codeISRC || "",
      manufactory: data.manufactory || currentRecord?.manufactory || "",
      single: data.single || currentRecord?.single || "",
      author: data.author || currentRecord?.author || "",
      approvalDate: dayjs(),
      createAt: dayjs(),
      link: "example",
    };

    if (!id) return;
    updateRecord(id, newData);
  };

  const handleRemoveRecord = async () => {
    if (!id) return;
    removeRecord(id);
  };

  useEffect(() => {
    if (id) changeCurrentRecord(id);
  }, [id]);

  useEffect(() => {
    setThumbnails(currentRecord?.thumbnails ? currentRecord.thumbnails : "");

    const genre = genreMusicDropItems.find(
      (ge) => ge.name.toLowerCase() === currentRecord?.genre.toLowerCase(),
    );

    genre && setGenreMusic(genre);
  }, [currentRecord]);

  return (
    currentRecord && (
      <div className="w-full">
        <ModalRemoveRecord
          isOpen={isRemoveRecord}
          onOk={handleRemoveRecord}
          onCancel={() => setIsRemoveRecord(false)}
        />
        <Paging items={pagingUpdateRecord} />
        <TextHeader>Bản ghi - {currentRecord?.nameRecord}</TextHeader>

        <div className="relative mt-2 flex items-start justify-between gap-10">
          <div className="flex w-full flex-col justify-center">
            <div className="flex h-[700px] w-full items-start justify-center gap-4">
              <div className="flex h-full  w-[570px] flex-col gap-4">
                <div className="flex flex-col items-center  gap-4 rounded-lg bg-input p-4">
                  <h5 className="text-[24px] font-semibold text-primary">
                    Thông tin bản ghi
                  </h5>

                  <div className="relative">
                    <Avatar
                      style={{
                        width: 130,
                        height: 130,
                      }}
                      src={thumbnails}
                      alt={currentRecord.nameRecord}
                    />
                    <div className="absolute bottom-2 right-0 rounded-full bg-blue-500 p-2">
                      <CameraIcon
                        className=" h-[24px] w-[24px]"
                        onClick={() => {
                          if (
                            inputThumbnails.current &&
                            inputThumbnails.current.click
                          ) {
                            inputThumbnails.current.click();
                          }
                        }}
                      />

                      <input
                        className="hidden"
                        type="file"
                        accept="*/img"
                        onChange={handleFileChange}
                        ref={inputThumbnails}
                      />
                    </div>
                  </div>
                  <div className="center-item gap-2">
                    <FolderMusicIcon />
                    <span className="text-third">{currentRecord?.link}</span>
                  </div>

                  <div className="flex w-full items-center justify-between">
                    <h5 className="text-size-primary font-semibold">
                      Ngày thêm:
                    </h5>
                    <span className="text-size-primary text-third">
                      {dayjs(currentRecord?.createAt).format(
                        "DD/MM/YYYY - HH:mm:ss",
                      )}
                    </span>
                  </div>
                  <div className="flex w-full items-center justify-between">
                    <h5 className="text-size-primary font-semibold">
                      Người tải lên:
                    </h5>
                    <span className="text-size-primary text-third">
                      {currentRecord?.uploader
                        ? currentRecord?.uploader
                        : "Admin"}
                    </span>
                  </div>
                  <div className="flex w-full items-start justify-between">
                    <h5 className="text-size-primary font-semibold">
                      Người duyệt:
                    </h5>
                    <div className="flex flex-col items-end">
                      <span className="text-size-primary text-third">
                        {currentRecord?.uploader
                          ? currentRecord?.uploader
                          : "Hệ thống"}
                      </span>
                      <span className="text-size-primary text-third">
                        {!currentRecord?.uploader && "(Tự động phê duyệt)"}
                      </span>
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-between">
                    <h5 className="text-size-primary font-semibold">
                      Ngày phê duyệt:
                    </h5>
                    <span className="text-size-primary text-third">
                      {dayjs(currentRecord?.approvalDate).format(
                        "DD/MM/YYYY - HH:mm:ss",
                      )}
                    </span>
                  </div>
                </div>
                <div className="mt-auto flex flex-col items-center gap-4 rounded-lg bg-input p-4">
                  <h5 className="text-[24px] font-semibold text-primary">
                    Thông tin ủy quyền
                  </h5>
                  <div className="flex w-full items-center justify-between">
                    <h5 className="text-size-primary font-semibold">
                      Số hợp đồng:
                    </h5>
                    <span className="text-size-primary text-third">
                      {currentRecord?.numberContract}
                    </span>
                  </div>
                  <div className="flex w-full items-center justify-between">
                    <h5 className="text-size-primary font-semibold">
                      Ngày nhận ủy quyền:
                    </h5>
                    <span className="text-size-primary text-third">
                      {currentRecord?.dateReceivingAuthorization
                        ? dayjs(
                            currentRecord?.dateReceivingAuthorization,
                          ).format("DD-MM-YYYY")
                        : dayjs().format("DD-MM-YYYY")}
                    </span>
                  </div>
                  <div className="flex w-full items-center justify-between">
                    <h5 className="text-size-primary font-semibold">
                      Ngày hết hạn:
                    </h5>
                    <span className="text-size-primary text-third">
                      {currentRecord?.expiryDate
                        ? dayjs(currentRecord?.expiryDate).format("DD-MM-YYYY")
                        : dayjs().format("DD-MM-YYYY")}
                    </span>
                  </div>
                  <div className="flex w-full items-center justify-between">
                    <h5 className="text-size-primary font-semibold">
                      Trạng thái:
                    </h5>
                    {dateCheck.isAfter(dayjs()) || dateCheck.isSame(dayjs()) ? (
                      <div className="flex items-center justify-start">
                        <div className="mr-2 h-2 w-2 rounded-full bg-blue-600"></div>
                        <div>Còn thời hạn</div>
                      </div>
                    ) : (
                      <div className="flex items-center justify-start">
                        <div className="mr-2 h-2 w-2 rounded-full bg-gray-500"></div>
                        <div>Hết thời hạn</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex h-full w-[743px] flex-col items-center gap-4 rounded-lg bg-input p-4 ">
                <h5 className="text-[24px] font-semibold text-primary">
                  Chỉnh sửa thông tin
                </h5>
                <Form
                  style={{
                    color: "white",
                    width: "100%",
                  }}
                  layout={"vertical"}
                  form={form}
                  initialValues={currentRecord}
                >
                  <Form.Item
                    name={"nameRecord"}
                    label={
                      <TextLabel idInput="name-record">
                        Tên bản ghi:<span className="text-error">*</span>
                      </TextLabel>
                    }
                  >
                    <Input id="name-record" bordered background="#33334D" />
                  </Form.Item>
                  <Form.Item
                    name={"codeISRC"}
                    label={
                      <TextLabel idInput="code-ISRC">
                        Mã ISRC:<span className="text-error">*</span>
                      </TextLabel>
                    }
                  >
                    <Input id="code-ISRC" bordered background="#33334D" />
                  </Form.Item>
                  <Form.Item
                    name={"single"}
                    label={
                      <TextLabel idInput="single">
                        Ca sĩ:<span className="text-error">*</span>
                      </TextLabel>
                    }
                  >
                    <Input id="single" bordered background="#33334D" />
                  </Form.Item>
                  <Form.Item
                    name={"author"}
                    label={
                      <TextLabel idInput="author">
                        Tác giả:<span className="text-error">*</span>
                      </TextLabel>
                    }
                  >
                    <Input id="author" bordered background="#33334D" />
                  </Form.Item>
                  <Form.Item
                    name={"manufactory"}
                    label={
                      <TextLabel idInput="manufactory">
                        Nhà sản xuất:<span className="text-error">*</span>
                      </TextLabel>
                    }
                  >
                    <Input id="manufactory" bordered background="#33334D" />
                  </Form.Item>
                </Form>

                <div className="flex w-full flex-col items-start justify-center">
                  <TextLabel idInput="genre">
                    Thể loại:<span className="text-error">*</span>
                  </TextLabel>
                  <DropDown
                    active={genreMusic}
                    width={"100%"}
                    classDropItem="border-[#727288] h-[47px] bg-[#33334D]"
                    dropItems={genreMusicDropItems}
                    onSelect={(val) => {
                      setGenreMusic(val);
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="center-item mt-10 gap-10">
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
                typebtn="primary"
                sizetype="hug"
                onClick={handleUpdateRecord}
              >
                Lưu
              </Button>
            </div>
          </div>
          <div className="top-100 absolute right-0">
            <FloatingActionButton floatingActionButtonConfig={floatingAction} />
          </div>
        </div>
      </div>
    )
  );
}

export default UpdateRecord;
