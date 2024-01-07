import PathUrl from "../../Routes/path-url";
import {
  StoreIcon,
  CalenderIcon,
  ManagerIcon,
  RevenueIcon,
  SettingIcon,
  SupportIcon,
  PlaylistPlayIcon,
} from "../../assets/icon";
export const navSidebarConfig = [
  {
    path: PathUrl.URL_STORE_RECORD,
    name: "Kho bản ghi",
    icon: <StoreIcon />,
  },
  {
    path: PathUrl.URL_PLAYLIST,
    name: "Playlist",
    icon: <PlaylistPlayIcon />,
  },
  {
    path: PathUrl.URL_SCHEDULE,
    name: "Lập lịch phát",
    icon: <CalenderIcon />,
  },
  {
    path: "",
    name: "Quản lý",
    icon: <ManagerIcon />,
    subMenu: [
      {
        path: PathUrl.URL_MANAGER + "/" + PathUrl.MANAGER_CONTRACT,
        name: "Quản lý hợp đồng",
      },
      {
        path: PathUrl.URL_MANAGER + "/" + PathUrl.MANAGER_DEVICES,
        name: "Quản lý thiết bị",
      },
      {
        path: PathUrl.URL_MANAGER + "/" + PathUrl.MANAGER_AUTHORITY,
        name: "Đơn vị ủy quyền",
      },
      {
        path: PathUrl.URL_MANAGER + "/" + PathUrl.MANAGER_UNIT_USED,
        name: "Đơn vị sử dụng",
      },
    ],
  },
  {
    path: "",
    name: "Doanh thu",
    icon: <RevenueIcon />,
    subMenu: [
      {
        path: PathUrl.URL_REVENUE + "/" + PathUrl.REVENUE_REPORT,
        name: "Báo cáo doanh thu",
      },
      {
        path: PathUrl.URL_REVENUE + "/" + PathUrl.REVENUE_HISTORY_FOR_CONTROL,
        name: "Lịch sử dối soát",
      },
      {
        path: PathUrl.URL_REVENUE + "/" + PathUrl.REVENUE_DISTRIBUTION,
        name: "Phân phối doanh thu",
      },
    ],
  },
  {
    path: "",
    name: "Cài đặt",
    icon: <SettingIcon />,
    subMenu: [
      {
        path: PathUrl.URL_SETTING + "/" + PathUrl.SETTING_USER_AUTHORIZATION,
        name: "Phân quyên người dùng",
      },
      {
        path: PathUrl.URL_SETTING + "/" + PathUrl.SETTING_CONFIG,
        name: "Cấu hình",
      },
      {
        path: PathUrl.URL_SETTING + "/" + PathUrl.MANAGER_CONTRACT,
        name: "Quản lý hợp đồng",
      },
      {
        path: PathUrl.URL_SETTING + "/" + PathUrl.SETTING_INFORMATION_CREATION,
        name: "Thông tin tác phẩm",
      },
      {
        path: PathUrl.URL_SETTING + "/" + PathUrl.SETTING_CONTROL_CYCLE,
        name: "Chu kỳ đối soát",
      },
    ],
  },
  {
    path: "",
    name: "Hổ trợ",
    icon: <SupportIcon />,
    subMenu: [
      {
        path: PathUrl.URL_SUPPORT + "/" + PathUrl.SUPPORT_APP_GUIDE,
        name: "Hướng dẫn sử dụng",
      },
      {
        path: PathUrl.URL_SUPPORT + "/" + PathUrl.SUPPORT_DOWNLOAD_APP,
        name: "Tải app",
      },
      {
        path: PathUrl.URL_SUPPORT + "/" + PathUrl.SUPPORT_FEEDBACK,
        name: "Feedback",
      },
    ],
  },
];
