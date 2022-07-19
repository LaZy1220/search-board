export const selectAllPositions =(state)=> state.positions

export const selectVisiblePositions = (state,filters=[])=>{
    if(filters.length===0){
        return state.positions
    }
    return state.positions.filter(pos=>{
        const positionsFilters= [].concat(...pos.languages,...pos.tools,pos.role,pos.level)

        return filters.every(filter => positionsFilters.includes(filter))
    })
}