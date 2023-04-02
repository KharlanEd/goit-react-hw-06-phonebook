import css from './Phonebook.module.css'
import { useDispatch, useSelector } from "react-redux";
import { setFilterValue } from 'redux/contactSlisce';
import { getFilter } from 'redux/selectors';


export const Filter = () => {
const value = useSelector(getFilter)
const dispath = useDispatch();

  const onChange = e=>
    dispath(setFilterValue(e.currentTarget.value))
  
  
    return(
 <label>
    <span className={css.title}>Find contact by name</span>
    <input
      type="text"
      value={value}
      onChange={onChange}
      name="filter"
      placeholder="Enter name"
    />
        </label>
    )
}