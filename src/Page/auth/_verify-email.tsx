import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Typography } from 'antd';
import { Button, Input } from '../../Component';
import { Logo } from '../../assets/icon';
import RouteConstant from '../../Constant/_route';

function Login() {
    const [isVerifyEmail, setIsVerifyEmail] = useState<Boolean>(false);

    const handleVerifyEmail = () => {
        setIsVerifyEmail(!isVerifyEmail);
    };
    return (
        <form className="flex flex-col gap-16 justify-center items-center">
            <Logo width={240} height={240} />
            <div className="flex flex-col justify-center items-center">
                <Typography.Title
                    style={{
                        color: 'white',
                        fontSize: '36px',
                        fontWeight: '700',
                    }}
                >
                    Khôi phục mật khẩu
                </Typography.Title>
                {!isVerifyEmail ? (
                    <>
                        <h6 className="font-normal text-white text-[16px] w-full mb-10 ">
                            Vui lòng nhập địa chỉ email đã đăng ký để yêu cầu khôi phục mật khẩu
                        </h6>
                        <div className="flex flex-col gap-8 items-center">
                            <Input height={48} width={600} label="Email" />
                            <Button onClick={handleVerifyEmail} typebtn="primary" sizetype="hug">
                                Xác nhận
                            </Button>
                        </div>
                    </>
                ) : (
                    <>
                        <h6 className="font-normal text-white text-size-primary w-full ">
                            Link khôi phục mật khẩu đã được gửi vào mail của bạn. Vui lòng kiểm tra mail.
                        </h6>
                        <h6 className="font-normal text-white text-size-primary w-full mb-10 ">
                            Click vào đường link được đính kèm trong mail để chuyển đến trang đặt lại mật khẩu.
                        </h6>
                    </>
                )}

                <Link
                    to={`/${RouteConstant.MAIN_ROUTE_AUTH}/${RouteConstant.LOGIN}`}
                    className="font-semibold mb-10 text-primary underline cursor-pointer hover:brightness-125 text-[16px] mt-[40%]"
                >
                    Quay lại đăng nhập
                </Link>
            </div>
        </form>
    );
}

export default Login;
