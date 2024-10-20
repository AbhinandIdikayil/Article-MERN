import { Tag, ThumbsDown, ThumbsUp, X } from "lucide-react"

function ArticleDetails({ setShowArticle }: { setShowArticle: React.Dispatch<React.SetStateAction<boolean>> }) {
  return (
    <div className="z-50 w-screen h-screen bg-black bg-opacity-45 fixed top-0 left-0 bg-background flex justify-center items-center">
      <div className="show-article relative w-3/5 max-md:w-5/6 h-4/5 bg-white rounded-md shadow-md overflow-y-scroll py-4 px-4 ">
        <h1 className="w-full pb-1 capitalize article-form text-black  text-xl font-semibold tracking-wide"> Article title </h1>
        <X onClick={() => setShowArticle(false)} className="absolute top-0 right-0 mt-5 mr-6 text-black" />
        <div className="relative break-words w-full ">
          <div className="w-full  relative">
            <h1 className="capitalize text-lg text-gray-700 font-medium tracking-wide"> Article desription </h1>
            <div className="w-full h-[300px]">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e6cb147f8a1e24b2ff045df34c571474decd6c787b4799d8fe3b059925bbcdaf?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6cb147f8a1e24b2ff045df34c571474decd6c787b4799d8fe3b059925bbcdaf?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6cb147f8a1e24b2ff045df34c571474decd6c787b4799d8fe3b059925bbcdaf?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6cb147f8a1e24b2ff045df34c571474decd6c787b4799d8fe3b059925bbcdaf?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6cb147f8a1e24b2ff045df34c571474decd6c787b4799d8fe3b059925bbcdaf?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6cb147f8a1e24b2ff045df34c571474decd6c787b4799d8fe3b059925bbcdaf?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6cb147f8a1e24b2ff045df34c571474decd6c787b4799d8fe3b059925bbcdaf?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6cb147f8a1e24b2ff045df34c571474decd6c787b4799d8fe3b059925bbcdaf?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274"
                className="h-full w-full object-cover rounded"
              />
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque obcaecati nulla nam porro eum at esse assumenda minima minus, necessitatibus cupiditate labore accusamus repellat. Tempora, nobis nulla? Molestias, aliquam eaque!
              Pariatur amet optio molestias dolores perferendis explicabo consectetur provident eum magni? Cumque id voluptate cum neque odio quia accusantium autem eaque debitis quam modi, quis suscipit nisi mollitia. Reprehenderit, odio.
              Quibusdam, exercitationem odio inventore rem fugiat accusantium voluptate voluptas animi a, laboriosam, iste provident amet reprehenderit. Quaerat culpa suscipit doloremque eveniet blanditiis perferendis magni cum quam? Dolorum excepturi ut minus!
              Ullam consectetur maiores, quasi sequi sapiente a eligendi consequuntur temporibus fugit, magnam veniam nihil vitae id? Maiores similique voluptates sapiente rem reprehenderit perspiciatis provident quis ea obcaecati! Temporibus, ex reiciendis.
              Sit laborum reiciendis quod excepturi iste beatae perferendis dolore nam velit perspiciatis facilis totam omnis rerum adipisci maxime ut, aut necessitatibus praesentium enim vero est minus officia illo quos! Molestias.
              Reprehenderit libero odio magnam alias ipsa suscipit consectetur accusantium blanditiis molestiae eligendi perspiciatis porro ducimus praesentium facere maxime consequatur esse aspernatur, deleniti incidunt tempore nisi? Unde maiores reiciendis consequuntur eligendi!
              Eum amet doloremque, nobis sapiente eveniet ut laborum. Architecto maxime accusamus numquam excepturi sequi voluptate nam qui adipisci eveniet, fugit nisi! Ad consequuntur commodi dolorem dolorum alias corrupti! Perspiciatis, nostrum!
              Ex ea officia saepe nulla aliquid, eaque accusamus dolor quam? Soluta quidem quos explicabo qui assumenda repudiandae culpa commodi repellendus debitis, sapiente suscipit laborum dicta tenetur in, ab sunt hic.
              Corporis nisi laboriosam repudiandae, similique debitis inventore iure. Unde porro eaque distinctio quis officia similique, inventore optio soluta dignissimos non animi facilis provident praesentium. Nesciunt dolores atque quis voluptatem ipsam!
              Placeat necessitatibus quis asperiores error deleniti ex, sint laboriosam sit beatae assumenda quo eaque nulla doloribus natus rerum molestias voluptate! Enim animi blanditiis, iste quaerat facilis eveniet necessitatibus ab sapiente.
            </p>
            <div className="flex justify-between items-center text-black font-medium">
              <h1 >Date</h1>
              <h1 className="text-violet-500 flex items-center gap-1">
                <Tag size={15} />
                Category
                </h1>
            </div>
            <div className="flex gap-4 w-full h-full pt-2">
              <div className=" text-black flex gap-1 items-center justify-center">
                <ThumbsUp className="text-black" />
                1
              </div>
              <div className=" text-black flex gap-1 items-center justify-center" >
                <ThumbsDown className="text-black " />
                2
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleDetails