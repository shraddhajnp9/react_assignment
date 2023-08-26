import React from 'react'

const InputField = ({
  label,
  error,
  required,
  register,
  type,
  name,
  message,
  onChange,
  onBlur,
  className
}) => {
  return (
    <div className='flex items-start flex-col gap-1'>
      <label htmlFor={name} className='uppercasee'>
        {label}
        {required && (
          <p className='text-red-500 inline-block pl-1 text-[12px]'>*</p>
        )}
      </label>
      {register && !onChange && !onBlur ? (
        <>
          <input
            id={name}
            type={type}
            label={label}
            className={`${
              error &&
              'border-danger-500 focus:ring-danger-500  focus:ring-opacity-90 focus:ring-1'
            } form-control py-2 ${className && className}`}
            {...register(name, {
              required: 'required'
            })}
          />
          <p className='text-red-500 text-[13px]'>{message}</p>
        </>
      ) : register && onChange && !onBlur ? (
        <>
          <input
            id={name}
            type={type}
            label={label}
            className={`${
              error &&
              'border-danger-500 focus:ring-danger-500  focus:ring-opacity-90 focus:ring-1'
            } form-control py-2 ${className && className}`}
            {...register(name, {
              required: 'required'
            })}
            onChange={onChange}
          />
          <p className='text-red-500 text-[13px]'>{message}</p>
        </>
      ) : register && !onChange && onBlur ? (
        <>
          <input
            id={name}
            type={type}
            label={label}
            className={`${
              error &&
              'border-danger-500 focus:ring-danger-500  focus:ring-opacity-90 focus:ring-1'
            } form-control py-2 ${className && className}`}
            {...register(name, {
              required: 'required'
            })}
            onBlur={onBlur}
          />
          <p className='text-red-500 text-[13px]'>{message}</p>
        </>
      ) : (
        <input
          id={name}
          type={type}
          label={label}
          className={`form-control py-2 ${className && className}`}
        />
      )}
    </div>
  )
}

export default InputField
