import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import LoginForm from './common/login-form'
import useDarkMode from '@/hooks/useDarkMode'
import { ToastContainer } from 'react-toastify'
import GlobalContext from '../../context/GlobalContext'
import bgImage from "@/assets/images/auth/ilst2.png";
import {handleLogin} from '../../store/auth'
import {useDispatch} from 'react-redux'

const Login = () => {
  const [isDark] = useDarkMode()
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const handleSubmit = (e, values) => {
    e.preventDefault()
    dispatch(handleLogin(values))
  }

  return (
    <>
      <ToastContainer />
      <div className='loginwrapper'>
        <div className='lg-inner-column'>
          <div
            className='left-column bg-cover bg-no-repeat bg-center'
            style={{
              backgroundImage: `url(${bgImage})`,
            }}
          >
            <div className='flex flex-col items-center justify-center h-full'>
              <img
                src='/logo_transparent.png'
                alt=''
                className='mb-10'
                style={{ height: '220px' }}
              />
            </div>
          </div>
          <div className='right-column relative'>
            <div className='inner-content h-full flex flex-col bg-white dark:bg-slate-800'>
              <div className='auth-box h-full flex flex-col justify-center'>
                <div className='text-center 2xl:mb-10 mb-2'>
                    <img
                      src='https://marvicautomation.com/myImages/logo.png'
                      alt=''
                      className='mx-auto'
                      style={{ height: '120px' }}
                    />
                  <br />
                  <h4 className='font-medium'>Sign in</h4>
                  {/*<div className='text-slate-500 text-base'>
                    Sign in to manage your account
                  </div>*/}
                </div>
                <LoginForm onSubmit={handleSubmit} />
              </div>
              <div
                className='auth-footer text-center'
                style={{ color: '#333' }}
              >
                COPYRIGHT © 2023 eBug Technoyug. All rights Reserved
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
