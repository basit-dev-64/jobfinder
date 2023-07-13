import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import useFetch from './hooks/useFetchJobsHook';
import SearchArea from './components/SearchArea';
import { JobCard } from './components/JobCard';
import { useState } from 'react';
//import data from './demojoblists.json' ;
import { JobList } from './components/Joblist';
import { MagnifyingGlass } from 'react-loader-spinner'


function App(props) {

  const [params, setParams] = useState({})

  const handleSearchParams = (data) => {
    setParams(data)
  }
  const Jobdata = useFetch(params)
  console.log(Jobdata)
  return (
    <>
    <div className="App">
      <h1 className>Job Finder</h1>
      <hr/>
      <div className='top'>
        <SearchArea searchParams={handleSearchParams} />
      </div>
      {Jobdata.loading != null ? Jobdata.loading ?
        <MagnifyingGlass
          visible={true}
          height="80"
          width="80"
          ariaLabel="MagnifyingGlass-loading"
          wrapperStyle={{}}
          wrapperClass="loader"
          glassColor='#c0efff'
          color='#e15b64'
        />
        :
        <div >
          <JobList jobs={Jobdata.jobs} />
        </div>
        : <h2 style={{ color: 'red' }}>{Jobdata.error}</h2>
      }
      <div className='footer'>
      <hr />
      <p > © Copyright - Basit Raza </p>
      </div>
    </div>
    
      </>
  );
}

export default App;
