import { useState } from 'react';
import styled from 'styled-components';
import { Dropdown, Button, MenuProps, message, Avatar } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { ViLanguageIcon } from '../../assets/icon';
import { useRouter } from '../../Routes/hooks';
import RouteConstant from '../../Constant/_route';

const handleMenuClick: MenuProps['onClick'] = (e) => {
    message.info('Click on menu item.');
    console.log('click', e);
};

const items: MenuProps['items'] = [
    {
        label: 'Tiếng việt',
        key: '1',
        icon: <ViLanguageIcon />,
    },
    {
        label: 'Tiếng anh',
        key: '2',
        icon: <ViLanguageIcon />,
    },
];

const menuProps = {
    items,
    onClick: handleMenuClick,
};

const StyledHeader = styled.header`
    background-color: transparent;
    color: white;
    padding-top: 24px;
    padding-bottom: 24px;
    display: flex;
    padding-right: 128px;
    justify-content: end;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 20px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
`;
const StyledDropDown = styled(Dropdown)`
    border-color: white;
    color: white;
    float: right;
    background-color: transparent;
    border-radius: 4px;
    font-size: 14px;
    height: 40px;
    width: 150px;

    .ant-dropdown-menu-item {
        background-color: #30303f !important;
    }
`;

function Header() {
    const route = useRouter();
    // eslint-disable-next-line
    const [isVN, setIsVN] = useState<boolean>(true);
    const isAuthenticated = true;

    return (
        <StyledHeader>
            <StyledDropDown menu={menuProps}>
                <Button>
                    <div className="space">
                        {isVN ? 'Tiếng việt' : 'Tiếng anh'}
                        <ViLanguageIcon />
                        <DownOutlined />
                    </div>
                </Button>
            </StyledDropDown>
            {isAuthenticated && (
                <div
                    onClick={() => {
                        route.push(RouteConstant.USER);
                    }}
                    className="flex justify-center items-center gap-2 "
                >
                    <Avatar
                        style={{
                            width: 40,
                            height: 40,
                        }}
                        src={
                            'https://static.vecteezy.com/system/resources/previews/009/292/244/original/default-avatar-icon-of-social-media-user-vector.jpg'
                        }
                    ></Avatar>
                    <div>
                        <h6 className="text-size-primary font-semibold">User</h6>
                        <h6 className="text-[14px] font-[500] text-[#B65100]">Admin</h6>
                    </div>
                </div>
            )}
        </StyledHeader>
    );
}

export default Header;
