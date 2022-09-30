import {CardEl,Wrapper,VacancyInfo,Logo,FlexColEl,TitleConteiner,Title,DopInfo} from "./styled/CardStyles"

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
        <CardEl>
            <Wrapper>
                <VacancyInfo>
                    <Logo src={logo} alt={company}/>
                    <FlexColEl>
                        <TitleConteiner>
                            <Title>{company}</Title>
                                {isNew?<DopInfo isNew>NEW!</DopInfo>:''}
                                {featured?<DopInfo>FEATURED</DopInfo>:''}
                        </TitleConteiner>
                        <h2 className="font-bold mb-2 mt-2">{position}</h2>
                        <div className="text-darkgray flex flex-wrap gap-5">
                             <span>{postedAt}</span>
                             <span>{contract}</span>
                             <span>{location}</span>
                        </div>
                    </FlexColEl>
                </VacancyInfo>
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
            </Wrapper>
        </CardEl>
    )
}