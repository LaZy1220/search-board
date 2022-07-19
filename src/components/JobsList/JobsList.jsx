import { Card } from './Card/Card'
import {useSelector,useDispatch} from 'react-redux'
import {selectVisiblePositions} from '../../store/positions/positions-selector'
import {selectFilters} from '../../store/filters/filters-selector'
import { addFilter } from '../../store/filters/filters-action'

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