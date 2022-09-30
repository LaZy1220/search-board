import styled from "styled-components";

const HeaderEl  = styled.header`
    width: 100%;
    background:var(--lightdarkgray);
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url('./images/bg-header-desktop.svg');
    min-height: 150px;
`

export const Header = ()=>{
    return(
        <HeaderEl/>
    )
}