import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const queryPositions = createAsyncThunk(
    '@@position/queryPositions',
    async (_,{dispatch})=>{
        const response = await axios.get('https://makser-test.site/api/v1/work/')
        dispatch(addPosition(response.data.results))
    }
)
const positionSlice = createSlice({
    name:'@@position',
    initialState:[],
    reducers:{
        addPosition:(_,action)=>action.payload,
    }
})

export const {addPosition} = positionSlice.actions
export const positionReducer = positionSlice.reducer

export const selectAllPositions =(state)=> state.positions
export const selectVisiblePositions = (state,filters=[])=>{
    if(filters.length===0){
        return state.positions
    }
    return state.positions.filter(pos=>{
        const positionsFilters= [].concat(...pos.languages,...pos.tools,pos.position.role,pos.position.level)
        return filters.every(filter => positionsFilters.includes(filter))
    })
}