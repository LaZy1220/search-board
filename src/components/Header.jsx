import styled from "styled-components";
import BgImage from '../images/bg-header-desktop.svg'

const HeaderEl  = styled.header`
    width: 100%;
    background:var(--lightdarkgray);
    background-image: url(${BgImage});
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 150px;
`

export const Header = ()=>{
    return(
        <HeaderEl/>
    )
}