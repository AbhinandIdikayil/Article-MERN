import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import categories from '../../data/categories.json'
import { Link, useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { RegisterationVaidation } from '@/validation/RegisterationValidation'
import { useFieldArray, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoaderIcon, X } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { Register } from '@/redux/action/userAction'
import { AppDispatch, RootState } from '@/redux/store'
import { useEffect } from 'react'

function Registeration() {
  const dispatch = useDispatch<AppDispatch>()
  const user = useSelector((state: RootState) => state.user)
  const navigate = useNavigate()
  type RegisterationType = z.infer<typeof RegisterationVaidation>
  const { handleSubmit, control, register, setValue, formState: { errors, isSubmitting } } = useForm<RegisterationType>({
    defaultValues: {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      DOB: '',
      password: '',
      confirmPassword: '',
      preferences: []
    },
    resolver: zodResolver(RegisterationVaidation)
  })
  console.log(errors)
  const { fields, append, remove } = useFieldArray({
    control,
    name: "preferences",
  });


  async function onSubmit(data: RegisterationType) {
    console.log(data)
    try {
      const res = await dispatch(Register(data)).unwrap()
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    if (user.loggedIn) {
      navigate('/')
    } 
  }, [])

  return (
    <div className="relative flex h-screen w-screen bg-white Foverflow-hidden">
      <div className='z-50 w-full h-full flex justify-center items-center max-md:px-4'>
        <div className='animate-slideUp w-[500px] max-md:w-full min-h-[500px] border border-solid border-black rounded-lg bg-white shadow-lg'>
          <form onSubmit={handleSubmit(onSubmit)} className='p-3'>
            <h1 className='h1 mt-3 text-center text-4xl font-semibold tracking-wide leading-tight'>Signup</h1>
            {/* //! FOR FIRSTNAME AND LASTNAME */}
            <div className='flex-col w-full mt-3'>
              <div className="flex gap-3 w-full">
                <div className="w-1/2">
                  <label className='label ' htmlFor="email">
                    Firstname
                    {
                      errors?.firstname?.message && (
                        <span className="text-red-500 text-sm"> ( {errors?.firstname?.message} )</span>
                      )
                    }
                  </label>
                  <div>
                    <input {...register('firstname')} className='w-full' id='email' type="text" placeholder='Email or Phone' />
                  </div>
                </div>
                <div className="w-1/2">
                  <label className='label ' htmlFor="email">
                    Lastname
                    {
                      errors?.lastname?.message && (
                        <span className="text-red-500 text-sm"> ( {errors?.lastname?.message} )</span>
                      )
                    }
                  </label>
                  <div>
                    <input {...register('lastname')} className='w-full' id='email' type="text" placeholder='Email or Phone' />
                  </div>
                </div>
              </div>
            </div>


            {/*  //! FOR PHONE AND DATE OF BIRTH */}
            <div className='flex-col w-full mt-1'>
              <div className="flex max-sm:flex-col gap-3 w-full">
                <div className="w-1/2 max-sm:w-full">
                  <label className='label ' htmlFor="email">
                    Phone
                    {
                      errors?.phone?.message && (
                        <span className="text-red-500 text-sm"> ( {errors?.phone?.message} )</span>
                      )
                    }
                  </label>
                  <div className='w-full'>
                    <PhoneInput
                      country={'in'}
                      onChange={(phone: string) => setValue('phone', phone)}
                      inputStyle={{ width: '100%' }}
                      inputProps={{
                        name: 'phone',
                        required: true,
                        autoFocus: true
                      }}
                    />
                    {/* <input className='w-full' id='email' type="text" placeholder='Phone' /> */}
                  </div>
                </div>
                <div className="w-1/2 max-sm:w-full">
                  <label className='label ' htmlFor="email">
                    date of birth
                    {
                      errors?.DOB?.message && (
                        <span className="text-red-500 text-sm"> ( {errors?.DOB?.message} )</span>
                      )
                    }
                  </label>
                  <div>
                    <input
                      max={new Date().toISOString().split('T')[0]}
                      {...register('DOB')} className='w-full h-[35px]' id='email' type="date" placeholder='Email or Phone' />
                  </div>
                </div>
              </div>
            </div>

            {/* //! FOR EMAIL  */}
            <div className='flex-col w-full mt-1'>
              <label className='label ' htmlFor="email">
                Email
                {
                  errors?.email?.message && (
                    <span className="text-red-500 text-sm"> ( {errors?.email?.message} )</span>
                  )
                }
              </label>
              <div>
                <input {...register('email')} className='w-full' id='email' type="email" placeholder='Email or Phone' />
              </div>
            </div>

            {/*  //! FOR PASSWORD  */}
            <div className='flex-col w-full mt-1'>
              <label className='label ' htmlFor="email">
                Password
                {
                  errors?.password?.message && (
                    <span className="text-red-500 text-sm"> ( {errors?.password?.message} )</span>
                  )
                }
              </label>
              <div>
                <input {...register('password')} className='w-full' id='password' type="text" placeholder='Enter you password' />
              </div>
            </div>

            {/*  //! FOR CONFIRMATION PASSOWRD  */}
            <div className='flex-col w-full mt-1'>
              <label className='label ' htmlFor="email">
                Confirm Password
                {
                  errors?.confirmPassword?.message && (
                    <span className="text-red-500 text-sm"> ( {errors?.confirmPassword?.message} )</span>
                  )
                }
              </label>
              <div>
                <input {...register('confirmPassword')} className='w-full' id='password' type="password" placeholder='Enter you password' />
              </div>
            </div>

            {/* //! FOR PREFERENCES */}
            <div className='flex-col w-full mt-1'>
              <label className='label ' htmlFor="email">Preferences
                {
                  errors?.preferences?.message && (
                    <span className="text-red-500 text-sm"> ( {errors?.preferences?.message} )</span>
                  )
                }
              </label>
              <div className='flex flex-wrap'>
                {
                  fields?.map((field: any, index) => (
                    <div key={field.id} className='flex gap-1 items-center bg-gray-200 mx-1 px-2 rounded-2xl my-1'>
                      <button> {field.value} </button>
                      <X onClick={() => remove(index)} size={15} className='mt-0.5' />
                    </div>
                  ))
                }
              </div>
              <div className='flex flex-wrap'>
                {
                  categories?.map(data => (
                    <span onClick={() => {
                      if (!fields?.some(field => field.value === data?.category)) {
                        append({ value: data?.category });
                      }
                    }} className='bg-gray-200 mx-1 px-2 rounded-2xl my-1'> {data?.category} </span>
                  ))
                }
              </div>
            </div>
            {
              isSubmitting ? (
                <button className="button-4 w-full flex justify-center items-center" role="button">
                  <LoaderIcon className='animate-spin' width={35} height={20} />
                </button>
              ) : (
                <button type='submit' disabled={isSubmitting} className="button-4 w-full mt-3" role="button">
                  Submit
                </button>
              )
            }
            <h1 className='text-sm font-semibold text-center mt-2'>
              have'an account ,
              <Link to={'/login'} className='text-violet-700'>
                signin
              </Link>
            </h1>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Registeration