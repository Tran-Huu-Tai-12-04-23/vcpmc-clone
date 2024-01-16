import { ColumnsType } from "antd/es/table";
import dayjs, { Dayjs } from "dayjs";
import { Switch } from "antd";
import { Link } from "react-router-dom";

type GenreSongDataType = {
  id: string;
  index: number;
  genre: string;
  description: string;
};
export const ConfigGenreSongColTable: ColumnsType<GenreSongDataType> = [
  {
    title: "STT",
    dataIndex: "index",
    key: "index",
  },
  {
    title: "Tên thể loại",
    dataIndex: "genre",
    key: "genre",
  },
  {
    title: "Mô tả",
    dataIndex: "description",
    key: "description",
  },
];
export const dataGenreSong = [
  {
    id: "1",
    index: 1,
    genre: "Pop",
    description:
      "Nhạc pop là một thể loại của nhạc đương đại và rất phổ biến trong làng nhạc đại chúng.",
  },
  {
    id: "2",
    index: 2,
    genre: "Bolero",
    description:
      "Quay về với một thời hoa bướm đầy mơ mộng khi nghe các tuyệt phẩm nhạc bolero trữ tình này.",
  },
  {
    id: "3",
    index: 3,
    genre: "Ballad",
    description:
      "Ballad là dòng nhạc nhẹ nhàng, trữ tình bắt nguồn từ dòng nhạc country và folk vì giai điệu chậm, thong thả. ",
  },
  {
    id: "4",
    index: 4,
    genre: "Lofi",
    description:
      "Lo-fi là một thể loại nhạc trong đó có chứa các yếu tố không hoàn hảo trong quá trình ghi âm và trình diễn. ",
  },
  {
    id: "5",
    index: 5,
    genre: "Blues",
    description:
      "Nhạc Blues có nguồn gốc từ những điệu hát của miền tây Phi Châu được các nô lệ da đen mang sang Bắc Mỹ. ",
  },
  {
    id: "6",
    index: 6,
    genre: "Country",
    description:
      "'Nhạc đồng quê' là một thể loại nhạc pha trộn truyền thống được tìm thấy phổ biến ở Mỹ và Canada.",
  },
  {
    id: "7",
    index: 7,
    genre: "Jazz",
    description:
      "Jazz là một thể loại âm nhạc bắt nguồn từ cộng đồng người châu Phi ở Hoa Kỳ vào cuối thế kỷ 19 và đầu thế kỷ 20.",
  },
  {
    id: "8",
    index: 8,
    genre: "Rock",
    description: `Rock là một thể loại âm nhạc quần chúng được bắt nguồn từ cách gọi ngắn gọn của cụm từ "rock and roll" vào những năm 1950 ở Mỹ.`,
  },
];
