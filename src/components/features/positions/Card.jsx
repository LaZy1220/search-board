import {
    CardEl,
    Wrapper,
    VacancyInfo,
    Logo,
    FlexColEl,
    TitleConteiner,
    Title,
    DopInfo,
    Position,
    TextConteiner,
    TagsConteiner,
    Tag
} from "../../styled/CardStyles"

export function Card({
    company,
    logo,
    new: isNew,
    featured,
    position,
    postAt,
    contract,
    location,
    languages,
    tools,
    handleAddFilter
})
{
    const {level, role} = position
    const tags = [].concat(...languages,...tools,role,level)
    const diffDays = (datePosted)=>{
        const date1 = new Date()
        const date2 = new Date(datePosted)
        const timeDiff =  Math.abs(date1.getTime()-date2.getTime())
        const res = Math.ceil(timeDiff/(1000*3600*24))-1;       
        return (res===0)?'Today':
        (res>7&&res<14)?'1w':
        (res>14&&res<21)?'2w':
        (res>21&&res<27)?'3w':
        (res>27&&res<60)?'1m':
        (res>60&&res<90)?'2m':
        (res>90&&res<120)?'3m':
        (res>120&&res<150)?'4m':
        (res>150&&res<180)?'5m':
        (res>180&&res<360)?'more than 6m':
        (res>360)?'more than 1y':`${res}d`
    }
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
                        <Position>{level} {role}</Position>
                        <TextConteiner>
                             <span>{diffDays(postAt)} ago</span>
                             <span>{contract}</span>
                             <span>{location}</span>
                        </TextConteiner>
                    </FlexColEl>
                </VacancyInfo>
            <TagsConteiner>
                {
                    tags.map((item)=>
                    <Tag 
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