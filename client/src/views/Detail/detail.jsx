import {useSelector, useDispatch} from 'react-redux'
import {useParams, Link} from "react-router-dom";
import { useEffect  } from "react";
import {getCountry, cleanDetail} from "../../redux/actions"
import style from './Detail.module.css'

const Detail=()=>{
    const dispatch= useDispatch()

    const{id}= useParams()
    const country= useSelector(state=> state.countryDetail)

     useEffect(()=>{
        dispatch(getCountry(id))
        return ()=> dispatch(cleanDetail())
         //desmontaje:limpiamos el componente anterior
    },[]) 

    
    return(
        <div className={style.detail_container}>
            <h2 className={style.detail_title}>{country?.name}</h2>
        
           <img className={style.flag} src={country?.image} alt={country?.name} />
    <div className={style.detail_container_description}>
                <h4><span className={style.detail_descriptionLine}>Code:</span> {id}</h4>   
                    <h4><span className={style.detail_descriptionLine}>Continent: </span> {country?.continent}</h4>
                    <h4><span className={style.detail_descriptionLine}>Capital: </span>{country?.capital}</h4>
                {country.subregion &&  <h4><span className={style.detail_descriptionLine}>Subregion:</span> {country?.subregion}</h4>} 
                    <h4><span className={style.detail_descriptionLine}>Area: </span>{country?.area}</h4>
                    <h4><span className={style.detail_descriptionLine}>Population:</span> {country?.population}</h4>
        <Link className={style.link_back}to='/home'><h4>←</h4></Link>
        </div>
        </div>
    )
}


export default Detail