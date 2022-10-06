import styled from "styled-components"
import HomePageImg from '../images/HomepageImg.svg'

const HomePageEl = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`
const FlexEl = styled.div`
display: flex;
gap: 40%;
`
const HomePageImage = styled.img`
    width: 70%;
`

export const HomePage = ()=>{
    return(
        <HomePageEl>
            <FlexEl>
                <span>HSDASDASDAS</span>
                <HomePageImage src={HomePageImg}/>
            </FlexEl>
        </HomePageEl>
    )
}