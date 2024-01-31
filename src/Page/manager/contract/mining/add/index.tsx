import { Form, Radio, Select } from "antd";
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
import { countryItems } from "../../../../../assets/_mock";
import { useEffect, useState } from "react";
import {
  File,
  IContractMining,
  statusContractMining,
  typeContract,
  typeGender,
} from "../../../../../Model/contractMining.model";
import FileItem from "../../../../../Component/UI/FileItem";
import Helper from "../../../../../Helper";
import { useRouter } from "../../../../../Routes/hooks";
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

function AddContractMining() {
  const router = useRouter();
  const [form] = Form.useForm();
  const [listCountry, setListCountry] = useState([]);
  const [files, setFiles] = useState<File[]>([]);
  const [country, setCountry] = useState({
    key: -1,
    name: "",
  });
  const [contractMiningData, setContractMiningData] = useState<any>(null);

  const handleChangeFormValue = () => {
    setContractMiningData(form.getFieldsValue());
  };

  const handleAddContractMining = () => {
    if (!Helper.isObjectEmpty(contractMiningData)) {
      return;
    }

    const newContractMining: IContractMining = {
      ...contractMiningData,
      status: statusContractMining.IS_NEW,
      file: files,
    };
  };
  useEffect(() => {
    const getCountry = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        if (response.ok) {
          let data = await response.json();
          data = data.map((country: any, index: number) => {
            return {
              key: index,
              name: country.name.common,
            };
          });
          setCountry(data[0]);
          setListCountry(data);
          return data;
        } else {
          console.error("Error fetching data. Status:", response.status);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getCountry();
  }, []);

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
              bordered
              width={200}
              id="date-effect"
              background="#2b2b3f"
            />
          </Form.Item>
          <Form.Item
            name="dateExpire"
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
              width={200}
              bordered
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
          onChange={handleChangeFormValue}
          form={form}
          layout="horizontal"
          style={{ width: "33.33333%" }}
        >
          <Form.Item
            name="typeContract"
            label=""
            style={{
              width: "100%",
            }}
            labelCol={{ span: 9 }}
          >
            <div className="flex w-full flex-col gap-4">
              <TextLabel
                className="flex h-full items-center"
                idInput="date-expire"
              >
                Loại hợp đồng:
              </TextLabel>
              <Radio.Group defaultValue={typeContract.ALL_IN_ONE}>
                <div className="flex w-full justify-start gap-4">
                  <div className="w-[8rem] flex-shrink-0">
                    <Radio value={typeContract.ALL_IN_ONE}>Trọn gói</Radio>
                  </div>
                  <div className="h-[full] w-[2px] bg-input"></div>
                  <div className="flex w-full flex-col">
                    <Form.Item
                      name="valueContract"
                      label={
                        <h5
                          className={`${
                            contractMiningData?.typeContract ===
                            typeContract.ALL_IN_ONE
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
                        variant="outlined"
                        readOnly={
                          contractMiningData?.typeContract ===
                          typeContract.ALL_IN_ONE
                            ? false
                            : true || false
                        }
                      />
                    </Form.Item>
                    <Form.Item
                      name="value"
                      label={
                        <h5
                          className={`${
                            contractMiningData?.typeContract ===
                            typeContract.ALL_IN_ONE
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
                        variant="outlined"
                        readOnly={
                          contractMiningData?.typeContract ===
                          typeContract.ALL_IN_ONE
                            ? false
                            : true || false
                        }
                      />
                    </Form.Item>
                  </div>
                </div>
                <div className="flex w-full justify-start gap-4">
                  <div className="w-[8rem] flex-shrink-0">
                    <Radio value={typeContract.PLAYS}>Lượt phát</Radio>
                  </div>
                  <div className="h-[full] w-[2px] bg-input"></div>
                  <div className="flex w-full flex-col">
                    <Form.Item
                      name="valueContract"
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
                          contractMiningData?.typeContract ===
                          typeContract.PLAYS
                            ? false
                            : true || false
                        }
                      />
                    </Form.Item>
                  </div>
                </div>
              </Radio.Group>
            </div>
          </Form.Item>
        </Form>
      </div>

      {/* begin information  */}
      <div className="mt-10 flex flex-col ">
        <div className="flex w-full items-start justify-between gap-24">
          <Form
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
              rules={[
                { required: true, message: "Người đại diện là bắt buộc!" },
              ]}
            >
              <Input variant="outlined" id="person-representation" />
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
              name="birthDay"
              label={
                <TextLabel
                  className="flex h-full items-center justify-center"
                  idInput="birthday"
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
                width={200}
                bordered
                id="birthday"
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
                active={country}
                dropItems={listCountry}
                onSelect={(val) => setCountry(val)}
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
              labelCol={{ span: 9 }}
            >
              <Input variant="outlined" id="email" />
            </Form.Item>
          </Form>

          {/* -------------------------- */}
          <Form
            onChange={handleChangeFormValue}
            form={form}
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
              <Radio.Group
                className="flex items-center justify-start gap-10"
                defaultValue={typeGender.MALE}
              >
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
              <DatePicker id="dateAllocate" background="#2b2b3f" bordered />
            </Form.Item>
            <Form.Item
              name="placeAllocate"
              label={
                <TextLabel
                  className="flex h-full items-center justify-center"
                  idInput="placeAllocate"
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
              <Input variant="outlined" id="placeAllocate" width={"100%"} />
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
              name="bank"
              label={
                <TextLabel
                  className="flex h-full items-center justify-center"
                  idInput="bank"
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
              <Input variant="outlined" id="bank" width={"100%"} />
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

      <div className="flex items-center justify-center gap-10">
        <Button typebtn="outline" sizetype="hug" onClick={() => router.back()}>
          Hủy
        </Button>
        <Button
          typebtn="primary"
          sizetype="hug"
          onClick={handleAddContractMining}
        >
          Tạo
        </Button>
      </div>
    </div>
  );
}

export default AddContractMining;
