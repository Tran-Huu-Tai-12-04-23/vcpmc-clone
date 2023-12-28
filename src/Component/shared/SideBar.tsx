import { useEffect, useState } from 'react';
import { usePathname, useRouter } from '../../Routes/hooks';
import { DotMenuVerIcon, Logo } from '../../assets/icon';
import { navSidebarConfig } from './_config-layout';
import PathUrl from '../../Routes/path-url';

function SideBar() {
    const route = useRouter();
    const pathname = usePathname();
    const [active, setActive] = useState<number>(-1);

    const renderSidebar = () => {
        return navSidebarConfig.map((nav, index) => (
            <div
                className={`relative group w-full flex justify-center flex-col items-center  ${
                    active === index ? 'text-primary' : 'text-white'
                }`}
                key={index}
                onClick={() => {
                    if (!nav.subMenu) {
                        route.push(nav.path);
                    }
                }}
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
            <li
                onClick={() => route.push(_subNav.path)}
                className="list-none text-white hover:bg-hover-menu h-full pt-2 pb-2 p-4 min-w-full text-[14px]"
                key={_subIndex}
            >
                {_subNav.name}
            </li>
        );
    };

    useEffect(() => {
        if (pathname.includes(PathUrl.URL_USER) || pathname.includes(PathUrl.URL_AUTH)) {
            setActive(-1);
        } else if (pathname.includes(PathUrl.URL_STORE_RECORD)) {
            setActive(0);
        } else if (pathname.includes(PathUrl.URL_PLAYLIST)) {
            setActive(1);
        } else if (pathname.includes(PathUrl.URL_SCHEDULE)) {
            setActive(2);
        } else if (pathname.includes(PathUrl.URL_MANAGER)) {
            setActive(3);
        } else if (pathname.includes(PathUrl.URL_REVENUE)) {
            setActive(4);
        } else if (pathname.includes(PathUrl.URL_SETTING)) {
            setActive(5);
        } else if (pathname.includes(PathUrl.URL_SUPPORT)) {
            setActive(6);
        }
    }, [pathname]);

    return (
        <div className="w-[170px] h-full rounded-r-[24px] flex flex-col items-center bg-sidebar">
            <div
                className="mt-[40px]"
                onClick={() => {
                    route.push('');
                }}
            >
                <Logo width={96} height={96} />
            </div>

            <div className="w-full h-full flex flex-col justify-center items-center gap-[32px]">{renderSidebar()}</div>
        </div>
    );
}

export default SideBar;
