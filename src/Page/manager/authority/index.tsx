import { useDispatch, useSelector } from "react-redux";
import { Input, Paging, TextHeader } from "../../../Component";
import TableCustom from "../../../Component/UI/Table";
import { ConfigColAuthority } from "./_configTable";
import { RootState, actionAuthorizedPartner } from "../../../State";
import { useEffect } from "react";
import { bindActionCreators } from "@reduxjs/toolkit";
import { initData } from "../../../Service/authorizedPartner.service";

const PagingItems = [
  {
    name: "Quản lý",
  },
  {
    name: "Đối tác uỷ quyền",
  },
];
function Authority() {
  const dispatch = useDispatch();
  const { authorizedPartners, loading } = useSelector(
    (state: RootState) => state.authorizedPartners,
  );
  const { loadAuthorizedPartner } = bindActionCreators(
    actionAuthorizedPartner,
    dispatch,
  );

  useEffect(() => {
    loadAuthorizedPartner();
  }, []);
  return (
    <div className="w-full">
      <Paging items={PagingItems} />
      <TextHeader>Danh sách đối tác ủy quyền</TextHeader>
      <Input
        className="mb-5 mt-5"
        placeholder="Họ tên, tên đăng nhập, email..."
        height={48}
        width={700}
        search
      />

      <TableCustom
        maxWidth="84vw"
        data={authorizedPartners}
        col={ConfigColAuthority}
        loading={loading}
      />
    </div>
  );
}

export default Authority;
