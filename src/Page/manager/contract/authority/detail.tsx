import { Paging, SwitchTab, TextHeader } from "../../../../Component";
import { useState } from "react";
import { useParams } from "react-router-dom";
import InformationContract from "./informationContract";
import WorkAuthority from "./work-authority";

const pagingItems = [
  {
    name: "Quản lý",
  },
  {
    name: "Quản lý hợp đồng",
  },
  {
    name: "Chi tiết",
  },
];

function DetailContract() {
  const id = useParams().id;
  const [activeTab, setActiveTab] = useState<number>(1);

  return (
    <div className="">
      <Paging items={pagingItems} />
      <TextHeader>Chỉ tiết hợp đồng ủy quyền bài hát - {id}</TextHeader>
      <SwitchTab
        className={"mb-[32px]  mt-[32px] w-fit "}
        active={activeTab}
        buttons={[
          {
            name: "Thông tin hợp đồng",
            action: () => {
              setActiveTab(1);
            },
            key: 1,
          },
          {
            name: "Tác phẩm ủy quyền",
            action: () => {
              setActiveTab(2);
            },
            key: 2,
          },
        ]}
      />
      {activeTab === 1 ? (
        <InformationContract id={id} />
      ) : (
        <WorkAuthority id={id} />
      )}
    </div>
  );
}

export default DetailContract;
