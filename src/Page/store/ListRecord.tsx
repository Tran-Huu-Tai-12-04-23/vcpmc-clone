import { useSelector } from "react-redux";
import TableCustom from "../../Component/UI/Table";
import { IRecord } from "../../Model/record.model";
import { RootState } from "../../State";
import { ConfigRecordColTale } from "./_configTable";

type ListRecordProps = {
  dataSource: IRecord[];
};
function ListRecord(props: ListRecordProps) {
  const records = useSelector((state: RootState) => state.records);

  return (
    <TableCustom
      data={props.dataSource}
      col={ConfigRecordColTale}
      loading={records.loading}
    ></TableCustom>
  );
}

export default ListRecord;
