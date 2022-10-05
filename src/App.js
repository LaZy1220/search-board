import {Routes, Route} from 'react-router-dom'
import {FilterList} from './components/features/filter/FiltersList'
import { JobsList } from './components/features/positions/JobsList';
import { Header } from './components/Header';
import {HomePage} from './pages/HomePage'
import {LoginPage} from './pages/LoginPage'
import {RegisterPage} from './pages/RegisterPage'
import {VacanciesPage} from './pages/VacanciesPage'
import {InfoVacancyPage} from './pages/InfoVacancyPage'
import {CreateVacancyPage} from './pages/CreateVacancyPage'
import {CreateCVPage} from './pages/CreateCVPage'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/vacancies' element={<VacanciesPage/>}/>
        <Route path='/vacancy/:id' element={<InfoVacancyPage/>}/>
        <Route path='/createvacancy' element={<CreateVacancyPage/>}/>
        <Route path='/createcv' element={<CreateCVPage/>}/>
      </Routes>
      <Header />
      <FilterList/>
      <JobsList/>
    </div>
  );
}

export default App;
