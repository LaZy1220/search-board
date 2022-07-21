import BgImg from './assets/images/bg-header-desktop.svg'
import {FilterList} from './components/FiltersList/FiltersList'
import { JobsList } from './components/JobsList/JobsList';
import {useEffect} from 'react'
import {useDispatch} from  'react-redux'
import {addPosition} from './store/positions/positions-action'
import data from './data.json'

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(addPosition(data))
  })
  return (
    <div className="App">
      <header className='w-full bg-lightdarkgray bg-no-repeat bg-cover'style={{backgroundImage:`url(${BgImg})`,minHeight:'150px'}}/>
      <FilterList/>
      <JobsList/>
    </div>
  );
}

export default App;
