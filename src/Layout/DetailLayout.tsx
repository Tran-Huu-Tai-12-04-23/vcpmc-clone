import { Header } from "../Component";
import SideBar from "../Component/shared/SideBar";
type HomeProps = {
  children: React.ReactNode;
};

function DetailLayout(props: HomeProps) {
  return (
    <main className="main-app h-[100vh] w-[100vh] overflow-x-hidden text-white">
      <div className="flex h-full justify-start ">
        <SideBar floating />
        <div className="w-full pl-[70px]">
          <Header></Header>
          <div className="mt-header">{props.children}</div>
        </div>
      </div>
    </main>
  );
}

export default DetailLayout;
