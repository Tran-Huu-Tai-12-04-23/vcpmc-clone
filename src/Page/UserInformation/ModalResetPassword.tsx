import { Modal, ModalProps } from 'antd';
import styled from 'styled-components';
import { Button, Input } from '../../Component';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, actionAuthenticate } from '../../State';
import { bindActionCreators } from '@reduxjs/toolkit';

const StyleModalCustom = styled(Modal)<ModalPropsCustom>`
    .ant-modal-header,
    .ant-modal-content {
        background: var(--bg-modal);
        width: max-content;
    }
    :where(.css-dev-only-do-not-override-gzal6t).ant-modal .ant-modal-close-x {
        display: none !important;
    }
    .ant-modal-footer {
        display: none !important;
    }
`;

interface ModalPropsCustom extends ModalProps {
    isOpen?: boolean;
    onOk: () => void;
    onCancel?: () => void;
    userId: string | undefined;
}

function ModalResetPassword(props: ModalPropsCustom) {
    const dispatch = useDispatch();
    const data = useSelector((state: RootState) => state.authenticate);
    const { resetPasswordByUserID } = bindActionCreators(actionAuthenticate, dispatch);

    const [currentPassword, setCurrentPassword] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [error, setError] = useState<string>('');

    const clear = () => {
        setCurrentPassword('');
        setPassword('');
        setConfirmPassword('');
        setError('');
    };

    const handleUpdatePassword = async () => {
        if (password === '' || confirmPassword === '' || currentPassword === '') {
            setError('Vui lòng nhập đầy đủ thông tin!');
            return;
        } else if (password !== confirmPassword) {
            setError('Xác nhận mật khẩu không khớp!');
            return;
        }
        if (!props.userId) return;

        await resetPasswordByUserID(props.userId, currentPassword, password);

        if (!data.loading && !data.error) {
            props.onOk();
            clear();
        }
    };

    useEffect(() => {
        if (data.error) setError(data.error);
    }, [data, props]);

    return (
        <StyleModalCustom
            {...props}
            open={props.isOpen}
            title=""
            onOk={props.onOk}
            closeIcon={null}
            cancelText={null}
            cancelButtonProps={undefined}
            onCancel={props.onCancel}
        >
            <div className="flex flex-col p-[2px] w-full gap-10 justify-center items-center">
                <h5 className="text-white text-[24px] font-[700]">Thay đổi mật khẩu</h5>
                <div className="flex flex-col p-[2px] w-full gap-5 justify-center items-center">
                    <Input
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        type="password"
                        height={48}
                        width={500}
                        label="Mật khẩu hiện tại"
                    />
                    <Input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        height={48}
                        width={500}
                        label="Mật khẩu mới"
                    />
                    <Input
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        type="password"
                        height={48}
                        width={500}
                        label="Nhập lại mật khẩu mới"
                    />
                </div>
                <h5 className="text-error text-[14px]">{error}</h5>
                <div className="w-full flex justify-center items-center gap-10">
                    <Button onClick={props.onCancel} typebtn="outline" sizetype="hug">
                        Hủy
                    </Button>
                    <Button onClick={handleUpdatePassword} typebtn="primary" sizetype="hug">
                        Lưu
                    </Button>
                </div>
            </div>
        </StyleModalCustom>
    );
}

export default ModalResetPassword;
