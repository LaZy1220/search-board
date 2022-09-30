import styled from "styled-components";
import BgImg from '../images/bg-header-desktop.svg'

const HeaderEl  = styled.header`
    width: 100%;
    background:var(--lightdarkgray);
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${BgImg});
    min-height: 150px;
`

export const Header = ()=>{
    return(
        <HeaderEl>
            
        </HeaderEl>
    )
}