import { useState } from 'react'
import style from './Form.module.css'
import {useSelector } from 'react-redux'
import validate from './validate'
import axios from 'axios'

const Form=()=>{
    const[form, setForm]= useState({
      nombre:'', duracion:'', dificultad:'',temporada:'' 
    })
    const[country, setCountry]= useState([])
    const[addCountry, setAddCountry ]= useState(false)
    const [error, setError]= useState({
      nombre:'', duracion:'', dificultad:'',temporada:'' }) 
    const countries= useSelector(state=> state.countries)

const onHandlerChange=(event)=>{
  setForm({
    ...form, [event.target.name]: event.target.value
  })
  setError(validate({
    ...form, [event.target.name]: event.target.value
  }))

}

const onHandlerSubmit=async (event)=>{
  event.preventDefault()
    if(Object.values(error).length>1){
      return alert('Por favor revisá los datos ingresados')
    }

    setForm({nombre:'', duracion:'', dificultad:'',temporada:''  })
    setCountry([])  
    const {nombre, duracion, dificultad, temporada}= form
  /*   const[country]= country //revisar post */
    const allFormData= {nombre, duracion, dificultad,temporada, CountryId:country} 

    const post= await axios.post('http://localhost:3001/activities',allFormData )
 
}

const onHandlerAddCountry=(event)=>{
  const newCountry= event.target.value
  if(!country.includes(newCountry)){
    setCountry( [...country, newCountry])
  }
}

const onClose=(id)=>{
  setCountry(country.filter((c) => c!== id))
}

 
    return(
        <div className={style.form_bigContainer}>              
        
        <h1 className={style.form_title}>Crea la actividad  </h1>
        <form className={style.form_container} onSubmit={onHandlerSubmit}>
              <label htmlFor="nombre">Nombre*</label>
              <input type="text" name="nombre" value={form.nombre}  onChange={onHandlerChange} placeholder='caminata ' />
              {!error.nombre &&  <br />}
              {error.nombre &&  <p className={style.p_error}> {error.nombre}</p>}
              <label htmlFor="duracion">Duración*</label>
              <input step="60"  name="duracion" value={form.duracion} onChange={onHandlerChange}  placeholder='HH:MM' />
              {error.duracion && <p className={style.p_error}>{error.duracion}</p>}
           {!error.duracion &&   <br />}
              <label htmlFor="dificultad">Dificultad*</label>
              <input type="number"  name="dificultad" value={form.dificultad}  onChange={onHandlerChange} min="1" max="5" placeholder='un número del 1 al 5' />
              {error.dificultad && <p className={style.p_error}>{error.dificultad}</p>}
              {!error.dificultad &&   <br />}

              <label htmlFor="temporada">Temporada*</label>
        
              <select name="temporada" value={form.temporada} onChange={onHandlerChange}>
               <option>Temporada</option> 
               <option value="Primavera">Primavera</option>
                <option value="Verano">Verano</option>
                <option value="Otoño">Otoño</option>
                <option value="Invierno">Invierno</option>
                <option value="Primavera">Primavera</option>
              </select>
              {error.temporada && <p className={style.p_error}>{error.temporada}</p>}
            {!error.temporada &&   <br />} 

            <label htmlFor="pais">País*</label>
            <div className={style.form_add}> 
         <select className={style.form_selectCountry} value={country} onChange={onHandlerAddCountry} type="text" name="pais"> 
  
            <option value="filter" disabled>Filter by</option>
            {countries?.map(country=><option key={country.id} value={country.id}>{country.name}</option>)} 
            
             </select> 
     
                         
            </div>
    

            <div className={style.container_addedCountries}>{country.map(count=>
            < p className={style.p_addedCountries} >{count}  
             <button className={style.closeButton} onClick={()=>onClose(count)}>x </button>
             </p>)}
           
            </div>
        
            <button  className={style.button_send} >Hecho!
            </button>
        
            
        </form>
        </div>
    )
}

export default Form

