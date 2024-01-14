import { useParams } from "react-router-dom";
import { Paging, TextHeader } from "../../../Component";
import FloatingActionButton from "../../../Component/UI/FloatingActionButton";
import TableCustom from "../../../Component/UI/Table";
import { useRouter } from "../../../Routes/hooks";
import PathUrl from "../../../Routes/path-url";
import {
  EditIcon,
  RepeatIcon,
  ShuffleIcon,
  TrashIcon,
  WorldIcon,
} from "../../../assets/icon";
import DefaultThumbnailsPlaylist from "../../../assets/icon/default_thumbnails_playslist";
import { ConfigRecordColTale, dataExampleRecord } from "./_configTable";
const PagingDetailPlaylist = [
  {
    name: "Playlist",
  },
  {
    name: "Chi tiết playlist",
  },
];
function DetailPlaylist() {
  const { id } = useParams();
  const router = useRouter();
  const floatingAction = [
    {
      name: "Chỉnh sửa",
      icon: <EditIcon />,
      action: () => {
        router.push(PathUrl.URL_PLAYLIST + "/" + PathUrl.EDIT + "/" + id);
      },
    },
    {
      name: "Xóa playlist",
      icon: <TrashIcon />,
      action: () => {},
    },
  ];
  return (
    <div className="w-full">
      <Paging items={PagingDetailPlaylist} />
      <TextHeader>Playlist Top ca khúc 2021</TextHeader>
      <div className="mt-4  flex  items-start justify-between gap-8">
        <div className="flex w-[274px] flex-shrink-0 flex-col gap-4 rounded-lg">
          <DefaultThumbnailsPlaylist />

          <h5 className="border-b-[1px] border-solid border-second pb-4 text-[24px] font-semibold">
            Top ca khúc 2021
          </h5>
          <div className="flex flex-col gap-4 border-b-[1px] border-solid border-second pb-4">
            <div className="flex items-center justify-between">
              <h5 className="text-size-primary font-semibold">Người tạo:</h5>
              <span className="text-third">Super Admin</span>
            </div>
            <div className="flex items-center justify-between">
              <h5 className="text-size-primary font-semibold">Tổng số:</h5>
              <span className="text-third">8 bản ghi</span>
            </div>
            <div className="flex items-center justify-between">
              <h5 className="text-size-primary font-semibold">
                Tổng thời lượng:
              </h5>
              <span className="text-third">01:31:16</span>
            </div>
          </div>

          <p className="border-b-[1px] border-solid border-second pb-4 pr-4 text-size-primary text-third ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt labore et dolore magna aliqua.
          </p>
          <div className="border-b-[1px] border-solid border-second pb-4 ">
            <div className="box-start flex-shrink-0 flex-wrap gap-4">
              {[
                "Chủ đề 1 ",
                "Chủ đề 2",
                "Chủ đề 3",
                "Chủ đề 4",
                "Chủ đề 5",
                "Chủ đề 6",
              ].map((tp, index) => {
                return (
                  <div
                    key={index}
                    className="box-start w-1/4 flex-shrink-0 gap-1 text-[12px] text-third"
                  >
                    <div className=" h-2 w-2 rounded-full bg-blue-600"></div>
                    <h5>{tp}</h5>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="box-start gap-2">
              <WorldIcon />
              <h5 className="text-third">Hiển thị ở chế độ công khai</h5>
            </div>
            <div className="box-start gap-2 text-primary">
              <ShuffleIcon />
              <h5 className="text-third">Phát ngẫu nhiên</h5>
            </div>
            <div className="box-start gap-2 ">
              <RepeatIcon />
              <h5 className="text-third">Lặp lại</h5>
            </div>
          </div>
        </div>
        <div className="w-full">
          <TableCustom
            numberCol={12}
            data={dataExampleRecord}
            col={ConfigRecordColTale}
          />
        </div>
        <div className="w-fit flex-shrink-0 pl-4">
          <FloatingActionButton floatingActionButtonConfig={floatingAction} />
        </div>
      </div>
    </div>
  );
}

export default DetailPlaylist;
