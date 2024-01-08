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
export const StoreRecordPage = lazy(
  () => import("../Page/manager/store/index"),
);
export const ManagerApprovePage = lazy(
  () => import("../Page/manager/store/manager-approve/index"),
);
export const UpdateRecordPage = lazy(
  () => import("../Page/manager/store/update-record/index"),
);
// playlist
export const PlaylistPage = lazy(
  () => import("../Page/manager/playlist/index"),
);
export const DetailPlaylistPage = lazy(
  () => import("../Page/manager/playlist/detail/index"),
);
export const EditPlaylistPage = lazy(
  () => import("../Page/manager/playlist/edit/index"),
);
export const AddPlaylistPage = lazy(
  () => import("../Page/manager/playlist/add/index"),
);
export const AddRecordPlaylistPage = lazy(
  () => import("../Page/manager/playlist/add-record/index"),
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
