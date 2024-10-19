import { uploadToCloudinary } from "@/utils/cloudinary"
import { useState } from "react"

function ArticleForm() {
  const [image, setImage] = useState<any>()
  async function submit(e) {
    e.preventDefault()
    let data = await uploadToCloudinary(image)
  }
  return (
    <div className='fixed flex justify-center items-center top-0  z-50 w-screen h-full bg-black bg-opacity-45'>
      <div className="w-[650px] max-md:w-5/6 h-fit bg-white px-4 py-4  rounded-lg">
        <h1 className="capitalize article-form  text-xl">Add new article</h1>
        <form action="" className="w-full h-full flex justify-between gap-2 pb-7">
          <div className="w-1/2">
            <div className="py-1">
              <label className='label text-sm' htmlFor="">Name</label>
              <input type="text" id="email" className="w-full" placeholder="Artcle title" />
            </div>
            <div className="pb-1" >
              <label className='label text-sm' htmlFor="">Description</label>
              <input type="text" id="email" className="w-full" placeholder="Artcle description" />
            </div>
            <div className="pb-1">
              <label className='label text-sm' htmlFor="">Tags</label>
              <input type="text" id="email" className="w-full" placeholder="Tags (comma ',' seperated) " />
            </div>
            <div className="pb-1">
              <label className='label text-sm' htmlFor="">Select category</label>
              <input type="text" id="email" className="w-full" placeholder="categories" />
            </div>
            <div className="">
              <label className='label text-sm' htmlFor="">Image</label>
              <input onChange={(e) => setImage(e.target.files[0])} type="file" id="email" className="w-full" placeholder="categories" />
            </div>
          </div>
          <div className="w-1/2 h-full">
            <div className="pb-1 h-full" >
              <label className="label text-sm" htmlFor="">Content</label>
              <textarea id="email" className="w-full h-[228px]" placeholder="Artcle title" />
            </div>
            <div className="pt-5 h-full w-full flex gap-2" >
              <button className="button-4 w-1/2 py-2 text-red-500">cancel</button>
              <button onClick={submit} className="button-4 w-1/2 py-2"> post article</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ArticleForm