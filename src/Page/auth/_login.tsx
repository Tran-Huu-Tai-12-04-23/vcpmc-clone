import { Link } from "react-router-dom";
import { Button, Checkbox, Input } from "../../Component";
import { Logo } from "../../assets/icon";
import { useEffect, useState } from "react";
import { actionAuthenticate, RootState } from "../../State";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { IUser } from "../../Model/user.model";
import PathUrl from "../../Routes/path-url";

function Login() {
  const dispatch = useDispatch();
  const { login } = bindActionCreators(actionAuthenticate, dispatch);
  const data = useSelector((state: RootState) => state.authenticate);
  //
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isRememberLogin, setIsRememberLogin] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleLogin = async () => {
    const user: IUser = {
      username,
      password,
    };
    if (user.username === "" || user.password === "") {
      setError("Hãy nhập tài khoản và mật khẩu!");
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
    <form className="flex flex-col items-center justify-center gap-16">
      <Logo width={240} height={240} />
      <div className="flex flex-col items-center justify-center gap-6">
        <h5 className="text-size-header font-semibold text-white">Đăng nhập</h5>
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
        <h6 className="w-full text-[16px] font-normal text-error ">{error}</h6>
        <div className="flex w-full items-center justify-start">
          <Checkbox
            value={isRememberLogin}
            onChange={(e) => setIsRememberLogin(e.target.checked)}
            label="Ghi nhớ mật khẩu"
          />
        </div>
        <Button
          onClick={handleLogin}
          loading={data.loading}
          typebtn="primary"
          sizetype="hug"
        >
          Đăng nhập
        </Button>
      </div>

      <Link
        to={`/${PathUrl.URL_AUTH}/${PathUrl.VERIFY_EMAIL}`}
        className="mb-10 mt-16 cursor-pointer text-[16px] font-semibold text-primary underline hover:brightness-125"
      >
        Quên mật khẩu?
      </Link>
    </form>
  );
}

export default Login;
