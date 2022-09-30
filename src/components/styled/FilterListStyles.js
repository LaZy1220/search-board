import styled from "styled-components";

export const FilterListConteiner = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    margin-top: -28px;
`
export const FilterListEl = styled.div`
    display: flex;
    align-items: center;
    background-color: #FFFF;
    border-radius: 0.75rem;
    box-shadow:0 8px 6px rgb(0 0 0 / 0.19);
`
export const FilterListUl = styled.ul`
    display: flex;
    flex-wrap: wrap;
    padding: 0;
`
export const Filter = styled.li`
    display: flex;
    margin: 12px 0 12px 20px;
`
export const FilterName = styled.span`
    background-color: var(--lightgray);
    color: var(--lightdarkgray);
    padding: 11px;
    border-bottom-left-radius: 0.375rem;
    border-top-left-radius: 0.375rem;
`
export const Icon = styled.i`
    background-color: var(--lightdarkgray);
    border-bottom-right-radius: 0.375rem;
    border-top-right-radius: 0.375rem;
    cursor: pointer;
    color: #FFFF;
    padding: 8px;
    height: 20px;
    width: 20px;
    &:hover{
        background-color: var(--verydarkgray);
    }
`
export const Clear = styled.span`
    color:var(--lightdarkgray);
    cursor: pointer;
    margin:0 12px;
    text-decoration: underline;

`