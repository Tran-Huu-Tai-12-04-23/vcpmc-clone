import { Typography } from 'antd';
import { Button, Input } from '../../Component';
import { Logo } from '../../assets/icon';

function ResetPassword() {
    return (
        <form className="flex flex-col gap-16 justify-center items-center">
            <Logo width={240} height={240} />
            <div className="flex flex-col justify-center items-center gap-6">
                <Typography.Title
                    style={{
                        color: 'white',
                        fontSize: '36px',
                        fontWeight: '700',
                    }}
                >
                    Đặt lại mật khẩu
                </Typography.Title>
                <Input height={48} width={471} label="Mật khẩu mới" isPassword={true} />
                <Input height={48} width={471} label="Nhập lại mật khẩu mới" isPassword={true} />
                {/* <a className="font-normal text-[16px] text-error w-full ">Hãy nhập tài khoản và mật khẩu</a> */}
                <Button typebtn="primary" sizeType="hug">
                    Lưu mật khẩu
                </Button>
            </div>
        </form>
    );
}

export default ResetPassword;
