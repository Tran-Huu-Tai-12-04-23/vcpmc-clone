import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import AuthLayout from '../Layout/AuthLayout';
import HomeLayout from '../Layout/HomeLayout';
import RouteConstant from '../Constant/_route';

export const LoginPage = lazy(() => import('../Page/auth/_login'));
export const VerifyEmailPage = lazy(() => import('../Page/auth/_verify-email'));
export const ResetPasswordPage = lazy(() => import('../Page/auth/_reset-password'));
export const LinkErrorPage = lazy(() => import('../Page/auth/_link-error'));
//----------------------------------------------------------------
export const ViewUserDetailPage = lazy(() => import('../Page/UserInformation/_view'));

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
                        {!props.isAuthenticated ? <Outlet /> : <Navigate to={`/`} replace />}
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
            path: '/',
            element: (
                <HomeLayout>
                    <Suspense fallback={<div>Loading...</div>}>
                        {props.isAuthenticated ? (
                            <Outlet />
                        ) : (
                            <Navigate to={`${RouteConstant.MAIN_ROUTE_AUTH}/${RouteConstant.LOGIN}`} replace />
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
