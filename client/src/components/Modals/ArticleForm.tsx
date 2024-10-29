import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { ArticleFormSchema } from "@/validation/ArticleValidation"
import { z } from "zod"
import DropDown from "../DropDown"
import categories from '../../data/categories.json'
import React, { useState } from "react"
import { ChevronDown, LoaderIcon } from "lucide-react"
import { uploadToCloudinary } from "@/utils/cloudinary"
import { useDispatch } from "react-redux"
import { AppDispatch } from "@/redux/store"
import { CreateArticle } from "@/redux/action/articleAction"
import { toast } from "sonner"
type dropDown = {
  dropDown: boolean
}
type articleForm = {
  setCreateArticle: React.Dispatch<React.SetStateAction<boolean>>
}

function ArticleForm({ setCreateArticle }: articleForm) {
  const dispatch = useDispatch<AppDispatch>()
  const [action, setAction] = useState<dropDown>({
    dropDown: false
  })
  type formData = z.infer<typeof ArticleFormSchema>
  const { setValue, register, handleSubmit, setError, getValues, formState: { errors, isSubmitting } } = useForm<formData>({
    resolver: zodResolver(ArticleFormSchema),
    defaultValues: {
      title: '',
      description: '',
      content: '',
      category: '',
      image: undefined,
      tags: '',
    },
  })


  console.log(errors)
  const onSubmit: SubmitHandler<formData> = async (data: formData) => {
    try {
      console.log(data)
      const imageUrl = await uploadToCloudinary(data.image)
      if (imageUrl) {
        const req: any = {
          ...data,
          image: imageUrl
        }
        const res = await dispatch(CreateArticle(req)).unwrap()
        if (res) {
          toast.success('Article created successfully')
          setCreateArticle(false)
        }
      }
    } catch (error: any) {
      console.error("Error:", error);
      setError("root", {
        type: "manual",
        message: error.message,
      });
    }
  };

  return (
    <div className='fixed flex justify-center items-center top-0   z-50 w-screen h-full bg-black bg-opacity-45'>
      <div className="w-[650px] max-md:w-5/6 h-full bg-white px-4 py-4  rounded-lg">
        <h1 className="capitalize article-form  text-xl">Add new article</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full h-full overflow-y-scroll flex max-md:flex-col justify-between gap-2 pb-7">
          <div className="w-1/2 max-md:w-full">
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
                  errors?.image?.message && (
                    <span className="text-red-500"> ( {errors.image.message} )</span>
                  )
                }
              </label>
              <input
                // {...register('image')}
                type="file"
                // accept="image/jpeg, image/png, image/jpg"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  const files = e.target.files;
                  if (files && files.length > 0) {
                    console.log(files[0])
                    setValue('image', files[0]); // Manually set the file
                  } else {
                    // setValue('image', ''); // Set to null if no file selected
                  }
                }} id="email" className="w-full" placeholder="categories" />
            </div>
          </div>
          <div className="w-1/2 h-full max-md:w-full ">
            <div className="pb-1 h-fit" >
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
            <div className="pt-5 max-md:pt-0 h-fit max-md:h-[70px] w-full flex gap-2" >
              <button onClick={() => setCreateArticle(false)} className="button-4 max-md:h-10  w-1/2 py-2 text-red-500">cancel</button>
              {
                isSubmitting ? (
                  <button className="button-4 max-md:h-10 w-1/2 flex items-center justify-center py-2" >
                    <LoaderIcon className='animate-spin' width={35} height={20} />
                  </button>
                ) : (
                  <button type="submit" disabled={isSubmitting} className="button-4 max-md:h-10  w-1/2 py-2"> post article</button>
                )
              }
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ArticleForm