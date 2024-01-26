import { Row, Col, Pagination } from "antd";
import { CardRecord } from "../../Component";
import { dataExample } from "./_configTable";
import { useEffect, useState } from "react";
import { IRecord } from "../../Model/record.model";

type ListCardRecordProps = {
  dataSource: IRecord[];
  selected?: boolean;
  onSelect?: (val: any) => void;
  onSelectAll?: (val: any) => void;
  onUnSelect?: (val: any) => void;
  selectedItems?: IRecord[];
  size?: number;
  setDataShow?: (val: IRecord[]) => void;
};

function ListCardRecord(props: ListCardRecordProps) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const size = props.size ? props.size : 12;

  useEffect(() => {
    props.setDataShow &&
      props.setDataShow(
        props.dataSource.slice((currentPage - 1) * size, size * currentPage),
      );
  }, [currentPage]);

  return (
    <div className="w-full pb-20">
      <Row gutter={[50, 25]}>
        {props.dataSource
          .slice((currentPage - 1) * size, size * currentPage)
          .map((record, index) => {
            const item =
              props.selectedItems &&
              props.selectedItems.find((it: any) => {
                return it.id === record.id;
              });
            const checked = item != null;
            return (
              <Col key={index} className="gutter-row" span={6}>
                <CardRecord
                  onChange={(e) => {
                    if (e.target.checked) {
                      props.onSelect && props.onSelect(record);
                    } else {
                      props.onUnSelect && props.onUnSelect(record);
                    }
                  }}
                  data={record}
                  selected={checked}
                  selectMode={props.selected}
                />
              </Col>
            );
          })}
      </Row>
      <div className="mt-5 flex items-center justify-between bg-transparent pt-4">
        <div className="box-start gap-2 text-[#b9b9c4]">
          <h5> Hien thi</h5>
          <h5 className="border-type-primary center-item h-[32px] w-[50px]  rounded-[4px] text-white">
            {size}
          </h5>
          <h5> hang trong moi hang</h5>
        </div>
        <Pagination
          onChange={(page, pageSize) => {
            setCurrentPage(page);
          }}
          defaultCurrent={currentPage}
          total={dataExample.length}
          pageSize={size}
          defaultPageSize={undefined}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
}

export default ListCardRecord;
