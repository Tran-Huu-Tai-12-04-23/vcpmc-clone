import {
  DatePicker,
  Input,
  Paging,
  TextHeader,
  TextLabel,
} from "../../../../Component";
import FloatingActionButton from "../../../../Component/UI/FloatingActionButton";
import TableCustom from "../../../../Component/UI/Table";
import { ExportIcon } from "../../../../assets/icon";
import { ConfigColListRecord, dataExampleListRecord } from "./_configTable";

const PagingItems = [
  {
    name: "Doanh thu",
  },
  {
    name: "Lịch sử đối soát",
  },
];
function DetailHistoryForControl() {
  const floatingAction = [
    {
      name: "Xuất dữ liệu",
      icon: <ExportIcon />,
      action: () => {},
    },
  ];
  return (
    <div className="w-full">
      <Paging items={PagingItems} />
      <TextHeader>
        Doanh thu theo hợp đồng - HĐ123 - Kỳ Tháng 03/2021
      </TextHeader>

      <div className="mt-4 flex h-fit w-full items-start justify-between gap-8">
        <div className="flex h-full w-[30%] flex-col justify-between gap-8">
          {/* info contract */}
          <div className="flex min-h-[32rem] w-full flex-col gap-6 rounded-xl bg-input p-4">
            <h5 className="text-[24px] font-semibold text-primary">
              Thông tin hợp đồng
            </h5>
            <div className="box-start">
              <TextLabel className="min-w-[250px]">Số hợp đồng:</TextLabel>
              <h5 className="text-third">HĐ123</h5>
            </div>
            <div className="box-start">
              <TextLabel className="min-w-[250px]">Đơn vị khai thác:</TextLabel>
              <h5 className="text-third">Công ty TNHH ABC</h5>
            </div>
            <div className="box-start">
              <TextLabel className="min-w-[250px]">Loại hợp đồng:</TextLabel>
              <h5 className="text-third">Trọn gói</h5>
            </div>
            <div className="box-start">
              <TextLabel className="min-w-[250px]">Hiệu lực từ:</TextLabel>
              <h5 className="text-third">01/01/2020</h5>
            </div>
            <div className="box-start">
              <TextLabel className="min-w-[250px]">Ngày hết hạn:</TextLabel>
              <h5 className="text-third">01/01/2022</h5>
            </div>
            <div className="box-start">
              <TextLabel className="min-w-[250px]">Giá trị hợp đồng:</TextLabel>
              <h5 className="text-third">730.000.000 VNĐ</h5>
            </div>
            <div className="box-start">
              <TextLabel className="min-w-[250px]">
                Giá trị phân phối theo ngày:
              </TextLabel>
              <h5 className="text-third">365.000.000 VNĐ</h5>
            </div>
          </div>

          {/* info for control  */}
          <div className="flex min-h-[30rem] w-full flex-col gap-6 rounded-xl bg-input p-4">
            <h5 className="text-[24px] font-semibold text-primary">
              Thông tin đối soát
            </h5>
            <div className="box-start">
              <TextLabel className="min-w-[250px]">Ký đối soát:</TextLabel>
              <h5 className="text-third">01/01/2020</h5>
            </div>
            <div className="box-start">
              <TextLabel className="min-w-[250px]">Số bài hát:</TextLabel>
              <h5 className="text-third">13 bài</h5>
            </div>
            <div className="box-start">
              <TextLabel className="min-w-[250px]">
                Tổng số lượt phát:
              </TextLabel>
              <h5 className="text-third">200.000 lượt</h5>
            </div>
            <div className="box-start">
              <TextLabel className="min-w-[250px]">Tổng doanh thu:</TextLabel>
              <h5 className="text-third">300.000.000 VNĐ</h5>
            </div>
            <div className="box-start">
              <TextLabel className="min-w-[250px]">
                Doanh thu chưa phân phối::
              </TextLabel>
              <h5 className="text-third">1.000.000 VNĐ</h5>
            </div>
            <div className="box-start">
              <TextLabel className="min-w-[250px]">
                Trạng thái đối soát:
              </TextLabel>
              <h5 className="text-third">Chưa đối soát</h5>
            </div>
          </div>
        </div>
        <div className="w-[70%]">
          <h5 className="text-[24px] font-semibold">Danh sách bản ghi</h5>

          <div className="mb-5 mt-4 flex items-center justify-between">
            <div className="box-start gap-4">
              <TextLabel>Xem theo ngày/tuần:</TextLabel>
              <DatePicker bordered width={200} />
            </div>
            <Input
              placeholder="Nhập tên bài hát"
              height={48}
              width={500}
              search
            />
          </div>

          <TableCustom
            numberCol={12}
            data={dataExampleListRecord}
            col={ConfigColListRecord}
          />
        </div>

        <div className="w-fit">
          <FloatingActionButton floatingActionButtonConfig={floatingAction} />
        </div>
      </div>
    </div>
  );
}

export default DetailHistoryForControl;
