import css from "./Filter.module.css"
// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from "react-redux";
import { filterContacts } from "components/Redux/FilterSlice";

export const Filter = () => {
  
  const dispatch = useDispatch();
 
  // const filter = useSelector(state => state.filter);


const normalizedFilter = useSelector(state => state.filter.toLowerCase());
  
    const visibleContactsList = useSelector(state => state.contacts.items.filter(item => item.name.toLowerCase().includes(normalizedFilter)));


  const changeFilter = (event) => {

    dispatch(filterContacts(event.currentTarget.value))
    
  }


    return (
       <div className={css.filterBox}>
            <label>Find contacts by name
                <br/>
        <input
            className={css.filterInput}
            type="text"
            name="filter"
            // value={filter}
            onChange={changeFilter}
          />
            </label>
            </div>
    )
}


// Filter.propTypes = {
//   filterValue: PropTypes.string,
//   onChange: PropTypes.func
// }