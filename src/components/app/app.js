import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';
import { Component }from 'react';



// class WhoAmI extends Component {
//    constructor(props) {
//       super(props);
//       this.state = {
//          years: 27,
//          position: ''
//       }
//    }

// nextYear = () => {
//    console.log("===");
//    this.setState({
//       years: this.state.years + 1
//    })
// } 

// commitInputChanges = (e, color) => {
//    console.log(color);
//    this.setState({
//       position: e.target.value
//    })
// }

//    render() {
//       const {name, surname, link} = this.props;
//       const {years, position} = this.state;

//       return (
//          <div>
//             <button onClick={this.nextYear}>+++</button>
//             <h1>
//                My name is {name}, surname {surname}, age - {years}, position {position}
//             </h1>
//             <a href={link}> My link </a>
//             <form>
//                <span>Введите должность </span>
//                <input type="text" onChange={(e) => this.commitInputChanges(e,"some color")} />
//             </form>
//          </div>
//       )
//    }
// }



class App extends Component {
   constructor(props){
      super(props)
      this.state = {
         data: [
            {name: 'John', salary: 300, increase: true, rise: true, id: 1 },
            {name: 'Alex', salary: 500, increase: false, rise: false, id: 2 },
            {name: 'Dima', salary: 1600, increase: true, rise: false, id: 3 },
            {name: 'Nike', salary: 600, increase: false, rise: false, id: 4 }
         ],
         term: '',
         filter: 'rise'
      }
      this.maxID = 4;
}

   deleteItem = (id) => {
      this.setState(({data}) => {
      return {
         data: data.filter(item => item.id !== id)
      }
   })  
 }

 addItem = (name, salary) => {
   const newItem = {
       name, 
       salary,
       increase: false,
       rise: false,
       id: this.maxId++
   }
   
   this.setState(({data}) => {
       const newArr = [...data, newItem];
       return {
           data: newArr
       }
   });
}

onToggleProp = (id, prop) => {
   this.setState(({data}) => ({
      data: data.map(item => {
         if (item.id === id) {
            return {...item, [prop]: !item[prop]}
         }
         return item;
      })
   }))
}


searchEmp = (items, term) => {
   if (term.length === 0) {
      return items;
   }

   return items.filter(item => {
      return item.name.indexOf(term) > -1
   })
}

onUpdateSearch = (term) => {
   this.setState({term});
}

filterPost = (items, filter) => {
   switch(filter) {
      case 'rise': 
         return items.filter(item => item.rise);
      case 'moreThen1000': 
         return items.filter(item => item.salary > 1000);
      default: 
      return items
   }
}

onFilterSelect = (filter) => {
   this.setState({filter})
}

   render() {
      const {data, term, filter} =this.state;
     const employees = this.state.data.length;
     const increased = this.state.data.filter(item => item.increase).length;
     const visibleData = this.filterPost(this.searchEmp(data, term), filter);

      return (
         <div className = "app">
              {/* <WhoAmI name="John" surname="Smits" link="www"/>
               <WhoAmI name="Alex" surname="Pron" link="sss"/> */}
               <AppInfo
               employees={employees}
               increased={increased}/>
               <div className="search-panel">
                  <SearchPanel
                  onUpdateSearch={this.onUpdateSearch}/>
                  <AppFilter
                  filter={filter}
                  onFilterSelect={this.onFilterSelect}/>
               </div>
               
               <EmployersList 
               data={visibleData}
               onDelete={this.deleteItem}
               onToggleProp={this.onToggleProp}
               />
               <EmployersAddForm
               onAdd={this.addItem}/>
         </div>
      )
   
   }
}

export default App;