import { Form, Radio, SelectProps } from "antd";
import {
  AutoComplete,
  Button,
  ButtonUpload,
  DatePicker,
  DropDown,
  Input,
  Paging,
  TextHeader,
  TextLabel,
} from "../../../../../Component";
import { useEffect, useState } from "react";
import {
  File,
  IContractMining,
  statusContractMining,
  typeContract,
  typeGender,
  typeRole,
} from "../../../../../Model/contractMining.model";
import FileItem from "../../../../../Component/UI/FileItem";
import Helper from "../../../../../Helper";
import { useRouter } from "../../../../../Routes/hooks";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators, current } from "@reduxjs/toolkit";
import { RootState, actionContractMining } from "../../../../../State";
import { IUser } from "../../../../../Model/user.model";
import dayjs from "dayjs";
import { useParams } from "react-router-dom";
const pagingItems = [
  {
    name: "Quản lý",
  },
  {
    name: "Quản lý hợp đồng",
  },
  {
    name: "Thêm hợp đồng",
  },
];

function EditContractMining() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = useParams();
  const { updateContractMining, changeCurrentContractMining } =
    bindActionCreators(actionContractMining, dispatch);
  const { currentContractMining } = useSelector(
    (state: RootState) => state.contractMining,
  );
  const [userSelectOptions, setUserSelectOptions] = useState<
    SelectProps<object>["options"]
  >([]);
  const [form] = Form.useForm();
  const [listNationality, setListNationality] = useState<
    {
      key: number;
      name: string;
    }[]
  >([]);
  const [files, setFiles] = useState<File[]>([]);
  const [nationality, setNationality] = useState({
    key: -1,
    name: "",
  });
  const [contractMiningData, setContractMiningData] = useState<any>(null);
  const [users, setUsers] = useState<IUser[]>([
    {
      id: "asdasd",
      username: "huutai",
      password: "password",
      userDetail: {
        id: "asdasd",
        firstName: "tran",
        lastName: "huu",
        phoneNumber: "0376100548",
        email: "email",
        dateOfBirth: dayjs(),
        role: typeRole.ADMIN,
        userId: "asdasd",
      },
    },
  ]);
  const [personRepresentation, setPersonRepresentation] = useState<string>("");

  const handleChangeFormValue = () => {
    setContractMiningData(form.getFieldsValue());
  };

  const handleEditContractMining = () => {
    delete contractMiningData?.dateOfBirth;
    delete contractMiningData?.dateAllocate;
    const newContractMining: IContractMining = {
      ...currentContractMining,
      ...contractMiningData,
      status: statusContractMining.IS_NEW,
      file: files,
      nationality: nationality.name,
      customer: personRepresentation,
      representative:
        personRepresentation === ""
          ? currentContractMining?.representative
          : personRepresentation,
      valuePlay: contractMiningData?.valuePlay || "",
      valueContract: contractMiningData?.valueContract || "",
      valueDistribute: contractMiningData?.valueDistribute || "",
      createAt: dayjs(),
      birthDay: contractMiningData?.dateOfBirth
        ? contractMiningData.dateOfBirth
        : dayjs(currentContractMining?.birthDay),
      dateAllocated: contractMiningData?.dateAllocate
        ? contractMiningData.dateAllocate
        : dayjs(currentContractMining?.dateAllocated),
      personRepresentation,
    };
    if (!Helper.isObjectEmpty(newContractMining)) {
      return;
    }
    if (!id) return;

    updateContractMining(id, newContractMining, () => {
      router.back();
    });
  };
  useEffect(() => {
    const getNationality = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        if (response.ok) {
          let data = await response.json();
          data = data.map((nationality: any, index: number) => {
            return {
              key: index,
              name: nationality.name.common,
            };
          });
          setNationality(data[0]);
          setListNationality(data);
          return data;
        } else {
          console.error("Error fetching data. Status:", response.status);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getNationality();
  }, []);

  useEffect(() => {
    id && changeCurrentContractMining(id);
  }, []);
  const searchResult = (query: String) => {
    const user: IUser = {
      id: "asdasd",
      username: "huutai",
      password: "password",
      userDetail: {
        id: "asdasd",
        firstName: "tran",
        lastName: "huu",
        phoneNumber: "0376100548",
        email: "email",
        dateOfBirth: dayjs(),
        role: typeRole.ADMIN,
        userId: "asdasd",
      },
    };
    return [
      {
        value: user.username,
        label: (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>{user.username}</span>
          </div>
        ),
      },
    ];
  };
  const handleSearch = (value: string) => {
    setUserSelectOptions(value ? searchResult(value) : []);
  };

  useEffect(() => {
    setFiles(currentContractMining?.file || []);
    if (currentContractMining && currentContractMining.nationality) {
      setNationality({ key: -1, name: currentContractMining.nationality });
    }
  }, [currentContractMining]);

  return (
    currentContractMining && (
      <div className="pr-[70px]">
        <Paging items={pagingItems} />
        <TextHeader>Chỉnh sửa hợp đồng khai thác</TextHeader>
        <div className="mt-6 flex w-full items-start justify-between gap-24 ">
          <Form
            onChange={handleChangeFormValue}
            form={form}
            layout="horizontal"
            style={{ width: "33.33333%" }}
            initialValues={
              currentContractMining
                ? {
                    ...currentContractMining,
                    dateEffect: dayjs(currentContractMining.dateEffect),
                    expireDate: dayjs(currentContractMining.expireDate),
                  }
                : undefined
            }
          >
            <Form.Item
              name="numberContract"
              label={
                <TextLabel
                  className="flex h-full items-center justify-center"
                  idInput="number-contract"
                >
                  Số hợp đồng:
                  <span className="pt-2 text-error">*</span>
                </TextLabel>
              }
              style={{
                width: "100%",
              }}
              required={false}
              labelCol={{ span: 9 }}
              rules={[{ required: true, message: "Số hợp đồng bắt buộc!" }]}
            >
              <Input variant="outlined" id="number-contract" width={"100%"} />
            </Form.Item>
            <Form.Item
              name="nameContract"
              label={
                <TextLabel
                  className="flex h-full items-center justify-center"
                  idInput="name-contract"
                >
                  Tên hợp đồng:
                  <span className="pt-2 text-error">*</span>
                </TextLabel>
              }
              style={{
                width: "100%",
              }}
              labelCol={{ span: 9 }}
              required={false}
              rules={[{ required: true, message: "Tên hợp đồng bắt buộc!" }]}
            >
              <Input variant="outlined" id="name-contract" />
            </Form.Item>
            <Form.Item
              name="dateEffect"
              label={
                <TextLabel
                  className="flex h-full items-center justify-center"
                  idInput="date-effect"
                >
                  Ngày hiệu lực
                  <span className="pt-2 text-error">*</span>
                </TextLabel>
              }
              style={{
                width: "100%",
              }}
              labelCol={{ span: 9 }}
            >
              <DatePicker
                onChange={handleChangeFormValue}
                variant="outlined"
                width={200}
                id="date-effect"
                background="#2b2b3f"
              />
            </Form.Item>
            <Form.Item
              name="expireDate"
              label={
                <TextLabel
                  className="flex h-full items-center justify-center"
                  idInput="date-expire"
                >
                  Ngày hết hạn:
                  <span className="pt-2 text-error">*</span>
                </TextLabel>
              }
              style={{
                width: "100%",
              }}
              labelCol={{ span: 9 }}
            >
              <DatePicker
                onChange={handleChangeFormValue}
                variant="outlined"
                width={200}
                id="date-expire"
                background="#2b2b3f"
              />
            </Form.Item>
          </Form>
          <div className="flex w-1/3 justify-start">
            <TextLabel width={200}>Đính kèm tệp:</TextLabel>
            <div className=" ">
              <ButtonUpload
                type="file"
                onResult={(file: File) => {
                  setFiles((prev) => [...prev, file]);
                }}
              />
              <div className="mt-4 flex flex-col gap-2">
                {files.map((file, index) => {
                  return (
                    <FileItem
                      onRemove={() => {
                        setFiles((prev) => {
                          return prev.filter((f) => f.name !== file.name);
                        });
                      }}
                      data={file}
                      key={index}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <Form
            initialValues={{
              ...currentContractMining,
            }}
            onChange={handleChangeFormValue}
            form={form}
            layout="horizontal"
            style={{ width: "33.33333%" }}
          >
            <div className="flex w-full flex-col gap-4">
              <TextLabel
                className="flex h-full items-center"
                idInput="date-expire"
              >
                Loại hợp đồng:
              </TextLabel>
              <div className="flex w-full justify-start gap-4">
                <div className="w-[8rem] flex-shrink-0">
                  <Form.Item
                    name="typeContract"
                    label=""
                    style={{
                      width: "100%",
                    }}
                    labelCol={{ span: 9 }}
                  >
                    <Radio.Group>
                      <Radio value={typeContract.ALL_IN_ONE}>Trọn gói</Radio>
                      <Radio
                        style={{
                          marginTop: "120px",
                        }}
                        value={typeContract.PLAYS}
                      >
                        Lượt phát
                      </Radio>
                    </Radio.Group>
                  </Form.Item>
                </div>

                <div className="h-[full] w-[2px] bg-input"></div>
                <div className="flex w-full flex-col">
                  <Form.Item
                    name="valueContract"
                    label={
                      <h5
                        className={`${
                          contractMiningData?.typeContract ===
                            typeContract.ALL_IN_ONE ||
                          !contractMiningData?.typeContract
                            ? "text-white"
                            : "text-third" || "text-white"
                        } flex h-full items-center justify-center `}
                      >
                        Giá trị hợp đồng
                        <br />
                        (VND)
                      </h5>
                    }
                    labelCol={{ span: 9 }}
                    style={{
                      width: "100%",
                    }}
                  >
                    <Input
                      type="number"
                      variant="outlined"
                      readOnly={
                        contractMiningData?.typeContract ===
                          typeContract.ALL_IN_ONE ||
                        !contractMiningData?.typeContract
                          ? false
                          : true || false
                      }
                    />
                  </Form.Item>
                  <Form.Item
                    name="valueDistribute"
                    label={
                      <h5
                        className={`${
                          contractMiningData?.typeContract ===
                            typeContract.ALL_IN_ONE ||
                          !contractMiningData?.typeContract
                            ? "text-white"
                            : "text-third" || "text-white"
                        } flex h-full items-center justify-center `}
                      >
                        Giá trị phân phối
                        <br />
                        (VND)/Ngày
                      </h5>
                    }
                    style={{
                      width: "100%",
                    }}
                    labelCol={{ span: 9 }}
                  >
                    <Input
                      type="number"
                      variant="outlined"
                      readOnly={
                        contractMiningData?.typeContract ===
                          typeContract.ALL_IN_ONE ||
                        !contractMiningData?.typeContract
                          ? false
                          : true || false
                      }
                    />
                  </Form.Item>
                  <Form.Item
                    name="valuePlay"
                    label={
                      <h5
                        className={`${
                          contractMiningData?.typeContract ===
                          typeContract.PLAYS
                            ? "text-white"
                            : "text-third" || "text-third"
                        } flex h-full items-center justify-center `}
                      >
                        Giá trị lượt phát
                        <br />
                        (VND)/Ngày
                      </h5>
                    }
                    labelCol={{ span: 9 }}
                    style={{
                      width: "100%",
                    }}
                  >
                    <Input
                      variant="outlined"
                      readOnly={
                        contractMiningData?.typeContract === typeContract.PLAYS
                          ? false
                          : true || false
                      }
                    />
                  </Form.Item>
                </div>
              </div>
            </div>
          </Form>
        </div>

        {/* begin information  */}
        <div className="mt-10 flex flex-col ">
          <div className="flex w-full items-start justify-between gap-24">
            <Form
              initialValues={
                currentContractMining
                  ? {
                      ...currentContractMining,
                      dateOfBirth: dayjs(currentContractMining.birthDay),
                    }
                  : undefined
              }
              onChange={handleChangeFormValue}
              form={form}
              layout="horizontal"
              style={{ width: "33.33333%" }}
            >
              <Form.Item
                name="nameOfUnitUsed"
                label={
                  <TextLabel
                    className="flex h-full items-center justify-center"
                    idInput="name-unit-used"
                  >
                    Tên đơn vị sử dụng:
                    <span className="pt-2 text-error">*</span>
                  </TextLabel>
                }
                style={{
                  width: "100%",
                }}
                required={false}
                labelCol={{ span: 9 }}
                rules={[
                  { required: true, message: "Tên đơn vị sử dụng bắt buộc!" },
                ]}
              >
                <Input variant="outlined" id="name-unit-used" width={"100%"} />
              </Form.Item>
              <Form.Item
                name="personRepresentation"
                label={
                  <TextLabel
                    className="flex h-full items-center justify-center"
                    idInput="person-representation"
                  >
                    Người đại diện:
                    <span className="pt-2 text-error">*</span>
                  </TextLabel>
                }
                style={{
                  width: "100%",
                }}
                labelCol={{ span: 9 }}
                required={false}
              >
                <AutoComplete
                  variant="outlined"
                  onSelect={(val) => {
                    setPersonRepresentation(val);
                    const user = users.find((u) => u.username === val);
                    if (user === null) return;
                    const userDetail = user?.userDetail || null;
                    if (userDetail === null) return;
                    form.setFieldValue("email", userDetail?.email);
                    form.setFieldValue("phoneNumber", userDetail?.phoneNumber);
                    form.setFieldValue("role", userDetail?.role);
                    form.setFieldValue("nationality", userDetail?.nationality);
                    form.setFieldValue(
                      "dateOfBirth",
                      dayjs(userDetail?.dateOfBirth),
                    );
                  }}
                  options={userSelectOptions}
                  onSearch={handleSearch}
                />
              </Form.Item>
              <Form.Item
                name="role"
                label={
                  <TextLabel
                    className="flex h-full items-center justify-center"
                    idInput="role"
                  >
                    Chức vụ:
                  </TextLabel>
                }
                style={{
                  width: "100%",
                }}
                labelCol={{ span: 9 }}
              >
                <Input variant="outlined" id="role" />
              </Form.Item>
              <Form.Item
                name="dateOfBirth"
                label={
                  <TextLabel
                    className="flex h-full items-center justify-center"
                    idInput="dateOfBirth"
                  >
                    Ngày sinh:
                    <span className="pt-2 text-error">*</span>
                  </TextLabel>
                }
                style={{
                  width: "100%",
                }}
                labelCol={{ span: 9 }}
              >
                <DatePicker
                  onChange={handleChangeFormValue}
                  variant="outlined"
                  width={200}
                  id="dateOfBirth"
                  background="#2b2b3f"
                />
              </Form.Item>

              <Form.Item
                name="nationality"
                label={
                  <TextLabel
                    className="flex h-full items-center justify-center"
                    idInput="phoneNumber"
                  >
                    Quốc tịch:<span className="pt-2 text-error">*</span>
                  </TextLabel>
                }
                style={{
                  width: "100%",
                }}
                labelCol={{ span: 9 }}
              >
                <DropDown
                  classDropItem="border-second bg-input"
                  width={"100%"}
                  height={"48px"}
                  active={nationality}
                  dropItems={listNationality}
                  onSelect={(val) => setNationality(val)}
                />
              </Form.Item>
              <Form.Item
                name="phoneNumber"
                label={
                  <TextLabel
                    className="flex h-full items-center justify-center"
                    idInput="phoneNumber"
                  >
                    Số điện thoại:
                  </TextLabel>
                }
                style={{
                  width: "100%",
                }}
                required={false}
                labelCol={{ span: 9 }}
              >
                <Input variant="outlined" id="phoneNumber" />
              </Form.Item>
              <Form.Item
                name="email"
                label={
                  <TextLabel
                    className="flex h-full items-center justify-center"
                    idInput="email"
                  >
                    Email:<span className="pt-2 text-error">*</span>
                  </TextLabel>
                }
                style={{
                  width: "100%",
                }}
                required={false}
                labelCol={{ span: 9 }}
                rules={[{ required: true, message: "Email bắt buộc!" }]}
              >
                <Input variant="outlined" id="email" />
              </Form.Item>
            </Form>

            {/* -------------------------- */}
            <Form
              onChange={handleChangeFormValue}
              form={form}
              initialValues={
                currentContractMining
                  ? {
                      ...currentContractMining,
                      dateAllocate: dayjs(currentContractMining.dateAllocated),
                    }
                  : undefined
              }
              layout="horizontal"
              style={{ width: "33.33333%" }}
            >
              <Form.Item
                name="gender"
                label={
                  <TextLabel
                    className="flex h-full items-center justify-center"
                    idInput="gender"
                  >
                    Gới tính:
                    <span className="pt-2 text-error">*</span>
                  </TextLabel>
                }
                style={{
                  width: "100%",
                  height: "48px",
                }}
                required={false}
                labelCol={{ span: 9 }}
                rules={[{ required: true, message: "Gới tính bắt buộc!" }]}
              >
                <Radio.Group className="flex items-center justify-start gap-10">
                  <Radio value={typeGender.MALE}>Nam</Radio>
                  <Radio value={typeGender.FEMALE}>Nữ</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item
                name="CMND_CCCD"
                label={
                  <TextLabel
                    className="flex h-full items-center justify-center"
                    idInput="CMND_CCCD"
                  >
                    CMND/CCCD:
                    <span className="pt-2 text-error">*</span>
                  </TextLabel>
                }
                style={{
                  width: "100%",
                }}
                required={false}
                labelCol={{ span: 9 }}
                rules={[{ required: true, message: "CMND/CCCD bắt buộc!" }]}
              >
                <Input variant="outlined" id="CMND_CCCD" width={"100%"} />
              </Form.Item>
              <Form.Item
                name="dateAllocate"
                label={
                  <TextLabel
                    className="flex h-full items-center justify-center"
                    idInput="dateAllocate"
                  >
                    Ngày cấp:
                    <span className="pt-2 text-error">*</span>
                  </TextLabel>
                }
                style={{
                  width: "100%",
                }}
                required={false}
                labelCol={{ span: 9 }}
                rules={[{ required: true, message: "Ngày cấp bắt buộc!" }]}
              >
                <DatePicker
                  onChange={handleChangeFormValue}
                  id="dateAllocate"
                  background="#2b2b3f"
                  variant="outlined"
                />
              </Form.Item>
              <Form.Item
                name="placeAllocated"
                label={
                  <TextLabel
                    className="flex h-full items-center justify-center"
                    idInput="placeAllocated"
                  >
                    Nơi cấp:
                    <span className="pt-2 text-error">*</span>
                  </TextLabel>
                }
                style={{
                  width: "100%",
                }}
                required={false}
                labelCol={{ span: 9 }}
                rules={[{ required: true, message: "CMND/CCCD bắt buộc!" }]}
              >
                <Input variant="outlined" id="placeAllocated" width={"100%"} />
              </Form.Item>
              <Form.Item
                name="taxNumber"
                label={
                  <TextLabel
                    className="flex h-full items-center justify-center"
                    idInput="taxNumber"
                  >
                    Mã số thuế:
                  </TextLabel>
                }
                style={{
                  width: "100%",
                }}
                labelCol={{ span: 9 }}
              >
                <Input variant="outlined" id="taxNumber" width={"100%"} />
              </Form.Item>
              <Form.Item
                name="residence"
                label={
                  <TextLabel
                    className="flex h-full items-center justify-center"
                    idInput="residence"
                  >
                    Nơi cư trú:
                  </TextLabel>
                }
                style={{
                  width: "100%",
                }}
                labelCol={{ span: 9 }}
              >
                <Input variant="outlined" id="residence" width={"100%"} />
              </Form.Item>
            </Form>
            {/* -------- */}
            <Form
              initialValues={{
                ...currentContractMining,
              }}
              onChange={handleChangeFormValue}
              form={form}
              layout="horizontal"
              style={{ width: "33.33333%" }}
            >
              <Form.Item
                name="username"
                label={
                  <TextLabel
                    className="flex h-full items-center justify-center"
                    idInput="username"
                  >
                    Tên đăng nhập:
                    <span className="pt-2 text-error">*</span>
                  </TextLabel>
                }
                style={{
                  width: "100%",
                }}
                required={false}
                labelCol={{ span: 9 }}
                rules={[{ required: true, message: "Tên đăng nhập bắt buộc!" }]}
              >
                <Input variant="outlined" id="username" width={"100%"} />
              </Form.Item>
              <Form.Item
                name="password"
                label={
                  <TextLabel
                    className="flex h-full items-center justify-center"
                    idInput="password"
                  >
                    Mật khẩu:
                    <span className="pt-2 text-error">*</span>
                  </TextLabel>
                }
                style={{
                  width: "100%",
                }}
                required={false}
                labelCol={{ span: 9 }}
                rules={[{ required: true, message: "Mật khẩu bắt buộc!" }]}
              >
                <Input variant="outlined" id="password" width={"100%"} />
              </Form.Item>
              <Form.Item
                name="numberAccount"
                label={
                  <TextLabel
                    className="flex h-full items-center justify-center"
                    idInput="numberAccount"
                  >
                    Số tài khoản:
                  </TextLabel>
                }
                style={{
                  width: "100%",
                }}
                required={false}
                labelCol={{ span: 9 }}
              >
                <Input variant="outlined" id="numberAccount" width={"100%"} />
              </Form.Item>
              <Form.Item
                name="nameBank"
                label={
                  <TextLabel
                    className="flex h-full items-center justify-center"
                    idInput="nameBank"
                  >
                    Ngân hàng:
                  </TextLabel>
                }
                style={{
                  width: "100%",
                }}
                required={false}
                labelCol={{ span: 9 }}
              >
                <Input variant="outlined" id="nameBank" width={"100%"} />
              </Form.Item>
            </Form>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-start gap-1">
          <h5 className="text-error">*</h5>
          <div className="text-[12px] text-[#898997]">
            là những trường thông tin bắt buộc
          </div>
        </div>

        <Form
          initialValues={{
            ...currentContractMining,
          }}
          form={form}
          onSubmitCapture={handleEditContractMining}
          layout="horizontal"
          className="flex items-center justify-center gap-10"
          style={{ width: "100%" }}
        >
          <Form.Item>
            <Button
              typebtn="outline"
              sizetype="hug"
              onClick={() => router.back()}
            >
              Hủy
            </Button>
          </Form.Item>
          <Form.Item>
            <Button typebtn="primary" sizetype="hug" htmlType="submit">
              Cập nhật
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  );
}

export default EditContractMining;
