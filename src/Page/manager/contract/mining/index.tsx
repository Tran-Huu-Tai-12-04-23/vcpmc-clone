import { Input } from "../../../../Component";
import Table from "../../../../Component/UI/Table";
import { ConfigTableMiningContract } from "./_configTable";
import { useRouter } from "../../../../Routes/hooks";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, actionContractMining } from "../../../../State";
import { bindActionCreators } from "@reduxjs/toolkit";

function ContractMining() {
  const dispatch = useDispatch();
  const { loadContractMining } = bindActionCreators(
    actionContractMining,
    dispatch,
  );
  const router = useRouter();
  const { contractMinings, loading } = useSelector(
    (state: RootState) => state.contractMining,
  );

  const ConfigCol = ConfigTableMiningContract({
    onNav: (link: string) => {
      router.push(link);
    },
  });

  useEffect(() => {
    loadContractMining();
  }, []);

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

      <Table col={ConfigCol} data={contractMinings} loading={loading} />
    </div>
  );
}

export default ContractMining;
