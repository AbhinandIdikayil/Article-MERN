import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import categories from '../../data/categories.json'
import { Link } from 'react-router-dom'

function Registeration() {
  return (
    <div className="relative flex h-screen w-screen bg-white Foverflow-hidden">
      <div className='z-50 w-full h-full flex justify-center items-center max-md:px-4'>
        <div className='animate-slideUp w-[500px] max-md:w-full min-h-[500px] border border-solid border-black rounded-lg bg-white shadow-lg'>
          <form action="" className='p-3'>
            <h1 className='h1 mt-3 text-center text-4xl font-semibold tracking-wide leading-tight'>Signup</h1>
            {/* //! FOR FIRSTNAME AND LASTNAME */}
            <div className='flex-col w-full mt-3'>
              <div className="flex gap-3 w-full">
                <div className="w-1/2">
                  <label className='label ' htmlFor="email">Firstname</label>
                  <div>
                    <input className='w-full' id='email' type="text" placeholder='Email or Phone' />
                  </div>
                </div>
                <div className="w-1/2">
                  <label className='label ' htmlFor="email">Lastname</label>
                  <div>
                    <input className='w-full' id='email' type="text" placeholder='Email or Phone' />
                  </div>
                </div>
              </div>
            </div>


            {/*  //! FOR PHONE AND DATE OF BIRTH */}
            <div className='flex-col w-full mt-1'>
              <div className="flex max-sm:flex-col gap-3 w-full">
                <div className="w-1/2 max-sm:w-full">
                  <label className='label ' htmlFor="email">Phone</label>
                  <div className='w-full'>
                    <PhoneInput
                      country={'in'}
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
                  <label className='label ' htmlFor="email">date of birth</label>
                  <div>
                    <input className='w-full h-[35px]' id='email' type="date" placeholder='Email or Phone' />
                  </div>
                </div>
              </div>
            </div>

            {/* //! FOR EMAIL  */}
            <div className='flex-col w-full mt-1'>
              <label className='label ' htmlFor="email">Email</label>
              <div>
                <input className='w-full' id='email' type="text" placeholder='Email or Phone' />
              </div>
            </div>

            {/*  //! FOR PASSWORD  */}
            <div className='flex-col w-full mt-1'>
              <label className='label ' htmlFor="email">Password</label>
              <div>
                <input className='w-full' id='password' type="text" placeholder='Enter you password' />
              </div>
            </div>


            {/*  //! FOR CONFIRMATION PASSOWRD  */}
            <div className='flex-col w-full mt-1'>
              <label className='label ' htmlFor="email">Confirm Password</label>
              <div>
                <input className='w-full' id='password' type="password" placeholder='Enter you password' />
              </div>
            </div>

            {/* //! FOR PREFERENCES */}
            <div className='flex-col w-full mt-1'>
              <label className='label ' htmlFor="email">Preferences</label>
              <div className='flex flex-wrap'>
                {
                  categories?.map(data => (
                    <span className='bg-gray-200 mx-1 px-2 rounded-2xl my-1'> {data?.category} </span>
                  ))
                }
              </div>
            </div>
            <button className="button-4 w-full mt-3" role="button">
              Submit
            </button>
            {/* <button className="button-4 w-full" role="button">
              <LoaderIcon className='animate-spin' width={35} height={20} />
            </button> */}
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