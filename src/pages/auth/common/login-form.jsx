import React, { useState, useEffect, useContext } from 'react'
import * as yup from 'yup'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import GlobalContext from '../../../context/GlobalContext'

const LoginForm = ({onSubmit = () => {}}) => {
  const { resetMsg, setResetMsg } = useContext(GlobalContext)

  return (
    <Formik
      initialValues={{
        userId: '',
        password: ''
      }}
    >
      {({ values, errors }) => (
        <Form noValidate onSubmit={(e) => onSubmit(e, values)}>
          <div className='flex items-start flex-col gap-1 mb-5'>
            <label htmlFor={'userId'}>User ID</label>
            <Field
              type='text'
              id='userId'
              name='userId'
              autoComplete='off'
              className={`form-control py-2.5`}
            />
            <ErrorMessage
              component={'span'}
              className='error-msg'
              name='userId'
            />
          </div>
          <div className='flex items-start flex-col gap-1 mb-5'>
            <label htmlFor={'userId'}>Password</label>
            <Field
              type='password'
              id='password'
              name='password'
              autoComplete='off'
              className={`form-control py-2.5`}
            />
            <ErrorMessage
              component={'span'}
              className='error-msg'
              name='password'
            />
          </div>
          {resetMsg !== '' && (
            <div className='font-normal text-sm md:text-base text-green-500 dark:text-slate-400 text-center px-2 bg-green-100 dark:bg-slate-600 rounded py-3 my-4'>
              {resetMsg}
            </div>
          )}
          <button
            className='btn btn-dark mt-6 block w-full text-center'
            type='submit'
          >
            Sign in
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default LoginForm
