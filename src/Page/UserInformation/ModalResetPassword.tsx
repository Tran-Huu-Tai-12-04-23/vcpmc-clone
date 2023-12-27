import { Modal, ModalProps } from 'antd';
import styled from 'styled-components';
import { Button, Input } from '../../Component';

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
    onOk?: () => void;
    onCancel?: () => void;
}

function ModalResetPassword(props: ModalPropsCustom) {
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
                    <Input type="password" height={48} width={500} label="Mật khẩu hiện tại" />
                    <Input type="password" height={48} width={500} label="Mật khẩu mới" />
                    <Input type="password" height={48} width={500} label="Nhập lại mật khẩu mới" />
                </div>
                <div className="w-full flex justify-center items-center gap-10">
                    <Button onClick={props.onCancel} typebtn="outline" sizetype="hug">
                        Hủy
                    </Button>
                    <Button onClick={props.onOk} typebtn="primary" sizetype="hug">
                        Lưu
                    </Button>
                </div>
            </div>
        </StyleModalCustom>
    );
}

export default ModalResetPassword;
