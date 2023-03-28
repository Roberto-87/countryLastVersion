import style from './Card.module.css'
import {Link} from 'react-router-dom'

const Card=({image,name,continent, id})=>{
    return(
        
        <Link to={`/detail/${id}`} className={style.card_container}>
            <img className={style.flag} src={image} alt={name} />
            <h1 className={style.name}> {name} </h1>  
            <h4 className={style.continent}>{continent}</h4>
       </Link>

     )
}

export default Card;