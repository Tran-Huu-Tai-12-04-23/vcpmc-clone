import { Link } from 'react-router-dom';
import { Button, Checkbox, Input } from '../../Component';
import { Logo } from '../../assets/icon';
import { useEffect, useState } from 'react';
import { actionAuthenticate, RootState } from '../../State';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { IUser } from '../../Model/user.model';
import PathUrl from '../../Routes/path-url';

function Login() {
    const dispatch = useDispatch();
    const { login } = bindActionCreators(actionAuthenticate, dispatch);
    const data = useSelector((state: RootState) => state.authenticate);
    //
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isRememberLogin, setIsRememberLogin] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const handleLogin = async () => {
        const user: IUser = {
            username,
            password,
        };
        if (user.username === '' || user.password === '') {
            setError('Hãy nhập tài khoản và mật khẩu!');
            return;
        }
        await login(user, isRememberLogin);
    };

    useEffect(() => {
        if (data.error) {
            setError(data.error);
        }
    }, [data]);

    return (
        <form className="flex flex-col gap-16 justify-center items-center">
            <Logo width={240} height={240} />
            <div className="flex flex-col justify-center items-center gap-6">
                <h5 className="text-white text-size-header font-semibold">Đăng nhập</h5>
                <Input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    height={48}
                    width={471}
                    label="Tên đăng nhập"
                />
                <Input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    height={48}
                    width={471}
                    label="Mật khẩu"
                    type="password"
                />
                <h6 className="font-normal text-[16px] text-error w-full ">{error}</h6>
                <div className="flex w-full justify-start items-center">
                    <Checkbox
                        value={isRememberLogin}
                        onChange={(e) => setIsRememberLogin(e.target.checked)}
                        label="Ghi nhớ mật khẩu"
                    />
                </div>
                <Button onClick={handleLogin} loading={data.loading} typebtn="primary" sizetype="hug">
                    Đăng nhập
                </Button>
            </div>

            <Link
                to={`/${PathUrl.URL_AUTH}/${PathUrl.VERIFY_EMAIL}`}
                className="font-semibold mb-10 text-primary underline cursor-pointer hover:brightness-125 text-[16px] mt-16"
            >
                Quên mật khẩu?
            </Link>
        </form>
    );
}

export default Login;
