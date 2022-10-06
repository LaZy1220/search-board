import {Routes, Route} from 'react-router-dom'
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
        <Route path='/search-board/' element={<HomePage/>}/>
        <Route path='/search-board/login' element={<LoginPage/>}/>
        <Route path='/search-board/register' element={<RegisterPage/>}/>
        <Route path='/search-board/vacancies' element={<VacanciesPage/>}/>
        <Route path='/search-board/vacancy/:id' element={<InfoVacancyPage/>}/>
        <Route path='/search-board/createvacancy' element={<CreateVacancyPage/>}/>
        <Route path='/search-board/createcv' element={<CreateCVPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
