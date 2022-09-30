import styled from "styled-components"

export const CardEl = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 80px 0 40px 0;
`
export const Wrapper = styled.div`
    display: flex;
    background-color: #FFFF;
    box-shadow:0 10px 8px rgb(0 0 0 / 0.04);
    border-radius: 12px;
    padding: 8px;
    justify-content: space-between;
    min-width: 800px;
    @media (max-width:1024px){
        display: block;
        min-width: 360px;
    }
`
export const VacancyInfo = styled.div`
    display: flex;
    position: relative;
    gap: 4px;
    margin:8px 0;
    @media (max-width:1024px){
        padding: 0.25rem 0 0.5rem 0;
        border-bottom:2px solid var(--darkgray);
    }
`
export const Logo = styled.img`
    flex-shrink: 0;
    width: 100px;
     @media (max-width:1024px){
         position: absolute;
         top:-50px;
         width: 50px;
     }
`
export const FlexColEl = styled.div`
    display: flex;
    flex-direction:column;
`
export const TitleConteiner = styled.div`
    display: flex;
    gap:8px;
    align-items: center;
`
export const Title = styled.h3`
    color:var(--lightdarkgray);
    font-size: inherit;
    font-weight: inherit;
`
export const DopInfo = styled.span`
    background-color:${porps=>porps.isNew?'var(--lightdarkgray)':'var(--verydarkgray)'};
    color: #FFFF;
    padding: 8px 16px;
    border-radius: 1.5rem;

`