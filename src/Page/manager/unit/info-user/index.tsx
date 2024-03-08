import { useParams } from "react-router-dom";
import { Paging, TextHeader, TextLabel } from "../../../../Component";
import FloatingActionButton from "../../../../Component/UI/FloatingActionButton";
import { useRouter } from "../../../../Routes/hooks";
import PathUrl from "../../../../Routes/path-url";
import { EditIcon } from "../../../../assets/icon";
import { useSelector } from "react-redux";
import { RootState } from "../../../../State";
import { useEffect, useState } from "react";
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
  {
    name: "Thông tin người dùng",
  },
];
function InfoUser() {
  const router = useRouter();
  const { currentUnitUsed } = useSelector((state: RootState) => state.unitUsed);
  const { email } = useParams();
  const [user, setUser] = useState<IUser | null>(null);
  const floatingAction = [
    {
      name: "Chỉnh sửa",
      icon: <EditIcon />,
      action: () => {
        router.push(
          PathUrl.URL_MANAGER +
            "/" +
            PathUrl.MANAGER_UNIT_USED +
            "/" +
            PathUrl.EDIT_USER +
            "/" +
            email,
        );
      },
    },
  ];

  useEffect(() => {
    if (currentUnitUsed?.users) {
      const user: IUser | undefined = currentUnitUsed.users.find(
        (us) => us.userDetail?.email === email,
      );
      user && setUser(user);
    }
  }, [currentUnitUsed, email]);
  return (
    user && (
      <div className="w-full">
        <Paging items={PagingItems} />
        <TextHeader>Thông tin người dùng</TextHeader>

        <div className="mt-10 flex w-full items-start justify-between gap-10">
          <div className="flex w-full items-start justify-start gap-4">
            <div className="flex w-2/5 flex-col gap-8">
              <div className="box-start gap-2">
                <TextLabel className="min-w-[10rem]">Tên người dùng:</TextLabel>
                <h5 className="text-third">
                  {user.userDetail?.firstName ?? "" + user.userDetail?.lastName}
                </h5>
              </div>
              <div className="box-start gap-2">
                <TextLabel className="min-w-[10rem]">Vai trò::</TextLabel>
                <h5 className="text-third">{user.userDetail?.role}</h5>
              </div>
              <div className="box-start gap-2">
                <TextLabel className="min-w-[10rem]">Email:</TextLabel>
                <h5 className="text-third">{user.userDetail?.email}</h5>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <div className="box-start gap-2">
                <TextLabel className="min-w-[10rem]">Tên đăng nhập:</TextLabel>
                <h5 className="text-third">{user.username}</h5>
              </div>
              <div className="box-start gap-2">
                <TextLabel className="min-w-[10rem]">Mật khẩu:</TextLabel>
                <h5 className="text-third">*******</h5>
              </div>
              <div className="box-start gap-2">
                <TextLabel className="min-w-[10rem]">
                  Trạng thái thiết bị:
                </TextLabel>
                <h5 className="text-third">
                  {user.status ? "Đã kích hoạt" : "Ngừng kích hoạt"}
                </h5>
              </div>
            </div>
          </div>

          <div className="w-fit">
            <FloatingActionButton floatingActionButtonConfig={floatingAction} />
          </div>
        </div>
      </div>
    )
  );
}

export default InfoUser;
