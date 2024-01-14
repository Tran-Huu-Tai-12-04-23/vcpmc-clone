import { lazy, Suspense } from "react";
import { Outlet, Navigate, useRoutes } from "react-router-dom";

import AuthLayout from "../Layout/AuthLayout";
import HomeLayout from "../Layout/HomeLayout";
import DetailLayout from "../Layout/DetailLayout";
import RouteConstant from "../Constant/_route";
import PathUrl from "./path-url";

export const LoginPage = lazy(() => import("../Page/auth/_login"));
export const VerifyEmailPage = lazy(() => import("../Page/auth/_verify-email"));
export const ResetPasswordPage = lazy(
  () => import("../Page/auth/_reset-password"),
);
export const LinkErrorPage = lazy(() => import("../Page/auth/_link-error"));
//----------------------------------------------------------------
export const ViewUserDetailPage = lazy(
  () => import("../Page/user-information/_view"),
);
//----------------------------------------------------------------
export const ManagerContractPage = lazy(
  () => import("../Page/manager/contract"),
);
export const AddContractPage = lazy(
  () => import("../Page/manager/contract/authority/add"),
);
export const DetailContractPage = lazy(
  () => import("../Page/manager/contract/authority/detail"),
);
export const EditWorkAuthorityPage = lazy(
  () => import("../Page/manager/contract/authority/work-authority/edit"),
);
export const EditContractPage = lazy(
  () => import("../Page/manager/contract/authority/edit"),
);
export const AddRecordPage = lazy(
  () => import("../Page/manager/contract/authority/add-record/index"),
);

