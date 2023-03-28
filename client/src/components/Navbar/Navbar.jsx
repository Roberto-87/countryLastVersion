import { Link } from "react-router-dom";
import style from "./Navbar.module.css"

const Navbar=()=>{
    return(
        <div className={style.navbar__Container}>
        <Link to='/' className={style.navbar_link}> Inicio </Link >
        <Link to='/home' className={style.navbar_link}> Home </Link >
        <Link to='/form' className={style.navbar_link}> Create </Link >
        </div>
    )
}

export default Navbar;