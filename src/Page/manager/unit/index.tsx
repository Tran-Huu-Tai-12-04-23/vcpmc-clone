import { useEffect } from "react";
import { Input, Paging, TextHeader } from "../../../Component";
import FloatingActionButton from "../../../Component/UI/FloatingActionButton";
import TableCustom from "../../../Component/UI/Table";
import CancelIcon from "../../../assets/icon/cancel";
import { ConfigUnitColTale } from "./_configTable";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { RootState, actionUnitUsed } from "../../../State";
import Loading from "../../../Layout/Loading";
import { initData } from "../../../Service/unitUsed.service";

const PagingItems = [
  {
    name: "Quản lý",
  },
  {
    name: "Đơn vị sử dụng",
  },
];
function Unit() {
  const dispatch = useDispatch();
  const { loadUnitUsed } = bindActionCreators(actionUnitUsed, dispatch);
  const { unitUsed, loading } = useSelector(
    (state: RootState) => state.unitUsed,
  );
  const floatingAction = [
    {
      name: "Xóa",
      icon: <CancelIcon className="text-error" />,
      action: () => {},
    },
  ];

  useEffect(() => {
    loadUnitUsed();
  }, []);

  return (
    <div className="w-full">
      <Paging items={PagingItems} />
      <TextHeader>Danh sách đơn vị sử dụng</TextHeader>
      <div className="flex w-full items-start justify-between gap-10">
        <div className="w-full">
          <Input
            className="mb-5 mt-5"
            placeholder="Tên khoản giá trị, số hợp đồng,..."
            height={40}
            width={500}
            search
          />
          <TableCustom
            checked
            loading={loading}
            data={unitUsed}
            col={ConfigUnitColTale}
          />
        </div>
        <div className="w-fit">
          <FloatingActionButton floatingActionButtonConfig={floatingAction} />
        </div>
      </div>
    </div>
  );
}

export default Unit;
