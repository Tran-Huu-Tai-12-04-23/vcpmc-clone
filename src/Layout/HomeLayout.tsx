import { Header } from "../Component";
import SideBar from "../Component/shared/SideBar";
type HomeProps = {
  children: React.ReactNode;
};

function HomeLayout(props: HomeProps) {
  return (
    <main className="main-app h-[100vh] w-[100vh] overflow-x-hidden text-white">
      <div className="flex h-full justify-start ">
        <SideBar />
        <div className="w-full pl-[70px]">
          <Header></Header>
          <div className="mt-header pb-20">{props.children}</div>
        </div>
      </div>
    </main>
  );
}

export default HomeLayout;
