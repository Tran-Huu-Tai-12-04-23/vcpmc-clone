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
import { WarningIcon } from "../../../../../assets/icon";
import Dropdown from "../../../../../Component/UI/DropDown";
import { useEffect, useState } from "react";
import { countryItems } from "../../../../../assets/_mock";
import FileItem from "../../../../../Component/UI/FileItem";
import { File, typeGender } from "../../../../../Model/contractMining.model";
import dayjs from "dayjs";
import { useRouter } from "../../../../../Routes/hooks";
import { IUserDetail } from "../../../../../Model/user.model";
import { useDispatch, useSelector } from "react-redux";
import {
  RootState,
  actionContractAuthority,
  actionUser,
} from "../../../../../State";
import { bindActionCreators } from "@reduxjs/toolkit";
import {
  IContractAuthority,
  statusContractAuthority,
  typeAuthorizedLegalEntity,
} from "../../../../../Model/contractAuthority.model";
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

function AddContract() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { users } = useSelector((state: RootState) => state.users);
  const { loadUsers } = bindActionCreators(actionUser, dispatch);
  const { addContractAuthority } = bindActionCreators(
    actionContractAuthority,
    dispatch,
  );

  const [listNationality, setListNationality] = useState([]);
  const [nationality, setNationality] = useState({
    key: -1,
    name: "",
  });
  const [files, setFiles] = useState<File[]>([]);
  const [personAuthority, setPersonalAuthority] = useState<IUserDetail | null>(
    null,
  );
  const [userSelectOptions, setUserSelectOptions] = useState<
    SelectProps<object>["options"]
  >([]);
  const [contractAuthorityData, setContractAuthorityData] = useState<any>({
    authorizedLegalEntity: typeAuthorizedLegalEntity.PERSONAL,
    gender: typeGender.MALE,
  });
  const handleChangeFormValue = () => {
    setContractAuthorityData(form.getFieldsValue());
  };

  // load nationalities
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
  // load users
  useEffect(() => {
    loadUsers();
  }, []);

  // handle autocompelete search
  const searchResult = (query: String) => {
    return users
      .filter(
        (user) =>
          user.username.toLowerCase().includes(query.toLowerCase()) ||
          (user.userDetail?.firstName + " " + user.userDetail?.lastName)
            .toLowerCase()
            .includes(query.toLowerCase()),
      )
      .map((user) => ({
        value: user.userDetail
          ? user.userDetail?.firstName + user.userDetail?.lastName
          : "",
        label: (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>
              {user.userDetail
                ? user.userDetail?.firstName + user.userDetail?.lastName
                : ""}
            </span>
          </div>
        ),
      }));
  };
  const handleSearch = (value: string) => {
    setUserSelectOptions(value ? searchResult(value) : []);
  };

  // add new contract
  const handleAddContractAuthority = () => {
    if (personAuthority) {
      const newData: IContractAuthority = {
        ...contractAuthorityData,
        personAuthority,
        nationality: nationality.name,
        status: statusContractAuthority.IS_NEW,
        customer: "",
        file: files,
      };
      addContractAuthority(newData, () => {
        router.back();
      });
    }
  };

  return (
    <div className="pr-[70px]">
      <Paging items={pagingItems} />
      <TextHeader>Thêm hợp đồng khai thác mới</TextHeader>
      <div className="mt-6 flex w-full items-start justify-between gap-24 ">
        <Form
          onChange={handleChangeFormValue}
          form={form}
          layout="horizontal"
          style={{ width: "33.33333%" }}
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
              variant="outlined"
              className="w-full"
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
              variant="outlined"
              className="w-full"
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

      <div className="h-[1px] w-full border-t-[1px] border-solid border-second"></div>

      {/* begin information  */}
      <div className="mt-10 flex flex-col ">
        <div className="flex w-full items-start justify-between gap-24">
          <Form
            onChange={handleChangeFormValue}
            form={form}
            layout="horizontal"
            style={{ width: "33.33333%" }}
            initialValues={{
              ...contractAuthorityData,
            }}
          >
            <Form.Item
              name="authorizedLegalEntity"
              label={
                <TextLabel
                  className="flex h-full items-center justify-center"
                  idInput="typeAuthorizedLegalEntity"
                >
                  Pháp nhân ủy quyền:
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
                <Radio value={typeAuthorizedLegalEntity.PERSONAL}>
                  Cá nhân
                </Radio>
                <Radio value={typeAuthorizedLegalEntity.ORGANIZATION}>
                  Tổ chức
                </Radio>
              </Radio.Group>
            </Form.Item>
            {contractAuthorityData?.authorizedLegalEntity ===
              typeAuthorizedLegalEntity.PERSONAL && (
              <>
                <Form.Item
                  name="personAuthority"
                  label={
                    <TextLabel
                      className="flex h-full items-center justify-center"
                      idInput="personAuthority"
                    >
                      Tên người ủy quyền:
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
                      const user = users.find(
                        (u) =>
                          (u.userDetail?.firstName || "") +
                            u.userDetail?.lastName ===
                          val,
                      );
                      if (!user) return;
                      setPersonalAuthority(user?.userDetail || null);
                      const userDetail = user?.userDetail || null;
                      if (userDetail === null) return;
                      form.setFieldValue("email", userDetail?.email);
                      form.setFieldValue(
                        "phoneNumber",
                        userDetail?.phoneNumber,
                      );
                      form.setFieldValue("role", userDetail?.role);
                      form.setFieldValue(
                        "nationality",
                        userDetail?.nationality,
                      );
                      form.setFieldValue(
                        "birthDay",
                        dayjs(userDetail?.dateOfBirth),
                      );
                    }}
                    options={userSelectOptions}
                    onSearch={handleSearch}
                  />
                </Form.Item>
                <Form.Item
                  name="gender"
                  label={
                    <TextLabel
                      className="flex h-full items-center justify-center"
                      idInput="gender"
                    >
                      Giới tính:
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
                    <Radio value={typeGender.FEMALE}>Nử</Radio>
                  </Radio.Group>
                </Form.Item>
                <Form.Item
                  name="nationality"
                  label={
                    <TextLabel
                      className="flex h-full items-center justify-center"
                      idInput="nationality"
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
              </>
            )}
            {contractAuthorityData?.authorizedLegalEntity ===
              typeAuthorizedLegalEntity.ORGANIZATION && (
              <>
                <Form.Item
                  name="nameOrganization"
                  label={
                    <TextLabel
                      className="flex h-full items-center justify-center"
                      idInput="nameOrganization"
                    >
                      Tên tổ chức:<span className="pt-2 text-error">*</span>
                    </TextLabel>
                  }
                  style={{
                    width: "100%",
                  }}
                  labelCol={{ span: 9 }}
                >
                  <Input
                    variant="outlined"
                    id="nameOrganization"
                    width={"100%"}
                  />
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
                  labelCol={{ span: 9 }}
                >
                  <Input variant="outlined" id="nameBank" width={"100%"} />
                </Form.Item>
                <Form.Item
                  name="address"
                  label={
                    <TextLabel
                      className="flex h-full items-center justify-center"
                      idInput="address"
                    >
                      Địa chỉ:
                    </TextLabel>
                  }
                  style={{
                    width: "100%",
                  }}
                  labelCol={{ span: 9 }}
                >
                  <Input
                    type="area"
                    variant="outlined"
                    id="address"
                    width={"100%"}
                    height={200}
                  />
                </Form.Item>
              </>
            )}
          </Form>

          {/* -------------------------- */}
          <Form
            onChange={handleChangeFormValue}
            form={form}
            layout="horizontal"
            style={{ width: "33.33333%" }}
          >
            {contractAuthorityData?.authorizedLegalEntity ===
              typeAuthorizedLegalEntity.PERSONAL && (
              <>
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
                  name="dateAllocated"
                  label={
                    <TextLabel
                      className="flex h-full items-center justify-center"
                      idInput="dateAllocated"
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
                    className="w-full"
                    id="dateAllocated"
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
                  rules={[{ required: true, message: "Nơi cấp là bắt buộc!" }]}
                >
                  <Input
                    variant="outlined"
                    id="placeAllocated"
                    width={"100%"}
                  />
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
                  <Input
                    type="area"
                    variant="outlined"
                    id="residence"
                    width={"100%"}
                    height={80}
                  />
                </Form.Item>
              </>
            )}
            {contractAuthorityData?.authorizedLegalEntity ===
              typeAuthorizedLegalEntity.ORGANIZATION && (
              <>
                <Form.Item
                  name="personAuthority"
                  label={
                    <TextLabel
                      className="flex h-full items-center justify-center"
                      idInput="personAuthority"
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
                      const user = users.find(
                        (u) =>
                          (u.userDetail?.firstName || "") +
                            u.userDetail?.lastName ===
                          val,
                      );

                      if (!user) return;
                      setPersonalAuthority(user?.userDetail || null);
                      const userDetail = user?.userDetail || null;
                      if (userDetail === null) return;
                      form.setFieldValue("email", userDetail?.email);
                      form.setFieldValue(
                        "phoneNumber",
                        userDetail?.phoneNumber,
                      );
                      form.setFieldValue("role", userDetail?.role);
                      form.setFieldValue(
                        "nationality",
                        userDetail?.nationality,
                      );
                      form.setFieldValue(
                        "birthDay",
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
                  <Input variant="outlined" id="role" width={"100%"} />
                </Form.Item>
                <Form.Item
                  name="birthDay"
                  label={
                    <TextLabel
                      className="flex h-full items-center justify-center"
                      idInput="birthDay"
                    >
                      Ngày sinh:
                      <span className="pt-2 text-error">*</span>
                    </TextLabel>
                  }
                  style={{
                    width: "100%",
                  }}
                  required={false}
                  labelCol={{ span: 9 }}
                  rules={[{ required: true, message: "Ngày sinh bắt buộc!" }]}
                >
                  <DatePicker
                    className="w-full"
                    id="birthDay"
                    background="#2b2b3f"
                    variant="outlined"
                  />
                </Form.Item>
                <Form.Item
                  name="gender"
                  label={
                    <TextLabel
                      className="flex h-full items-center justify-center"
                      idInput="gender"
                    >
                      Giới tính:
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
                    <Radio value={typeGender.FEMALE}>Nử</Radio>
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
                  name="dateAllocated"
                  label={
                    <TextLabel
                      className="flex h-full items-center justify-center"
                      idInput="dateAllocated"
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
                    className="w-full"
                    id="dateAllocated"
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
                  rules={[{ required: true, message: "Nơi cấp là bắt buộc!" }]}
                >
                  <Input
                    variant="outlined"
                    id="placeAllocated"
                    width={"100%"}
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
              </>
            )}
          </Form>
          {/* -------- */}
          <Form
            onChange={handleChangeFormValue}
            form={form}
            layout="horizontal"
            style={{ width: "33.33333%" }}
          >
            {contractAuthorityData?.authorizedLegalEntity ===
              typeAuthorizedLegalEntity.PERSONAL && (
              <>
                <Form.Item
                  name="email"
                  label={
                    <TextLabel
                      className="flex h-full items-center justify-center"
                      idInput="email"
                    >
                      Email:
                      <span className="pt-2 text-error">*</span>
                    </TextLabel>
                  }
                  style={{
                    width: "100%",
                  }}
                  required={false}
                  labelCol={{ span: 9 }}
                  rules={[{ required: true, message: "Email bắt buộc!" }]}
                >
                  <Input variant="outlined" id="email" width={"100%"} />
                </Form.Item>
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
                  rules={[
                    { required: true, message: "Tên đăng nhập bắt buộc!" },
                  ]}
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
              </>
            )}
            {contractAuthorityData?.authorizedLegalEntity ===
              typeAuthorizedLegalEntity.ORGANIZATION && (
              <>
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
                  <Input
                    type="area"
                    variant="outlined"
                    id="residence"
                    width={"100%"}
                    height={120}
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
                      Email:
                      <span className="pt-2 text-error">*</span>
                    </TextLabel>
                  }
                  style={{
                    width: "100%",
                  }}
                  required={false}
                  labelCol={{ span: 9 }}
                  rules={[{ required: true, message: "Email bắt buộc!" }]}
                >
                  <Input variant="outlined" id="email" width={"100%"} />
                </Form.Item>
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
                  rules={[
                    { required: true, message: "Tên đăng nhập bắt buộc!" },
                  ]}
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
              </>
            )}
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
        form={form}
        onSubmitCapture={handleAddContractAuthority}
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
            Tạo
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default AddContract;
