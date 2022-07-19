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
})
{
    const positions = [].concat(...languages,...tools,role,level)
    return(
        <div className=" container px-5 flex justify-between items-center h-28 w-2/3 bg-white drop-shadow-lg ml-60 rounded-xl mt-10">
            <img className="absolute"
                src={logo}
                alt={company}/>
            <div className="relative left-36">
                <div className="flex gap-3 items-center">
                    <h3 className="text-lightdarkgray">{company}</h3>
                        {isNew?<span className=" bg-lightdarkgray py-1 px-2 rounded-3xl text-white">NEW!</span>:''}
                        {featured?<span className=" bg-verydarkgray py-1 px-2 rounded-3xl text-white">FEATURED</span>:''}
                </div>
                <h2 className="font-bold mb-2 mt-2">{position}</h2>
                <div className="text-darkgray flex flex-wrap gap-5">
                    <span>{postedAt}</span>
                    <span>{contract}</span>
                    <spam>{location}</spam>
                </div>

            </div>
            <div className="flex justify-between space-x-3  ">
                {
                    positions.map((item)=><li className="list-none bg-lightgray p-2 rounded-md text-lightdarkgray cursor-pointer" key={item}>{item}</li>)
                }
            </div>
        </div>
    )
}