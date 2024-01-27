import { useState } from "react";
import { Paging, SwitchTab, TextHeader } from "../../../Component";
import FloatingActionButton from "../../../Component/UI/FloatingActionButton";
import { AddIcon } from "../../../assets/icon";
import ContractAuthority from "./authority";
import { useRouter } from "../../../Routes/hooks";
import PathUrl from "../../../Routes/path-url";
import ContractMining from "./mining";
const pagingItems = [
  {
    name: "Quản lý",
    path: "",
  },
  {
    name: "Quản lý hợp đồng",
    path: "",
  },
];

function ManagerContract() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<number>(1);
  const floatingButtons = [
    {
      name: "Thêm hợp đồng",
      icon: <AddIcon />,
      action: () => {
        router.push(
          `${PathUrl.URL_MANAGER}/${PathUrl.MANAGER_CONTRACT}${
            activeTab === 1 ? `/${PathUrl.AUTHORITY}` : `/${PathUrl.EXPLOIT}`
          }${activeTab === 1 ? `/${PathUrl.ADD}` : ""}`,
        );
      },
    },
  ];

  return (
    <div className=" w-full ">
      <Paging items={pagingItems} />
      <TextHeader>Danh sách hợp đồng</TextHeader>
      <SwitchTab
        className={"mb-[32px]  mt-[32px] w-fit "}
        active={activeTab}
        buttons={[
          {
            name: "Hợp đồng ủy quyền",
            action: () => {
              setActiveTab(1);
            },
            key: 1,
          },
          {
            name: "Hợp đồng khai thác",
            action: () => {
              setActiveTab(2);
            },
            key: 2,
          },
        ]}
      />
      <div className="flex w-full items-start justify-between gap-[42px]">
        {activeTab === 1 ? <ContractAuthority /> : <ContractMining />}
        <FloatingActionButton floatingActionButtonConfig={floatingButtons} />
      </div>
    </div>
  );
}

export default ManagerContract;