// store
export const StoreRecordPage = lazy(() => import("../Page/store/index"));
export const ManagerApprovePage = lazy(
  () => import("../Page/store/manager-approve/index"),
);
export const UpdateRecordPage = lazy(
  () => import("../Page/store/update-record/index"),
);
// playlist
export const PlaylistPage = lazy(() => import("../Page/playlist/index"));
export const DetailPlaylistPage = lazy(
  () => import("../Page/playlist/detail/index"),
);
export const EditPlaylistPage = lazy(
  () => import("../Page/playlist/edit/index"),
);
export const AddPlaylistPage = lazy(() => import("../Page/playlist/add/index"));
export const AddRecordPlaylistPage = lazy(
  () => import("../Page/playlist/add-record/index"),
);
// schedule
export const SchedulePage = lazy(() => import("../Page/schedule/index"));
export const DetailSchedulePage = lazy(
  () => import("../Page/schedule/detail/index"),
);
export const EditSchedulePage = lazy(
  () => import("../Page/schedule/edit/index"),
);
export const ApplyDevicePage = lazy(
  () => import("../Page/schedule/ApplyDevice/index"),
);
// device
export const UnitUsedPage = lazy(() => import("../Page/manager/unit/index"));
export const DetailUnitUsedPage = lazy(
  () => import("../Page/manager/unit/detail/index"),
);
export const AddUserPage = lazy(
  () => import("../Page/manager/unit/add-user/index"),
);
export const InfoUserPage = lazy(
  () => import("../Page/manager/unit/info-user/index"),
);
export const EditUserPage = lazy(
  () => import("../Page/manager/unit/edit-user/index"),
);
// device manager
export const DeviceManagerPage = lazy(
  () => import("../Page/manager/device/index"),
);
export const DetailDevicePage = lazy(
  () => import("../Page/manager/device/detail/index"),
);
export const AddDevicePage = lazy(
  () => import("../Page/manager/device/add/index"),
);
//  begin authority manager
export const AuthorityPage = lazy(
  () => import("../Page/manager/authority/index"),
);
export const UpdateAuthorityPage = lazy(
  () => import("../Page/manager/authority/update/index"),
);
// ----------------------------------------------------------------------
type RouterProps = {
  isAuthenticated: Boolean;
};
export default function Router(props: RouterProps) {
  const routes = useRoutes([
    // playlist
    {
      path: PathUrl.URL_PLAYLIST,
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          {props.isAuthenticated ? (
            <Outlet />
          ) : (
            <Navigate
              to={`${RouteConstant.MAIN_ROUTE_AUTH}/${RouteConstant.LOGIN}`}
              replace
            />
          )}
        </Suspense>
      ),
      children: [
        {
          index: true,
          element: (
            <HomeLayout>
              <PlaylistPage />
            </HomeLayout>
          ),
        },
        {
          path: ":id",
          element: (
            <DetailLayout>
              <DetailPlaylistPage />
            </DetailLayout>
          ),
        },
        {
          path: PathUrl.EDIT + "/:id",
          element: (
            <DetailLayout>
              <EditPlaylistPage />
            </DetailLayout>
          ),
        },
        {
          path: PathUrl.ADD,
          element: (
            <DetailLayout>
              <AddPlaylistPage />
            </DetailLayout>
          ),
        },
        {
          path: PathUrl.ADD_RECORD + "/:id",
          element: (
            <DetailLayout>
              <AddRecordPlaylistPage />
            </DetailLayout>
          ),
        },
      ],
    },
    // end playlist
    //start schedule
    {
      path: PathUrl.URL_SCHEDULE,
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          {props.isAuthenticated ? (
            <Outlet />
          ) : (
            <Navigate
              to={`${RouteConstant.MAIN_ROUTE_AUTH}/${RouteConstant.LOGIN}`}
              replace
            />
          )}
        </Suspense>
      ),
      children: [
        {
          index: true,
          element: (
            <HomeLayout>
              <SchedulePage />
            </HomeLayout>
          ),
        },
        {
          path: ":id",
          element: (
            <DetailLayout>
              <DetailSchedulePage />
            </DetailLayout>
          ),
        },
        {
          path: PathUrl.EDIT + "/:id",
          element: (
            <DetailLayout>
              <EditSchedulePage />
            </DetailLayout>
          ),
        },
        {
          path: PathUrl.APPLY_DEVICE + "/:id",
          element: (
            <DetailLayout>
              <ApplyDevicePage />
            </DetailLayout>
          ),
        },
      ],
    },
    //end schedule
    //start device manager
    {
      path: PathUrl.URL_MANAGER + "/" + PathUrl.MANAGER_DEVICES,
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          {props.isAuthenticated ? (
            <Outlet />
          ) : (
            <Navigate
              to={`${RouteConstant.MAIN_ROUTE_AUTH}/${RouteConstant.LOGIN}`}
              replace
            />
          )}
        </Suspense>
      ),
      children: [
        {
          index: true,
          element: (
            <HomeLayout>
              <DeviceManagerPage />
            </HomeLayout>
          ),
        },
        {
          path: ":id",
          element: (
            <DetailLayout>
              <DetailDevicePage />
            </DetailLayout>
          ),
        },
        {
          path: PathUrl.ADD,
          element: (
            <DetailLayout>
              <AddDevicePage />
            </DetailLayout>
          ),
        },
      ],
    },
    //end device manager
    // start authority manager
    {
      path: PathUrl.URL_MANAGER + "/" + PathUrl.MANAGER_AUTHORITY,
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          {props.isAuthenticated ? (
            <Outlet />
          ) : (
            <Navigate
              to={`${RouteConstant.MAIN_ROUTE_AUTH}/${RouteConstant.LOGIN}`}
              replace
            />
          )}
        </Suspense>
      ),
      children: [
        {
          index: true,
          element: (
            <HomeLayout>
              <AuthorityPage />
            </HomeLayout>
          ),
        },
        {
          path: PathUrl.EDIT + "/:id",
          element: (
            <DetailLayout>
              <UpdateAuthorityPage />
            </DetailLayout>
          ),
        },
      ],
    },
    // end authority manager
    // start unit used
    {
      path: PathUrl.URL_MANAGER + "/" + PathUrl.MANAGER_UNIT_USED,
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          {props.isAuthenticated ? (
            <Outlet />
          ) : (
            <Navigate
              to={`${RouteConstant.MAIN_ROUTE_AUTH}/${RouteConstant.LOGIN}`}
              replace
            />
          )}
        </Suspense>
      ),
      children: [
        {
          index: true,
          element: (
            <HomeLayout>
              <UnitUsedPage />
            </HomeLayout>
          ),
        },
        {
          path: ":id",
          element: (
            <DetailLayout>
              <DetailUnitUsedPage />
            </DetailLayout>
          ),
        },
        {
          path: PathUrl.ADD_USER,
          element: (
            <DetailLayout>
              <AddUserPage />
            </DetailLayout>
          ),
        },
        {
          path: PathUrl.INFO_USER + "/:id",
          element: (
            <DetailLayout>
              <InfoUserPage />
            </DetailLayout>
          ),
        },
        {
          path: PathUrl.EDIT_USER + "/:id",
          element: (
            <DetailLayout>
              <EditUserPage />
            </DetailLayout>
          ),
        },
      ],
    },
    //end device
    /// store
    {
      path: PathUrl.URL_STORE_RECORD,
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          {props.isAuthenticated ? (
            <Outlet />
          ) : (
            <Navigate
              to={`${RouteConstant.MAIN_ROUTE_AUTH}/${RouteConstant.LOGIN}`}
              replace
            />
          )}
        </Suspense>
      ),
      children: [
        {
          index: true,
          element: (
            <HomeLayout>
              <StoreRecordPage />
            </HomeLayout>
          ),
        },
        {
          path: PathUrl.MANAGER_APPROVE,
          element: (
            <DetailLayout>
              <ManagerApprovePage />
            </DetailLayout>
          ),
        },
        {
          path: PathUrl.UPDATE_RECORD + "/:id",
          element: (
            <DetailLayout>
              <UpdateRecordPage />
            </DetailLayout>
          ),
        },
      ],
    },
    //end store
    {
      path: RouteConstant.MAIN_ROUTE_AUTH,
      element: (
        <AuthLayout>
          <Suspense fallback={<div>Loading...</div>}>
            {!props.isAuthenticated ? (
              <Outlet />
            ) : (
              <Navigate to={`/`} replace />
            )}
          </Suspense>
        </AuthLayout>
      ),
      children: [
        {
          index: true,
          element: <Navigate to={RouteConstant.LOGIN} replace />,
        },
        {
          path: RouteConstant.LOGIN,
          element: <LoginPage />,
        },
        {
          path: RouteConstant.VERIFY_EMAIL,
          element: <VerifyEmailPage />,
        },
        {
          path: RouteConstant.RESET_PASSWORD,
          element: <ResetPasswordPage />,
        },
        {
          path: RouteConstant.LINK_ERROR,
          element: <LinkErrorPage />,
        },
      ],
    },
    {
      path: PathUrl.URL_MANAGER,
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          {props.isAuthenticated ? (
            <Outlet />
          ) : (
            <Navigate
              to={`${RouteConstant.MAIN_ROUTE_AUTH}/${RouteConstant.LOGIN}`}
              replace
            />
          )}
        </Suspense>
      ),
      children: [
        {
          index: true,
          element: <Navigate to={PathUrl.MANAGER_CONTRACT} replace />,
        },
        {
          path: PathUrl.MANAGER_CONTRACT,
          element: (
            <HomeLayout>
              <ManagerContractPage />
            </HomeLayout>
          ),
        },
        {
          path:
            PathUrl.MANAGER_CONTRACT +
            "/" +
            PathUrl.AUTHORITY +
            "/" +
            PathUrl.ADD,
          element: (
            <DetailLayout>
              <AddContractPage />
            </DetailLayout>
          ),
        },
        {
          path: PathUrl.MANAGER_CONTRACT + "/" + PathUrl.AUTHORITY + "/:id",
          element: (
            <DetailLayout>
              <DetailContractPage />
            </DetailLayout>
          ),
        },
        {
          path:
            PathUrl.MANAGER_CONTRACT +
            "/" +
            PathUrl.AUTHORITY +
            "/" +
            PathUrl.WORK +
            "/:id",
          element: (
            <DetailLayout>
              <EditWorkAuthorityPage />
            </DetailLayout>
          ),
        },
        {
          path:
            PathUrl.MANAGER_CONTRACT +
            "/" +
            PathUrl.AUTHORITY +
            "/" +
            PathUrl.EDIT +
            "/:id",
          element: (
            <DetailLayout>
              <EditContractPage />
            </DetailLayout>
          ),
        },
        {
          path:
            PathUrl.MANAGER_CONTRACT +
            "/" +
            PathUrl.AUTHORITY +
            "/" +
            PathUrl.ADD_RECORD,
          element: (
            <DetailLayout>
              <AddRecordPage />
            </DetailLayout>
          ),
        },
      ],
    },
    {
      path: "/",
      element: (
        <HomeLayout>
          <Suspense fallback={<div>Loading...</div>}>
            {props.isAuthenticated ? (
              <Outlet />
            ) : (
              <Navigate
                to={`${RouteConstant.MAIN_ROUTE_AUTH}/${RouteConstant.LOGIN}`}
                replace
              />
            )}
          </Suspense>
        </HomeLayout>
      ),
      children: [
        {
          index: true,
          element: <></>,
        },
        {
          path: RouteConstant.USER,
          element: <ViewUserDetailPage />,
        },
      ],
    },
  ]);

  return routes;
}
