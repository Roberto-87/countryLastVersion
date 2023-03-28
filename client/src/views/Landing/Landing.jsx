import { Link } from "react-router-dom";
import style from './Landing.module.css'

const Landing=()=>{
    return(
               
        <div className={style.landing_container}
        style={{
            backgroundImage: `url('./countries.png')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: '100vh', 
          }}
        >          
        <h1 className={style.AppTitle}> Bienvenid@ a la country app!</h1>
        <div className={style.link__container}>
            <Link className={style.landing_link} to='/home'> Inicio </Link >
        </div>
        </div>
    )
}

export default Landing;