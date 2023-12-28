import { Header } from '../Component';
import SideBar from '../Component/shared/SideBar';
type HomeProps = {
    children: React.ReactNode;
};

function HomeLayout(props: HomeProps) {
    return (
        <main className="main-app w-[100vh] text-white h-[100vh] overflow-x-hidden">
            <Header></Header>
            <div className="flex justify-start h-full ">
                <SideBar />
                <div className="mt-header pl-[70px]">{props.children}</div>
            </div>
        </main>
    );
}

export default HomeLayout;
