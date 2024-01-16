import { useState } from "react";
import {
  Button,
  Checkbox,
  Input,
  Paging,
  TextHeader,
  TextLabel,
} from "../../../../Component";
const PagingItems = [
  {
    name: "Cài đặt",
  },
  {
    name: "Phân quyền người dùng",
  },
  {
    name: "Thêm vai trò",
  },
];

const UserFeatureDefault = {
  managerUser: [
    { name: "nguoidung_phanquyen", key: 0, code: "Phân quyền người dùng" },
    { name: "nguoidung_tao", key: 1, code: "Tạo người dùng" },
    {
      name: "nguoidung_capnhat",
      key: 2,
      code: "Cập nhật thông tin người dùng",
    },
    { name: "nguoidung_xoa", key: 3, code: "Xóa người dùng" },
    { name: "nguoidung_xemchitiet", key: 4, code: "Xem thông tin chi tiết" },
  ],
  managerLibrary: [
    { name: "nguoidung_xemdanhsach", key: 5, code: "Danh sách Media" },
    { name: "nguoidung_tailentep", key: 6, code: "Tải lên Media" },
    { name: "nguoidung_chinhsua", key: 7, code: "Chỉnh sửa thông tin Media" },
    { name: "nguoidung_xoa", key: 8, code: "Xóa Media" },
    { name: "nguoidung_pheduyet", key: 9, code: "Phê duyệt Media" },
  ],
};

type RoleType = { name: string; key: number; code: string };

function AddRoleUser() {
  const [featureSelected, setFeatureSelected] = useState<RoleType[]>([]);

  const checkFeatureSelected = (feature: RoleType) => {
    return featureSelected.find((ft) => ft.key === feature.key) != null;
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

  return (
    <div className="w-full">
      <Paging items={PagingItems} />
      <TextHeader>Thêm vai trò người dùng</TextHeader>

      <div className="mt-10 flex items-start justify-between gap-24">
        <div className="flex w-2/5 flex-col gap-8">
          <div className="flex flex-col gap-2">
            <TextLabel>Tên vai trò:</TextLabel>
            <Input bordered width={557} />
          </div>
          <div className="flex flex-col gap-2">
            <TextLabel>Mô tả::</TextLabel>
            <Input bordered width={557} type="area" />
          </div>
        </div>
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
        <Button typebtn="outline" sizetype="hug">
          Hủy
        </Button>
        <Button typebtn="primary" sizetype="hug">
          Lưu
        </Button>
      </div>
    </div>
  );
}

export default AddRoleUser;
