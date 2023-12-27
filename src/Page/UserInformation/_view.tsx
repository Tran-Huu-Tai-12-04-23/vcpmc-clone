import { useEffect, useState } from 'react';

import { Avatar, DatePickerProps } from 'antd';
import { CameraIcon, SuccessIcon } from '../../assets/icon';
import { Input, DatePicker, Button } from '../../Component';
import FloatingActionButton from '../../Component/UI/FloatingActionButton';
import { EditIcon, LockIcon, LogoutIcon } from '../../assets/icon';

import dayJs, { Dayjs } from 'dayjs';
import ModalResetPassword from './ModalResetPassword';
import { bindActionCreators } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';

import { RootState, actionAuthenticate, actionUserDetail } from '../../State';
import { IUserDetail } from '../../Model/userDetail.model';

const initUserDetail: IUserDetail = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    dateOfBirth: dayJs(new Date()),
    userId: '',
    id: '',
};
function View() {
    const dispatch = useDispatch();
    const userDetailState = useSelector((state: RootState) => state.userDetail);
    const user = useSelector((state: RootState) => state.authenticate.user);
    const data = userDetailState.userDetail ? userDetailState.userDetail : initUserDetail;
    const { logout } = bindActionCreators(actionAuthenticate, dispatch);
    const { loadUserDetail, updateUserDetail } = bindActionCreators(actionUserDetail, dispatch);

    const [isNotification, setIsNotification] = useState<boolean>(false);
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [isResetPassword, setIsResetPassword] = useState(false);

    // state user detail
    const [firstName, setFirstName] = useState<string>(data.firstName);
    const [lastName, setLastName] = useState<string>(data.lastName);
    const [phoneNumber, setPhoneNumber] = useState<string>(data.phoneNumber);
    const [dateOfBirth, setDateOfBirth] = useState<Dayjs>(data.dateOfBirth);

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
            action: () => {
                sessionStorage.clear();
                logout();
            },
        },
    ];

    const handleResetPassword = () => {
        setIsNotification(true);

        setTimeout(() => {
            setIsNotification(false);
        }, 8000);
    };

    const handleUpdateUserDetail = async () => {
        if (firstName === '' || lastName === '' || phoneNumber === '' || dateOfBirth === undefined) return;
        const newData = {
            ...data,
            firstName,
            lastName,
            dateOfBirth,
            phoneNumber,
        };

        await updateUserDetail(data.id, newData);

        if (userDetailState.error === undefined) setIsEdit(false);
    };

    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
        if (date) setDateOfBirth(date);
    };

    useEffect(() => {
        const fetchUserDetails = async (userId: string) => {
            await loadUserDetail(userId);
        };

        if (user && user.id) {
            fetchUserDetails(user.id);
        }
        // eslint-disable-next-line
    }, [user]);

    useEffect(() => {
        if (data) {
            setFirstName(data.firstName);
            setLastName(data.lastName);
            setPhoneNumber(data.phoneNumber);
            setDateOfBirth(dayJs(data.dateOfBirth));
        }
    }, [data]);

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
                        <Input
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            isEdit={!isEdit}
                            width={300}
                            height={48}
                            label="Họ:"
                        />
                        <Input
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            isEdit={!isEdit}
                            width={300}
                            height={48}
                            label="Tên:"
                        />
                    </div>
                    <div className="flex justify-start gap-8 ">
                        {isEdit ? (
                            <DatePicker
                                value={dateOfBirth}
                                width={278}
                                height={40}
                                label="Ngày sinh:"
                                onChange={onChange}
                            />
                        ) : (
                            <Input
                                readOnly={true}
                                value={dateOfBirth.format('YYYY-MM-DD')}
                                width={300}
                                height={48}
                                label="Ngày sinh:"
                            />
                        )}
                        <Input
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            value={phoneNumber}
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
                        value={data.email}
                        readOnly={true}
                        height={48}
                        label="Email:"
                    />
                    <Input
                        style={{
                            background: '#3E3E50',
                            color: '#878890',
                        }}
                        value={user?.username}
                        readOnly={true}
                        height={48}
                        label="Tên đăng nhập:"
                    />
                    <Input
                        style={{
                            background: '#3E3E50',
                            color: '#878890',
                        }}
                        value={data?.role}
                        readOnly={true}
                        height={48}
                        width={300}
                        label="Phân quyền:"
                    />

                    {isEdit && (
                        <div className="flex justify-center w-full mt-[90px] items-center gap-10">
                            <Button typebtn="outline" sizetype="hug" onClick={() => setIsEdit(!isEdit)}>
                                Hủy
                            </Button>
                            <Button onClick={handleUpdateUserDetail} typebtn="primary" sizetype="hug">
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
