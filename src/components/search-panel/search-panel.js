import './search-panel.css';


const SearchPanel = () => {
   return (
      <div className="search-panel">
            <input 
            type="text"
            className = "form-control search-input"
            placeholder = "Найти сотрудника"
             />
      </div>
   )
};

export default SearchPanel;