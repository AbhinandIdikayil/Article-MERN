import { updateProfile } from "@/redux/action/userAction"
import { AppDispatch } from "@/redux/store"
import { ChangePasswordValidation } from "@/validation/ChangePassword"
import { zodResolver } from "@hookform/resolvers/zod"
import { LoaderIcon, X } from "lucide-react"
import React from "react"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { toast } from "sonner"
import { z } from "zod"

function ChangePassword({ setEditPassword }: { setEditPassword: React.Dispatch<React.SetStateAction<boolean>> }) {
    type formData = z.infer<typeof ChangePasswordValidation>
    const dispatch = useDispatch<AppDispatch>()
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<formData>({
        defaultValues: {
            password: '',
            confirmPassword: ''
        },
        resolver: zodResolver(ChangePasswordValidation)
    })
    async function onSubmit(values: formData) {
        try {
            console.log(values)
            await dispatch(updateProfile({password:values.password})).unwrap()
            toast.success('Password updated')
            setEditPassword(false)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div style={{ zIndex: 99 }} className="fixed flex justify-center items-center top-0 left-0  z-50 w-full h-full bg-black bg-opacity-40">
            <div className="h-fit w-1/2 rounded-md border border-solid border-black bg-gray-100 px-4 py-3">
                <div className="flex justify-between">
                    <h1 className="capitalize">Edit profile</h1>
                    <X onClick={() => setEditPassword(false)} />
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className='p-3'>

                    <div className="w-full  gap-1 pb-2">
                        <div className='flex-col w-full mt-3'>
                            <label className='label ' htmlFor="email">
                                password
                                {
                                    errors?.password?.message && (
                                        <span className="text-red-500"> ( {errors?.password?.message} )</span>
                                    )
                                }
                            </label>
                            <div>
                                <input {...register('password')} className='w-full' id='email' type="text" placeholder='Enter your email' />
                            </div>
                        </div>
                        <div className='flex-col w-full mt-3'>
                            <label className='label ' htmlFor="email">
                                confirm password
                                {
                                    errors?.confirmPassword?.message && (
                                        <span className="text-red-500"> ( {errors?.confirmPassword?.message} )</span>
                                    )
                                }
                            </label>
                            <div>
                                <input {...register('confirmPassword')} className='w-full' id='email' type="password" placeholder='Enter your email' />
                            </div>
                        </div>
                    </div>
                    {
                        isSubmitting ? (
                            <button className="button-4 w-full mt-6 flex justify-center items-center"> <LoaderIcon /> </button>
                        ) : (
                            <button className="button-4 w-full mt-6"> submit </button>
                        )
                    }
                </form>
            </div>
        </div>
    )
}

export default ChangePassword