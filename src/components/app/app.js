import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';
import { Component }from 'react';



class WhoAmI extends Component {
   constructor(props) {
      super(props);
      this.state = {
         years: 27,
         position: ''
      }
   }

nextYear = () => {
   console.log("===");
   this.setState({
      years: this.state.years + 1
   })
} 

commitInputChanges = (e, color) => {
   console.log(color);
   this.setState({
      position: e.target.value
   })
}

   render() {
      const {name, surname, link} = this.props;
      const {years, position} = this.state;

      return (
         <div>
            <button onClick={this.nextYear}>+++</button>
            <h1>
               My name is {name}, surname {surname}, age - {years}, position {position}
            </h1>
            <a href={link}> My link </a>
            <form>
               <span>Введите должность </span>
               <input type="text" onChange={(e) => this.commitInputChanges(e,"some color")} />
            </form>
         </div>
      )
   }
}



function App () {



   const data = [
      {name: 1, salary: 300, increase: true, id: 1 },
      {name: 2, salary: 500, increase: false, id: 2 },
      {name: 3, salary: 600, increase: true, id: 3 },
      {name: 3, salary: 600, increase: false, id: 4 }


   ]
   return (
      <div className = "app">
           <WhoAmI name="John" surname="Smits" link="www"/>
            <WhoAmI name="Alex" surname="Pron" link="sss"/>
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