
export function FilterList(){
    const filters = [{title:'Frontend',id:1},{title:'CSS',id:2}]
    return(
        <div className=" flex justify-between items-center h-20 bg-white w-2/3 absolute top-28 left-60 rounded-xl drop-shadow-lg ">
            <ul className="flex">
                {
                    filters.map(filter=>
                        <li key={filter.id} className=" flex ml-10">
                            <span className="bg-lightgray p-2 rounded-l-md">{filter.title}</span>
                            <i className="bg-lightdarkgray p-1 pt-2 rounded-r-md cursor-pointer text-white hover:bg-verydarkgray "><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                               </svg>
                            </i>
                        </li>)
                }
            </ul>
            <span className="text-blue-400 cursor-pointer mr-10 underline decoration-2">Clear</span>
        </div>
    )
}