import {useEffect} from 'react'
import {FilterList} from './components/features/filter/FiltersList'
import { JobsList } from './components/features/positions/JobsList';
import {useDispatch} from  'react-redux'
import {addPosition} from './components/features/positions/position-slice'
import { Header } from './components/Header';
import data from './data.json'

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
