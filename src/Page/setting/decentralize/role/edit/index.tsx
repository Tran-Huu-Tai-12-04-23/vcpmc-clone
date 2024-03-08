import { useEffect, useState } from "react";
import {
  Button,
  Checkbox,
  Input,
  Paging,
  TextHeader,
  TextLabel,
} from "../../../../../Component";
import { UserFeatureDefault } from "../../_configTable";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { RootState, actionRole } from "../../../../../State";
import { useParams } from "react-router-dom";
import { Form } from "antd";
import { IRole, RoleType } from "../../../../../Model/role.model";
import { useRouter } from "../../../../../Routes/hooks";
const PagingItems = [
  {
    name: "Cài đặt",
  },
  {
    name: "Phân quyền người dùng",
  },
  {
    name: "Cập nhật",
  },
];

function EditRole() {
  const dispatch = useDispatch();
  const { changeCurrentRole, updateRole } = bindActionCreators(
    actionRole,
    dispatch,
  );
  const { currentRole } = useSelector((state: RootState) => state.roles);
  const { id } = useParams();
  const router = useRouter();

  const [featureSelected, setFeatureSelected] = useState<RoleType[]>([]);
  const [form] = Form.useForm();
  const [roleData, setRoleData] = useState<any>(null);

  const checkFeatureSelected = (feature: RoleType) => {
    return featureSelected.find((ft) => ft.key === feature.key) != null;
  };

  const handleUpdateRole = () => {
    const newRole: IRole = {
      ...roleData,
      function: featureSelected,
    };

    id &&
      updateRole(id, newRole, () => {
        router.back();
      });
  };

  const unSelectedFeature = (role: RoleType) => {
    setFeatureSelected((prev) => {
      return prev.filter((f) => f.key !== role.key);
    });
  };
  const selectedFeature = (role: RoleType) => {
    setFeatureSelected((prev) => {
      if (!checkFeatureSelected(role)) {
        return [...prev, role];
      }
      return prev;
    });
  };

  const handleChangeForm = () => {
    setRoleData(form.getFieldsValue());
  };

  useEffect(() => {
    id && changeCurrentRole(id);
  }, [id]);

  useEffect(() => {
    currentRole && setFeatureSelected(currentRole.function);
  }, [currentRole]);

  return (
    currentRole && (
      <div className="w-full">
        <Paging items={PagingItems} />
        <TextHeader>Cập nhật vai trò người dùng</TextHeader>

        <div className="mt-10 flex items-start justify-between gap-24">
          <Form
            onChange={handleChangeForm}
            form={form}
            layout="vertical"
            style={{ minWidth: "34rem" }}
            initialValues={{
              ...currentRole,
            }}
          >
            <Form.Item
              name="nameRole"
              label={
                <TextLabel
                  className="flex h-full items-center justify-center"
                  idInput="nameRole"
                >
                  Tên vai trò:
                </TextLabel>
              }
              style={{
                width: "100%",
              }}
              required={false}
              labelCol={{ span: 9 }}
            >
              <Input variant="outlined" id="nameRole" width={"100%"} />
            </Form.Item>
            <Form.Item
              name="description"
              label={
                <TextLabel
                  className="flex h-full items-center justify-center"
                  idInput="description"
                >
                  Mô tả:
                </TextLabel>
              }
              style={{
                width: "100%",
              }}
              required={false}
              labelCol={{ span: 9 }}
            >
              <Input
                height={200}
                type="area"
                variant="outlined"
                id="description"
                width={"100%"}
              />
            </Form.Item>
          </Form>
          <div className="flex w-3/5 flex-col gap-2 pr-10">
            <TextLabel>Phân quyền chức năng:</TextLabel>
            <div className=" h-max w-full rounded-xl bg-input p-10">
              {/* ------ */}
              <div className="mb-4  grid grid-cols-8">
                <div className="col-span-2  flex  flex-col items-start justify-between">
                  <h5 className="font-semibold text-second">
                    Tên nhóm chức năng
                  </h5>
                </div>
                <div className="col-span-3 flex items-center justify-start gap-4">
                  <Checkbox
                    checked={
                      featureSelected.length ===
                      UserFeatureDefault.managerLibrary.length +
                        UserFeatureDefault.managerUser.length
                    }
                    onChange={(e) => {
                      if (e.target.checked) {
                        setFeatureSelected([
                          ...UserFeatureDefault.managerLibrary,
                          ...UserFeatureDefault.managerUser,
                        ]);
                      } else {
                        setFeatureSelected([]);
                      }
                    }}
                  />
                  <h5 className="font-semibold text-second">Mã chức năng</h5>
                </div>
                <div className="col-span-3">
                  <h5 className="font-semibold text-second">Chức năng</h5>
                </div>
              </div>
              <div className="mb-4  grid grid-cols-8">
                {/* ------ */}
                <div className="col-span-2 flex h-full flex-col  justify-center border-b-[1px] border-solid">
                  <h5 className="text-third">Quản lý người dùng</h5>
                </div>
                <div className="col-span-3 flex flex-col gap-4">
                  {UserFeatureDefault.managerUser.map(
                    (role: RoleType, index: number) => {
                      return (
                        <div
                          className={`box-start h-14 w-full gap-4 border-b-[1px] border-solid ${
                            index < UserFeatureDefault.managerUser.length - 1
                              ? "border-second"
                              : ""
                          }`}
                          key={index}
                        >
                          <Checkbox
                            onChange={(e) => {
                              if (e.target.checked) {
                                selectedFeature(role);
                              } else {
                                unSelectedFeature(role);
                              }
                            }}
                            checked={checkFeatureSelected(role)}
                          />
                          <h5 className="text-third">{role.code}</h5>
                        </div>
                      );
                    },
                  )}
                </div>
                <div className="col-span-3 flex flex-col gap-4">
                  {UserFeatureDefault.managerUser.map(
                    (role: RoleType, index: number) => {
                      return (
                        <div
                          className={`box-start h-14 w-full gap-4 border-b-[1px] border-solid ${
                            index < UserFeatureDefault.managerUser.length - 1
                              ? "border-second"
                              : ""
                          }`}
                          key={index}
                        >
                          <h5 className="text-third">{role.name}</h5>
                        </div>
                      );
                    },
                  )}
                </div>
              </div>

              {/* ---- */}
              <div className="mb-4   grid grid-cols-8">
                {/* ------ */}
                <div className="col-span-2 flex  h-full flex-col justify-center">
                  <h5 className="text-third">Quản lý thư viện</h5>
                </div>
                <div className="col-span-3 flex flex-col gap-4">
                  {UserFeatureDefault.managerLibrary.map(
                    (role: RoleType, index: number) => {
                      return (
                        <div
                          className={`box-start h-14 w-full gap-4 border-b-[1px] border-solid ${
                            index < UserFeatureDefault.managerLibrary.length - 1
                              ? "border-second"
                              : "border-transparent"
                          }`}
                          key={index}
                        >
                          <Checkbox
                            onChange={(e) => {
                              if (e.target.checked) {
                                selectedFeature(role);
                              } else {
                                unSelectedFeature(role);
                              }
                            }}
                            checked={checkFeatureSelected(role)}
                          />
                          <h5 className="text-third">{role.code}</h5>
                        </div>
                      );
                    },
                  )}
                </div>
                <div className="col-span-3 flex flex-col gap-4">
                  {UserFeatureDefault.managerLibrary.map(
                    (role: RoleType, index: number) => {
                      return (
                        <div
                          className={`box-start h-14 w-full gap-4 border-b-[1px] border-solid ${
                            index < UserFeatureDefault.managerLibrary.length - 1
                              ? "border-second"
                              : "border-transparent"
                          }`}
                          key={index}
                        >
                          <h5 className="text-third">{role.name}</h5>
                        </div>
                      );
                    },
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="center-item mt-24 gap-10">
          <Button
            typebtn="outline"
            sizetype="hug"
            onClick={() => {
              router.back();
            }}
          >
            Hủy
          </Button>
          <Button typebtn="primary" sizetype="hug" onClick={handleUpdateRole}>
            Lưu
          </Button>
        </div>
      </div>
    )
  );
}

export default EditRole;
