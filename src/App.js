import './style.css';
import bg from './image/bg-header-desktop.svg'
import data from './data';
import { useState } from 'react';
import Lop from './sen'



function App() {
  const [op,opse]=useState(false)

  let pop = data

  
// map
 function ga(){
  setlo(ap)
 }
let ap =(pop.map(ele=>{
  return (
    <nav className='game' > 
    
  <div className='pal' >
   {ele.t && <div className='wee' > </div>}
    <section className='ii' >{ele.img}</section>
    
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
  


 })  )

 const [lo,setlo]=useState(ap)
  
// filter for senio
 function Lop(){
  
     let lpo = data.filter(ele=>ele.sen == "Senior frontend Developer",)
  
      
  setlo((lpo.map(ele=>{
     return(
       <nav className='game' >
     <div className='pal' >
     {ele.t && <div className='wee' > </div>}
       <section className='ii' >{ele.img}</section>
       
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
     
   
   
    })))
   
 
    }

    //second filter css
    function Lopp(){
  
      let lpo = data.filter(ele=>ele.css == "css",)
   
       
   setlo((lpo.map(ele=>{
      return(
        <nav className='game' >
      <div className='pal' >
      {ele.t && <div className='wee' > </div>}
        <section className='ii' >{ele.img}</section>
        
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
      
    
    
     })))
    
  
     }

     // filter for htm

     function Loppp(){
  
      let lpo = data.filter(ele=>ele.Html ==="Html",)
   
       
   setlo((lpo.map(ele=>{
      return(
        <nav className='game' >
      <div className='pal' >
      {ele.t && <div className='wee' > </div>}
        <section className='ii' >{ele.img}</section>
        
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
      
    
    
     })))
    
  
     }

     // java

     function Lopppp(){
  
      let lpo = data.filter(ele=>ele.jav==="javascript",)
   
       
   setlo((lpo.map(ele=>{
      return(
        <nav className='game' >
      <div className='pal' >
      {ele.t && <div className='wee' > </div>}
        <section className='ii' >{ele.img}</section>
        
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
      
    
    
     })))
    
  
     }

  return (
  

   
  <div className='back' >
    <div  >
    <img className='head'  src= {bg} alt=""/>
    {!op && <button className='button'  onClick={()=>opse(ele=>ele?false:true)} >filter</button>}
   {op &&   <div  className='pall'>  <button className='button' onClick={Lop} >
                      senior dev                              
                    </button>
                    <button  className='button'  onClick={Lopp}>
                      css                         
                    </button>
                    <button className='button'  onClick={Loppp} >
                      html                            
                    </button>
                    <button className='button'   onClick={Lopppp}>
                      javascript                              
                    </button>
                    <button className='button'  onClick={ga} >
                      all                         
                    </button>

                    <button className='buttonn'  onClick={()=>opse(ele=>ele?false:true)} >
                      close                        
                    </button>



            </div>} 


    <div className='bbb' >
      
      
      {lo}

    </div>

  
  

    </div>

   

  </div>
   
  );
}

export default App;
