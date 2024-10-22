import { editArticleForm } from '@/validation/ArticleValidation';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import DropDown from '../DropDown';
import categories from '../../data/categories.json'
import { ChevronDown, LoaderIcon, X } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import { editArticle } from '@/redux/action/articleAction';
import { uploadToCloudinary } from '@/utils/cloudinary';
import { toast } from 'sonner';
type dropDown = {
    dropDown: boolean
}
type articleForm = {
    setEditArticle: React.Dispatch<React.SetStateAction<boolean>>
}


function ArticleEdit({ setEditArticle }: articleForm) {
    const dispatch = useDispatch<AppDispatch>()
    const user = useSelector((state: RootState) => state.user)
    const [action, setAction] = useState<dropDown>({
        dropDown: false
    })
    const [image, setImage] = useState<any>()
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setImage(file);
            const previewUrl = URL.createObjectURL(file);
            setImagePreview(previewUrl);
        }
    };

    type formData = z.infer<typeof editArticleForm>
    const { setValue, register, handleSubmit, setError, getValues, formState: { errors, isSubmitting } } = useForm<formData>({
        resolver: zodResolver(editArticleForm),
        defaultValues: {
            title: user.article?.title,
            description: user.article?.description,
            content: user.article?.content,
            category: user.article?.category,
            tags: user.article?.tags,
        },
    })

    useEffect(() => {
        if (user.article?.image) {
            setImage(user.article?.image)
            setImagePreview(user.article?.image)
        }
    }, [])

    async function onSubmit(values: formData) {
        try {
            if (!image) {
                setError("root", {
                    type: "manual",
                    message: 'Image is required',
                });
                return
            }
            if(typeof image == 'object'){
                let imageUrl:any = await uploadToCloudinary(image)
                setImage(imageUrl)
            }
            const data:any = {
                data: { ...values, image, },
                articleId: user.article?._id
            }
            if (data.articleId && data.data.image) {
                await dispatch(editArticle(data)).unwrap()
                toast.success('Edited successfully')
                setEditArticle(false)
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='fixed flex justify-center items-center top-0  z-50 w-screen h-full bg-black bg-opacity-45'>
            <div className="w-[650px] max-md:w-5/6 h-fit bg-white px-4 py-4  rounded-lg">
                <h1 className="capitalize article-form  text-xl">Add new article</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full h-full flex justify-between gap-2 pb-7">
                    <div className="w-1/2">
                        <div className="py-1">
                            <label className='label text-sm' htmlFor="">
                                Name
                                {
                                    errors?.title?.message && (
                                        <span className="text-red-500"> ( {errors?.title?.message} )</span>
                                    )
                                }
                            </label>
                            <input {...register('title')} type="text" id="email" className="w-full" placeholder="Artcle title" />
                        </div>
                        <div className="pb-1" >
                            <label className='label text-sm' htmlFor="">
                                Description
                                {
                                    errors?.description?.message && (
                                        <span className="text-red-500"> ( {errors?.description?.message} )</span>
                                    )
                                }
                            </label>
                            <input {...register('description')} type="text" id="email" className="w-full" placeholder="Artcle description" />
                        </div>
                        <div className="pb-1">
                            <label className='label text-sm' htmlFor="">
                                Tags
                                {
                                    errors?.tags?.message && (
                                        <span className="text-red-500"> ( {errors?.tags?.message} )</span>
                                    )
                                }
                            </label>
                            <input {...register('tags')} type="text" id="email" className="w-full" placeholder="Tags (comma ',' seperated) " />
                        </div>
                        <div className="pb-1">
                            <label className='label text-sm' htmlFor="">
                                Select category
                                {
                                    errors?.category?.message && (
                                        <span className="text-red-500"> ( {errors?.category?.message} )</span>
                                    )
                                }
                            </label>
                            <div
                                onClick={() => setAction((prev) => ({ ...prev, dropDown: !prev.dropDown }))}
                                id="email" className="relative w-full h-9 flex justify-between">
                                <h1> {getValues().category || ''} </h1>
                                {
                                    action.dropDown && (
                                        <DropDown categories={categories} setValue={setValue} />
                                    )
                                }
                                <ChevronDown style={{ zIndex: 90 }} className={`float-end  text-gray-600 ${action.dropDown ? 'icon' : ''} `} />
                            </div>
                        </div>
                        <div className="">
                            <label className='label text-sm' htmlFor="">
                                Image
                                {
                                    errors?.root?.message && (
                                        <span className="text-red-500"> ( {errors?.root?.message} )</span>
                                    )
                                }
                            </label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                id="email" className="w-full" placeholder="categories" />
                            {
                                imagePreview && (
                                    <div className='relative w-[300px] h-[168px]'>
                                        <X onClick={() => {
                                            setImage('')
                                            setImagePreview('')
                                        }} className='absolute bg-red-500 top-0 right-0' />
                                        <img src={imagePreview} className='w-full h-full ' />
                                    </div>
                                )
                            }

                        </div>
                    </div>
                    <div className="w-1/2 h-full">
                        <div className="pb-1 h-full" >
                            <label className="label text-sm" htmlFor="">
                                Content
                                {
                                    errors?.content?.message && (
                                        <span className="text-red-500"> ( {errors?.content?.message} )</span>
                                    )
                                }
                            </label>
                            <textarea {...register('content')} id="email" className="w-full h-[228px]" placeholder="Artcle title" />
                        </div>
                        <div className="pt-5 h-full w-full flex gap-2" >
                            <button type='button' onClick={() => setEditArticle(false)} className="button-4 w-1/2 py-2 text-red-500">cancel</button>
                            {
                                isSubmitting ? (
                                    <button className="button-4 w-1/2 flex items-center justify-center py-2" >
                                        <LoaderIcon className='animate-spin' width={35} height={20} />
                                    </button>
                                ) : (
                                    <button type="submit" disabled={isSubmitting} className="button-4 w-1/2 py-2"> post article</button>
                                )
                            }
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ArticleEdit