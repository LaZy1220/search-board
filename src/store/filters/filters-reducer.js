import { ADD_FILTER, CLEARE_FILTER, REMOVE_FILTER } from "./filters-const"


export const filterReducer =(state=[],action)=>{
    switch(action.type){
        case ADD_FILTER:{
                if(!state.includes(action.filter)){
                    return [...state, action.filter]
                }
                return state
        }
        case REMOVE_FILTER:{
            return state.filter(item=>item !==action.filter)
        }
        case CLEARE_FILTER:{
            return []
        }
        default:{
            return state
        }
    }
}