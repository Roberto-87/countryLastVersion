import { useState } from "react"

const Pagination=()=>{
    //cuál es la página actual? debe estar oculta y mostrar las siguientes (de la 2 a la 10)
    //cuántas páginas necesito en total? 25 con 10 países c/u
    //cómo generar los números de lás páginas y como ocultarlas? con el index del map, empezamos con un estado en 1 y a cada click lo incrementamos
    //la firstPage muestra los primeros 10 resultados

    //necesito un botón para ir a la página anterior
    //un botón para ir ir a la primera página
    //un botón para ir a la última página
    const [pageFirst, setPageFirst]= useState(1)// del 1 al 10
    const [pageNext, setPageNext]= useState(2)// del 11 al 21
    const [results, setResults]= useState(1)
    const [nextResult, setNextResult]= useState(11)
    
    onHandlerClick=()=>{
       // setFirstPage(firstPage+10)
       if(pageNext < 26){
           setNextPage(pageNext+1)
           setResults(results + 10)
           setNextResult(nextResult + 10)

       }
    }

    const onHandlerFirst=()=>{
            setResults(1)
            setNextResult(11) 
  
    }
    const onHandlerLast=()=>{
        setResults(229)
        setNextResult(240) 

}

    const onHandlerBefore=()=>{
        if(pageNext > 0){
            setNextPage(pageNext-1)
            setResults(results - 10)
            setNextResult(nextResult - 10)
 
        }
    }



    if(countries.length){
      
        countries?.slice(results, nextResult)?.map((country)=> 
        <Card 
                id= {country?.id}   
                image={country?.image}
                name={country?.name} 
                continent={country?.continent}
        />)


    }
    //
return (
    <>
        {/* <button onClick={onHandlerClick}>{firstPage}</button> */}
        <button onClick={onHandlerFirst}>first page</button>
        <button onClick={onHandlerClick}>{pageFirst}</button>
        <button onClick={onHandlerBefore}>{pageNext}</button>
        <button onClick={onHandlerLast}>last page</button>
    </>
)
}


//1: del país 1 al 10
//2: del país 2 al 11
//3: del país 12 al 22
// varía el número de página y el rango del slice


// 1 ===> 1
//2===>11

export default Pagination