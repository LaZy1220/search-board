import BgHeader from './images/bg-header-desktop.svg'
import {FilterList} from './components/FiltersList/FiltersList'
import { JobsList } from './components/JobsList/JobsList';

function App() {
  return (
    <div className="App h-screen bg-lightgray">
      <header className='w-full bg-lightdarkgray bg-no-repeat bg-cover mb-28'style={{backgroundImage:`url(${BgHeader})`,minHeight:'150px'}}/> 
      <FilterList/>
      <JobsList/>
    </div>
  );
}

export default App;
