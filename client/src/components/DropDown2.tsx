import { Dispatch, SetStateAction } from "react"

function DropDown2({ userCategory, setValue }: { userCategory: { value: string }[], setValue: Dispatch<SetStateAction<{ dropDown: boolean; category: string }>>; }) {
    function handleNationality(data: { value: string }) {
        console.log(data)
        setValue((prev) => ({ ...prev, category: data.value }))
    }
    return (
        <div style={{ zIndex: '' }} className="w-[150px] bg-slate-50 h-[50px] absolute right-0 bottom-8 rounded-md drop-down border overflow-y-scroll">
            <ul>
                {
                    userCategory?.map((data) => (
                        <li onClick={() => handleNationality(data)} key={data.value} className="px-4 h-10 border-b border-solid">
                            <div className="flex w-full justify-between items-center">
                                <h1 className="font-medium text-sm mt-2"> {data?.value} </h1>
                            </div>
                        </li>
                    ))
                }
                <li onClick={() => handleNationality({ value: '' })} className="px-4 h-10 border-b border-solid">
                    <div className="flex w-full justify-between items-center">
                        <h1 className="font-medium text-sm mt-2"> All </h1>
                    </div>
                </li>
            </ul>
        </div >
    )
}

export default DropDown2