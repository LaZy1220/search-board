import {FilterList} from '../components/features/filter/FiltersList'
import { JobsList } from '../components/features/positions/JobsList';
import { Header } from '../components/Header';

export const VacanciesPage = ()=>{
    return(
        <>
            <Header />
            <FilterList/>
            <JobsList/>
        </>
    )
}