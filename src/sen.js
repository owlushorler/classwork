import './style.css'
import data from './data';
import { useState } from 'react';


function Lop(prop){
 let  {ap} = prop
    let lpo = data.filter(ele=>ele.sen == "Senior frontend Developer",)
    console.log(lpo[1].sen)
     
 ap=(lpo.map(ele=>{
    return(
      <nav className='game' >
    <div className='pal' >
      <section>{ele.img}</section>
      
      <div className='cover' >
         <section className='pa' >
        <div>{ele.name}</div>
        <div className='pb'>{ele.book}</div>
        <div className='pbb'>  {ele.cat} </div>
         </section>
  
        <p  className='sen'  ><b> {ele.sen} </b></p>
        <p className='se' > {ele.day}   <span className='span' > {ele.full}   </span> <span className='span' > {ele.usa}    </span>     </p>
      </div>
  
      <section className='lastbutton' >
      <div className='button' >{ele.front}</div>
      <div className='button' >{ele.senior}</div>
      <div className='button' >{ele.Html}</div>
      <div className='button' >{ele.css}</div>
      <div className='button' >{ele.jav}</div>
      </section>
    </div>
  </nav>)
    
  
  
   }))
  

   }

   export default Lop
  