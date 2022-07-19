import { ADD_POSITIONS } from "./positions-const";


export const addPosition = (positions)=>({
    type:ADD_POSITIONS,
    positions
})