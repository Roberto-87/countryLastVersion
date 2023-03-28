import { useState } from 'react';
import style from './SearchBar.module.css'
import {useDispatch, useSelector} from 'react-redux'
import { filterByName } from '../../redux/actions';

const SearchBar=()=>{
    const [searchCountry, setSearchCountry]= useState()
    const dispatch= useDispatch()

    const onHandlerChange=(event)=>{
        setSearchCountry(event.target.value)
        dispatch(filterByName(event.target.value))
    }

    return(
        <form className={style.searchBar_container}>
            <label htmlFor="">
                <input className={style.search} value={searchCountry} onChange={onHandlerChange} type='search'  placeholder="ingresa el nombre del país"/>
            </label>
            <div>
      
            </div>

        </form>
    )
}

export default SearchBar;