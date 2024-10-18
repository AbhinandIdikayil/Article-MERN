import { LoaderIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
function Login() {
  return (
    <div className="relative flex h-screen w-screen bg-white overflow-hidden">
      <div className='z-50 w-full h-full flex justify-center items-center animate-slideUp max-md:px-4'>
        <div className='w-[400px] max-md:w-full min-h-[400px] border border-solid border-black rounded-lg bg-white shadow-lg'>
          <form action="" className='p-3'>
            <h1 className='h1 mt-3 text-center text-4xl font-semibold tracking-wide leading-tight'>Login</h1>
            <h1 className='text-base text-center font-semibold'>Enter your email or phone to login</h1>
            <div className='flex-col w-full mt-3'>
              <label className='label ' htmlFor="email">Email or phone</label>
              <div>
                <input className='w-full' id='email' type="text" placeholder='Email or Phone' />
              </div>
            </div>
            <div className='flex-col w-full mt-1'>
              <label className='label ' htmlFor="email">Password</label>
              <div>
                <input className='w-full' id='password' type="password" placeholder='Enter you password' />
              </div>
            </div>
            <button className="button-4 w-full mt-5" role="button">
              Submit
            </button>
            {/* <button className="button-4 w-full" role="button">
              <LoaderIcon className='animate-spin' width={35} height={20} />
            </button> */}
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