
import { z } from "zod"


export const ArticleFormSchema = z.object({
  title: z.string().nonempty({ message: 'Title is required' }).regex(/^[A-Za-z\s]+$/, { message: 'Title must contain only characters' }),
  description: z.string().nonempty({ message: 'Description is required' }).min(10, { message: 'Min 10 length' }),
  content: z.string().trim().nonempty({ message: 'Content is required' }).min(30, { message: "min 30 length" }),
  image: z.instanceof(File, { message: 'Image is required' }).refine((file) => ['image/jpeg', 'image/png', 'image/jpg', 'image/JPEG','image/webp'].includes(file.type), {
    message: 'Only image types are allowed',
  }),
  tags: z.string().nonempty({ message: 'Tags are required' }),
  category: z.string().nonempty({ message: 'Category is required' })
})

export const editArticleForm = z.object({
  title: z.string().nonempty({ message: 'Title is required' }).regex(/^[A-Za-z\s]+$/, { message: 'Title must contain only characters' }),
  description: z.string().nonempty({ message: 'Description is required' }).min(10, { message: 'Min 10 length' }),
  content: z.string().trim().nonempty({ message: 'Content is required' }).min(30, { message: "min 30 length" }),
  tags: z.string().nonempty({ message: 'Tags are required' }),
  category: z.string().nonempty({ message: 'Category is required' })
})