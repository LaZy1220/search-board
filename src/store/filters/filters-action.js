import {ADD_FILTER,REMOVE_FILTER,CLEARE_FILTER} from './filters-const'

export const addFilter = (filter)=>({
    type:ADD_FILTER,
    filter
})
export const removeFilter = (filter)=>({
    type:REMOVE_FILTER,
    filter
})
export const clearFilter = ()=>({
    type:CLEARE_FILTER,
})