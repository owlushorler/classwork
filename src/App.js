import './style.css';
import bg from './image/bg-header-desktop.svg'
import data from './data';
import { useState } from 'react';



function App() {
  const [lo,setlo]=useState('llll')

 

 let pop = data

 
let ap = pop.map(ele=>{
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
  


 })


 function fil(){
 let popp=  pop.filter(ele=>ele.id===1)
  setlo(popp)
 }



  return (
  

   
  <div className='back' >
    <div  >
    <img className='head'  src= {bg} alt=""/>


    <div className='bbb' >
      {ap}
    </div>

      <button onClick={fil} >l;ol</button>
      {lo}
    

    </div>

   

  </div>
   
  );
}

export default App;
