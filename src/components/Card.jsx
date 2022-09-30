import {CardEl,Wrapper,VacancyInfo,Logo,FlexColEl,TitleConteiner,Title,DopInfo, Position,TextConteiner,TagsConteiner,Tag} from "./styled/CardStyles"

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
                        <Position>{position}</Position>
                        <TextConteiner>
                             <span>{postedAt}</span>
                             <span>{contract}</span>
                             <span>{location}</span>
                        </TextConteiner>
                    </FlexColEl>
                </VacancyInfo>
            <TagsConteiner>
                {
                    tags.map((item)=>
                    <Tag 
                    className=" text-lightdarkgray cursor-pointer hover:text-lightgray hover:bg-lightdarkgray" 
                    key={item}
                    onClick={()=>handleAddFilter(item)}>
                    {item}
                    </Tag>)
                }
            </TagsConteiner>
            </Wrapper>
        </CardEl>
    )
}