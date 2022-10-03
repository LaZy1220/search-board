import { useSelector,useDispatch } from "react-redux/es/exports"
import { clearFilter,removeFilter,selectFilters } from "./filter-slice"
import {
    FilterListConteiner,
    FilterListEl,
    FilterListUl,
    Filter,
    FilterName,
    Icon,
    Clear
} from '../../styled/FilterListStyles'

export function FilterList(){
    const filters = useSelector(selectFilters)
    const dispatch = useDispatch()
    if (filters.length===0){
        return null
    }
    return(
        <FilterListConteiner>
            <FilterListEl>
                <FilterListUl>
                {
                    filters.map(filter=>
                        <Filter key={filter}>
                            <FilterName>{filter}</FilterName>
                            <Icon
                                onClick={()=>dispatch(removeFilter(filter))}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"         stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" 
                                    viewport/>
                                    </svg>
                            </Icon>
                        </Filter>)
                }
                </FilterListUl>
            <Clear className="text-blue-400 cursor-pointer mr-10 underline decoration-2 ml-3"
                onClick={()=>dispatch(clearFilter())}>
                    Clear
             </Clear>
            </FilterListEl>
        </FilterListConteiner>
    )
}