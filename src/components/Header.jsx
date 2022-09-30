import styled from "styled-components";
import BgImg from './assets/images/bg-header-desktop.svg'

const HeaderEl  = styled.header`
    width: 100%;
    background: var(--lightdarkgray) no-repeat cover;
    background-image: ${BgImg};
    min-height: 150px;
`

export const Header = ()=>{
    return(
        <HeaderEl>

        </HeaderEl>
    )
}