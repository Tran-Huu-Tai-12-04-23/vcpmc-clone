import { Header } from '../Component';

type AuthLayoutProps = {
    children: React.ReactNode;
};

function AuthLayout(props: AuthLayoutProps) {
    return (
        <main className="main-app  w-[100vh] h-[100vh] overflow-x-hidden">
            <Header />
            <div className="flex mt-header justify-center items-center">{props.children}</div>
        </main>
    );
}

export default AuthLayout;
