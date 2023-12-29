import { Header } from "../Component";

type AuthLayoutProps = {
  children: React.ReactNode;
};

function AuthLayout(props: AuthLayoutProps) {
  return (
    <main className="main-app flex h-[100vh] w-[100vh] flex-col overflow-x-hidden">
      <Header />
      {props.children}
    </main>
  );
}

export default AuthLayout;
