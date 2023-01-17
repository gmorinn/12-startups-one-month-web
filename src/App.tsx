import { FC, lazy } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// const Dashboard = lazy(async () => await import('./screens/dashboard'));
const NotFound = lazy(async () => await import('./screens/notFound'));
const Homepage = lazy(async () => await import('./screens/homepage'));
const CheckEmail = lazy(async () => await import('./screens/checkEmail'));
const ForgotPassword = lazy(async () => await import('./screens/forgotPassword'));

toast.configure();

const App: FC = () => {
    return (
        <Routes>
            {/* PUBLIC ROUTE */}
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Homepage />} />
            <Route path="check-email" element={<CheckEmail />} />
            <Route path="forgot-password" element={<ForgotPassword />} />

            {/* PRIVATE ROUTE */}
            {/* <Route element={<PrivateRoute isAllowed={user} redirectPath="/login" />}>
                <Route path="dashboard" element={<Dashboard />} />
            </Route> */}
        </Routes>
    );
};

// const PrivateRoute = ({ redirectPath = '/login', isAllowed, children }: any): JSX.Element => {
//     if (isAllowed === false) {
//         return <Navigate to={redirectPath} replace />;
//     }
//     /* eslint-disable-next-line */
//     return children || <Outlet />;
// };

export default App;
