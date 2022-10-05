import {Routes, Route} from 'react-router-dom'
import {FilterList} from './components/features/filter/FiltersList'
import { JobsList } from './components/features/positions/JobsList';
import { Header } from './components/Header';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
      <Header />
      <FilterList/>
      <JobsList/>
    </div>
  );
}

export default App;
