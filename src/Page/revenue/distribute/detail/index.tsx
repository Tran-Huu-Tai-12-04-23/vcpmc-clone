import { Input, Paging, TextHeader } from "../../../../Component";
import FloatingActionButton from "../../../../Component/UI/FloatingActionButton";
import TableCustom from "../../../../Component/UI/Table";
import { ExportIcon } from "../../../../assets/icon";
import { dataExampleRevenue } from "../../distribute/_configTable";
import {
  ConfigMissPhone,
  ConfigRevenueColTale,
  dataExampleMissPhone,
} from "./_configTable";

const PagingItems = [
  {
    name: "Doanh thu",
  },
  {
    name: "Phân phối doanh thu",
  },
  {
    name: "Chi tiết doanh thu",
  },
];

function DetailDistributeRevenue() {
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
      <TextHeader>Hợp đồng Ủy quyền UQ123 - Quý 1</TextHeader>

      <div className="mt-4 flex items-start justify-between gap-10">
        <div className="w-[60%]">
          <h5 className="text-[24px] font-semibold">Danh sách bản ghi</h5>
          <Input
            placeholder="Nhập tên bài hát"
            height={48}
            width={500}
            search
          />

          <div className="mt-4 w-full">
            <TableCustom
              numberCol={11}
              data={dataExampleRevenue}
              col={ConfigRevenueColTale}
            />
          </div>
        </div>
        <div className="w-[40%]">
          <h5 className="text-[24px] font-semibold">Doanh thu bản ghi</h5>
          <h5 className="text-[24px] font-semibold text-second">
            Cuộc gọi nhỡ
          </h5>

          <div className="mt-8 w-full">
            <TableCustom
              numberCol={13}
              data={dataExampleMissPhone}
              col={ConfigMissPhone}
              hiddenFooter
            />
          </div>
        </div>
        <div className="w-fit">
          <FloatingActionButton floatingActionButtonConfig={floatingAction} />
        </div>
      </div>
    </div>
  );
}

export default DetailDistributeRevenue;
