import { useSelector,useDispatch } from "react-redux/es/exports"
import { clearFilter,removeFilter } from "../../store/filters/filters-action"
import {selectFilters} from '../../store/filters/filters-selector'


export function FilterList(){
    const filters = useSelector(selectFilters)
    const dispatch = useDispatch()
    if (filters.length===0){
        return null
    }
    return(
        <div className=" flex justify-between items-center h-20 bg-white w-2/3 mb-10 rounded-xl drop-shadow-lg absolute ml-10 mr-10 top-28">
            <ul className="flex">
                {
                    filters.map(filter=>
                        <li key={filter} className=" flex ml-10">
                            <span className="bg-lightgray p-2 rounded-l-md">{filter}</span>
                            <i className="bg-lightdarkgray p-1 pt-2 rounded-r-md cursor-pointer text-white hover:bg-verydarkgray "
                            onClick={()=>dispatch(removeFilter(filter))}><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                               </svg>
                            </i>
                        </li>)
                }
            </ul>
            <span className="text-blue-400 cursor-pointer mr-10 underline decoration-2"
            onClick={()=>dispatch(clearFilter())}
             >Clear
             </span>
        </div>
    )
}