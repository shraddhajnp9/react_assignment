import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
  const isAuth = localStorage.getItem('isAuth')

  if (isAuth) {
    return <Outlet />
  } else {
    return <Navigate to={'/login'} replace />
  }
}

export default PrivateRoute
