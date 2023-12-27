import { Link } from 'react-router-dom';
import { Button, Checkbox, Input } from '../../Component';
import { Logo } from '../../assets/icon';
import RouteConstant from '../../Constant/_route';
import { useEffect } from 'react';
import { actionAuthenticate } from '../../State';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { IAuthenticateInfo } from '../../Model/authenticateInfo.model';

function Login() {
    const dispatch = useDispatch();
    const { login } = bindActionCreators(actionAuthenticate, dispatch);
    const data = useSelector((state: any) => state.authenticate);

    useEffect(() => {
        login({
            username: 'huutai',
            password: 'huutai',
        });
    }, []);

    useEffect(() => {
        console.log(data);
    }, [data]);
    return (
        <form className="flex flex-col gap-16 justify-center items-center">
            <Logo width={240} height={240} />
            <div className="flex flex-col justify-center items-center gap-6">
                <h5 className="text-white text-size-header font-semibold">Đăng nhập</h5>
                <Input height={48} width={471} label="Tên đăng nhập" />
                <Input height={48} width={471} label="Mật khẩu" type="password" />
                <h6 className="font-normal text-[16px] text-error w-full ">Hãy nhập tài khoản và mật khẩu</h6>
                <div className="flex w-full justify-start items-center">
                    <Checkbox label="Ghi nhớ mật khẩu" />
                </div>
                <Button typebtn="primary" sizetype="hug">
                    Đăng nhập
                </Button>
            </div>

            <Link
                to={`/${RouteConstant.MAIN_ROUTE_AUTH}/${RouteConstant.VERIFY_EMAIL}`}
                className="font-semibold mb-10 text-primary underline cursor-pointer hover:brightness-125 text-[16px] mt-16"
            >
                Quên mật khẩu?
            </Link>
        </form>
    );
}

export default Login;
