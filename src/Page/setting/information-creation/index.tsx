import { useState } from "react";
import { Button, Paging, TextHeader } from "../../../Component";
import FloatingActionButton from "../../../Component/UI/FloatingActionButton";
import TableCustom from "../../../Component/UI/Table";
import { AddIcon, EditIcon } from "../../../assets/icon";
import TableEdit from "./_configEditTable";
import { ConfigGenreSongColTable, dataGenreSong } from "./_configTable";
const PagingItems = [
  {
    name: "Trang chủ",
  },
  {
    name: "Cài đặt hệ thống",
  },
];
export type GenreSongDataType = {
  key: React.Key;
  id: string;
  index: number;
  genre: string;
  description: string;
  isNewRow?: boolean;
};
function InformationCreation() {
  const [isEdit, setIsEdit] = useState(false);
  const [isAdd, setIsAdd] = useState(false);

  const [dataSource, setDataSource] = useState<GenreSongDataType[]>([
    {
      key: 1,
      id: "1",
      index: 1,
      genre: "Pop",
      description:
        "Nhạc pop là một thể loại của nhạc đương đại và rất phổ biến trong làng nhạc đại chúng.",
    },
    {
      key: 2,
      id: "2",
      index: 2,
      genre: "Bolero",
      description:
        "Quay về với một thời hoa bướm đầy mơ mộng khi nghe các tuyệt phẩm nhạc bolero trữ tình này.",
    },
    {
      key: 3,
      id: "3",
      index: 3,
      genre: "Ballad",
      description:
        "Ballad là dòng nhạc nhẹ nhàng, trữ tình bắt nguồn từ dòng nhạc country và folk vì giai điệu chậm, thong thả. ",
    },
    {
      key: 4,
      id: "4",
      index: 4,
      genre: "Lofi",
      description:
        "Lo-fi là một thể loại nhạc trong đó có chứa các yếu tố không hoàn hảo trong quá trình ghi âm và trình diễn. ",
    },
    {
      key: 5,
      id: "5",
      index: 5,
      genre: "Blues",
      description:
        "Nhạc Blues có nguồn gốc từ những điệu hát của miền tây Phi Châu được các nô lệ da đen mang sang Bắc Mỹ. ",
    },
    {
      key: 6,
      id: "6",
      index: 6,
      genre: "Country",
      description:
        "'Nhạc đồng quê' là một thể loại nhạc pha trộn truyền thống được tìm thấy phổ biến ở Mỹ và Canada.",
    },
    {
      key: 7,
      id: "7",
      index: 7,
      genre: "Jazz",
      description:
        "Jazz là một thể loại âm nhạc bắt nguồn từ cộng đồng người châu Phi ở Hoa Kỳ vào cuối thế kỷ 19 và đầu thế kỷ 20.",
    },
    {
      key: 8,
      id: "8",
      index: 8,
      genre: "Rock",
      description: `Rock là một thể loại âm nhạc quần chúng được bắt nguồn từ cách gọi ngắn gọn của cụm từ "rock and roll" vào những năm 1950 ở Mỹ.`,
    },
  ]);
  const [prevDataSource, setPrevDataSource] =
    useState<GenreSongDataType[]>(dataSource);
  const [count, setCount] = useState(dataSource.length);
  const handleAdd = () => {
    const newData: GenreSongDataType = {
      key: count + 1,
      id: count + 1 + "",
      index: count + 1,
      genre: "",
      description: "",
      isNewRow: true,
    };
    setDataSource([...dataSource, newData]);
    setCount(count + 1);
  };
  const handleSaveEdit = (row: GenreSongDataType) => {
    const newData = [...dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    setDataSource(newData);
  };

  const handleSaveAddRow = () => {
    setDataSource((prev) =>
      prev.map((da) => {
        return {
          ...da,
          isNewRow: false,
        };
      }),
    );
    setDataSource((prev) =>
      prev.filter((da) => da.key !== "" && da.description !== ""),
    );
  };

  const floatingButtons = [
    !isEdit
      ? {
          name: "Chỉnh sửa",
          icon: <EditIcon />,
          action: () => {
            setIsEdit(true);
            setIsAdd(false);
          },
        }
      : {
          name: "Thêm mới",
          icon: <AddIcon />,
          action: () => {
            setIsAdd(true);
            setIsEdit(false);
            handleAdd();
          },
        },
  ];
  return (
    <div className="w-full">
      <Paging items={PagingItems} />
      <TextHeader>Thông tin tác phẩm</TextHeader>
      <h5 className="mt-6 text-[24px] font-semibold">Thể loại tác phẩm</h5>
      <div className="mt-5 flex items-start justify-between gap-10">
        <div className="w-full">
          {/* <TableCustom data={dataGenreSong} col={ConfigGenreSongColTable} /> */}
          <TableEdit
            onSaveEdit={handleSaveEdit}
            dataSource={dataSource}
            isEdit={isAdd === true || isEdit === true}
            onAddRow={handleAdd}
          />
        </div>
        <div className="w-fit">
          <FloatingActionButton
            floatingActionButtonConfig={isAdd ? [] : floatingButtons}
          />
        </div>
      </div>

      {(isEdit || isAdd) && (
        <div className="center-item mt-24 gap-10">
          <Button
            typebtn="outline"
            sizetype="hug"
            onClick={() => {
              setDataSource(prevDataSource);
              if (isEdit) {
                setIsEdit(false);
              }
              if (isAdd) {
                setIsAdd(false);
              }
            }}
          >
            Hủy
          </Button>
          <Button
            onClick={() => {
              setPrevDataSource(dataSource);
              if (isEdit) {
                setIsEdit(false);
              }
              if (isAdd) {
                handleSaveAddRow();
                setIsAdd(false);
              }
            }}
            typebtn="primary"
            sizetype="hug"
          >
            Lưu
          </Button>
        </div>
      )}
    </div>
  );
}

export default InformationCreation;
