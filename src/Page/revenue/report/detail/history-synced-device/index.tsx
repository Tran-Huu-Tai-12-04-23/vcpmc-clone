import { Input, Paging, TextHeader, TextLabel } from "../../../../../Component";
import FloatingActionButton from "../../../../../Component/UI/FloatingActionButton";
import TableCustom from "../../../../../Component/UI/Table";
import { ExportIcon } from "../../../../../assets/icon";
import {
  ConfigHistorySyncedDataCol,
  ConfigSongCol,
  dataExampleHistorySyncedData,
  dataExampleSong,
} from "./_configTable";

const PagingItems = [
  {
    name: "Doanh thu",
  },
  {
    name: "Lịch sử đối soát",
  },
  {
    name: "Báo cáo chi tiết",
  },
  {
    name: "Lịch sử đồng bộ thiết bị",
  },
];
function HistorySyncedDevice() {
  const floatingAction = [
    {
      name: "Xuất dữ liệu",
      icon: <ExportIcon />,
      action: () => {},
    },
  ];
  return (
    <div className="w-full ">
      <Paging items={PagingItems} />
      <TextHeader>Hợp đồng HD123 - Kỳ tháng 03/2021</TextHeader>

      <div className="mt-5 flex items-start justify-between gap-10">
        <div className="w-full">
          <h5 className="mb-4 text-[24px] font-semibold">Danh sách thiết bị</h5>
          <Input
            placeholder="Nhập tên thiết bị"
            height={48}
            width={500}
            search
          />

          <div className="box-start mt-4 gap-32">
            <div className="box-start gap-4">
              <TextLabel>Tổng thiết bị:</TextLabel>
              <h5 className="text-third">8 thiết bị</h5>
            </div>
            <div className="box-start gap-4">
              <TextLabel>Tổng lượt phát:</TextLabel>
              <h5 className="text-third">1784</h5>
            </div>
          </div>
          <div className="mt-5 flex w-full items-center justify-between gap-10">
            <div className="w-[60%] rounded-xl bg-input p-4">
              <TableCustom
                data={dataExampleHistorySyncedData}
                col={ConfigHistorySyncedDataCol}
              />
            </div>
            <div className="w-[40%] rounded-xl bg-input p-4">
              <TableCustom data={dataExampleSong} col={ConfigSongCol} />
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

export default HistorySyncedDevice;
