import PhoneInput from 'react-phone-input-2'
import categories from '../../data/categories.json'
import { z } from 'zod'
import { editProfileValidation } from '@/validation/RegisterationValidation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useFieldArray, useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/redux/store'
import { dateTo4y2m2d } from '@/utils/dateTo4y2m2d'
import { LoaderIcon, X } from 'lucide-react'
import React from 'react'
import { updateProfile } from '@/redux/action/userAction'

function Editprofile({ setEditProfile }: { setEditProfile: React.Dispatch<React.SetStateAction<boolean>> }) {
    const dispatch = useDispatch<AppDispatch>()
    const user = useSelector((state: RootState) => state.user)
    type editprofile = z.infer<typeof editProfileValidation>
    const { handleSubmit, control, getValues, register, setValue, formState: { errors, isSubmitting } } = useForm<editprofile>({
        defaultValues: {
            firstname: user.user?.firstname,
            lastname: user.user?.lastname,
            email: user.user?.email,
            phone: user.user?.phone,
            DOB: user.user?.DOB ? dateTo4y2m2d(user.user?.DOB) : " ",
            preferences: user.user?.preferences
        },
        resolver: zodResolver(editProfileValidation)
    })

    console.log(errors)
    const { fields, append, remove } = useFieldArray({
        control,
        name: "preferences",
    });


    async function onSubmit(values: editprofile) {
        try {
         await dispatch(updateProfile(values)).unwrap()
            console.log(values)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div style={{ zIndex: 99 }} className="fixed flex justify-center items-center top-0 left-0  z-50 w-full h-full bg-black bg-opacity-40">
            <div className="h-fit w-1/2 rounded-md border border-solid border-black bg-gray-100 px-4 py-2">
                <div className="flex justify-between">
                    <h1 className="capitalize text-black label text-xl">Edit profile</h1>
                    <X className='text-black' onClick={() => setEditProfile(false)} />
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className='px-3 py-1 pb-2'>
                    <div className="w-full flex gap-1">
                        <div className='flex-col w-1/2 mt-3'>
                            <label className='label ' htmlFor="email">
                                Firstname
                            </label>
                            <div>
                                <input {...register('firstname')} className='w-full' id='email' type="text" placeholder='Enter your email' />
                            </div>
                        </div>
                        <div className='flex-col w-1/2 mt-3'>
                            <label className='label ' htmlFor="email">
                                Lastname
                            </label>
                            <div>
                                <input {...register('lastname')} className='w-full' id='email' type="text" placeholder='Enter your email' />
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex gap-1">
                        <div className='flex-col w-1/2 mt-3'>
                            <label className='label ' htmlFor="email">
                                Email
                            </label>
                            <div>
                                <input {...register('email')} className='w-full' id='email' type="text" placeholder='Enter your email' />
                            </div>
                        </div>
                        <div className='flex-col w-1/2 mt-3'>
                            <label className='label ' htmlFor="email">
                                Phone
                            </label>
                            <div>
                                <PhoneInput
                                    value={getValues().phone}
                                    onChange={(phone: string) => {
                                        console.log(phone)
                                        setValue('phone', phone)
                                    }}
                                    country={'in'}
                                    inputStyle={{ width: '100%' }}
                                    inputProps={{
                                        name: 'phone',
                                        autoFocus: true
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-full  gap-1">
                        <div className='flex-col w-1/2 mt-3'>
                            <label className='label ' htmlFor="email">
                                DOB
                            </label>
                            <div>
                                <input className='w-full' id='email' value={getValues().DOB} type="date" placeholder='Enter your email' />
                            </div>
                        </div>
                    </div>
                    <div className='flex-col w-full mt-1'>
                        <label className='label ' htmlFor="email">Preferences

                        </label>
                        <div className='flex flex-wrap'>
                            {
                                fields?.map((field: any, index) => (
                                    <div key={index + field.value} className='flex gap-1 items-center bg-gray-200 text-violet-500 mx-1 px-2 rounded-2xl my-1'>
                                        <button> {field.value} </button>
                                        <X onClick={() => remove(index)} size={15} className='mt-0.5' />
                                    </div>
                                ))
                            }
                        </div>
                        <div className='flex flex-wrap'>
                            {
                                categories?.map(data => (
                                    <span key={data?.category} onClick={() => {
                                        if (!fields?.some((field: any) => field.value === data?.category)) {
                                            append({ value: data?.category });
                                        }
                                    }} className='hover:cursor-pointer bg-gray-200 text-violet-500 mx-1 px-2 rounded-2xl my-1'> {data?.category} </span>
                                ))
                            }
                        </div>
                    </div>
                    {
                        isSubmitting ? (
                            <button className='button-4 w-full flex justify-center items-center'>
                                <LoaderIcon className='animate-spin' />
                            </button>
                        ) : (
                            <button className='button-4 w-full'>
                                submit
                            </button>
                        )
                    }
                </form>
            </div>
        </div >
    )
}

export default Editprofile