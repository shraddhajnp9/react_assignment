import React, { Suspense, lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

//import Dashboard from "./pages/dashboard";
const Dashboard = lazy(() => import('./pages/dashboard'))
import Layout from './layout/Layout'
const Login = lazy(() => import('./pages/auth'))
import Loading from '@/components/Loading'

function App() {

  return (
    <main className='App relative'>
      <Routes>
        <Route
          path='login'
          element={
            <Suspense fallback={<Loading />}>
              <Login />
            </Suspense>
          }
        />
        <Route path='/*' element={<Layout />}>
          <Route path='dashboard' element={<Dashboard />} />
          <Route
            path=''
            element={<Dashboard />}
          />
        </Route>
      </Routes>
    </main>
  )
}

export default App
