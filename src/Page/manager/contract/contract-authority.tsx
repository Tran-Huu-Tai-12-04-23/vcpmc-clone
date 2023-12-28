import { useState } from "react";
import { DropDown, Input } from "../../../Component";
import Table from "../../../Component/UI/Table";

type Ownership = {
  key: number;
  name: string;
};
function ContractAuthority() {
  const [ownershipActive, setOwnershipActive] = useState<Ownership>({
    key: -1,
    name: "Tất cả",
  });

  const ownerships = [
    {
      key: 1,
      name: "Người biểu diễn",
    },
    {
      key: 2,
      name: "Nhà sản xuất",
    },
  ];

  return (
    <div className="w-full pb-32">
      <div className="mb-8 flex w-full items-center justify-between">
        <div className="flex flex-shrink-0 items-center justify-between gap-16">
          <div className="flex items-center justify-start gap-5">
            <h5 className="text-size-primary font-semibold">Quyền sở hữu:</h5>
            <DropDown
              active={ownershipActive}
              dropItems={ownerships}
              onSelect={(value) => setOwnershipActive(value)}
            />
          </div>
          <div className="flex items-center justify-start gap-5">
            <h5 className="text-size-primary font-semibold">
              Hiệu lực hợp đồng:
            </h5>
            <DropDown
              active={ownershipActive}
              dropItems={ownerships}
              onSelect={(value) => setOwnershipActive(value)}
            />
          </div>
        </div>
        <div className="flex items-center justify-end">
          <Input
            placeholder="Tên hợp đồng, số hợp đồng, người ủy quyền,..."
            height={40}
            width={500}
            search
          ></Input>
        </div>
      </div>

      <Table />
    </div>
  );
}

export default ContractAuthority;
