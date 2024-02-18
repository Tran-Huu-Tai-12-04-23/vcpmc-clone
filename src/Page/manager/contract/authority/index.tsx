import { useEffect, useState } from "react";
import { DropDown, Input } from "../../../../Component";
import Table from "../../../../Component/UI/Table";
import { ConfigColTale } from "./_configTable";
import { useDispatch, useSelector } from "react-redux";
import { RootState, actionContractAuthority } from "../../../../State";
import { bindActionCreators } from "@reduxjs/toolkit";
import { statusContractAuthority } from "../../../../Model/contractAuthority.model";
type TOwnership = {
  key: number;
  name: string;
};
type TStatusContract = {
  key: number;
  name: string;
};
function ContractAuthority() {
  const dispatch = useDispatch();
  const { contractAuthorities } = useSelector(
    (state: RootState) => state.contractAuthority,
  );
  const { loadContractAuthorities } = bindActionCreators(
    actionContractAuthority,
    dispatch,
  );
  const [ownershipActive, setOwnershipActive] = useState<TOwnership>({
    key: -1,
    name: "Tất cả",
  });
  const [statusContract, setStatusContract] = useState<TStatusContract>({
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
  const statusContracts = [
    {
      key: statusContractAuthority.IS_NEW,
      name: "Mới",
    },
    {
      key: statusContractAuthority.IS_EFFECT,
      name: "Còn thời hạn",
    },
    {
      key: statusContractAuthority.IS_EXPIRE,
      name: "Hết thời hạn",
    },
    {
      key: statusContractAuthority.IS_CANCELLED,
      name: "Hủy",
    },
  ];

  useEffect(() => {
    loadContractAuthorities();
  }, []);

  return (
    <div className="w-full pb-32">
      <div className="mb-8 flex w-full items-center justify-between">
        <div className="flex flex-shrink-0 items-center justify-between gap-16">
          <div className="flex items-center justify-start gap-5">
            <h5 className="text-size-primary font-semibold">Quyền sở hữu:</h5>
            <DropDown
              classDropItem="border-primary bg-main "
              active={ownershipActive}
              dropItems={ownerships}
              width="200px"
              onSelect={(value) => setOwnershipActive(value)}
            />
          </div>
          <div className="flex items-center justify-start gap-5">
            <h5 className="text-size-primary font-semibold">
              Hiệu lực hợp đồng:
            </h5>
            <DropDown
              classDropItem="border-primary bg-main"
              active={statusContract}
              dropItems={statusContracts}
              width="200px"
              onSelect={(value) => setStatusContract(value)}
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

      <Table col={ConfigColTale} data={contractAuthorities} />
    </div>
  );
}

export default ContractAuthority;
