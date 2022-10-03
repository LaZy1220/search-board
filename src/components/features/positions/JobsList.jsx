import { Card } from './Card'
import {useSelector,useDispatch} from 'react-redux'
import {selectVisiblePositions} from './position-slice'
import { addFilter,selectFilters } from '../filter/filter-slice'

export function JobsList(){
    const currentFilters = useSelector(selectFilters)
    const positions =useSelector(state=>selectVisiblePositions(state,currentFilters))
    const dispatch =useDispatch()
    const handleAddFilter = (filter)=>{
        dispatch(addFilter(filter))
    }
    return(
        <>
            {positions.map(item => (
              <Card
            key={item.id}
            handleAddFilter={handleAddFilter}
            {...item}
             />
            ))}
        </>
    )
}