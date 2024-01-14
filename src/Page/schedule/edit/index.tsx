import dayjs from "dayjs";
import {
  Button,
  CalenderCustom,
  DatePicker,
  Input,
  Paging,
  TextHeader,
  TextLabel,
} from "../../../Component";
import { useState } from "react";
import Helper from "../../../Helper";
import FloatingActionButton from "../../../Component/UI/FloatingActionButton";
import { CalenderIcon } from "../../../assets/icon";
import { useRouter } from "../../../Routes/hooks";
import PathUrl from "../../../Routes/path-url";
import { useParams } from "react-router-dom";
const pagingItems = [
  { name: "Lập lịch phát" },
  {
    name: "Chi tiết",
  },
  {
    name: "Chỉnh sửa lịch phát",
  },
];
function EditSchedule() {
  const router = useRouter();
  const { id } = useParams();
  const [playlists, setPlaylists] = useState<
    {
      title: string;
      duration: number;
    }[]
  >([
    {
      title: "Top USUK",
      duration: 2000,
    },
    {
      title: "Love Songs",
      duration: 2200,
    },
  ]);
  const [newPlaylists, setNewPlaylists] = useState<
    {
      title: string;
      duration: number;
    }[]
  >([
    {
      title: "Top USUK",
      duration: 2000,
    },
    {
      title: "Love Songs",
      duration: 2200,
    },
    {
      title: "Top USUK",
      duration: 2000,
    },
    {
      title: "Love Songs",
      duration: 2200,
    },
    {
      title: "Top USUK",
      duration: 2000,
    },
    {
      title: "Love Songs",
      duration: 2200,
    },
  ]);
  const floatingAction = [
    {
      name: "Áp lịch cho thiết bị",
      icon: <CalenderIcon />,
      action: () => {
        router.push(
          PathUrl.URL_SCHEDULE + "/" + PathUrl.APPLY_DEVICE + "/" + id,
        );
      },
    },
  ];
  return (
    <div className="w-full pb-20">
      <Paging items={pagingItems} />
      <TextHeader>Lịch phát số 1</TextHeader>

      <div className="mt-4 flex items-start justify-between gap-10">
        <div className="flex min-w-[273px] flex-col gap-10">
          <div className="w-full rounded-xl bg-[#2F2F41] p-4">
            <h5 className="text-[18px] font-semibold">Thông tin lịch phát</h5>
            <div className="mt-4 flex w-full flex-col gap-2">
              <TextLabel className="text-third">Tên lịch phát:</TextLabel>
              <Input value={"Lịch phát số 1"} bordered />
            </div>
            <div className="mt-4 flex w-full flex-col gap-2">
              <TextLabel className="text-third">Từ ngày:</TextLabel>
              <DatePicker borderPrimary value={dayjs("12/04/2003")} />
            </div>
            <div className="mt-4 flex w-full flex-col gap-2">
              <TextLabel className="text-third">Đến ngày:</TextLabel>
              <DatePicker borderPrimary value={dayjs("12/04/2003")} />
            </div>
          </div>

          <div className=" w-full rounded-xl bg-[#2F2F41] p-4">
            <h5 className="text-[18px] font-semibold">Danh sách Playlist</h5>

            <div className="custom-scroll h-[458px] overflow-hidden overflow-y-auto">
              <div className="flex h-full flex-col gap-2">
                {playlists.map((pl, index) => {
                  return (
                    <div className="rounded-lg bg-[#33334D] p-4" key={index}>
                      <h5 className="text-size-primary font-semibold text-second">
                        {pl.title}
                      </h5>
                      <h6 className="">
                        {Helper.convertDurationToString(pl.duration)}
                      </h6>
                    </div>
                  );
                })}
                <h5 className="border-t-[1px] border-solid pt-2 text-[18px] font-semibold">
                  Playlist mới
                </h5>
                {newPlaylists.map((pl, index) => {
                  return (
                    <div className="rounded-lg bg-[#33334D] p-4" key={index}>
                      <h5 className="text-size-primary font-semibold text-second">
                        {pl.title}
                      </h5>
                      <h6 className="">
                        {Helper.convertDurationToString(pl.duration)}
                      </h6>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="h-[900px] w-full">
          <CalenderCustom />

          <div className="center-item mt-9 w-full gap-10">
            <Button typebtn="outline" sizetype="hug">
              Hủy
            </Button>
            <Button typebtn="primary" sizetype="hug">
              Lưu
            </Button>
          </div>
        </div>

        <div className="w-fit">
          <FloatingActionButton floatingActionButtonConfig={floatingAction} />
        </div>
      </div>
    </div>
  );
}

export default EditSchedule;
