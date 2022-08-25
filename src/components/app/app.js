import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';



function App () {



   const data = [
      {name: 1, salary: 300, increase: true, id: 1 },
      {name: 2, salary: 500, increase: false, id: 2 },
      {name: 3, salary: 600, increase: true, id: 3 },
      {name: 3, salary: 600, increase: false, id: 4 }


   ]
   return (
      <div className = "app">
            <AppInfo/>


            <div className="search-panel">
               <SearchPanel/>
               <AppFilter/>
            </div>
            
            <EmployersList data={data}/>
            <EmployersAddForm/>
      </div>
   )
}

export default App;