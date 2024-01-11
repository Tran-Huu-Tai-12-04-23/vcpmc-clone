import { useParams } from "react-router-dom";
import { Paging, TextHeader, TextLabel } from "../../../../Component";
import FloatingActionButton from "../../../../Component/UI/FloatingActionButton";
import { useRouter } from "../../../../Routes/hooks";
import PathUrl from "../../../../Routes/path-url";
import { EditIcon } from "../../../../assets/icon";

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
  const { id } = useParams();
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
            id,
        );
      },
    },
  ];
  return (
    <div className="w-full">
      <Paging items={PagingItems} />
      <TextHeader>Thông tin người dùng</TextHeader>

      <div className="mt-10 flex w-full items-start justify-between gap-10">
        <div className="flex w-full items-start justify-start gap-4">
          <div className="flex w-2/5 flex-col gap-8">
            <div className="box-start gap-2">
              <TextLabel className="min-w-[10rem]">Tên người dùng:</TextLabel>
              <h5 className="text-third">Nguyễn văn A</h5>
            </div>
            <div className="box-start gap-2">
              <TextLabel className="min-w-[10rem]">Vai trò::</TextLabel>
              <h5 className="text-third">QA</h5>
            </div>
            <div className="box-start gap-2">
              <TextLabel className="min-w-[10rem]">Email:</TextLabel>
              <h5 className="text-third">nguyenvana@gmail.com</h5>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="box-start gap-2">
              <TextLabel className="min-w-[10rem]">Tên đăng nhập:</TextLabel>
              <h5 className="text-third">nguyenvana@gmail.com</h5>
            </div>
            <div className="box-start gap-2">
              <TextLabel className="min-w-[10rem]">Mật khẩu:</TextLabel>
              <h5 className="text-third">*******</h5>
            </div>
            <div className="box-start gap-2">
              <TextLabel className="min-w-[10rem]">
                Trạng thái thiết bị:
              </TextLabel>
              <h5 className="text-third">Đã kích hoạt</h5>
            </div>
          </div>
        </div>

        <div className="w-fit">
          <FloatingActionButton floatingActionButtonConfig={floatingAction} />
        </div>
      </div>
    </div>
  );
}

export default InfoUser;
