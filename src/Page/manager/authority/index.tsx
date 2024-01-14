import { Input, Paging, TextHeader } from "../../../Component";
import TableCustom from "../../../Component/UI/Table";
import { ConfigColAuthority, dataExampleAuthority } from "./_configTable";

const PagingItems = [
  {
    name: "Quản lý",
  },
  {
    name: "Đối tác uỷ quyền",
  },
];
function Authority() {
  return (
    <div className="w-full">
      <Paging items={PagingItems} />
      <TextHeader>Danh sách đối tác ủy quyền</TextHeader>
      <Input
        className="mb-5 mt-5"
        placeholder="Họ tên, tên đăng nhập, email..."
        height={40}
        width={700}
        search
      />

      <TableCustom
        maxWidth="84vw"
        data={dataExampleAuthority}
        col={ConfigColAuthority}
      />
    </div>
  );
}

export default Authority;
