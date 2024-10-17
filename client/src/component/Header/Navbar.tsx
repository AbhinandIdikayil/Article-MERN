import Toggle from "../theme/Toggle"

function Navbar() {
    return (
        <div className="flex flex-col justify-center items-center py-2 ">
            <div className="flex flex-wrap gap-10 justify-between items-center py-2.5 max-w-full w-[1216px]">
                <div className="self-stretch my-auto text-xl font-semibold leading-tight  w-[131px]">
                    Your Name
                </div>
                <div className="flex flex-wrap gap-3.5 items-start self-stretch my-auto min-w-[240px] max-md:max-w-full">
                    <div className="gap-2.5 p-2 text-xl leading-tight whitespace-nowrap ">
                        Blog
                    </div>
                    <div className="gap-2.5 p-2 text-xl leading-tight whitespace-nowrap ">
                        Projects
                    </div>
                    <div className="gap-2.5 p-2 text-xl leading-tight whitespace-nowrap ">
                        About
                    </div>
                    <div className="gap-2.5 p-2 text-xl leading-tight whitespace-nowrap ">
                        Newsletter
                    </div>
                    <Toggle />
                    {/* <div className="flex gap-4 items-start px-4 py-2 bg-slate-950 rounded-[29px]">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/750a8d093679335fe7cd3aa61fdd6f6438d5f2a35279d1f97503a9cb2d08c130?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274"
                            className="object-contain shrink-0 w-6 aspect-square"
                        />
                        <div className="flex gap-2.5 items-center w-6 h-6 bg-white rounded-3xl">
                            <div className="flex w-6 min-h-[24px]" />
                        </div>
                    </div> */}
                </div>
            </div>
            <div className="gap-10 mt-1 text-center max-w-full font-bold border-t border-b text-text  border-opacity-30 text-[104px] tracking-widest  w-[1216px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
                THE BLOG
            </div>
        </div>
    )
}


export default Navbar