import { LoginValidation } from '@/validation/LoginValidation'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoaderIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import PhoneInput from 'react-phone-input-2'
import { z } from 'zod'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
function Login() {

  type LoginType = z.infer<typeof LoginValidation>
  const navigate = useNavigate()
  const user = useSelector((state: RootState) => state.user)
  const { setValue, register, handleSubmit, formState: { errors } } = useForm<LoginType>({
    defaultValues: {
      email: '',
      password: '',
      phone: ''
    },
    resolver: zodResolver(LoginValidation),
  })
  function onSubmit(formData: LoginType) {
    console.log(formData)
  }
  useEffect(() => {
    if (user.loggedIn) {
      navigate('/')
    }
  }, [])

  return (
    <div className="relative flex h-screen w-screen bg-white overflow-hidden">
      <div className='z-50 w-full h-full flex justify-center items-center animate-slideUp max-md:px-4'>
        <div className='w-[400px] max-md:w-full min-h-[400px] border border-solid border-black rounded-lg bg-white shadow-lg'>
          <form onSubmit={handleSubmit(onSubmit)} className='p-3'>
            <h1 className='h1 mt-3 text-center text-4xl font-semibold tracking-wide leading-tight'>Login</h1>
            <h1 className='text-base text-center font-semibold'>Enter your email or phone to login</h1>
            <div className='flex-col w-full mt-3'>
              <label className='label ' htmlFor="email">
                Email or phone
                {
                  errors?.email?.message && (
                    <span className="text-red-500 text-sm"> ( {errors?.email?.message} )</span>
                  )
                }
              </label>
              <div>
                <input {...register('email')} className='w-full' id='email' type="text" placeholder='Enter your email' />
              </div>
            </div>
            <div className='flex-col w-full mt-1'>
              <label className='label ' htmlFor="email">Phone
                {
                  errors?.phone?.message && (
                    <span className="text-red-500 text-sm"> ( {errors?.phone?.message} )</span>
                  )
                }
              </label>
              <div>
                <PhoneInput
                  onChange={(phone: string) => setValue('phone', phone)}
                  country={'in'}
                  inputStyle={{ width: '100%' }}
                  inputProps={{
                    name: 'phone',
                    required: true,
                    autoFocus: true
                  }}
                />
              </div>
            </div>
            <div className='flex-col w-full mt-1'>
              <label className='label ' htmlFor="email">Password
                {
                  errors?.password?.message && (
                    <span className="text-red-500"> ( {errors?.password?.message} )</span>
                  )
                }
              </label>
              <div>
                <input {...register('password')} className='w-full' id='password' type="password" placeholder='Enter you password' />
              </div>
            </div>
            <button className="button-4 w-full mt-5" role="button">
              Submit
            </button>
            <button className="button-4 w-full flex items-center justify-center" role="button">
              <LoaderIcon className='animate-spin' width={35} height={20} />
            </button>
            <h1 className='text-sm font-semibold text-center mt-2'>dont have'an account ,
              <Link to={'/signup'} className='text-violet-700'>
                create account
              </Link>
            </h1>
          </form>
        </div>
      </div>
    </div>
  )
}



export default Login