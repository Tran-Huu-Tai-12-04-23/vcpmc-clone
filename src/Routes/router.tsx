import { lazy, Suspense } from "react";
import { Outlet, Navigate, useRoutes } from "react-router-dom";

import AuthLayout from "../Layout/AuthLayout";
import HomeLayout from "../Layout/HomeLayout";
import DetailLayout from "../Layout/DetailLayout";
import LoadingLayout from "../Layout/Loading";
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
export const AddContractMiningPage = lazy(
  () => import("../Page/manager/contract/mining/add"),
);
export const DetailContractMiningPage = lazy(
  () => import("../Page/manager/contract/mining/detail"),
);
export const EditContractMiningPage = lazy(
  () => import("../Page/manager/contract/mining/edit"),
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
export const AddSchedulePage = lazy(() => import("../Page/schedule/add/index"));
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

// revenue begin
export const DistributeRevenuePage = lazy(
  () => import("../Page/revenue/distribute/index"),
);
export const DetailDistributeRevenuePage = lazy(
  () => import("../Page/revenue/distribute/detail/index"),
);
export const HistoryForControlPage = lazy(
  () => import("../Page/revenue/forControl/index"),
);
export const DetailHistoryForControlPage = lazy(
  () => import("../Page/revenue/forControl/detail/index"),
);
export const ReportRevenuePage = lazy(
  () => import("../Page/revenue/report/index"),
);
export const ReportRevenueDetailPage = lazy(
  () => import("../Page/revenue/report/detail/index"),
);
export const DetailRevenuePage = lazy(
  () => import("../Page/revenue/report/detail/detail-revenue/index"),
);
export const HistorySyncedDevicePage = lazy(
  () => import("../Page/revenue/report/detail/history-synced-device/index"),
);

//   decentralized user
export const DecentralizeUserPage = lazy(
  () => import("../Page/setting/decentralize/index"),
);
export const AddUserRolePage = lazy(
  () => import("../Page/setting/decentralize/add/index"),
);
export const EditUserRolePage = lazy(
  () => import("../Page/setting/decentralize/edit/index"),
);
// setting config
export const SettingConfigPage = lazy(
  () => import("../Page/setting/config/index"),
);
export const InformationCreationPage = lazy(
  () => import("../Page/setting/information-creation/index"),
);
export const ManagerTypeContractPage = lazy(
  () => import("../Page/setting/manager-type-contract/index"),
);
export const EditExtendTypeContractPage = lazy(
  () =>
    import(
      "../Page/setting/manager-type-contract/edit-extend-type-contract/index"
    ),
);
export const EditTypeContractPage = lazy(
  () => import("../Page/setting/manager-type-contract/edit/index"),
);

export const ControlCyclePage = lazy(
  () => import("../Page/setting/control-cycle/index"),
);
//
export const SupportInstallPage = lazy(
  () => import("../Page/support/install/index"),
);
export const FeedBackPage = lazy(
  () => import("../Page/support/feedback/index"),
);
export const AppGuidePage = lazy(
  () => import("../Page/support/app-guide/index"),
);
// ----------------------------------------------------------------------
type RouterProps = {
  isAuthenticated: Boolean;
};
export default function Router(props: RouterProps) {
  const routes = useRoutes([
    //  begin support
    {
      path: PathUrl.URL_SUPPORT,
      element: (
        <Suspense fallback={<LoadingLayout />}>
          {props.isAuthenticated ? (
            <Outlet />
          ) : (
            <Navigate
              to={`/${RouteConstant.MAIN_ROUTE_AUTH}/${RouteConstant.LOGIN}`}
              replace
            />
          )}
        </Suspense>
      ),
      children: [
        {
          path: PathUrl.SUPPORT_DOWNLOAD_APP,
          element: (
            <HomeLayout>
              <SupportInstallPage />
            </HomeLayout>
          ),
        },
        {
          path: PathUrl.SUPPORT_FEEDBACK,
          element: (
            <HomeLayout>
              <FeedBackPage />
            </HomeLayout>
          ),
        },
        {
          path: PathUrl.SUPPORT_APP_GUIDE,
          element: (
            <HomeLayout>
              <AppGuidePage />
            </HomeLayout>
          ),
        },
      ],
    },
    //end support
    // begin decentralized
    {
      path: PathUrl.URL_SETTING,
      element: (
        <Suspense fallback={<LoadingLayout />}>
          {props.isAuthenticated ? (
            <Outlet />
          ) : (
            <Navigate
              to={`/${RouteConstant.MAIN_ROUTE_AUTH}/${RouteConstant.LOGIN}`}
              replace
            />
          )}
        </Suspense>
      ),
      children: [
        {
          path: PathUrl.DECENTRALIZED,
          element: (
            <HomeLayout>
              <DecentralizeUserPage />
            </HomeLayout>
          ),
        },
        {
          path: PathUrl.DECENTRALIZED + "/" + PathUrl.ADD,
          element: (
            <DetailLayout>
              <AddUserRolePage />
            </DetailLayout>
          ),
        },
        {
          path: PathUrl.DECENTRALIZED + "/:id",
          element: (
            <DetailLayout>
              <EditUserRolePage />
            </DetailLayout>
          ),
        },
        {
          path: PathUrl.SETTING_CONFIG,
          element: (
            <HomeLayout>
              <SettingConfigPage />
            </HomeLayout>
          ),
        },
        {
          path: PathUrl.SETTING_INFORMATION_CREATION,
          element: (
            <HomeLayout>
              <InformationCreationPage />
            </HomeLayout>
          ),
        },
        {
          path: PathUrl.MANAGER_CONTRACT,
          element: (
            <HomeLayout>
              <ManagerTypeContractPage />
            </HomeLayout>
          ),
        },
        {
          path: PathUrl.MANAGER_CONTRACT + "/" + PathUrl.EDIT,
          element: (
            <HomeLayout>
              <EditExtendTypeContractPage />
            </HomeLayout>
          ),
        },
        {
          path: PathUrl.MANAGER_CONTRACT + "/" + PathUrl.EDIT_TYPE_CONTRACT,
          element: (
            <HomeLayout>
              <EditTypeContractPage />
            </HomeLayout>
          ),
        },
        {
          path: PathUrl.SETTING_CONTROL_CYCLE,
          element: (
            <HomeLayout>
              <ControlCyclePage />
            </HomeLayout>
          ),
        },
      ],
    },
    // end decentralized
    // playlist
    {
      path: PathUrl.URL_PLAYLIST,
      element: (
        <Suspense fallback={<LoadingLayout />}>
          {props.isAuthenticated ? (
            <Outlet />
          ) : (
            <Navigate
              to={`/${RouteConstant.MAIN_ROUTE_AUTH}/${RouteConstant.LOGIN}`}
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
        <Suspense fallback={<LoadingLayout />}>
          {props.isAuthenticated ? (
            <Outlet />
          ) : (
            <Navigate
              to={`/${RouteConstant.MAIN_ROUTE_AUTH}/${RouteConstant.LOGIN}`}
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
          path: PathUrl.ADD,
          element: (
            <DetailLayout>
              <AddSchedulePage />
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
        <Suspense fallback={<LoadingLayout />}>
          {props.isAuthenticated ? (
            <Outlet />
          ) : (
            <Navigate
              to={`/${RouteConstant.MAIN_ROUTE_AUTH}/${RouteConstant.LOGIN}`}
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
        <Suspense fallback={<LoadingLayout />}>
          {props.isAuthenticated ? (
            <Outlet />
          ) : (
            <Navigate
              to={`/${RouteConstant.MAIN_ROUTE_AUTH}/${RouteConstant.LOGIN}`}
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
        <Suspense fallback={<LoadingLayout />}>
          {props.isAuthenticated ? (
            <Outlet />
          ) : (
            <Navigate
              to={`/${RouteConstant.MAIN_ROUTE_AUTH}/${RouteConstant.LOGIN}`}
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
        <Suspense fallback={<LoadingLayout />}>
          {props.isAuthenticated ? (
            <Outlet />
          ) : (
            <Navigate
              to={`/${RouteConstant.MAIN_ROUTE_AUTH}/${RouteConstant.LOGIN}`}
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
          <Suspense fallback={<LoadingLayout />}>
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
        <Suspense fallback={<LoadingLayout />}>
          {props.isAuthenticated ? (
            <Outlet />
          ) : (
            <Navigate
              to={`/${RouteConstant.MAIN_ROUTE_AUTH}/${RouteConstant.LOGIN}`}
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
          path: PathUrl.MANAGER_CONTRACT + "/" + PathUrl.CONTRACT_MINING,
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
            PathUrl.CONTRACT_MINING +
            "/" +
            PathUrl.ADD,
          element: (
            <DetailLayout>
              <AddContractMiningPage />
            </DetailLayout>
          ),
        },
        {
          path:
            PathUrl.MANAGER_CONTRACT + "/" + PathUrl.CONTRACT_MINING + "/:id",
          element: (
            <DetailLayout>
              <DetailContractMiningPage />
            </DetailLayout>
          ),
        },
        {
          path:
            PathUrl.MANAGER_CONTRACT +
            "/" +
            PathUrl.CONTRACT_MINING +
            "/" +
            PathUrl.EDIT +
            "/:id",
          element: (
            <DetailLayout>
              <EditContractMiningPage />
            </DetailLayout>
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
    // revenue
    {
      path: PathUrl.URL_REVENUE,
      element: (
        <Suspense fallback={<LoadingLayout />}>
          {props.isAuthenticated ? (
            <Outlet />
          ) : (
            <Navigate
              to={`/${RouteConstant.MAIN_ROUTE_AUTH}/${RouteConstant.LOGIN}`}
              replace
            />
          )}
        </Suspense>
      ),
      children: [
        {
          path: PathUrl.REVENUE_DISTRIBUTION,
          element: (
            <HomeLayout>
              <DistributeRevenuePage />
            </HomeLayout>
          ),
        },
        {
          path: PathUrl.REVENUE_DISTRIBUTION + "/:id",
          element: (
            <DetailLayout>
              <DetailDistributeRevenuePage />
            </DetailLayout>
          ),
        },
        {
          path: PathUrl.REVENUE_HISTORY_FOR_CONTROL,
          element: (
            <HomeLayout>
              <HistoryForControlPage />
            </HomeLayout>
          ),
        },
        {
          path: PathUrl.REVENUE_HISTORY_FOR_CONTROL + "/:id",
          element: (
            <DetailLayout>
              <DetailHistoryForControlPage />
            </DetailLayout>
          ),
        },
        {
          path: PathUrl.REVENUE_REPORT,
          element: (
            <HomeLayout>
              <ReportRevenuePage />
            </HomeLayout>
          ),
        },
        {
          path: PathUrl.REVENUE_REPORT + "/" + PathUrl.DETAIL,
          element: (
            <DetailLayout>
              <ReportRevenueDetailPage />
            </DetailLayout>
          ),
        },
        {
          path: PathUrl.REVENUE_REPORT + "/:id",
          element: (
            <DetailLayout>
              <DetailRevenuePage />
            </DetailLayout>
          ),
        },
        {
          path:
            PathUrl.REVENUE_REPORT +
            "/" +
            PathUrl.HISTORY_SYNCED_DEVICE +
            "/:id",
          element: (
            <DetailLayout>
              <HistorySyncedDevicePage />
            </DetailLayout>
          ),
        },
      ],
    },
    {
      path: "/",
      element: (
        <HomeLayout>
          <Suspense fallback={<LoadingLayout />}>
            {props.isAuthenticated ? (
              <Outlet />
            ) : (
              <Navigate
                to={`/${RouteConstant.MAIN_ROUTE_AUTH}/${RouteConstant.LOGIN}`}
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
