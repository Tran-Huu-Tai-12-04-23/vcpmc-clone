import TableCustom from "../../../Component/UI/Table";
import { ConfigRecordColTale, dataExample } from "./_configTable";

function ListRecord() {
  return (
    <TableCustom data={dataExample} col={ConfigRecordColTale}></TableCustom>
  );
}

export default ListRecord;
