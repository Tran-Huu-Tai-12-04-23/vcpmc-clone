import { useDispatch, useSelector } from "react-redux";
import { Input, Paging, TextHeader } from "../../../../Component";
import FloatingActionButton from "../../../../Component/UI/FloatingActionButton";
import TableCustom from "../../../../Component/UI/Table";
import { useRouter } from "../../../../Routes/hooks";
import PathUrl from "../../../../Routes/path-url";
import { AddIcon, GroupPersonIcon, TrashIcon } from "../../../../assets/icon";
import { ConfigDetailUnitColTale } from "./_configTable";
import { bindActionCreators } from "@reduxjs/toolkit";
import { RootState, actionUnitUsed } from "../../../../State";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { stat } from "fs";
import { IUser } from "../../../../Model/user.model";

const PagingItems = [
  {
    name: "Quản lý",
  },
  {
    name: "Đơn vị sử dụng",
  },
  {
    name: "Chi tiết",
  },
];
function DetailUnitUsed() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = useParams();
  const { changeCurrentUnitUsed, updateUnitUsed } = bindActionCreators(
    actionUnitUsed,
    dispatch,
  );
  const { currentUnitUsed, loading } = useSelector(
    (state: RootState) => state.unitUsed,
  );

  const [userSelect, setUserSelect] = useState<IUser[]>([]);

  const handleRemoveUser = () => {
    const users = currentUnitUsed?.users;
    const newUsers = users?.filter((user) => {
      const userRemove = userSelect.find(
        (us) => us.userDetail?.email === user.userDetail?.email,
      );

      return !userRemove;
    });

    const newUnitUsed = {
      ...currentUnitUsed,
      users: newUsers,
    };

    currentUnitUsed?.id &&
      updateUnitUsed(currentUnitUsed.id, newUnitUsed, () => {});
  };

  useEffect(() => {
    id && changeCurrentUnitUsed(id);
  }, [id]);

  const floatingAction = [
    {
      name: "Thêm người dùng",
      icon: <AddIcon />,
      action: () => {
        router.push(
          PathUrl.URL_MANAGER +
            "/" +
            PathUrl.MANAGER_UNIT_USED +
            "/" +
            PathUrl.ADD_USER,
        );
      },
    },
    {
      name: "Xóa",
      icon: <TrashIcon />,
      action: () => {
        handleRemoveUser();
      },
    },
    {
      name: "Vai trò",
      icon: <GroupPersonIcon />,
      action: () => {},
    },
  ];

  return (
    <div className="w-full">
      <Paging items={PagingItems} />
      <TextHeader>Đơn vị sử dụng - ABCD</TextHeader>
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
            data={
              currentUnitUsed?.users.map((us) => {
                return {
                  ...us,
                  key: us.userDetail?.email,
                };
              }) ?? []
            }
            onSelect={(val) => setUserSelect(val)}
            col={ConfigDetailUnitColTale}
          />
        </div>
        <div className="w-fit">
          <FloatingActionButton floatingActionButtonConfig={floatingAction} />
        </div>
      </div>
    </div>
  );
}

export default DetailUnitUsed;
