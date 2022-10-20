import React, { FC, lazy } from "react";
import './App.css'
import { Navigate, Route, Routes, Outlet } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const NotFound = lazy(() => import("./screens/notFound"))
const Homepage = lazy(() => import("./screens/homepage"))

toast.configure();

const App: FC = () => {
  return (
        <Routes>
          {/* PUBLIC ROUTE */}
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Homepage />} />


          {/* PRIVATE ROUTE */}
          {/* <Route element={<PrivateRoute user={undefined} />}>
            <Route path="/" element={<Homepage />} />
          </Route> */}

        </Routes>
  );
}


const PrivateRoute = ({ user, redirectPath = '/', children}:any) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />
  }
  return children ? children : <Outlet />
};

export default App;