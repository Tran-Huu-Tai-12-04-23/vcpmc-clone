import { useRouter } from '../../Routes/hooks';
import { DotMenuVerIcon, Logo } from '../../assets/icon';
import { navSidebarConfig } from './_config-layout';

function SideBar() {
    const route = useRouter();
    const active = -1;
    const renderSidebar = () => {
        return navSidebarConfig.map((nav, index) => (
            <div
                className={`relative group w-full flex justify-center flex-col items-center  ${
                    active === index ? 'text-primary' : 'text-white'
                }`}
                key={index}
            >
                {active === index && <div className="absolute left-0 w-[8px] rounded-[6px] bg-primary h-full"></div>}
                {nav.icon}
                <h6 className="text-inherit text-[14px]">{nav.name}</h6>
                {nav.subMenu && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2">
                        <DotMenuVerIcon />
                    </div>
                )}

                {nav.subMenu && (
                    <ul className="group-hover:block hidden absolute left-[100%] top-0  bg-menu overflow-hidden w-max rounded-r-lg">
                        {nav.subMenu.map((subNav, subIndex) => renderSubNav(subNav, subIndex))}
                    </ul>
                )}
            </div>
        ));
    };

    // Assuming renderSubNav is a separate function that returns JSX for sub-menu items
    const renderSubNav = (_subNav: { path: string; name: string }, _subIndex: number) => {
        return (
            <li className="list-none hover:bg-hover-menu h-full pt-2 pb-2 p-4 min-w-full text-[14px]" key={_subIndex}>
                {_subNav.name}
            </li>
        );
    };

    return (
        <div className="w-[170px] h-full rounded-r-[24px] flex flex-col items-center bg-sidebar">
            <div
                className="mt-[40px]"
                onClick={() => {
                    route.push('/');
                }}
            >
                <Logo width={96} height={96} />
            </div>

            <div className="w-full h-full flex flex-col justify-center items-center gap-[32px]">{renderSidebar()}</div>
        </div>
    );
}

export default SideBar;
