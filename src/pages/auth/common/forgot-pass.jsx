import React, { useContext, useState } from 'react'
import * as yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import GlobalContext from '../../../context/GlobalContext'

const regExp = /\b\d{10}\b/

const schema = yup
  .object({
    phone: yup.string().required('required').matches(regExp, {
      message: 'only 10 digit allowed',
      excludeEmptyString: true
    })
  })
  .required()
const ForgotPass = ({ setMessage }) => {
  const navigate = useNavigate()

  const { setResetMsg } = useContext(GlobalContext)

  const apiUrl = import.meta.env.VITE_API_URL

  const handleKeyDown = (event) => {
    if (!/^\d+$/.test(event.key) && event.key !== 'Backspace') {
      event.preventDefault()
      event.stopPropagation()
    }
  }

  const [hasSent, setHasSent] = useState(false)

  const [errorFromServer, setErrorFromServer] = useState('')

  const [buttonDisabled, setButtonDisabled] = useState(false)

  const onForgetPassword = async (uid) => {
    try {
      setButtonDisabled(true)
      const res = await fetch(`${apiUrl}/password_reset_otp_generate`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          uid: uid
        })
      })
      const data = await res.json()
      // console.log(`data`, data)
      if (data && data.message === 'sent') {
        setHasSent(true)
        setMessage(`OTP sent on your email - ${data.email}`)
      } else {
        toast.error('Invalid uid', {
          position: 'top-right',
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored'
        })
      }
    } catch (error) {
      console.error('Failed to login:', error)
    } finally {
      setButtonDisabled(false)
    }

  }

  const onVerifyOtp = async (otp, password, uid) => {
    try {
      const res = await fetch(`${apiUrl}/password_reset_otp_verify`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          otp: otp,
          new_password: password,
          uid: uid
        }),
        credentials: 'include'
      })
      const data = await res.json()
      console.log(`data`, data)
      if (data && data.message == 'success') {
        setResetMsg(`Password changed successfully`)
        navigate('/login')
      }
      else {
        setErrorFromServer(data.message)
      }
    } catch (error) {
      console.error('Failed to reset:', error)
    }
  }

  return (
    <Formik
      initialValues={{
        phone: '',
        otp: '',
        password: ''
      }}
      validationSchema={schema}
      onSubmit={(values) => {
        // console.log(values)
        if (hasSent) {
          onVerifyOtp(values.otp, values.password, values.phone)
        } else {
          onForgetPassword(values.phone)
        }
      }}
    >
      {({ values, errors }) => (
        <Form noValidate>
          <div className='flex items-start flex-col gap-1 mt-4'>
            <label htmlFor={`phone`}>UID</label>
            <Field
              type='text'
              id={`phone`}
              name={`phone`}
              autoComplete='off'
              className={`form-control py-4`}
              maxLength={10}
              placeholder={`Enter your UID`}
              disabled={hasSent}
              // onKeyDown={handleKeyDown}
            />
            <ErrorMessage
              component={'span'}
              className='error-msg'
              name={`phone`}
            />
          </div>
          {hasSent && (
            <>
              <div className='flex items-start flex-col gap-1 mt-4'>
                <label htmlFor={`otp`}>OTP</label>
                <Field
                  type='text'
                  id={`otp`}
                  name={`otp`}
                  autoComplete='off'
                  className={`form-control py-4`}
                  placeholder={`Verify your OTP`}
                />
                <ErrorMessage
                  component={'span'}
                  className='error-msg'
                  name={`otp`}
                />
              </div>
              <div className='flex items-start flex-col gap-1 mt-4'>
                <label htmlFor={`password`}>New Password</label>
                <Field
                  type='password'
                  id={`password`}
                  name={`password`}
                  autoComplete='off'
                  className={`form-control py-4`}
                  placeholder={`Enter your new password`}
                />
                <ErrorMessage
                  component={'span'}
                  className='error-msg'
                  name={`password`}
                />
              </div>
            </>
          )}

          {(errorFromServer!='') && (
            <>
              <div className='flex items-start flex-col gap-1 mt-4 text-red-600'>
                {errorFromServer}
              </div>
            </>
          )}

          <button
            type='submit' 
            className='btn btn-dark block w-full text-center mt-4' 
            disabled={buttonDisabled}  
            style={{
              // Add custom styles for disabled button here
              opacity: buttonDisabled ? 0.6 : 1, // Reduced opacity when disabled
              cursor: buttonDisabled ? 'wait' : 'pointer' // Change cursor when disabled
              // Add any other custom styles for the disabled button
            }}
          >
            {hasSent ? 'Submit' : 'Send OTP'}
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default ForgotPass
