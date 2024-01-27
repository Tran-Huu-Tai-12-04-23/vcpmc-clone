import { useState } from "react";
import { DropDown, Input } from "../../../../Component";
import Table from "../../../../Component/UI/Table";
type Ownership = {
  key: number;
  name: string;
};
function ContractMining() {
  return (
    <div className="w-full pb-32">
      <div className="mb-8 flex w-full items-center justify-between">
        <div className="flex items-center justify-end">
          <Input
            placeholder="Tên hợp đồng, tác giả,..."
            height={40}
            width={500}
            search
          ></Input>
        </div>
      </div>

      <Table col={undefined} data={[]} />
    </div>
  );
}

export default ContractMining;
