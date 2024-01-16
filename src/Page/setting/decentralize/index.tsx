import { useState } from "react";
import { Input, Paging, SwitchTab, TextHeader } from "../../../Component";
import { AddPersonIcon } from "../../../assets/icon";
import FloatingActionButton from "../../../Component/UI/FloatingActionButton";
import TableCustom from "../../../Component/UI/Table";
import {
  ConfigUserColTale,
  ConfigUserRoleColTale,
  dataExampleRoleUser,
  dataExampleRole,
} from "./_configTable";
import { useRouter } from "../../../Routes/hooks";
import PathUrl from "../../../Routes/path-url";
const PagingItems = [
  {
    name: "Cài đặt",
  },
  {
    name: "Phân quyền người dùng",
  },
];
function DecentralizeUser() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<number>(1);
  const floatingButtons = [
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
  return (
    <div className="w-full">
      <Paging items={PagingItems} />
      <TextHeader>Danh sách người dùng</TextHeader>

      <div className="mb-6 mt-6 flex w-full items-start justify-between gap-10">
        <div className=" w-full">
          <div className="mb-6 flex w-full items-center justify-between">
            <SwitchTab
              className={" w-fit "}
              active={activeTab}
              buttons={[
                {
                  name: "Danh sách người dùng",
                  action: () => {
                    setActiveTab(1);
                  },
                  key: 1,
                },
                {
                  name: "Vai trò người dùng",
                  action: () => {
                    setActiveTab(2);
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

          {activeTab === 1 ? (
            <TableCustom data={dataExampleRole} col={ConfigUserColTale} />
          ) : (
            <TableCustom
              hiddenFooter
              data={dataExampleRoleUser}
              col={ConfigUserRoleColTale}
            />
          )}
        </div>

        <div className="w-fit">
          <FloatingActionButton floatingActionButtonConfig={floatingButtons} />
        </div>
      </div>
    </div>
  );
}

export default DecentralizeUser;
