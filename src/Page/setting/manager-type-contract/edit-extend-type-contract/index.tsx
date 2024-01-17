import { Button, Input, Paging, TextHeader } from "../../../../Component";
import { useRouter } from "../../../../Routes/hooks";
const PagingItems = [
  {
    name: "Cài đặt",
  },
  {
    name: "Quản lý loại hợp đồng",
  },
];
function EditExtendTypeContract() {
  const router = useRouter();
  return (
    <div className="w-full">
      <Paging items={PagingItems} />
      <TextHeader>Loại hợp đồng</TextHeader>

      <div className="bg-table mt-14 h-[444px] w-[649px] rounded-xl p-10">
        <h5 className="text-[24px] font-semibold">
          Cảnh báo hết hạn khai thác tác phẩm
        </h5>

        <div className="box-start mt-[10%] gap-4">
          <h5>Hợp đồng được cảnh báo trước thời gian hết hạn: </h5>
          <Input value={365} width={100} bordered />
          <h5>ngày</h5>
        </div>
      </div>
      <div className="center-item mt-[10%] gap-10">
        <Button
          typebtn="outline"
          sizetype="hug"
          onClick={() => {
            router.back();
          }}
        >
          Hủy
        </Button>
        <Button
          onClick={() => {
            router.back();
          }}
          typebtn="primary"
          sizetype="hug"
        >
          Lưu
        </Button>
      </div>
    </div>
  );
}

export default EditExtendTypeContract;
