
import {Card} from '../index'
import style from './CardsContainer.module.css'
import {useSelector, useDispatch} from 'react-redux';
import {cleanDetail,getActivities, filterByContinent,orderByPopulation, filterByActivity, orderCountries} from '../../redux/actions'
import { useEffect, useState } from 'react';

const CardsContainer=()=>{
   const dispatch= useDispatch()
   const {countries,  countryByActivity,countryByAlpha, countryByContinent,activities }= useSelector(state=>state)  
   const randomCountry= (Math.floor(Math.random()*10))
   console.log(activities)

   const [population, setPopulation]= useState('')
   const [continent, setContinent]= useState('')
   const [alphabetical, setAlphabetical]= useState('')
   const [activity, setActivity]= useState('')     
   const [activityCountry, setActivityCountry ]= useState('')     
   const [pageFirst, setPageFirst]= useState(1)// del 1 al 10
   const [pageNext, setPageNext]= useState(2)// del 11 al 21
   const [results, setResults]= useState(1)
   const [nextResult, setNextResult]= useState(11)     
      
   const onHandlerChange=(event)=>{
        setContinent(event.target.value)
        dispatch(filterByContinent(event.target.value))
        }
   const onHandlerOrdePopulation=(e)=>{
        setPopulation(e.target.value)
        dispatch(orderByPopulation(e.target.value))
        }        
   const onHandlerOrder=(event)=>{
        setAlphabetical(event.target.value)
        dispatch(orderCountries(event.target.value))
        }
   const onHandleActivity=(event)=>{
        setActivity(event.target.value)
        dispatch(getActivities())
        
       }

   const onHandlerClick=()=>{
        // setFirstPage(firstPage+10)
        if(pageNext < 26){
         setPageNext(pageNext+1)
         setResults(results + 10)
         setNextResult(nextResult + 10)
         setPageFirst(pageNext )
        }
       }

   const onHandlerBefore=()=>{
        if(pageNext > 1){
        setPageNext(pageNext-1)
        setResults(results - 10)
        setNextResult(nextResult - 10)

        }
       }  

   const onHandlerActivityCountry = (event) => {
        const activityId= event.target.value
        setActivityCountry(activityId) 
        dispatch(filterByActivity(activityId))


};

  const OnHandlerReset=()=>{
        setPopulation('')
        setContinent('')
        setAlphabetical('')
        setActivity('')
        setActivityCountry('')
        
  }      


        
   useEffect(()=>{
    return()=>{
        dispatch(cleanDetail()) 
        }
        }
   ,[dispatch])

  
    return(
        <>
        <div className={style.filter_container}>
                 
        <select  onChange={onHandlerChange} className={style.option_container}>
                <option value={"continent"} disabled="disabled" selected>Continente</option>
                <option value="Americas">América</option>
                <option value="Antarctic">Antártida</option>
                <option value="Europe">Europa</option>
                <option value="Asia">Asia</option>
                <option value="Oceania">Oceania</option>
                <option value="Africa">Africa</option>
        </select>
        <select  onChange={onHandlerOrdePopulation}>
                <option value="population" disabled="disabled" selected>Población</option>
                <option value="Ascendente">Ascendente</option>
                <option value="Descendente">Descedente</option>
        </select>
        <select onChange={onHandlerOrder}>
                <option value={"alphabetical"} disabled="disabled" selected>Orden alfabético</option>
                <option value="Ascendente">Ascendente</option>
                <option value="Descendente">Descedente</option>
        </select>

        <select onClick={onHandleActivity}  onChange={onHandlerActivityCountry}>
        <option value={"activity"}  selected>Actividades</option>
            { activities && activities?.map(act=> <option key={act.id} value={act.id}   className={style.option_activities}>{act?.nombre}</option>)}
        </select>
   
        <button onClick={OnHandlerReset} >🔄 </button>
        </div>
        <br />

        {results > 1 && !continent &&  !population && <button onClick={onHandlerBefore}>Anterior</button>}
        {results < 239 && !continent &&  !population && <button onClick={onHandlerClick}> Siguiente</button>}

        <div className={style.cards_container}>
{       
        activity ?               
        countryByActivity?.map((country)=> 
        <Card 
                 key={country?.id} 
                id= {country?.id}   
                image={country?.image}
                name={country?.name} 
                continent={country?.continent}
        />)

        :
        countries && !continent  && !population && !alphabetical
        ?
        countries?.slice(results, nextResult)?.map((country)=> 
        <Card 
        key={country?.id}       
                id= {country?.id}   
                image={country?.image}
                name={country?.name} 
                continent={country?.continent}
        />)

        :
        continent && population && !alphabetical && !activity
        ?
        countryByContinent?.map((country)=> 
        <Card 
                key={country?.id}     
                id= {country?.id}   
                image={country?.image}
                name={country?.name} 
                continent={country?.continent}
        />)   
        :
        !continent  && population && !alphabetical && !activity
        ?
        countries?.map((country)=> 
        <Card 
                key={country?.id}     
                id= {country?.id}   
                image={country?.image}
                name={country?.name} 
                continent={country?.continent}
        />)  
        : 
        !continent && !population && alphabetical 
        ?        
        countries?.map((country)=> 
        <Card 
                key={country?.id}     
                id= {country?.id}   
                image={country?.image}
                name={country?.name} 
                continent={country?.continent}
        />) 
         : 
        !countries && activity && !continent && !population && !alphabetical
        ? 
        countryByActivity?.map((country)=> 
         <Card 
                
                key={country?.id}     
                id= {country?.id}   
                image={country?.image}
                name={country?.name} 
                continent={country?.continent}
        />)  :
        activity && continent && !population && !alphabetical
        ? 
        countryByActivity?.map((country)=> 
         <Card 
                
                key={country?.id}     
                id= {country?.id}   
                image={country?.image}
                name={country?.name} 
                continent={country?.continent}
        />) 
        : 
        activity && !continent && !population && alphabetical
        ? 
        countryByActivity?.map((country)=> 
         <Card 
                
                key={country?.id}     
                id= {country?.id}   
                image={country?.image}
                name={country?.name} 
                continent={country?.continent}
        />) 
        : 
        activity && continent && !population && alphabetical
        ? 
        countryByActivity?.map((country)=> 
        <Card 
               
               key={country?.id}     
               id= {country?.id}   
               image={country?.image}
               name={country?.name} 
               continent={country?.continent}
       />) 
       :     activity && !continent && !population && alphabetical
       ? 
       countryByActivity?.map((country)=> 
       <Card 
              
              key={country?.id}     
              id= {country?.id}   
              image={country?.image}
              name={country?.name} 
              continent={country?.continent}
      />) :

        countryByContinent?.map((country)=> 
        <Card 
                key={country?.id}     
                id= {country?.id}   
                image={country?.image}
                name={country?.name} 
                continent={country?.continent}
        />) 
 
        }
        </div>

        </>
        
    )
}


export default CardsContainer
