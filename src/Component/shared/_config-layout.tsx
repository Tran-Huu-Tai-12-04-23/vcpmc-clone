import {
    StoreIcon,
    PlaylistIcon,
    CalenderIcon,
    ManagerIcon,
    RevenueIcon,
    SettingIcon,
    SupportIcon,
} from '../../assets/icon';
export const navSidebarConfig = [
    {
        path: '',
        name: 'Kho bản ghi',
        icon: <StoreIcon></StoreIcon>,
    },
    {
        path: '',
        name: 'Playlist',
        icon: <PlaylistIcon></PlaylistIcon>,
    },
    {
        path: '',
        name: 'Lập lịch phát',
        icon: <CalenderIcon></CalenderIcon>,
    },
    {
        path: '',
        name: 'Quản lý',
        icon: <ManagerIcon></ManagerIcon>,
        subMenu: [
            {
                path: '',
                name: 'Quản lý hợp đồng',
            },
            {
                path: '',
                name: 'Quản lý thiết bị',
            },
            {
                path: '',
                name: 'Đơn vị ủy quyền',
            },
            {
                path: '',
                name: 'Đơn vị sử dụng',
            },
        ],
    },
    {
        path: '',
        name: 'Doanh thu',
        icon: <RevenueIcon></RevenueIcon>,
        subMenu: [
            {
                path: '',
                name: 'Báo cáo doanh thu',
            },
            {
                path: '',
                name: 'Lịch sử dối soát',
            },
            {
                path: '',
                name: 'Phân phối doanh thu',
            },
        ],
    },
    {
        path: '',
        name: 'Cài đặt',
        icon: <SettingIcon></SettingIcon>,
        subMenu: [
            {
                path: '',
                name: 'Phân quyên người dùng',
            },
            {
                path: '',
                name: 'Cấu hình',
            },
            {
                path: '',
                name: 'Quản lý hợp đồng',
            },
            {
                path: '',
                name: 'Thông tin tác phẩm',
            },
            {
                path: '',
                name: 'Chu kỳ đối soát',
            },
        ],
    },
    {
        path: '',
        name: 'Hổ trợ',
        icon: <SupportIcon></SupportIcon>,
        subMenu: [
            {
                path: '',
                name: 'Hướng dẫn sử dụng',
            },
            {
                path: '',
                name: 'Tải app',
            },
            {
                path: '',
                name: 'Feedback',
            },
        ],
    },
];
