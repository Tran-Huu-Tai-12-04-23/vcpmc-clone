import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Avatar } from 'antd';
import { CameraIcon, SuccessIcon } from '../../assets/icon';
import { Input, DatePicker, Button } from '../../Component';
import FloatingActionButton from '../../Component/UI/FloatingActionButton';
import { EditIcon, LockIcon, LogoutIcon } from '../../assets/icon';

import dayjs from 'dayjs';
import ModalResetPassword from './ModalResetPassword';

function View() {
    const user = {
        firstName: 'Tran',
        lastName: 'Tai',
        phoneNumber: '+84376100XXX',
        dateOfBirth: '12/04/2003',
        email: 'huutaiXX@gmail.com',
        username: 'xxxxtaik2300',
        role: 'ADMIN',
    };

    const [isNotification, setIsNotification] = useState<boolean>(false);
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [isResetPassword, setIsResetPassword] = useState(false);

    const showModalResetPassword = () => {
        setIsResetPassword(!isResetPassword);
    };

    const floatingActionButtonConfig = [
        {
            name: 'Sửa thông tin',
            icon: <EditIcon />,
            action: () => {
                setIsEdit(!isEdit);
            },
        },
        {
            name: 'Đổi mật khẩu',
            icon: <LockIcon />,
            action: () => {
                showModalResetPassword();
            },
        },
        {
            name: 'Đăng xuất',
            icon: <LogoutIcon />,
            action: () => {},
        },
    ];

    const handleResetPassword = () => {
        setIsNotification(true);

        setTimeout(() => {
            setIsNotification(false);
        }, 8000);
    };

    return (
        <div className="mt-header  pl-[38px]">
            <h5 className="text-white text-size-header font-semibold">Thông tin cơ bản</h5>

            <div className="flex justify-start mt-[62px] ml-[32px]">
                <div className="mr-24 w-[270px]">
                    <div className="relative">
                        <Avatar
                            style={{
                                width: 270,
                                height: 270,
                            }}
                            src={
                                'https://static.vecteezy.com/system/resources/previews/009/292/244/original/default-avatar-icon-of-social-media-user-vector.jpg'
                            }
                        ></Avatar>
                        <CameraIcon className="absolute bottom-2 right-12" />
                    </div>
                    <h6 className="text-[20px] font-semibold mt-2 text-center">User</h6>
                </div>
                <form className="flex items-start flex-col gap-10 ">
                    <div className="flex justify-start gap-8">
                        <Input value={user.firstName} isEdit={!isEdit} width={300} height={48} label="Họ:" />
                        <Input value={user.lastName} isEdit={!isEdit} width={300} height={48} label="Tên:" />
                    </div>
                    <div className="flex justify-start gap-8 ">
                        {isEdit ? (
                            <DatePicker
                                value={dayjs(new Date(user.dateOfBirth))}
                                width={278}
                                height={40}
                                label="Ngày sinh:"
                            />
                        ) : (
                            <Input value={user.dateOfBirth} width={300} height={48} label="Ngày sinh:" />
                        )}
                        <Input
                            value={user.phoneNumber}
                            isEdit={!isEdit}
                            width={300}
                            height={48}
                            label="Số điện thoại:"
                        />
                    </div>

                    <Input
                        style={{
                            background: '#3E3E50',
                            color: '#878890',
                        }}
                        value={user.email}
                        readOnly={true}
                        height={48}
                        label="Email:"
                    />
                    <Input
                        style={{
                            background: '#3E3E50',
                            color: '#878890',
                        }}
                        value={user.username}
                        readOnly={true}
                        height={48}
                        label="Tên đăng nhập:"
                    />
                    <Input
                        style={{
                            background: '#3E3E50',
                            color: '#878890',
                        }}
                        value={user.role}
                        readOnly={true}
                        height={48}
                        width={300}
                        label="Phân quyền:"
                    />

                    {isEdit && (
                        <div className="flex justify-center w-full mt-[90px] items-center gap-10">
                            <Button typebtn="outline" sizeType="hug" onClick={() => setIsEdit(!isEdit)}>
                                Hủy
                            </Button>
                            <Button typebtn="primary" sizeType="hug">
                                Lưu
                            </Button>
                        </div>
                    )}
                </form>
            </div>

            <FloatingActionButton floatingActionButtonConfig={floatingActionButtonConfig} />
            <ModalResetPassword
                centered
                onOk={handleResetPassword}
                isOpen={isResetPassword}
                onCancel={() => setIsResetPassword((prevState) => !prevState)}
            />

            {isNotification && (
                <div className="fixed z-[200000] transition-all flex justify-center items-center bg-toast bottom-10 left-1/2 -translate-x-1/2 w-[] pl-[24px] pr-[24px] pt-[16px] pb-[16px] rounded-[12px]">
                    <SuccessIcon />
                    <h6 className="text-[18px] ml-[16px] font-medium">Đổi mật khẩu thành công!</h6>
                </div>
            )}
        </div>
    );
}

export default View;
