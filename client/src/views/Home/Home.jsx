import { CardContainer, SearchBar } from "../../components"
import { getCountries } from '../../redux/actions';
import { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import style from './Home.module.css'

const Home=()=>{
   const dispatch= useDispatch()

   useEffect(()=>{
    dispatch(getCountries())
    
   },[dispatch])
    
    return(
        <>
        <h1 className={style.home_title}>Countries App</h1>
        <SearchBar/>
        <CardContainer/>
        </>
    )
}

export default Home