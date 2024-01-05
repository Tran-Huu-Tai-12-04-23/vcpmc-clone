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
  () => import("../Page/userInformation/_view"),
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
  () => import("../Page/manager/contract/authority/workAuthority/edit"),
);
export const EditContractPage = lazy(
  () => import("../Page/manager/contract/authority/edit"),
);
export const AddRecordPage = lazy(
  () => import("../Page/manager/contract/authority/addRecord/index"),
);
// ----------------------------------------------------------------------
type RouterProps = {
  isAuthenticated: Boolean;
};
export default function Router(props: RouterProps) {
  const routes = useRoutes([
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
