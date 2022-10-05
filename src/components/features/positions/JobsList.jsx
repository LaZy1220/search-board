import { Card } from './Card'
import {useDispatch} from 'react-redux'
import { addFilter} from '../filter/filter-slice'
import { usePositions } from './use-positions'
import { useFetchPositions } from './use-fetch-positions'

export function JobsList(){
    useFetchPositions()
    const dispatch = useDispatch()
    const positions = usePositions()
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