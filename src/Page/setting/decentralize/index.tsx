import { useEffect } from "react";
import { Input, Paging, SwitchTab, TextHeader } from "../../../Component";
import { AddPersonIcon } from "../../../assets/icon";
import FloatingActionButton from "../../../Component/UI/FloatingActionButton";
import TableCustom from "../../../Component/UI/Table";
import { ConfigUserColTale, ConfigColRole } from "./_configTable";
import { usePathname, useRouter } from "../../../Routes/hooks";
import PathUrl from "../../../Routes/path-url";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { RootState, actionRole, actionUser } from "../../../State";
import GroupPerson from "../../../assets/icon/group_person";
const PagingItems = [
  {
    name: "Cài đặt",
  },
  {
    name: "Phân quyền người dùng",
  },
];
function DecentralizeUser() {
  const pathname = usePathname();
  const dispatch = useDispatch();
  const router = useRouter();
  const { loadRoles, removeRole } = bindActionCreators(actionRole, dispatch);
  const { loadUsers } = bindActionCreators(actionUser, dispatch);
  const { roles, loading } = useSelector((state: RootState) => state.roles);
  const { users, loading: loadingUser } = useSelector(
    (state: RootState) => state.users,
  );
  const floatingButtonsRole = [
    {
      name: "Thêm vai trò",
      icon: <GroupPerson />,
      action: () => {
        router.push(
          PathUrl.URL_SETTING +
            "/" +
            PathUrl.DECENTRALIZED +
            "/role/" +
            PathUrl.ADD,
        );
      },
    },
  ];
  const floatingButtonsUser = [
    {
      name: "Thêm người dùng",
      icon: <AddPersonIcon />,
      action: () => {
        router.push(
          PathUrl.URL_SETTING + "/" + PathUrl.DECENTRALIZED + "/" + PathUrl.ADD,
        );
      },
    },
  ];

  const configColRoleTable = ConfigColRole({
    onRemove: (id) => {
      removeRole(id, () => {
        alert("Xóa vai trò thành công!");
      });
    },
  });

  useEffect(() => {
    pathname.includes("role") ? loadRoles() : loadUsers();
  }, [pathname]);
  return (
    <div className="w-full">
      <Paging items={PagingItems} />
      <TextHeader>Danh sách người dùng</TextHeader>

      <div className="mb-6 mt-6 flex w-full items-start justify-between gap-10">
        <div className=" w-full">
          <div className="mb-6 flex w-full items-center justify-between">
            <SwitchTab
              className={" w-fit "}
              active={pathname.includes("role") ? 2 : 1}
              buttons={[
                {
                  name: "Danh sách người dùng",
                  action: () => {
                    router.push(
                      PathUrl.URL_SETTING + "/" + PathUrl.DECENTRALIZED,
                    );
                  },
                  key: 1,
                },
                {
                  name: "Vai trò người dùng",
                  action: () => {
                    router.push(
                      PathUrl.URL_SETTING +
                        "/" +
                        PathUrl.DECENTRALIZED +
                        "/role",
                    );
                  },
                  key: 2,
                },
              ]}
            />
            <Input
              placeholder="Nhập tên người dùng"
              height={48}
              width={500}
              search
            />
          </div>

          {pathname.includes("role") ? (
            <TableCustom
              hiddenFooter
              data={roles}
              loading={loading}
              col={configColRoleTable}
            />
          ) : (
            <TableCustom
              loading={loadingUser}
              data={users}
              col={ConfigUserColTale}
            />
          )}
        </div>

        <div className="w-fit">
          <FloatingActionButton
            floatingActionButtonConfig={
              pathname.includes("role")
                ? floatingButtonsRole
                : floatingButtonsUser
            }
          />
        </div>
      </div>
    </div>
  );
}

export default DecentralizeUser;
