import { Input } from "../../../../Component";
import Table from "../../../../Component/UI/Table";
import { ConfigTableMiningContract } from "./_configTable";
import { useRouter } from "../../../../Routes/hooks";

function ContractMining() {
  const router = useRouter();
  const ConfigCol = ConfigTableMiningContract({
    onNav: (link: string) => {
      router.push(link);
    },
  });
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

      <Table col={ConfigCol} data={[]} />
    </div>
  );
}

export default ContractMining;
