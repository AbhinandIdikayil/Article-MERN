

function DropDown({ categories, setValue }: { categories: any[], setValue: any }) {
    function handleNationality(data: any) {
        setValue('category', data?.category)
    }
    return (
        <div style={{ zIndex: '' }} className="w-full bg-slate-50  h-48 absolute  left-0  bottom-8 rounded-md drop-down border overflow-y-scroll">
            <ul>
                {
                    categories?.map((data: any) => (
                        <li onClick={() => handleNationality(data)} key={data.category} className="px-4 h-10 border-b border-solid">
                            <div className="flex w-full justify-between items-center">
                                <h1 className="font-medium text-sm mt-2"> {data?.category} </h1>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default DropDown