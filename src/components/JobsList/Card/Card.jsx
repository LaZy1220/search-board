export function Card({
    id,
    company,
    logo,
    new: isNew,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
    handleAddFilter
})
{
    const tags = [].concat(...languages,...tools,role,level)
    return(
        <div className="flex items-center flex-col mt-20 mb-10 ">
            <div className=" bg-white drop-shadow-lg rounded-xl p-2 min-w-[360px] lg:flex lg:justify-between lg:min-w-[800px]">
                <div className="relative flex gap-1 pt-1 pb-2 mt-2 mb-2 border-b-2 border-gray-300 lg:p-0 lg:border-none">
                <img className="absolute top-[-50px] w-[50px] lg:static lg:flex-shrink-0 lg:w-[100px]"
                    src={logo}
                    alt={company}/>
                <div className="flex flex-col">
                    <div className="flex gap-2 items-center">
                     <h3 className="text-lightdarkgray">{company}</h3>
                         {isNew?<span className=" bg-lightdarkgray py-1 px-2 rounded-3xl text-white">NEW!</span>:''}
                         {featured?<span className=" bg-verydarkgray py-1 px-2 rounded-3xl text-white">FEATURED</span>:''}
                    </div>
                    <h2 className="font-bold mb-2 mt-2">{position}</h2>
                    <div className="text-darkgray flex flex-wrap gap-5">
                     <span>{postedAt}</span>
                     <span>{contract}</span>
                     <span>{location}</span>
                  </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-1 lg:items-center lg:gap-3">
                {
                    tags.map((item)=>
                    <li 
                    className="list-none bg-lightgray p-2 rounded-md text-lightdarkgray cursor-pointer hover:text-lightgray hover:bg-lightdarkgray" 
                    key={item}
                    onClick={()=>handleAddFilter(item)}>
                    {item}
                    </li>)
                }
            </div>
            </div>
        </div>
    )
}