import * as yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const schema = yup
  .object({
    otp: yup.string().required('required'),
    newPassword: yup.string().required('required')
  })
  .required()

const Verify = () => {
  const navigate = useNavigate()

  const apiUrl = import.meta.env.VITE_API_URL

  const onVerifyOtp = async (otp, password) => {
    try {
      const res = await fetch(`${apiUrl}/password_reset_otp_verify`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          otp: otp,
          new_password: password
        })
      })
      const data = await res.json()
      console.log(`data`, data)
      // if (data && data.message === 'sent') {
      //   navigate('login')
      // } else {
      //   toast.error('Invalid uid', {
      //     position: 'top-right',
      //     autoClose: 1500,
      //     hideProgressBar: false,
      //     closeOnClick: true,
      //     pauseOnHover: true,
      //     draggable: true,
      //     progress: undefined,
      //     theme: 'colored'
      //   })
      // }
    } catch (error) {
      console.error('Failed to login:', error)
    }
  }

  return (
    <Formik
      initialValues={{
        otp: '',
        newPassword: ''
      }}
      validationSchema={schema}
      onSubmit={(values) => {
        // console.log(values)
        if (values.otp && values.newPassword) {
          onVerifyOtp(values.otp, values.newPassword)
        }
      }}
    >
      {({ values, errors }) => (
        <Form noValidate>
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
            <label htmlFor={`newPassword`}>New Password</label>
            <Field
              type='password'
              id={`newPassword`}
              name={`newPassword`}
              autoComplete='off'
              className={`form-control py-4`}
              placeholder={`Enter your new password`}
            />
            <ErrorMessage
              component={'span'}
              className='error-msg'
              name={`newPassword`}
            />
          </div>
          <button
            type='submit'
            className='btn btn-dark block w-full text-center mt-4'
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default Verify
