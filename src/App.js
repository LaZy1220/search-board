import {FilterList} from './components/features/filter/FiltersList'
import { JobsList } from './components/features/positions/JobsList';
import {useEffect} from 'react'
import {useDispatch} from  'react-redux'
import {addPosition} from './store/positions/positions-action'
import data from './data.json'
import { Header } from './components/Header';

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(addPosition(data))
    })
  return (
    <div className="App">
      <Header/>
      <FilterList/>
      <JobsList/>
    </div>
  );
}

export default App;
