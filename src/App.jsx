import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
const Dashboard = lazy(() => import("./pages/dashboard"));
import Layout from "./layout/Layout";
const Login = lazy(() => import("./pages/auth"));
import Loading from "@/components/Loading";
import Customers from "./pages/customers";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <main className="App relative">
        <Routes>
          <Route
            path="login"
            element={
              <Suspense fallback={<Loading />}>
                <Login />
              </Suspense>
            }
          />
          <Route path="/*" element={<Layout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="" element={<Dashboard />} />
            <Route path="customers" element={<Customers />} />
          </Route>
        </Routes>
      </main>
      <ToastContainer />
    </>
  );
}

export default App;
