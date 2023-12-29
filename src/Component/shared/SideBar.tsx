import { useEffect, useState } from "react";
import { usePathname, useRouter } from "../../Routes/hooks";
import { ArrowIcon, DotMenuVerIcon, Logo } from "../../assets/icon";
import { navSidebarConfig } from "./_config-layout";
import PathUrl from "../../Routes/path-url";
import { Drawer } from "antd";
import styled from "styled-components";

const DrawerCustom = styled(Drawer)``;

type SideBarProps = {
  floating?: boolean;
};

function SideBar(props: SideBarProps) {
  const [open, setOpen] = useState(false);

  const route = useRouter();
  const pathname = usePathname();
  const [active, setActive] = useState<number>(-1);

  const renderSidebar = () => {
    return navSidebarConfig.map((nav, index) => (
      <div
        className={`group relative flex w-full flex-col items-center justify-center  ${
          active === index ? "text-primary" : "text-white"
        }`}
        key={index}
        onClick={() => {
          if (!nav.subMenu) {
            route.push(nav.path);
          }
        }}
      >
        {active === index && (
          <div className="absolute left-0 h-full w-[8px] rounded-[6px] bg-primary"></div>
        )}
        {nav.icon}
        <h6 className="text-[14px] text-inherit">{nav.name}</h6>
        {nav.subMenu && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            <DotMenuVerIcon />
          </div>
        )}

        {nav.subMenu && (
          <ul className="absolute left-[100%] top-0 hidden w-max  overflow-hidden rounded-r-lg bg-menu group-hover:block">
            {nav.subMenu.map((subNav, subIndex) =>
              renderSubNav(subNav, subIndex),
            )}
          </ul>
        )}
      </div>
    ));
  };

  // Assuming renderSubNav is a separate function that returns JSX for sub-menu items
  const renderSubNav = (
    _subNav: { path: string; name: string },
    _subIndex: number,
  ) => {
    return (
      <li
        onClick={() => route.push(_subNav.path)}
        className="h-full min-w-full list-none p-4 pb-2 pt-2 text-[14px] text-white hover:bg-hover-menu"
        key={_subIndex}
      >
        {_subNav.name}
      </li>
    );
  };

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (
      pathname.includes(PathUrl.URL_USER) ||
      pathname.includes(PathUrl.URL_AUTH)
    ) {
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
    <>
      {props.floating ? (
        <>
          <div
            className="center-item h-screen w-[40px] cursor-pointer rounded-r-[24px] bg-sidebar "
            onClick={showDrawer}
          >
            <ArrowIcon className="text-primary " />
          </div>
          <DrawerCustom
            placement="left"
            closable={false}
            onClose={onClose}
            open={open}
            key="left"
          >
            <div className="fixed   bottom-0 left-0 top-0 z-[9000000] flex h-full w-[170px] flex-col items-center rounded-r-[24px] bg-sidebar">
              <div
                className="mt-[40px]"
                onClick={() => {
                  route.push("");
                }}
              >
                <Logo width={96} height={96} />
              </div>

              <div className="flex h-full w-full flex-col items-center justify-center gap-[32px]">
                {renderSidebar()}
              </div>
            </div>
          </DrawerCustom>
        </>
      ) : (
        <div className="w-[170px] ">
          <div className="fixed   bottom-0 left-0 top-0 z-[9000000] flex h-full w-[170px] flex-col items-center rounded-r-[24px] bg-sidebar">
            <div
              className="mt-[40px]"
              onClick={() => {
                route.push("");
              }}
            >
              <Logo width={96} height={96} />
            </div>

            <div className="flex h-full w-full flex-col items-center justify-center gap-[32px]">
              {renderSidebar()}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SideBar;
