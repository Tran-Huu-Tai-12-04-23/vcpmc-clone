import { Link } from 'react-router-dom';

import { Button } from '../../Component';
import { Logo } from '../../assets/icon';
import RouteConstant from '../../Constant/_route';

function LinkError() {
    return (
        <form className="max-w-[600px] flex flex-col gap-8 justify-center items-center">
            <Logo width={240} height={240} />
            <h4 className="text-error font-semibold text-size-header">Không thể kết nối!!</h4>
            <h6 className="font-normal text-white text-size-primary w-full ">
                Dường như đã có chút trục trặc hoặc link này đã hết hạn. Vui lòng thử lại hoặc yêu cầu gửi lại link để
                đặt lại mật khẩu của bạn.
            </h6>
            <div className="flex flex-col justify-center items-center gap-6">
                <Button typebtn="outline" sizeType="hug">
                    Yêu cầu gửi lại link
                </Button>
            </div>

            <Link
                to={`${RouteConstant.MAIN_ROUTE_AUTH}/${RouteConstant.LOGIN}`}
                className="font-semibold mb-10 text-primary underline cursor-pointer hover:brightness-125 text-[16px] mt-[40%]"
            >
                Quay lại đăng nhập
            </Link>
        </form>
    );
}

export default LinkError;
